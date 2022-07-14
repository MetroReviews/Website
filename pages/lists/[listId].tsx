import Avatar from "@/root/components/Interface/Avatar";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { MetaTags } from "@/root/components/Header/Meta";
import { NoDesc } from "@/root/components/Lists/NoDesc";
import List_LongDescription from "@/root/components/BotLists/LongDesc";
import { useRouter } from "next/router";
import Header from "@/root/components/Static/Header";
import { NavItems } from "@/root/utils/navItems";
import { parseUser } from "@/root/utils/parseUser";
import { DiscordUser } from "@/root/utils/types";
import { GetServerSideProps } from "next";
import { toast } from "react-toastify";
import { useState } from "react";
import url2 from "is-url";

interface Props {
  user: DiscordUser;
  list: {
    id: string;
    name: string;
    domain: string;
    state: number;
    icon: string;
  };
  desc: string;
}

const ListPage = (props: Props) => {
  const router = useRouter();
  const $ = require("@/root/lang/" + (router.locale || "en"));

  const [copySuccess, setCopySuccess] = useState(false);

  const copyListID = () => {
    if (navigator.clipboard.writeText(`${props?.list.id}`)) {
      setCopySuccess(true);
    } else {
      toast.error("Failed to Copy List ID");
    }
  };

  setTimeout(() => {
    setCopySuccess(false);
  }, 7200);

  return (
    <>
      <MetaTags
        title={props?.list.name + " | Metro Reviews"}
        description={"View " + props?.list.name + "'s Page on Metro Reviews."}
        image="/img/logo.webp"
        name="Metro Reviews"
      />
      <Header $={$} NavItems={NavItems} props={props} allowLogin={true} />
      <div className="overflow-hidden relative bg-background flex mx-auto items-center justify-center">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:pb-28 lg:w-full lg:max-w-2xl xl:pb-32">
            <main className="px-4 mx-auto mt-10 w-full max-w-7xl sm:px-6 sm:mt-12 md:mt-16 lg:px-8 lg:mt-20 xl:mt-28">
              <div className="text-center">
                <div className="border-[2.2px] w-[8rem] h-[8rem] border-white-500/50 rounded-full flex mx-auto items-center justify-center">
                  <Avatar
                    src={props?.list.icon || "/img/defaultUser.webp"}
                    alt={props?.list.name + "logo" || "Default List Logo"}
                    className="rounded-full mx-auto inline-flex"
                    height="512"
                  />
                </div>
                <h1 className="inline text-4xl font-extrabold tracking-tight text-slate-300 sm:text-5xl md:text-6xl">
                  {props?.list.name}
                </h1>
              </div>
            </main>
          </div>
        </div>
      </div>
      <div className="mb-20 w-full h-max grid grid-cols-1 lg:grid-cols-12 lg:gap-x-4">
        <div className="h-auto w-full text-white lg:col-span-3 mb-5 lg:mb-0">
          <div className="h-auto top-20 transition-all duration-200 w-full bg-black bg-opacity-10 rounded-lg p-4 lg:sticky">
            <div className="bg-gradient-to-br from-neutral-900/90 to-neutral-900/50 rounded-lg h-max">
              <br />
              <p className="text-xl font-medium text-white text-center">
                <i className="fas fa-info-circle text-amber-400 mr-2" />
                List Info
              </p>
              <p className="text-white text-sm text-opacity-50 mb-5 text-center">
                Useful Info and Links for {props?.list.name}
              </p>
              <hr />
              <div className="mt-5">
                <div className="items-center justify-center">
                  {props?.list.domain && (
                    <a
                      href={props?.list.domain}
                      className="flex items-center shadow-xl"
                      target="_blank"
                    >
                      <div className="mt-2 bg-amber-800 text-center px-4 py-2 rounded-l-lg text-white">
                        <span className="tooltip rounded bg-amber-500 shadow-lg text-white p-1 -mt-8">
                          View Website
                        </span>
                        <i className="fas fa-globe" />
                      </div>
                      <div className="mt-2 bg-amber-600 w-full px-4 py-2 rounded-r-lg text-white">
                        <p className="line-clamp-1">Visit Website</p>
                      </div>
                    </a>
                  )}
                  <div className="flex items-center shadow-xl">
                    <div className="mt-2 bg-amber-800 text-center px-4 py-2 rounded-l-lg text-white">
                      <i className="fas fa-info-circle" />
                    </div>
                    <div className="mt-2 bg-amber-600 w-full px-4 py-2 rounded-r-lg text-white">
                      <p className="line-clamp-1">
                        {props?.list.state === 0
                          ? `${$.index.list_stats.lists.states.pending}`
                          : props?.list.state === 1
                          ? `${$.index.list_stats.lists.states.supported}`
                          : props?.list.state === 2
                          ? `${$.index.list_stats.lists.states.defunction}`
                          : props?.list.state === 3
                          ? `${$.index.list_stats.lists.states.blacklisted}`
                          : props?.list.state === 4
                          ? `${$.index.list_stats.lists.states.unconfirmed}`
                          : `${$.index.list_stats.lists.states.err_failed}`}
                      </p>
                    </div>
                  </div>
                  <button
                    className="flex items-center shadow-xl w-full"
                    onClick={copyListID}
                  >
                    <div className="mt-2 bg-amber-800 text-center px-4 py-2 rounded-l-lg text-white">
                      <i className="fas fa-id-card" />
                    </div>
                    <div className="mt-2 bg-amber-600 w-full px-4 py-2 rounded-r-lg text-white">
                      <p className="line-clamp-1 text-left">
                        {copySuccess ? "Copied!" : "Copy List ID"}
                      </p>
                    </div>
                  </button>
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
        <List_LongDescription value={props?.desc} />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async function (
  ctx
) {
  const user = parseUser(ctx);

  const showdown = require("showdown");
  const converter = new showdown.Converter();
  converter.setOption("tables", "true");

  const res = await fetch(
    `https://catnip.metrobots.xyz/list/${ctx.params.listId}`
  );
  const data = await res.json();

  let desc;
  let isUrl = url2(data.description.replace("\n", "").replace("", ""));

  if (isUrl)
    desc = `<iframe src="${data.description
      .replace("\n", "")
      .replace(
        " ",
        ""
      )}" width="100%" height="100%" style="width: 100%; height: 100vh; color: black;"><object data="${data.description
      .replace("\n", "")
      .replace(
        " ",
        ""
      )}" width="100%" height="100%" style="width: 100%; height: 100vh; color: black;"><embed src="${data.description
      .replace("\n", "")
      .replace(
        " ",
        ""
      )}" width="100%" height="100%" style="width: 100%; height: 100vh; color: black;"> </embed>${data.description
      .replace("\n", "")
      .replace(" ", "")}</object></iframe>`;
  else if (data.description) desc = converter.makeHtml(data.description);
  else desc = data.description;

  return {
    props: {
      user,
      list: data,
      desc: desc
        .replace(/(\r\n|\n\r|\r|\n)/g, "<br />")
        .replace(/(---)/g, "<hr />"),
    },
  };
};

export default ListPage;
