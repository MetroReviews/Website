import Link from "next/link";
import locales from "../../locales.config.js";
import { useEffect, useState, Fragment, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import Tippy from '@tippyjs/react';
import axios from 'axios';
import { setCookies } from "cookies-next";

const Footer = ({ $ }) => {

    return (
      <>

      <br /><br /><br /><br /><br /><br /><br /><br /><br />

        <footer className="bg-gradient-to-br from-amber-900/90 to-transparent max-w-full" aria-labelledby="footer-heading">
          <h2 id="footer-heading" className="sr-only">
            Footer
          </h2>
          <div className="py-12 px-4 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
              <div className="space-y-8 xl:col-span-1">
                <span>
                <div className="flex items-center space-x-5">
                  <img
                    src="/img/logo.webp"
                    className="w-24 h-24 transform:rotate(360deg)"
                    draggable={false}
                    alt="Metro Logo"
                  />
                  <p className="font-semibold text-3xl text-white"><span className="text-amber-400">Metro</span> Reviews</p>
                </div>
                <p className="text-white text-opacity-50 mt-3 text-sm">
                  {$.footer.description}
                </p>
                  <Menu as="div" className="relative mt-3 inline-block text-left">
                    <div>
                      <Menu.Button className="flex z-1 items-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                          <img
                            src={`https://flagcdn.com/w80/${$.overview.country}.png`}
                            width="24"
                            height="18"
                            className="mr-2 h-4 rounded-sm"
                          />
                          {$.overview.name}
                          <ChevronDownIcon
                            className="w-5 h-5 ml-2 -mr-1 transform rotate-180 text-violet-200 hover:text-violet-100"
                            aria-hidden="true"
                          />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                    <Menu.Items className={`z-1 custom-scroll overflow-auto absolute mt-1 left-0 w-48 mb-2 origin-top-left bg-black bg-opacity-90 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}>
                      <div className="flex flex-col px-1 py-1 space-y-1">
                        {Object.keys(locales).map((locale, index) => (
                      <Menu.Item key={index}>
                        {({ active }) => (
                      <Link href="/" locale={locale}>
                          <button
                             className={`${locale === $.overview.country ? 'bg-amber-700 bg-opacity-5' : 'hover:bg-white hover:bg-opacity-5'} text-white transition-all duration-150 group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                           >
                            <img
                              src={`https://flagcdn.com/w80/${locales[locale].country}.png`}
                              width="24"
                              height="18"
                              className="mr-2 h-4 rounded-sm"
                            />
                            {locales[locale].name}
                           </button>
                      </Link>
                      )}
                    </Menu.Item>
                      ))}

                      </div>
                    </Menu.Items>
                    </Transition>
                  </Menu>
                </span>
              </div>
              <div className="grid grid-cols-3 gap-8 mt-12 xl:col-span-2 xl:mt-0">
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-sm font-semibold tracking-wider text-slate-300 uppercase">
                      ℹ️ { $.footer.menus.info.title }
                    </h3>
                    <ul className="mt-4 space-y-4">
                      <li>
                        <Link href={"/team"}>
                          <a className="text-white hover:text-amber-500">
                            <FontAwesomeIcon
                              icon={["fas", "users"]}
                              className="mr-2"
                            />
                            { $.footer.menus.info.items.team}
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href={"/lists"}>
                          <a className="text-white hover:text-amber-500">
                            <FontAwesomeIcon
                              icon={["fas", "list"]}
                              className="mr-2"
                            />
                            { $.footer.menus.info.items.lists }
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href={"/bots"}>
                          <a className="text-white hover:text-amber-500">
                            <FontAwesomeIcon
                              icon={["fas", "robot"]}
                              className="mr-2"
                            />
                            { $.footer.menus.info.items.bots }
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-12 md:mt-0">
                    <h3 className="text-sm font-semibold tracking-wider text-slate-300 uppercase">
                     📫 { $.footer.menus.support.title }
                    </h3>
                    <ul className="mt-4 space-y-4">
                      <li>
                        <Link href={"https://github.com/MetroReviews/Website"}>
                          <a className="text-white hover:text-amber-500">
                            <FontAwesomeIcon
                              icon={["fab", "github"]}
                              className="mr-2"
                            />
                            { $.footer.menus.support.items.github }
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href={"/github"}>
                          <a className="text-white hover:text-amber-500">
                            <FontAwesomeIcon
                              icon={["fas", "bug"]}
                              className="mr-2"
                            />
                            { $.footer.menus.support.items.issues }
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href={"https://twitter.com/Metro_Reviews"}>
                          <a className="text-white hover:text-amber-500">
                            <FontAwesomeIcon
                              icon={["fab", "twitter"]}
                              className="mr-2"
                            />
                            { $.footer.menus.support.items.twitter }
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-sm font-semibold tracking-wider text-slate-300 uppercase">
                     ⚖️ { $.footer.menus.legal.title }
                    </h3>
                    <ul className="mt-4 space-y-4">
                      <li>
                        <Link href={"/legal/terms"}>
                          <a className="text-white hover:text-amber-500">
                            <FontAwesomeIcon
                              icon={["fas", "gavel"]}
                              className="mr-2"
                            />
                            { $.footer.menus.legal.items.terms }
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href={"/legal/privacy"}>
                          <a className="text-white hover:text-amber-500">
                            <FontAwesomeIcon
                              icon={["fas", "gavel"]}
                              className="mr-2"
                            />
                            { $.footer.menus.legal.items.privacy }
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href={"/legal/cookies"}>
                          <a className="text-white hover:text-amber-500">
                            <FontAwesomeIcon
                              icon={["fas", "cookie"]}
                              className="mr-2"
                            />
                            { $.footer.menus.legal.items.cookies }
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-12 md:mt-0">
                    <h3 className="text-sm font-semibold tracking-wider text-slate-300 uppercase">
                      🧠 { $.footer.menus.misc.title }
                    </h3>
                    <ul className="mt-4 space-y-4">
                      <li>
                        <Link href={"/lists/rules/reqs"}>
                          <a className="text-white hover:text-amber-500">
                            { $.footer.menus.misc.items.reqs}
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href={"/lists/rules/eq"}>
                          <a className="text-white hover:text-amber-500">
                            { $.footer.menus.misc.items.eq}                            
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href={"https://enroll.metrobots.xyz"}>
                          <a className="text-white hover:text-amber-500">
                            { $.footer.menus.misc.items.apps}                            
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-8 mt-12 border-t border-slate-850">
              <p className="mt-4 font-semibold text-center text-white">
                {$.footer.footerCredits}
              </p>
            </div>
          </div>
        </footer>
      </>
    );
  };

export default Footer
  