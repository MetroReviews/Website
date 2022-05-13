import Link from "next/link";
import { useRef, useState } from "react";
import { toast } from "react-toastify"

export default function Index({ $, title, stats }) {
  const [enterLoading, setEnterLoading] = useState(false);
  const mainButton = useRef(null);

  if (!stats) toast.success('List Data has been loaded successfully but our loader is known to hang. If this happens simply refresh the page')

  const Loading = () => <i className="fa fa-spinner-third fa-spin text-white" />;

  return (
    <>
    
      <div className="py-20 mb-40 max-w-3xl mx-auto">
        <p className="animateHeader text-4xl font-extrabold text-center text-white" dangerouslySetInnerHTML={{ __html: $.title }} />
        <p className="animateHeader text-white text-opacity-50 text-center mt-5">
          {$.index.description}
        </p>
        <div className="animateHeader mt-10 flex flex-wrap items-center justify-center gap-x-4">
            <Link
              href={"https://github.com/MetroReviews/support"}
            >
              <a
                onClick={() => setEnterLoading(true)}
                ref={mainButton}
                className={
                  "flex items-center px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white " +
                  ("w-auto")
                }
              > Get Support
              </a>
            </Link>
            <Link
              href={"https://enroll.metrobots.xyz"}
            >
              <a
                onClick={() => setEnterLoading(true)}
                ref={mainButton}
                className={
                  "flex items-center px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white " +
                  ("w-auto")
                }
              > Apply Now
              </a>
            </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-y-0 lg:gap-x-12 py-24 max-w-7xl mx-auto">
          <div className="col-span-4">
            <p className="text-white text-4xl font-bold" dangerouslySetInnerHTML={{ __html: $.index.features.title }} />
            <p className="text-white text-md font-medium text-gray-500/75" dangerouslySetInnerHTML={{ __html: $.index.features.description }}/>
          </div>

          <div className="col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {$.index.features.items.map((feature, featureIdx) => (
              <div key={featureIdx}>
                <i className={`${feature.icon} text-3xl text-amber-500`} />
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5">{feature.title}</p>
                  <p className="text-gray-500 line-clamp-4">{feature.description}</p>
                </div>
              </div>
            ))}*
          </div>

      </div>

      {!stats ? 
        <div className="col-span-1 md:col-span-2 flex items-center justify-center" onChange={() => { setEnterLoading(false)}}>
          <i className="fad fa-spinner-third fa-spin text-white text-2xl" />
      </div> : 
      <div className="max-w-7xl text-center h-auto my-14 lg:my-56 bg-gradient-to-br from-neutral-900/90 to-neutral-900/50 rounded-lg p-6 shadow-md mx-auto" onLoad={() => { setEnterLoading(false)}}>
        <p className="text-2xl p-6 text-white font-semibold" dangerouslySetInnerHTML={{ __html: $.index.list_stats.chosen.replace('{list_count}', stats.length) }} />
             <div className="lg:px-32 flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full mx-auto">
                {stats.map((stat, statIdx) => (
                    <div key={statIdx} className="mt-4 mb-4">
                      <img src={stat.icon || '/img/logo.webp'} className="flex mx-auto h-20 w-20 items-center justify-center" />
                      <p className="text-2xl text-white font-semibold" dangerouslySetInnerHTML={{ __html: $.index.list_stats.lists.name.replace('{list_name}', stat.name) }} />
                      <p className="text-md font-medium text-gray-500 line-clamp-5">
                        { 
                          stat.state === 0 ? `${$.index.list_stats.lists.states.pending}` : 
                          stat.state === 1 ? `${$.index.list_stats.lists.states.supported}` : 
                          stat.state === 2 ? `${$.index.list_stats.lists.states.defunction}` :
                          stat.state === 3 ? `${$.index.list_stats.lists.states.blacklisted}` :
                          stat.state === 4 ? `${$.index.list_stats.lists.states.unconfirmed}` : 
                          `${$.index.list_stats.lists.states.err_failed}`
                        }
                      </p>
                    </div>
                ))}
             </div>
        </div>
        }
      </>
  );
}

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
