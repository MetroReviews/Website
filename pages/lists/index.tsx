import { toast } from "react-toastify"
import { useRef, useState } from "react";
import Link from "next/link"

export default function Lists({ $, stats }) {
  if (!stats) toast.success('List Data has been loaded successfully but our loader is known to hang. If this happens simply refresh the page')
    const [enterLoading, setEnterLoading] = useState(false);
    const mainButton = useRef(null);

  return (
    <div>
        <div className="overflow-hidden relative bg-background flex mx-auto items-center justify-center">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:pb-28 lg:w-full lg:max-w-2xl xl:pb-32">
            <main className="px-4 mx-auto mt-10 w-full max-w-7xl sm:px-6 sm:mt-12 md:mt-16 lg:px-8 lg:mt-20 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl font-extrabold tracking-tight text-slate-300 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">
                    Supported
                  </span>{" "}
                  <span className="block text-amber-500 xl:inline">
                    Lists
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  All the amazing Bot Lists that use our services.
                </p>
                <div className="animateHeader mt-10 mb-10 flex flex-wrap items-center justify-center gap-x-4">
                    <Link className="mt-4 mb-4" href={"https://github.com/MetroReviews/support"}>
                        <a
                          target="_blank"
                          onClick={() => setEnterLoading(true)}
                          ref={mainButton}
                          className={
                            "flex items-center px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white " +
                            ("w-auto")
                          }
                        > Get Support</a>
                    </Link>
                    <Link className="mt-4 mb-4" href={"https://forms.gle/YQDzs8TKcGQg5p7x8"}>
                    <a
                      target="_blank"
                      onClick={() => setEnterLoading(true)}
                      ref={mainButton}
                      className={
                        "flex items-center px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white " +
                        ("w-auto")
                      }
                    > Apply Now</a>
                    </Link>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
        <div className="lg:max-w-screen-lg mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 w-auto">
            {!stats ? <div className="col-span-1 md:col-span-2 flex items-center justify-center">
                <i className="fad fa-spinner-third fa-spin text-white text-2xl" />
            </div> : (stats.map((list, index) => (
                <div key={index} className="flex flex-col justify-center text-white rounded w-auto h-max">
                    <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-br from-neutral-900/80 to-neutral-900/20 p-3 rounded-lg w-auto h-full border border-amber-800">
                        <img className="rounded-full h-24 w-24" alt={list.name} src={!list.icon ? `/img/defaultUser.webp` : list.icon} />
                        <div>
                            <h1 className="leading-none text-lg font-bold text-white">
                                {list.name}
                                <>
                                   { list.state === 0 && (
                                     <div className="has-tooltip inline mx-1 my-4">
                                       <span className="tooltip rounded bg-amber-500 shadow-lg text-white p-1 -mt-8">{$.index.list_stats.lists.states.pending}</span>
                                         <i data-tooltip-target="tooltip-supported" className="fas fa-circle-exclamation mr-1" />
                                      </div>
                                   )}
                                   { list.state === 1  && (
                                     <div className="has-tooltip inline mx-1 my-4">
                                       <span className="tooltip rounded bg-amber-500 shadow-lg text-white p-1 -mt-8">{$.index.list_stats.lists.states.supported}</span>
                                         <i data-tooltip-target="tooltip-supported" className="fas fa-circle-bolt mr-1" />
                                     </div>
                                   )}
                                   { list.state === 2  && (
                                     <div className="has-tooltip inline mx-1 my-4">
                                       <span className="tooltip rounded bg-amber-500 shadow-lg text-white p-1 -mt-8">{$.index.list_stats.lists.states.defunction}</span>
                                         <i data-tooltip-target="tooltip-supported" className="fas fa-lock mr-1" />
                                     </div>
                                   )}
                                   { list.state === 3  && (
                                     <div className="has-tooltip inline mx-1 my-4">
                                       <span className="tooltip rounded bg-amber-500 shadow-lg text-white p-1 -mt-8">{$.index.list_stats.lists.states.blacklisted}</span>
                                         <i data-tooltip-target="tooltip-supported" className="fas fa-ban mr-1" />
                                     </div>
                                   )}
                                   { list.state === 4  && (
                                     <div className="has-tooltip inline mx-1 my-4">
                                       <span className="tooltip rounded bg-amber-500 shadow-lg text-white p-1 -mt-8">{$.index.list_stats.lists.states.unconfirmed}</span>
                                         <i data-tooltip-target="tooltip-supported" className="fas fa-times-circle mr-1" />
                                     </div>
                                   )}
                                </>
                            </h1>
                            <br />
                            <div>
                              <div className="w-full">
                                { list.domain && (
                                  <a href={list.domain} className="flex items-center shadow-xl" target="_blank">
                                    <div className="mt-2 bg-amber-800 text-center px-4 py-2 rounded-l-lg text-white">
                                      <i className="fas fa-globe" />
                                    </div>
                                    <div className="mt-2 bg-amber-600 w-full px-4 py-2 rounded-r-lg text-white">
                                      <p className="line-clamp-1">Visit List</p>
                                    </div>
                                  </a>
                                )}
                                  <a href={'/lists/' + list.id} className="flex items-center shadow-xl" target="_blank">
                                    <div className="mt-2 bg-amber-800 text-center px-4 py-2 rounded-l-lg text-white">
                                      <i className="fas fa-info-circle" />
                                    </div>
                                    <div className="mt-2 bg-amber-600 w-full px-4 py-2 rounded-r-lg text-white">
                                      <p className="line-clamp-1">View Page</p>
                                    </div>
                                  </a>
                              </div>          
                            </div>
                        </div>
                    </div>
                </div>
            )))}
        </div>
    </div>
  );
};

module.exports.getServerSideProps = async ({ context }) => {

  const res = await fetch('https://catnip.metrobots.xyz/lists');
  const lists = await res.json();
  
  if (!lists) {
    return {
      notFound: true
    }
  }
  
  return {
    props: { 
      stats: lists
    }
  }
}
  