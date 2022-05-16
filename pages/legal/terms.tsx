import Link from 'next/link';
import { useRef, useState } from "react";
import { MetaTags } from '@/root/components/Header/Meta';

export default function Terms({ $ }) {
  const [enterLoading, setEnterLoading] = useState(false);
  const mainButton = useRef(null);

  return (
      <>
      <MetaTags
        title="Terms | Metro Reviews"
        description="The boring Legal Mumbo-Jumbo that you should probably read!"
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
                    { $.terms.title1 }
                  </span>{" "}
                  <span className="block text-amber-500 xl:inline">
                    { $.terms.title2 }
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  { $.terms.description }
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
                        > { $.terms.buttons.support }</a>
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
                    > { $.terms.buttons.home }</a>
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
                  { $.terms.navigation.title }
              </p>
              <p className="text-white text-sm text-opacity-50 mb-5 text-center">
                  { $.terms.navigation.desc }
              </p>
              <hr />
              <div className="mt-5">
               <div className="items-center justify-center">
                  <div className="flex items-center shadow-xl">
                    <div className="mt-2 w-full px-4 py-2 rounded-r-lg text-white">
                      <p className="line-clamp-1">
                        <ol className="mt-1 text-white/50 font-medium text-base ml-10 mb-5 list-disc">
                          <li>
                            <a className="text-amber-500 hover:text-amber-800" href="#terms">{ $.terms.navigation.terms }</a>
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
                            <a className="text-amber-500 hover:text-amber-800" href="#use_license">{ $.terms.navigation.use }</a>
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
                            <a className="text-amber-500 hover:text-amber-800" href="#disclaimer">{ $.terms.navigation.discl }</a>
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
                            <a className="text-amber-500 hover:text-amber-800" href="#limitations">{ $.terms.navigation.limits }</a>
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
                            <a className="text-amber-500 hover:text-amber-800" href="#revisions">{ $.terms.navigation.revise }</a>
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
                            <a className="text-amber-500 hover:text-amber-800" href="#links">{ $.terms.navigation.third }</a>
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
                            <a className="text-amber-500 hover:text-amber-800" href="#modifications">{ $.terms.navigation.modify }</a>
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
                            <a className="text-amber-500 hover:text-amber-800" href="#privacy">{ $.terms.navigation.privacy }</a>
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
                            <a className="text-amber-500 hover:text-amber-800" href="#laws">{ $.terms.navigation.law }</a>
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
                      <p className="text-sm text-white/30 mb-1">{ $.terms.updated }</p>
                      <h2 className="mt-4 text-white font-bold text-3xl" id="terms">1. { $.terms.sections.terms.title }</h2>
                      <a className="mt-1 text-white/50 font-medium text-lg">
                        { $.terms.sections.terms.texts }
                      </a>

                      <h2 className="mt-10 text-white font-bold text-3xl" id="use_license">2. { $.terms.sections.license.title }</h2>

                      <a className="mt-1 text-white/50 font-medium text-lg">
                        { $.terms.sections.license.texts }
                      </a>

                      <ul className="mt-1 text-white/50 font-medium text-base ml-10 mb-5 list-disc">
                        <li>{ $.terms.sections.license.list.item_1 }</li>
                        <li>{ $.terms.sections.license.list.item_2 }</li>
                        <li>{ $.terms.sections.license.list.item_3 }</li>
                        <li>{ $.terms.sections.license.list.item_4 }</li>
                        <li>{ $.terms.sections.license.list.item_5 }</li>
                      </ul>

                      <h2 className="mt-10 text-white font-bold text-3xl" id="disclaimer">3. { $.terms.sections.disclaimer.title }</h2>

                      <a className="mt-1 text-white/50 font-medium text-lg">
                        { $.terms.sections.disclaimer.texts }
                      </a>

                      <h2 className="mt-10 text-white font-bold text-3xl" id="limitations">4. { $.terms.sections.limitations.title }</h2>

                      <a className="mt-1 text-white/50 font-medium text-lg">
                        { $.terms.sections.limitations.texts }
                      </a>


                      <h2 className="mt-10 text-white font-bold text-3xl" id="revisions">5. { $.terms.sections.revisions.title }</h2>

                      <a className="mt-1 text-white/50 font-medium text-lg">
                        { $.terms.sections.revisions.texts }
                      </a>

                      <h2 className="mt-10 text-white font-bold text-3xl" id="links">6. { $.terms.sections.links.title }</h2>

                      <a className="mt-1 text-white/50 font-medium text-lg">
                        { $.terms.sections.links.texts }
                      </a>

                      <h2 className="mt-10 text-white font-bold text-3xl" id="modifications">7. { $.terms.sections.modifications.title }</h2>

                      <a className="mt-1 text-white/50 font-medium text-lg">
                        { $.terms.sections.modifications.texts }
                      </a>

                      <h2 className="mt-10 text-white font-bold text-3xl" id="privacy">8. { $.terms.sections.privacy.title }</h2>

                      <a className="mt-1 text-white/50 font-medium text-lg">{ $.terms.sections.privacy.texts.base } <Link href="/legal/privacy"><span className="hover:text-blue-500 hover:underline transition-all duration-200 cursor-pointer">{ $.terms.sections.privacy.texts.link }</span></Link>.</a>

                      <h2 className="mt-10 text-white font-bold text-3xl" id="laws">9. { $.terms.sections.laws.title }</h2>

                      <a className="mt-1 text-white/50 font-medium text-lg">
                        { $.terms.sections.laws.texts }
                      </a>
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