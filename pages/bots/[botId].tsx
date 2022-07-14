import Avatar from "@/root/components/Interface/Avatar";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { MetaTags } from "@/root/components/Header/Meta";
import { useRef, useState } from "react";
import { useRouter } from "next/router";
import Header from "@/root/components/Static/Header";
import { NavItems } from "@/root/utils/navItems";
import { parseUser } from "@/root/utils/parseUser";
import { DiscordUser } from "@/root/utils/types";
import { GetServerSideProps } from "next";
import { toast } from "react-toastify";
import url2 from "is-url";

interface Props {
  user: DiscordUser;
  owner: {
    avatar: string;
    username: string;
  };
  list: {
    name: string;
  };
  fetch: {
    avatar: string;
  };
  bot: {
    bot_id: string;
    username: string;
    banner: string;
    description: string;
    long_description: string;
    website: string;
    invite: string;
    owner: string;
    extra_owners: [];
    support: string;
    donate: string;
    library: string;
    nsfw: boolean;
    prefix: string;
    tags: [];
    review_note: string;
    cross_add: boolean;
    state: number;
    list_source: string;
    added_at: string;
    reviewer: string;
    invite_link: string;
  };
  long: string;
}

const BotPage = (props: Props) => {
  const router = useRouter();
  const $ = require("@/root/lang/" + (router.locale || "en"));
  const [copySuccess, setCopySuccess] = useState(false);

  const copyListId = () => {
    if (navigator.clipboard.writeText(`${props?.bot.list_source}`)) {
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
        title={props?.bot.username + " | Metro Reviews"}
        description={
          props?.bot.description ||
          "View " + props?.bot.username + "'s Page on Metro Reviews"
        }
        image={props?.fetch.avatar || "/img/logo.webp"}
        name={"Posted via: " + props?.list.name || "Metro Reviews"}
      />
      <Header $={$} NavItems={NavItems} props={props} allowLogin={true} />
      <div className="overflow-hidden relative bg-background flex mx-auto items-center justify-center">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:pb-28 lg:w-full lg:max-w-2xl xl:pb-32">
            <main className="px-4 mx-auto mt-10 w-full max-w-7xl sm:px-6 sm:mt-12 md:mt-10 lg:px-8 lg:mt-10 xl:mt-10">
              <div className="text-center">
                <div className="border-[2.2px] w-[8rem] h-[8rem] border-white-500/50 rounded-full flex mx-auto items-center justify-center">
                  <Avatar
                    src={props?.fetch.avatar}
                    alt="Bot Logo"
                    className="rounded-full mx-auto inline-flex"
                    height="512"
                  />
                </div>
                <h1 className="inline text-4xl font-extrabold tracking-tight text-slate-300 sm:text-5xl md:text-6xl">
                  {props?.bot.username}
                </h1>
                <p className="mt-3 text-base text-white sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  {props?.bot.description}
                </p>
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
                Bot Info
              </p>
              <p className="text-white text-sm text-opacity-50 mb-5 text-center">
                Useful Info and Links for {props?.bot.username}
              </p>
              <hr />
              <div className="mt-5">
                <p className="text-white text-lg">Debugging</p>
                <div className="items-center justify-center">
                  <div className="flex items-center shadow-xl">
                    <div className="mt-2 bg-amber-800 text-center px-4 py-2 rounded-l-lg text-white">
                      <p className="line-clamp-1">State:</p>
                    </div>
                    <div className="mt-2 bg-amber-600 w-full px-4 py-2 rounded-r-lg text-white">
                      <p className="line-clamp-1">
                        {props?.bot.state === 0
                          ? "Pending Review"
                          : props?.bot.state === 1
                          ? "Under Review"
                          : props?.bot.state === 2
                          ? "Approved"
                          : props?.bot.state === 3
                          ? "Denied"
                          : "No State"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center shadow-xl">
                    <div className="mt-2 bg-amber-800 text-center px-4 py-2 rounded-l-lg text-white">
                      <p className="line-clamp-1">Cross:</p>
                    </div>
                    <div className="mt-2 bg-amber-600 w-full px-4 py-2 rounded-r-lg text-white">
                      <p className="line-clamp-1">
                        {props?.bot.cross_add === true
                          ? "Cross Add Supported"
                          : props?.bot.cross_add === false
                          ? "Not Cross Add Supported"
                          : "Unknown"}
                      </p>
                    </div>
                  </div>
                  <button
                    className="flex items-center shadow-xl w-full"
                    onClick={copyListId}
                  >
                    <div className="mt-2 bg-amber-800 text-center px-4 py-2 rounded-l-lg text-white">
                      <p className="line-clamp-1">Source:</p>
                    </div>
                    <div className="mt-2 bg-amber-600 w-full px-4 py-2 rounded-r-lg text-white">
                      <p className="line-clamp-1 text-left">
                        {copySuccess ? "Copied" : "Copy Source ID"}
                      </p>
                    </div>
                  </button>
                </div>
              </div>
              <div className="mt-5">
                <p className="text-white text-lg">Config</p>
                <div className="items-center justify-center">
                  <div className="flex items-center shadow-xl">
                    <div className="mt-2 bg-amber-800 text-center px-4 py-2 rounded-l-lg text-white">
                      <p className="line-clamp-1">Prefix:</p>
                    </div>
                    <div className="mt-2 bg-amber-600 w-full px-4 py-2 rounded-r-lg text-white">
                      <p className="line-clamp-1">
                        {props?.bot.prefix
                          ? props?.bot.prefix
                          : "Slash Commands"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center shadow-xl">
                    <div className="mt-2 bg-amber-800 text-center px-4 py-2 rounded-l-lg text-white">
                      <p className="line-clamp-1">Source:</p>
                    </div>
                    <div className="mt-2 bg-amber-600 w-full px-4 py-2 rounded-r-lg text-white">
                      <p className="line-clamp-1">{props?.list.name}</p>
                    </div>
                  </div>
                  <div className="flex items-center shadow-xl">
                    <div className="mt-2 bg-amber-800 text-center px-4 py-2 rounded-l-lg text-white">
                      <p className="line-clamp-1">Added:</p>
                    </div>
                    <div className="mt-2 bg-amber-600 w-full px-4 py-2 rounded-r-lg text-white">
                      <p className="line-clamp-1">
                        {new Date(props?.bot.added_at).toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center shadow-xl">
                    <div className="mt-2 bg-amber-800 text-center px-4 py-2 rounded-l-lg text-white">
                      <p className="line-clamp-1">Library:</p>
                    </div>
                    <div className="mt-2 bg-amber-600 w-full px-4 py-2 rounded-r-lg text-white">
                      <p className="line-clamp-1">{props?.bot.library}</p>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="mx-6 my-6" />
              <div>
                <p className="text-white text-lg">Owner</p>
                <div className="w-full">
                  <div className="flex items-center shadow-xl">
                    <div className="mt-2 bg-amber-800 text-center px-4 py-2 rounded-l-lg text-white">
                      <div className="border-[2.2px] w-[3rem] h-[2rem] border-amber-500/50 rounded-full flex mx-auto items-center justify-center">
                        <Avatar
                          src={props?.owner.avatar}
                          className="rounded-full mx-auto inline-flex"
                          height="30"
                          width="234"
                        />
                      </div>
                    </div>
                    <div className="mt-2 bg-amber-600 w-full px-4 py-2 rounded-r-lg text-white h-[3rem]">
                      <p className="line-clamp-1 text-xl">
                        {props?.owner.username}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <p className="text-white text-lg">Links</p>
                <div className="w-full">
                  {props?.bot.bot_id && (
                    <a
                      href={`https://discord.com/users/${props?.bot.bot_id}`}
                      className="flex items-center shadow-xl"
                      target="_blank"
                    >
                      <div className="mt-2 bg-amber-800 text-center px-4 py-2 rounded-l-lg text-white">
                        <i className="fab fa-discord" />
                      </div>
                      <div className="mt-2 bg-amber-600 w-full px-4 py-2 rounded-r-lg text-white">
                        <p className="line-clamp-1">View Profile</p>
                      </div>
                    </a>
                  )}
                  {props?.bot.website && (
                    <a
                      href={props?.bot.website}
                      className="flex items-center shadow-xl"
                      target="_blank"
                    >
                      <div className="mt-2 bg-amber-800 text-center px-4 py-2 rounded-l-lg text-white">
                        <i className="fab fa-discord" />
                      </div>
                      <div className="mt-2 bg-amber-600 w-full px-4 py-2 rounded-r-lg text-white">
                        <p className="line-clamp-1">Visit Website</p>
                      </div>
                    </a>
                  )}
                  {props?.bot.invite && (
                    <a
                      href={props?.bot.invite}
                      className="flex items-center shadow-xl"
                      target="_blank"
                    >
                      <div className="mt-2 bg-amber-800 text-center px-4 py-2 rounded-l-lg text-white">
                        <i className="fab fa-discord" />
                      </div>
                      <div className="mt-2 bg-amber-600 w-full px-4 py-2 rounded-r-lg text-white">
                        <p className="line-clamp-1">Invite Bot</p>
                      </div>
                    </a>
                  )}
                  {props?.bot.invite_link && (
                    <a
                      href={props?.bot.invite}
                      className="flex items-center shadow-xl"
                      target="_blank"
                    >
                      <div className="mt-2 bg-amber-800 text-center px-4 py-2 rounded-l-lg text-white">
                        <i className="fab fa-discord" />
                      </div>
                      <div className="mt-2 bg-amber-600 w-full px-4 py-2 rounded-r-lg text-white">
                        <p className="line-clamp-1">Testing Server</p>
                      </div>
                    </a>
                  )}
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
        <div className="h-full w-full col-span-9">
          <div className="w-full text-white rounded-lg">
            <div className="mt-5">
              <div
                className="text-center w-full h-auto bg-gradient-to-br from-neutral-900/90 to-neutral-900/50 rounded-lg p-6 shadow-md mx-auto"
                id="long"
              >
                <div className="px-4 mx-auto w-auto sm:px-6 lg:px-8 lg:text-center break-all">
                  <div
                    className="markdown-body col-span-9 pt-5 lg:pt-0 w-auto break-all"
                    dangerouslySetInnerHTML={{ __html: props?.long }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
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
    `https://catnip.metrobots.xyz/bots/${ctx.params.botId}`
  );
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  const ownerFetch = await fetch(
    `https://api.fateslist.xyz/blazefire/${data.owner}`
  );
  const owner = await ownerFetch.json();

  const botInfo = await fetch(
    `https://api.fateslist.xyz/blazefire/${ctx.params.botId}`
  );
  const bot_info = await botInfo.json();

  const lists = await fetch(
    `https://catnip.metrobots.xyz/list/${data.list_source}`
  );
  const list = await lists.json();

  let desc;
  let isUrl = url2(data.long_description.replace("\n", "").replace("", ""));

  if (isUrl)
    desc = `<iframe src="${data.long_description
      .replace("\n", "")
      .replace(
        " ",
        ""
      )}" width="100%" height="100%" style="width: 100%; height: 100vh; color: black;"><object data="${data.long_description
      .replace("\n", "")
      .replace(
        " ",
        ""
      )}" width="100%" height="100%" style="width: 100%; height: 100vh; color: black;"><embed src="${data.long_description
      .replace("\n", "")
      .replace(
        " ",
        ""
      )}" width="100%" height="100%" style="width: 100%; height: 100vh; color: black;"> </embed>${data.long_description
      .replace("\n", "")
      .replace(" ", "")}</object></iframe>`;
  else if (data.long_description)
    desc = converter.makeHtml(data.long_description);
  else desc = data.long_description;

  return {
    props: {
      user,
      bot: data,
      owner: owner,
      fetch: bot_info,
      list: list,
      long: desc
        .replace(/(\r\n|\n\r|\r|\n)/g, "<br />")
        .replace(/(---)/g, "<hr />"),
    },
  };
};

export default BotPage;
