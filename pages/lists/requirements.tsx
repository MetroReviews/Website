import Link from 'next/link';
import { useEffect, useRef, useState } from "react";

export default function Requirements({ $ }) {
    const [enterLoading, setEnterLoading] = useState(false);
    const mainButton = useRef(null);

  const titleClasses = "mt-4 text-white font-bold text-3xl";
  const textClasses = "mt-1 text-white/50 font-medium text-lg";
  const listClasses = "mt-1 text-white/50 font-medium text-base ml-10 mb-5 list-disc";
  return (
      <>
    <div className="overflow-hidden relative bg-background">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:pb-28 lg:w-full lg:max-w-2xl xl:pb-32">
            <main className="px-4 mx-auto mt-10 w-full max-w-7xl sm:px-6 sm:mt-12 md:mt-16 lg:px-8 lg:mt-20 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl font-extrabold tracking-tight text-slate-300 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">
                    List
                  </span>{" "}
                  <span className="block text-amber-500 xl:inline">
                    Requirements
                  </span>
                </h1>
                <p className="mt-3 text-base text-white sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  List of requirements that all Bot List are expected to meet!
                </p>
                <div className="animateHeader mt-10 flex flex-wrap items-center justify-center gap-x-4">
                    <Link href={"https://github.com/MetroReviews/support"}>
                        <a
                          onClick={() => setEnterLoading(true)}
                          ref={mainButton}
                          className={
                            "flex items-center px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white " +
                            ("w-auto")
                          }
                        > Get Support</a>
                    </Link>
                    <Link href={"https://github.com/MetroReviews/support"}>
                    <a
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
        <div className="lg:absolute lg:inset-y-0 lg:right-[-150px] lg:w-1/2">
          <img
            className="hidden object-cover w-full h-auto sm:hidden md:hidden lg:flex lg:w-[40rem] lg:h-[39rem]"
            src="/terms.svg"
            alt="Image"
            draggable={false}
          />
        </div>
      </div>
      <div className="max-w-7xl text-center h-auto my-14 lg:my-56 bg-gradient-to-br from-neutral-900/90 to-neutral-900/50 rounded-lg p-6 shadow-md mx-auto" id="widgets">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:text-center">
          <div>
            <h2 className="text-4xl font-semibold tracking-wide text-white">
              <span className="text-3xl font-bold tracking-wide text-amber-500">1.</span> New Lists
            </h2>
            <p className="mt-2 text-lg font-extrabold tracking-tight leading-8 text-gray-300">
              All Bot Lists are expected to be at least 30 days old.
            </p>
          </div>
          <hr className="mx-4 my-4" />
          <div className="mt-10">
            <h2 className="text-4xl font-semibold tracking-wide text-white">
              <span className="text-3xl font-bold tracking-wide text-amber-500">2.</span> Top Level Domains
            </h2>
            <p className="mt-2 text-lg font-extrabold tracking-tight leading-8 text-gray-300">
              Bot lists should have a Good Quality and Respectable <a href="https://en.m.wikipedia.org/wiki/List_of_Internet_top-level_domains" className="text-blue-500 hover:text-blue-700">TLD</a>
              <br />
              <div className="text-sm inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-amber-500 text-white rounded-full">
                NOTE:
              </div>
              {" "}In most cases we will not accept Bot Lists who do not use a Top Level Domain
            </p>
            <br />
            <p className="mt-2 text-2xl font-extrabold tracking-tight leading-8 text-gray-300">
              Acceptable TLD's
               <br />
               <div className="text-sm inline-flex items-center font-bold leading-sm uppercase px-3 py-1 mx-auto my-auto bg-amber-500 text-white rounded-full">
                 .xyz
              </div>
              <div className="text-sm inline-flex items-center font-bold leading-sm uppercase px-3 py-1 mx-auto my-auto bg-amber-500 text-white rounded-full">
                 .com
              </div>
              <div className="text-sm inline-flex items-center font-bold leading-sm uppercase px-3 py-1 mx-auto my-auto bg-amber-500 text-white rounded-full">
                 .net
              </div>
              <div className="text-sm inline-flex items-center font-bold leading-sm uppercase px-3 py-1 mx-auto my-auto bg-amber-500 text-white rounded-full">
                 .org
              </div>
            </p>
          </div>
          <hr className="mx-4 my-4" />
          <div className="mt-10">
            <h2 className="text-4xl font-semibold tracking-wide text-white">
              <span className="text-3xl font-bold tracking-wide text-amber-500">3.</span> Forked/Cloned Lists
            </h2>
            <p className="mt-2 text-lg font-extrabold tracking-tight leading-8 text-gray-300">
              Any Bot Lists based on other bot lists should follow these additional requirements:
            </p>
            <ol className="mt-4 max-w-2xl text-lg text-white lg:mx-auto">
                <li className="text-gray-500">1. Give Credits to the Original Author of the Code (in the Footer preferably)</li>
                <li className="text-gray-500">2. Provide a Hyperlink to the Original Code and/or it's Open-Source License</li>
            </ol>
          </div>
          <hr className="mx-4 my-4" />
          <div className="mt-10">
            <h2 className="text-4xl font-semibold tracking-wide text-white">
              <span className="text-3xl font-bold tracking-wide text-amber-500">4.</span> Cross List Support
            </h2>
            <p className="mt-2 text-lg font-extrabold tracking-tight leading-8 text-gray-300 items-center justify-center">
              All lists should respect our <code className="text-amber-500">cross_add</code> support under the following requirements:
            </p>
            <ol className="mt-4 max-w-2xl text-lg text-white lg:mx-auto">
                <li className="text-gray-500">1. Provide your users with a clear and obvious notice that your bot list supports Cross Adding Bots to other bot lists</li>
                <li className="text-gray-500">2. Provide a check box or some sort of option that allows users to decide if their bot should be Cross Added or not.</li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}