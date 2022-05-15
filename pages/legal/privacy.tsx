import Link from 'next/link';
import { useRef, useState } from "react";
import { MetaTags } from '@/root/components/Header/Meta';

export default function Privacy({ $ }) {
  const [enterLoading, setEnterLoading] = useState(false);
  const mainButton = useRef(null);

  return (
      <>
      <MetaTags
        title="Privacy | Metro Reviews"
        description="How we Store and Protect your Data!"
        image="/img/logo.webp"
        name="Metro Reviews"
      />
      <div className="overflow-hidden relative bg-background flex mx-auto items-center justify-center">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:pb-28 lg:w-full lg:max-w-2xl xl:pb-32">
            <main className="px-4 mx-auto mt-10 w-full max-w-7xl sm:px-6 sm:mt-12 md:mt-16 lg:px-8 lg:mt-20 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl font-extrabold tracking-tight text-slate-300 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">
                    { $.privacy.title1 }
                  </span>{" "}
                  <span className="block text-amber-500 xl:inline">
                    { $.privacy.title2 }
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  { $.privacy.description }
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
                        > { $.privacy.buttons.support }</a>
                    </Link>
                    <Link className="mt-4 mb-4" href={"/"}>
                    <a
                      target="_blank"
                      onClick={() => setEnterLoading(true)}
                      ref={mainButton}
                      className={
                        "flex items-center px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white " +
                        ("w-auto")
                      }
                    > { $.privacy.buttons.home }</a>
                    </Link>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>  
    <div>
    <div className="mt-14 mb-20 w-full h-max grid grid-cols-1 lg:grid-cols-12 lg:gap-x-4">
        <div className="h-auto w-full text-white lg:col-span-3 mb-5 lg:mb-0">
          <div className="h-auto top-20 transition-all duration-200 w-full bg-black bg-opacity-10 rounded-lg p-4 lg:sticky">
          <div className="bg-gradient-to-br from-neutral-900/90 to-neutral-900/50 rounded-lg h-max">
            <br />
              <p className="text-xl font-medium text-white text-center">
                  <i className="fas fa-info-circle text-amber-400 mr-2" />
                  Navigation
              </p>
              <p className="text-white text-sm text-opacity-50 mb-5 text-center">
                  Navigate to your desired section
              </p>
              <hr />
              <div className="mt-5">
               <div className="items-center justify-center">
                  <div className="flex items-center shadow-xl">
                    <div className="mt-2 w-full px-4 py-2 rounded-r-lg text-white">
                      <p className="line-clamp-1">
                        <ol className="mt-1 text-white/50 font-medium text-base ml-10 mb-5 list-disc">
                          <li>
                            <a className="text-amber-500 hover:text-amber-800" href="#your_consent">{ $.privacy.navigation.consent }</a>
                          </li>
                        </ol>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center shadow-xl">
                    <div className="mt-2 w-full px-4 py-2 rounded-r-lg text-white">
                      <p className="line-clamp-1">
                        <ol className="mt-1 text-white/50 font-medium text-base ml-10 mb-5 list-disc">
                          <li>
                            <a className="text-amber-500 hover:text-amber-800" href="#data_storage">{ $.privacy.navigation.storage }</a>
                          </li>
                        </ol>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center shadow-xl">
                    <div className="mt-2 w-full px-4 py-2 rounded-r-lg text-white">
                      <p className="line-clamp-1">
                        <ol className="mt-1 text-white/50 font-medium text-base ml-10 mb-5 list-disc">
                          <li>
                            <a className="text-amber-500 hover:text-amber-800" href="#data_usage">{ $.privacy.navigation.usage }</a>
                          </li>
                        </ol>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center shadow-xl">
                    <div className="mt-2 w-full px-4 py-2 rounded-r-lg text-white">
                      <p className="line-clamp-1">
                        <ol className="mt-1 text-white/50 font-medium text-base ml-10 mb-5 list-disc">
                          <li>
                            <a className="text-amber-500 hover:text-amber-800" href="#log_files">{ $.privacy.navigation.logs }</a>
                          </li>
                        </ol>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center shadow-xl">
                    <div className="mt-2 w-full px-4 py-2 rounded-r-lg text-white">
                      <p className="line-clamp-1">
                        <ol className="mt-1 text-white/50 font-medium text-base ml-10 mb-5 list-disc">
                          <li>
                            <a className="text-amber-500 hover:text-amber-800" href="#cookies">{ $.privacy.navigation.cookies }</a>
                          </li>
                        </ol>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center shadow-xl">
                    <div className="mt-2 w-full px-4 py-2 rounded-r-lg text-white">
                      <p className="line-clamp-1">
                        <ol className="mt-1 text-white/50 font-medium text-base ml-10 mb-5 list-disc">
                          <li>
                            <a className="text-amber-500 hover:text-amber-800" href="#ad_partners">{ $.privacy.navigation.ads }</a>
                          </li>
                        </ol>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center shadow-xl">
                    <div className="mt-2 w-full px-4 py-2 rounded-r-lg text-white">
                      <p className="line-clamp-1">
                        <ol className="mt-1 text-white/50 font-medium text-base ml-10 mb-5 list-disc">
                          <li>
                            <a className="text-amber-500 hover:text-amber-800" href="#third_party">{ $.privacy.navigation.tppp }</a>
                          </li>
                        </ol>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center shadow-xl">
                    <div className="mt-2 w-full px-4 py-2 rounded-r-lg text-white">
                      <p className="line-clamp-1">
                        <ol className="mt-1 text-white/50 font-medium text-base ml-10 mb-5 list-disc">
                          <li>
                            <a className="text-amber-500 hover:text-amber-800" href="#ccpa">{ $.privacy.navigation.ccpa }</a>
                          </li>
                        </ol>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center shadow-xl">
                    <div className="mt-2 w-full px-4 py-2 rounded-r-lg text-white">
                      <p className="line-clamp-1">
                        <ol className="mt-1 text-white/50 font-medium text-base ml-10 mb-5 list-disc">
                          <li>
                            <a className="text-amber-500 hover:text-amber-800" href="#gdpr">{ $.privacy.navigation.gdpr }</a>
                          </li>
                        </ol>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center shadow-xl">
                    <div className="mt-2 w-full px-4 py-2 rounded-r-lg text-white">
                      <p className="line-clamp-1">
                        <ol className="mt-1 text-white/50 font-medium text-base ml-10 mb-5 list-disc">
                          <li>
                            <a className="text-amber-500 hover:text-amber-800" href="#childrens_info">{ $.privacy.navigation.child }</a>
                          </li>
                        </ol>
                      </p>
                    </div>
                  </div>
               </div>
              </div>
           <br />
          </div>
         </div>
        </div>
        <div className="h-full w-full col-span-9">
          <div className="w-auto text-white rounded-lg">
            <div className="mt-5">
              <div className="text-left w-auto h-auto bg-gradient-to-br from-neutral-900/90 to-neutral-900/50 rounded-lg p-6 shadow-md mx-auto" id="widgets">
                <div className="px-4 mx-auto w-auto sm:px-6 lg:px-8">
                    <div className="col-span-9 pt-5 lg:pt-0 w-auto">
                      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:text-center"></div>

                      <p className="text-sm text-white/30 mb-1">{ $.privacy.updated }</p>
                      
                      <p className="mt-2 text-white/50 font-medium text-lg">
                        { $.privacy.sections.base.text1 }
                      </p>
                      
                      <p className="mt-2 text-white/50 font-medium text-lg">
                        { $.privacy.sections.base.text2 }
                      </p>
                      
                      <p className="mt-2 text-white/50 font-medium text-lg">
                        { $.privacy.sections.base.text3 }
                      </p>

                      <h2 className="mt-10 text-white font-bold text-3xl">
                        { $.privacy.sections.consent.title }
                      </h2>

                      <p className="mt-1 text-white/50 font-medium text-lg">
                        { $.privacy.sections.consent.texts }
                      </p>

                      <h2 className="mt-10 text-white font-bold text-3xl">
                        { $.privacy.sections.data_store.title }
                      </h2>
                      
                      <ul className="mt-1 text-white/50 font-medium text-base ml-10 mb-5 list-disc">
                          <li>{ $.privacy.sections.data_store.list.items.item1 }</li>
                          <li>{ $.privacy.sections.data_store.list.items.item2 }</li>
                          <li>{ $.privacy.sections.data_store.list.items.item3 }</li>
                          <li>{ $.privacy.sections.data_store.list.items.item4 }</li>
                          <li>{ $.privacy.sections.data_store.list.items.item5 }</li>
                      </ul>

                      <h2 className="mt-10 text-white font-bold text-3xl">
                        { $.privacy.sections.data_usage.title }
                      </h2>

                      <p className="mt-1 text-white/50 font-medium text-lg">
                        { $.privacy.sections.data_usage.description }
                      </p>

                      <ul className="mt-1 text-white/50 font-medium text-base ml-10 mb-5 list-disc">
                          <li>{ $.privacy.sections.data_usage.list.items.item1 }</li>
                          <li>{ $.privacy.sections.data_usage.list.items.item2 }</li>
                          <li>{ $.privacy.sections.data_usage.list.items.item3 }</li>
                          <li>{ $.privacy.sections.data_usage.list.items.item4 }</li>
                          <li>{ $.privacy.sections.data_usage.list.items.item5 }</li>
                      </ul>

                      <h2 className="mt-10 text-white font-bold text-3xl">
                        { $.privacy.sections.log_files.title }
                      </h2>

                      <p className="mt-1 text-white/50 font-medium text-lg">
                        { $.privacy.sections.log_files.texts }
                      </p>

                      <h2 className="mt-10 text-white font-bold text-3xl">
                        { $.privacy.sections.cookies.title }
                      </h2>

                      <p className="mt-1 text-white/50 font-medium text-lg">
                        { $.privacy.sections.cookies.texts.base } { $.privacy.sections.cookies.texts.intro }
                        {" "}
                        <Link href="/legal/cookies">
                          <span className="underline hover:text-blue-500 hover:underline transition-all duration-200 cursor-pointer">
                            { $.privacy.sections.cookies.texts.link }
                          </span>
                        </Link>
                        {" "}
                        { $.privacy.sections.cookies.texts.outro }
                      </p>

                      <h2 className="mt-10 text-white font-bold text-3xl">
                        { $.privacy.sections.ad_partners.title }
                      </h2>

                      <p className="mt-1 text-white/50 font-medium text-lg">
                        { $.privacy.sections.ad_partners.texts.base }
                      </p>
                      
                      <p className="mt-2 text-white/50 font-medium text-lg">
                        { $.privacy.sections.ad_partners.texts.sec }
                      </p>
                      
                      <p className="mt-2 text-white/50 font-medium text-lg">
                        { $.privacy.sections.ad_partners.texts.out }
                      </p>

                      <h2 className="mt-10 text-white font-bold text-3xl">
                        { $.privacy.sections.third_party.title }
                      </h2>

                      <p className="mt-2 text-white/50 font-medium text-lg">
                        { $.privacy.sections.third_party.texts.base }
                      </p>

                      <p className="mt-2 text-white/50 font-medium text-lg">
                        { $.privacy.sections.third_party.texts.out }
                      </p>

                      <h2 className="mt-10 text-white font-bold text-3xl">
                        { $.privacy.sections.ccpa.title }
                      </h2>

                      <p className="mt-1 text-white/50 font-medium text-lg">
                        { $.privacy.sections.ccpa.desc }
                      </p>

                      <ul className="mt-1 text-white/50 font-medium text-base ml-10 mb-5 list-disc">
                          <li>{ $.privacy.sections.ccpa.list.items.item1 }</li>
                          <li>{ $.privacy.sections.ccpa.list.items.item2 }</li>
                          <li>{ $.privacy.sections.ccpa.list.items.item3 }</li>
                      </ul>

                      <p className="mt-2 text-white/50 font-medium text-lg">
                        { $.privacy.sections.ccpa.out } 
                        {" "}
                        <Link href="/github">
                          <span className="underline hover:text-blue-500 hover:underline transition-all duration-200 cursor-pointer">
                            { $.privacy.sections.ccpa.link }
                          </span>
                        </Link>
                      </p>

                      <h2 className="mt-10 text-white font-bold text-3xl">
                        { $.privacy.sections.gdpr.title }
                      </h2>

                      <p className="mt-1 text-white/50 font-medium text-lg">
                        { $.privacy.sections.gdpr.desc }
                      </p>

                      <ul className="mt-1 text-white/50 font-medium text-base ml-10 mb-5 list-disc">
                          <li>{ $.privacy.sections.gdpr.list.items.item1 }</li>
                          <li>{ $.privacy.sections.gdpr.list.items.item2 }</li>
                          <li>{ $.privacy.sections.gdpr.list.items.item3 }</li>
                          <li>{ $.privacy.sections.gdpr.list.items.item4 }</li>
                          <li>{ $.privacy.sections.gdpr.list.items.item5 }</li>
                          <li>{ $.privacy.sections.gdpr.list.items.item6 }</li>
                      </ul>

                      <p className="mt-2 text-white/50 font-medium text-lg">
                        { $.privacy.sections.gdpr.out } 
                        {" "}
                        <Link href="/github">
                          <span className="underline hover:text-blue-500 hover:underline transition-all duration-200 cursor-pointer">
                            { $.privacy.sections.gdpr.link }
                          </span>
                        </Link>
                      </p>

                      <h2 className="mt-10 text-white font-bold text-3xl">
                        { $.privacy.sections.children.title }
                      </h2>

                      <p className="mt-1 text-white/50 font-medium text-lg">
                        { $.privacy.sections.children.texts.desc1 }
                      </p>

                      <p className="mt-2 text-white/50 font-medium text-lg">
                        { $.privacy.sections.children.texts.desc2 }
                      </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}