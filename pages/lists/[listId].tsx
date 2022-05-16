import Avatar from "@/root/components/Interface/Avatar";
import { CopyToClipboard } from "react-copy-to-clipboard"
import { MetaTags } from "@/root/components/Header/Meta";
import { NoDesc } from "@/root/components/Lists/NoDesc";
import { toast } from "react-toastify"
import marked from "marked";
import sanitize from "insane";
import { useState } from "react";

const ListPage = ({ $, list, desc }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const copyListID = () => {
    if (navigator.clipboard.writeText(`${list.id}`)) {
      setCopySuccess(true);
    } else {
      toast.error('Failed to Copy List ID');
    }
  }

  setTimeout(() => {
    setCopySuccess(false);
  }, 7200);

  return (
    <>
      <MetaTags
        title={list.name + " | Metro Reviews"}
        description={"View " + list.name + "'s Page on Metro Reviews."}
        image="/img/logo.webp"
        name="Metro Reviews"
      />
      <div className="overflow-hidden relative bg-background flex mx-auto items-center justify-center">
          <div className="mx-auto max-w-7xl">
              <div className="relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:pb-28 lg:w-full lg:max-w-2xl xl:pb-32">
            <main className="px-4 mx-auto mt-10 w-full max-w-7xl sm:px-6 sm:mt-12 md:mt-16 lg:px-8 lg:mt-20 xl:mt-28">
              <div className="text-center">
               <div className="border-[2.2px] w-[8rem] h-[8rem] border-white-500/50 rounded-full flex mx-auto items-center justify-center">
                 <Avatar
                   src={list.icon || '/img/defaultUser.webp'}
                   className="rounded-full mx-auto inline-flex"
                   height="512"
                 />
                </div>
                <h1 className="inline text-4xl font-extrabold tracking-tight text-slate-300 sm:text-5xl md:text-6xl">
                  { list.name}
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
                  Useful Info and Links for {list.name}
              </p>
              <hr />
              <div className="mt-5">
               <div className="items-center justify-center">
                   { list.domain && (
                    <a href={list.domain} className="flex items-center shadow-xl" target="_blank">
                      <div className="mt-2 bg-amber-800 text-center px-4 py-2 rounded-l-lg text-white">
                          <span className="tooltip rounded bg-amber-500 shadow-lg text-white p-1 -mt-8">View Website</span>
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
                        { 
                          list.state === 0 ? `${$.index.list_stats.lists.states.pending}` : 
                          list.state === 1 ? `${$.index.list_stats.lists.states.supported}` : 
                          list.state === 2 ? `${$.index.list_stats.lists.states.defunction}` :
                          list.state === 3 ? `${$.index.list_stats.lists.states.blacklisted}` :
                          list.state === 4 ? `${$.index.list_stats.lists.states.unconfirmed}` : 
                          `${$.index.list_stats.lists.states.err_failed}`
                        }
                      </p>
                    </div>
                  </div>
                <button className="flex items-center shadow-xl w-full" onClick={copyListID}>
                    <div className="mt-2 bg-amber-800 text-center px-4 py-2 rounded-l-lg text-white">
                        <i className="fas fa-id-card" />
                    </div>
                    <div className="mt-2 bg-amber-600 w-full px-4 py-2 rounded-r-lg text-white">
                         <p className="line-clamp-1 text-left">{copySuccess ? "Copied!" : "Copy List ID"}</p>
                    </div>
                </button>
               </div>
              </div>
           <br />
          </div>
         </div>
        </div>
        <div className="h-full w-full col-span-9">
          <div className="w-full text-white rounded-lg">
            <div className="mt-5">
              <div className="text-center w-full h-auto bg-gradient-to-br from-neutral-900/90 to-neutral-900/50 rounded-lg p-6 shadow-md mx-auto" id="widgets">
                <div className="px-4 mx-auto w-auto sm:px-6 lg:px-8 lg:text-center">
                  { !desc ? (
                    <NoDesc />
                  ) : (
                    <div className="col-span-9 pt-5 lg:pt-0 w-auto" dangerouslySetInnerHTML={{ __html: desc }} />
                  )}
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

  const res = await fetch(`https://catnip.metrobots.xyz/list/${context.params.listId}`);
  const data = await res.json();

  marked.setOptions({
      gfm: true,
      tables: true,
      breaks: true,
      pedantic: true,
      sanitize: false,
      smartLists: true,
      smartyPants: true
  });

  const content = await sanitize(marked.parse(data.description), {
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
          list: data,
          desc: content.replace(/(\r\n|\n\r|\r|\n)/g, '<br />').replace(/(---)/g, '<hr />')
      }
  }

}

export default ListPage;