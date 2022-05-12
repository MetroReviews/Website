import { useRouter } from "next/router";
import Avatar from "@/root/components/Avatar";
import { useEffect, useRef, useState } from "react";
import marked from "marked";
import sanitize from "insane";
import Link from "next/link";

export default function BotPage({ $, bot, long, fates }) {
    const router = useRouter();
    const botId = router.query;
    const [enterLoading, setEnterLoading] = useState(false);
    const mainButton = useRef(null);

    const defaultResponse = (
        <div className="p-5 lg:p-10 w-full lg:grid lg:grid-cols-5 gap-4">
            <div className="flex col-span-5 items-center justify-center">
                <i className="fad fa-spinner-third fa-spin text-white text-2xl" />
            </div>
        </div>
    );

    return (
        <>
        {!bot ? (
            <div className="flex col-span-6 items-center justify-center">
                <i className="fad fa-spinner-third fa-spin text-white text-2xl" />
            </div>
        ) : (
                <>
                <div className="py-20 mb-40 max-w-3xl mx-auto h-auto items-center justify-center">
                    <div className="border-[2.2px] w-[8rem] h-[8rem] border-amber-500/50 rounded-full flex mx-auto items-center justify-center">
                        <Avatar
                          src={!fates.user ? '/img/defaultUser.webp' : fates.user.avatar}
                          className="rounded-full mx-auto inline-flex"
                          height="512"
                        />
                    </div>
                    <p className="animateHeader text-4xl font-extrabold text-center text-white">
                        {bot.username}
                    </p>
                    <p className="animateHeader text-white text-opacity-50 text-center mt-5">
                        {bot.description}
                    </p>
                    <div className="mt-5 w-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto my-auto">
                        { bot.bot_id && (
                         <a href={`https://discord.com/users/${bot.bot_id}`} className="flex shadow-xl" target="_blank">
                           <div className="mt-2 bg-indigo-700 text-center px-4 py-2 rounded-l-lg text-white">
                               <i className="fab fa-discord" />
                           </div>
                           <div className="mt-2 bg-indigo-600 w-fit px-4 py-2 rounded-r-lg text-white">
                               <p className="line-clamp-1">Bot Profile</p>
                            </div>
                         </a>
                        )}
                        { bot.invite && (
                         <a href={`${bot.invite}`} className="flex shadow-xl" target="_blank">
                           <div className="mt-2 bg-indigo-700 text-center px-4 py-2 rounded-l-lg text-white">
                               <i className="fab fa-discord" />
                           </div>
                           <div className="mt-2 bg-indigo-600 w-fit px-4 py-2 rounded-r-lg text-white">
                               <p className="line-clamp-1">Invite Bot</p>
                            </div>
                         </a>
                        )}
                        { bot.owner && (
                         <a href={`https://discord.com/users/${bot.owner}`} className="flex shadow-xl" target="_blank">
                           <div className="mt-2 bg-indigo-700 text-center px-4 py-2 rounded-l-lg text-white">
                               <i className="fab fa-discord" />
                           </div>
                           <div className="mt-2 bg-indigo-600 w-fit px-4 py-2 rounded-r-lg text-white">
                               <p className="line-clamp-1">Bot Owner</p>
                            </div>
                         </a>
                        )}
                    </div>
                </div>
                <div className="text-center w-full h-auto bg-gradient-to-br from-neutral-900/90 to-neutral-900/50 rounded-lg p-6 shadow-md mx-auto" id="widgets">
                  <div className="px-4 mx-auto w-auto sm:px-6 lg:px-8 lg:text-center">
                    <div className="col-span-9 pt-5 lg:pt-0 w-auto">
                        <div>
                            <h2 className="text-4xl font-semibold tracking-wide text-white">
                                <span className="text-3xl font-bold tracking-wide text-amber-500">Bot Info and Description</span>
                            </h2>
                            <hr className="mx-4 my-4" />
                        </div>
                        
                        <hr className="mx-auto my-6" />
                        <span className="text-2xl font-semibold mb-5 pr-1 text-white" dangerouslySetInnerHTML={{ __html: long }} />
                    </div>
                  </div>
                </div>
              </>
            )};
        </>
    )
}

export async function getServerSideProps(context) {

    const res = await fetch(`https://catnip.metrobots.xyz/bots/${context.params.slug}`);
    const data = await res.json();

    const fl = await fetch(`https://api.fateslist.xyz/bots/${context.params.slug}`);
    const fates = await fl.json();

    marked.setOptions({
        gfm: true,
        tables: true,
        breaks: true,
        pedantic: true,
        sanitize: false,
        smartLists: true,
        smartyPants: true
    });

    if (!data) {
        return {
            notFound: true,
        }
    }

    const content = await sanitize(marked.parse(data.long_description), {
          "allowedAttributes": {
          "a": ["href", "name", "target"],
          "iframe": ["allowfullscreen", "frameborder", "src"],
          "img": ["src"],
        },
        "allowedSchemes": ["http", "https", "mailto"],
        "allowedTags": [
          "a", "article", "b", "blockquote", "br", "caption", "code", "del", "details", "div", "em",
          "h1", "h2", "h3", "h4", "h5", "h6", "hr", "i", "img", "ins", "kbd", "li", "main", "ol",
          "p", "pre", "section", "span", "strike", "strong", "sub", "summary", "sup", "table",
          "tbody", "td", "th", "thead", "tr", "u", "ul"
        ],
        "filter": null,
        "transformText": null
    })

    await content
      .replace(/\r\n|\r/g, '\n')
      .replace(/\t/g, '    ')
      .replace(/[\w\<][^\n]*\n+/g,function(m){
      return /\n{2}/.test(m) ? m : m.replace(/\s+$/,"")+"  \n";
    })

    return {
        props: {
            bot: data,
            fates: fates,
            long: content.replace(/(\r\n|\n\r|\r|\n)/g, '<br />').replace(/(---)/g, '<hr />')
        }
    }

}