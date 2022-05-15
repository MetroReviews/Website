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
                    Terms of
                  </span>{" "}
                  <span className="block text-amber-500 xl:inline">
                    Service
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  Its boring but you should probably read this.
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
                    <Link className="mt-4 mb-4" href={"/"}>
                    <a
                      target="_blank"
                      onClick={() => setEnterLoading(true)}
                      ref={mainButton}
                      className={
                        "flex items-center px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white " +
                        ("w-auto")
                      }
                    > Go Home</a>
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
                            <a className="text-amber-500 hover:text-amber-800" href="#terms">Terms</a>
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
                            <a className="text-amber-500 hover:text-amber-800" href="#use_license">Use License</a>
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
                            <a className="text-amber-500 hover:text-amber-800" href="#disclaimer">Disclaimer</a>
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
                            <a className="text-amber-500 hover:text-amber-800" href="#limitations">Limitations</a>
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
                            <a className="text-amber-500 hover:text-amber-800" href="#revisions">Revisions and Errata</a>
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
                            <a className="text-amber-500 hover:text-amber-800" href="#links">Third-Party Links</a>
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
                            <a className="text-amber-500 hover:text-amber-800" href="#modifications">Site Modifications</a>
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
                            <a className="text-amber-500 hover:text-amber-800" href="#privacy">Your Privacy</a>
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
                            <a className="text-amber-500 hover:text-amber-800" href="#laws">Governing Law</a>
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
                      <p className="text-sm text-white/30 mb-1">Last Update: 05/13/2022</p>
                      <h2 className="mt-4 text-white font-bold text-3xl" id="terms">1. Terms</h2>
                      <a className="mt-1 text-white/50 font-medium text-lg">
                        By accessing this Website, accessible from https://metrobots.xyz, you are
                        agreeing to be bound by these Website Terms and Conditions of Use and
                        agree that you are responsible for the agreement with any applicable
                        local laws. If you disagree with any of these terms, you are prohibited
                        from accessing this site. The materials contained in this Website are
                        protected by copyright and trade mark law.
                      </a>

                      <h2 className="mt-10 text-white font-bold text-3xl" id="use_license">2. Use License</h2>

                      <a className="mt-1 text-white/50 font-medium text-lg">
                        Permission is granted to temporarily download one copy of the materials
                        on Metro Review's Website for personal, non-commercial transitory viewing
                        only. This is the grant of a license, not a transfer of title, and under
                        this license you may not:
                      </a>

                      <ul className="mt-1 text-white/50 font-medium text-base ml-10 mb-5 list-disc">
                        <li>modify or copy the materials;</li>
                        <li>use the materials for any commercial purpose or for any public display;</li>
                        <li>attempt to reverse engineer any software contained on Metro Review's Website or API;</li>
                        <li>remove any copyright or other proprietary notations from the materials; or</li>
                        <li>transferring the materials to another person or "mirror" the materials on any other server.</li>
                      </ul>

                      <h2 className="mt-10 text-white font-bold text-3xl" id="disclaimer">3. Disclaimer</h2>

                      <a className="mt-1 text-white/50 font-medium text-lg">
                        All the materials on Metro Review’s Website are provided "as is". Metro Review makes
                        no warranties, may it be expressed or implied, therefore negates all
                        other warranties. Furthermore, Metro Review does not make any representations
                        concerning the accuracy or reliability of the use of the materials on
                        its Website or otherwise relating to such materials or any sites linked
                        to this Website.
                      </a>

                      <h2 className="mt-10 text-white font-bold text-3xl" id="limitations">4. Limitations</h2>

                      <a className="mt-1 text-white/50 font-medium text-lg">
                        Metro Review or its suppliers will not be hold accountable for any damages
                        that will arise with the use or inability to use the materials on
                        Metro Review’s Website, even if Metro Review or an authorize representative of this
                        Website has been notified, orally or written, of the possibility of such
                        damage. Some jurisdiction does not allow limitations on implied
                        warranties or limitations of liability for incidental damages, these
                        limitations may not apply to you. 
                      </a>


                      <h2 className="mt-10 text-white font-bold text-3xl" id="revisions">5. Revisions and Errata</h2>

                      <a className="mt-1 text-white/50 font-medium text-lg">
                        The materials appearing on Metro Review’s Website may include technical,
                        typographical, or photographic errors. Metro Review will not promise that any
                        of the materials in this Website are accurate, complete, or current.
                        Metro Review may change the materials contained on its Website at any time
                        without notice. Metro Review does not make any commitment to update the
                        materials.
                      </a>

                      <h2 className="mt-10 text-white font-bold text-3xl" id="links">6. Links</h2>

                      <a className="mt-1 text-white/50 font-medium text-lg">
                        Metro Review has not reviewed all of the sites linked to its Website and is
                        not responsible for the contents of any such linked site. The presence
                        of any link does not imply endorsement by Metro Review of the site. The use of
                        any linked website is at the user’s own risk.
                      </a>

                      <h2 className="mt-10 text-white font-bold text-3xl" id="modifications">7. Site Modifications</h2>

                      <a className="mt-1 text-white/50 font-medium text-lg">
                        Metro Review may revise these Terms of Use for its Website at any time without
                        prior notice. By using this Website, you are agreeing to be bound by the
                        current version of these Terms and Conditions of Use.
                      </a>

                      <h2 className="mt-10 text-white font-bold text-3xl" id="privacy">8. Your Privacy</h2>

                      <a className="mt-1 text-white/50 font-medium text-lg">Please read our <Link href="/legal/privacy"><span className="hover:text-blue-500 hover:underline transition-all duration-200 cursor-pointer">Privacy Policy</span></Link>.</a>

                      <h2 className="mt-10 text-white font-bold text-3xl" id="laws">9. Governing Law</h2>

                      <a className="mt-1 text-white/50 font-medium text-lg">
                        Any claim related to Metro Review's Website shall be governed by the laws of
                        Canada without regards to its conflict of law provisions.
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