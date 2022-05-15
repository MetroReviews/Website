import Link from "next/link";
import locales from "../../locales.config.js";
import { useEffect, useState, Fragment, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import Tippy from '@tippyjs/react';
import axios from 'axios';

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
                        <Link href={"/faqs"}>
                          <a className="text-white hover:text-amber-500">
                            <FontAwesomeIcon
                              icon={["fas", "info-circle"]}
                              className="mr-2"
                            />
                            { $.footer.menus.info.items.faqs }
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
  