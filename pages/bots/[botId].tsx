import Avatar from "@/root/components/Interface/Avatar";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { MetaTags } from "@/root/components/Header/Meta";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import marked from "marked";
import sanitize from "insane";

const BotPage = ({ $, bot, long, owner, fetch, list }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const copyListId = () => {
    if (navigator.clipboard.writeText(`${bot.list_source}`)) {
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
        title={bot.username + " | Metro Reviews"}
        description={
          bot.description || "View " + bot.username + "'s Page on Metro Reviews"
        }
        image={fetch.avatar || "/img/logo.webp"}
        name={"Posted via: " + list.name || "Metro Reviews"}
      />
      <div className="overflow-hidden relative bg-background flex mx-auto items-center justify-center">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:pb-28 lg:w-full lg:max-w-2xl xl:pb-32">
            <main className="px-4 mx-auto mt-10 w-full max-w-7xl sm:px-6 sm:mt-12 md:mt-16 lg:px-8 lg:mt-20 xl:mt-28">
              <div className="text-center">
                <div className="border-[2.2px] w-[8rem] h-[8rem] border-white-500/50 rounded-full flex mx-auto items-center justify-center">
                  <Avatar
                    src={fetch.avatar}
                    className="rounded-full mx-auto inline-flex"
                    height="512"
                  />
                </div>
                <h1 className="inline text-4xl font-extrabold tracking-tight text-slate-300 sm:text-5xl md:text-6xl">
                  {bot.username}
                </h1>
                <p className="mt-3 text-base text-white sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  {bot.description}
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
                Useful Info and Links for {bot.username}
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
                        {bot.state === 0
                          ? "Pending Review"
                          : bot.state === 1
                          ? "Under Review"
                          : bot.state === 2
                          ? "Approved"
                          : bot.state === 3
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
                        {bot.cross_add === true
                          ? "Cross Add Supported"
                          : bot.cross_add === false
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
                        {bot.prefix ? bot.prefix : "Slash Commands"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center shadow-xl">
                    <div className="mt-2 bg-amber-800 text-center px-4 py-2 rounded-l-lg text-white">
                      <p className="line-clamp-1">Source:</p>
                    </div>
                    <div className="mt-2 bg-amber-600 w-full px-4 py-2 rounded-r-lg text-white">
                      <p className="line-clamp-1">{list.name}</p>
                    </div>
                  </div>
                  <div className="flex items-center shadow-xl">
                    <div className="mt-2 bg-amber-800 text-center px-4 py-2 rounded-l-lg text-white">
                      <p className="line-clamp-1">Added:</p>
                    </div>
                    <div className="mt-2 bg-amber-600 w-full px-4 py-2 rounded-r-lg text-white">
                      <p className="line-clamp-1">
                        {new Date(bot.added_at).toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center shadow-xl">
                    <div className="mt-2 bg-amber-800 text-center px-4 py-2 rounded-l-lg text-white">
                      <p className="line-clamp-1">Library:</p>
                    </div>
                    <div className="mt-2 bg-amber-600 w-full px-4 py-2 rounded-r-lg text-white">
                      <p className="line-clamp-1">{bot.library}</p>
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
                          src={owner.avatar}
                          className="rounded-full mx-auto inline-flex"
                          height="30"
                          width="234"
                        />
                      </div>
                    </div>
                    <div className="mt-2 bg-amber-600 w-full px-4 py-2 rounded-r-lg text-white h-[3rem]">
                      <p className="line-clamp-1 text-xl">{owner.username}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <p className="text-white text-lg">Links</p>
                <div className="w-full">
                  {bot.bot_id && (
                    <a
                      href={`https://discord.com/users/${bot.bot_id}`}
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
                  {bot.website && (
                    <a
                      href={bot.website}
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
                  {bot.invite && (
                    <a
                      href={bot.invite}
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
                  {bot.invite_link && (
                    <a
                      href={bot.invite}
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
                id="widgets"
              >
                <div className="px-4 mx-auto w-auto sm:px-6 lg:px-8 lg:text-center break-all">
                  <div
                    className="markdown-body col-span-9 pt-5 lg:pt-0 w-auto break-all"
                    dangerouslySetInnerHTML={{ __html: long }}
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

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://catnip.metrobots.xyz/bots/${context.params.botId}`
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
    `https://api.fateslist.xyz/blazefire/${context.params.botId}`
  );
  const bot_info = await botInfo.json();

  const lists = await fetch(
    `https://catnip.metrobots.xyz/list/${data.list_source}`
  );
  const list = await lists.json();

  marked.setOptions({
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: true,
    sanitize: false,
    smartLists: true,
    smartyPants: true,
  });

  const content = await sanitize(marked.parse(data.long_description), {
    allowedAttributes: {
      a: ["href", "name", "target"],
      iframe: ["allowfullscreen", "frameborder", "src"],
      img: ["src"],
    },
    allowedSchemes: ["http", "https", "mailto"],
    allowedTags: [
      "a",
      "article",
      "b",
      "blockquote",
      "br",
      "caption",
      "code",
      "del",
      "details",
      "div",
      "em",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "hr",
      "i",
      "img",
      "ins",
      "kbd",
      "li",
      "main",
      "ol",
      "p",
      "pre",
      "section",
      "span",
      "strike",
      "strong",
      "sub",
      "summary",
      "sup",
      "table",
      "tbody",
      "td",
      "th",
      "thead",
      "tr",
      "u",
      "ul",
    ],
    filter: null,
    transformText: null,
  });

  await content
    .replace(/\r\n|\r/g, "\n")
    .replace(/\t/g, "    ")
    .replace(/[\w\<][^\n]*\n+/g, function (m) {
      return /\n{2}/.test(m) ? m : m.replace(/\s+$/, "") + "  \n";
    });

  return {
    props: {
      bot: data,
      owner: owner,
      fetch: bot_info,
      list: list,
      long: content
        .replace(/(\r\n|\n\r|\r|\n)/g, "<br />")
        .replace(/(---)/g, "<hr />"),
    },
  };
}

export default BotPage;
