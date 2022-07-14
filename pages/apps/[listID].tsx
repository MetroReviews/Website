import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavItems } from "../../utils/navItems";
import { parseUser } from "../../utils/parseUser";
import { DiscordUser } from "../../utils/types";
import UserAvatar from "@/root/components/Interface/Avatar";
import { MetaTags } from "@/components/Header/Meta";
import { useRef, useState, useEffect } from "react";
import Header from "@/components/Static/Header";
import Footer from "@/components/Static/Footer";
import { useRouter } from "next/router";
import useSWR from "swr";

import { GetServerSideProps } from "next";
import UnAuthorized from "../401";
import { fetcher } from "@/root/utils/fetcher";
import { APIResponse } from "nextkit";
import toast from "react-hot-toast";
import Spinner from "@/root/components/Interface/Spinner";
import { config } from "@/root/utils/authConfig";

interface Props {
  user: DiscordUser;
}

export default function (props: Props) {
  const router = useRouter();
  const $ = require("../../lang/" + (router.locale || "en"));
  const { data: list, error } = useSWR(`app/${router.query.listID}`);
  const sudoUsers = ["563808552288780322", "510065483693817867"];

  if (!props?.user || !props?.user.id) return <UnAuthorized user={null} />;
  else if (props?.user && !sudoUsers.includes(props?.user.id))
    return <UnAuthorized user={null} />;

  return (
    <>
      <MetaTags
        title="New List | Metro Reviews"
        description="Apply to add your Bot List to Metro Reviews"
        image="/img/logo.webp"
        name="Metro Reviews"
      />
      <Header $={$} NavItems={NavItems} props={props} allowLogin={true} />
      <div className="overflow-hidden relative bg-background flex -mt-10 mx-auto items-center justify-center">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:pb-28 lg:w-full lg:max-w-2xl xl:pb-32">
            <main className="px-4 mx-auto mt-10 w-full max-w-7xl sm:px-6 sm:mt-12 md:mt-16 lg:px-8 lg:mt-20 xl:mt-28">
              <div className="text-center">
                <h1 className="inline text-4xl font-extrabold tracking-tight text-slate-300 sm:text-5xl md:text-6xl">
                  Submit a Bot List
                </h1>
                <p className="mt-3 text-base text-white sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  Thank you for your interest in Metro Reviews. You can submit
                  an application below.
                </p>
              </div>
            </main>
          </div>
        </div>
      </div>
      <div className="mb-20 mt-20 w-full h-max grid grid-cols-1 lg:grid-cols-12 lg:gap-x-4">
        <div className="h-auto w-full text-white lg:col-span-3 mb-5 lg:mb-0">
          <div className="h-auto top-20 transition-all duration-200 w-full bg-black bg-opacity-10 rounded-lg p-4 lg:sticky">
            <div className="bg-gradient-to-br from-neutral-900/90 to-neutral-900/50 rounded-lg h-max">
              <br />
              <p className="text-xl font-medium text-white text-center">
                <FontAwesomeIcon
                  size="lg"
                  icon={["fas", "plus"]}
                  className="text-amber-400 mr-2"
                />
                Bot List App
              </p>
              <p className="text-white text-sm text-opacity-50 mb-5 text-center">
                Things you may find useful
              </p>
              <hr />
              {!list ? (
                <Spinner />
              ) : (
                <div className="mt-6">
                  <p className="text-white text-lg">App Info</p>
                  <div className="items-center justify-center">
                    <div className="flex items-center shadow-xl">
                      <div className="mt-2 bg-amber-800 text-center px-4 py-2 rounded-l-lg text-white">
                        <p className="line-clamp-1">Owner:</p>
                      </div>
                      <div className="mt-2 bg-amber-600 w-full px-4 py-2 rounded-r-lg text-white">
                        <p className="line-clamp-1">{list?.listOwner}</p>
                      </div>
                    </div>
                    <div className="flex items-center shadow-xl">
                      <div className="mt-2 bg-amber-800 text-center px-4 py-2 rounded-l-lg text-white">
                        <p className="line-clamp-1">Name:</p>
                      </div>
                      <div className="mt-2 bg-amber-600 w-full px-4 py-2 rounded-r-lg text-white">
                        <p className="line-clamp-1">{list?.listName}</p>
                      </div>
                    </div>
                    <div className="flex items-center shadow-xl">
                      <div className="mt-2 bg-amber-800 text-center px-4 py-2 rounded-l-lg text-white">
                        <p className="line-clamp-1">ID:</p>
                      </div>
                      <div className="mt-2 bg-amber-600 w-full px-4 py-2 rounded-r-lg text-white">
                        <p className="line-clamp-1">{list?.listID}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="h-full w-full col-span-9">
          <div className="w-full text-white rounded-lg">
            <div className="mt-4">
              <div className="text-center w-full h-auto bg-gradient-to-br from-neutral-900/90 to-neutral-900/50 rounded-lg p-6 shadow-md mx-auto">
                {!list ? (
                  <Spinner />
                ) : (
                  <div className="px-4 mx-auto w-auto sm:px-6 lg:px-8 lg:text-center">
                    <form method="GET">
                      <div className="mt-8 col-span-9 pt-5 lg:pt-0 items-center justify-center mt-6">
                        <h2 className="text-white text-2xl text-left">
                          <FontAwesomeIcon
                            size="lg"
                            icon={["fas", "link"]}
                            className="text-white mr-2"
                          />{" "}
                          List Domain <span className="text-red-600">*</span>
                        </h2>
                        <p className="mt-4 text-white/50 text-sm text-left">
                          • Domain for your Bot List (Ex:
                          https://infinitybotlist?.com)
                        </p>
                        <textarea
                          name="listDom"
                          placeholder={list?.listDom}
                          value={list?.listDom}
                          className="w-full mx-auto mt-4 flex transition duration-200 hover:bg-opacity-50 bg-black bg-opacity-30 text-white focus:text-amber-400 rounded-xl border border-white/10 focus:border-amber-400 focus:outline-none py-4 px-6"
                          disabled={true}
                        />
                      </div>
                      <div className="mt-8 col-span-9 pt-5 lg:pt-0 items-center justify-center mt-6">
                        <h2 className="text-white text-2xl text-left">
                          <FontAwesomeIcon
                            size="lg"
                            icon={["fas", "image"]}
                            className="text-white mr-2"
                          />{" "}
                          List Logo <span className="text-red-600">*</span>
                        </h2>
                        <p className="mt-4 text-white/50 text-sm text-left">
                          • Link to a Logo for your Bot List
                        </p>
                        <textarea
                          name="listLogo"
                          placeholder={list?.listLogo}
                          value={list?.listLogo}
                          className="w-full mx-auto mt-4 flex transition duration-200 hover:bg-opacity-50 bg-black bg-opacity-30 text-white focus:text-amber-400 rounded-xl border border-white/10 focus:border-amber-400 focus:outline-none py-4 px-6"
                          disabled={true}
                        />
                      </div>
                      <div className="mt-8 col-span-9 pt-5 lg:pt-0 items-center justify-center mt-6">
                        <h2 className="text-white text-2xl text-left">
                          <FontAwesomeIcon
                            size="lg"
                            icon={["fas", "info-circle"]}
                            className="text-white mr-2"
                          />{" "}
                          List Description{" "}
                          <span className="text-red-600">*</span>
                        </h2>
                        <p className="mt-4 text-white/50 text-sm text-left">
                          • Description for your Bot List (Supports Markdown and
                          HTML)
                        </p>
                        <textarea
                          name="listDesc"
                          placeholder={list?.listDesc}
                          value={list?.listDesc}
                          className="w-full mx-auto mt-4 flex transition duration-200 hover:bg-opacity-50 bg-black bg-opacity-30 text-white focus:text-amber-400 rounded-xl border border-white/10 focus:border-amber-400 focus:outline-none py-4 px-6"
                          disabled={true}
                        />
                      </div>
                      <div className="mt-8 col-span-9 pt-5 lg:pt-0 items-center justify-center mt-6">
                        <h2 className="text-white text-2xl text-left">
                          <FontAwesomeIcon
                            size="lg"
                            icon={["fas", "fingerprint"]}
                            className="text-white mr-2"
                          />{" "}
                          List Owner ID <span className="text-red-600">*</span>
                        </h2>
                        <p className="mt-4 text-white/50 text-sm text-left">
                          • Discord User ID of the Bot List Owner
                        </p>
                        <textarea
                          name="listOwner"
                          placeholder={list?.listOwner}
                          value={list?.listOwner}
                          className="w-full mx-auto mt-4 flex transition duration-200 hover:bg-opacity-50 bg-black bg-opacity-30 text-white focus:text-amber-400 rounded-xl border border-white/10 focus:border-amber-400 focus:outline-none py-4 px-6"
                          disabled={true}
                        />
                      </div>
                      <div className="mt-8 col-span-9 pt-5 lg:pt-0 items-center justify-center mt-6">
                        <h2 className="text-white text-2xl text-left">
                          <FontAwesomeIcon
                            size="lg"
                            icon={["fas", "fingerprint"]}
                            className="text-white mr-2"
                          />{" "}
                          Does your bot list have a review system?{" "}
                          <span className="text-red-600">*</span>
                        </h2>
                        <p className="mt-4 text-white/50 text-sm text-left">
                          • Please explain with as much detail as possible.
                        </p>
                        <textarea
                          name="revSystem"
                          placeholder={list?.revSystem}
                          value={list?.revSystem}
                          className="w-full mx-auto mt-4 flex transition duration-200 hover:bg-opacity-50 bg-black bg-opacity-30 text-white focus:text-amber-400 rounded-xl border border-white/10 focus:border-amber-400 focus:outline-none py-4 px-6"
                          disabled={true}
                        />
                      </div>
                      <div className="mt-8 col-span-9 pt-5 lg:pt-0 items-center justify-center mt-6">
                        <h2 className="text-white text-2xl text-left">
                          <FontAwesomeIcon
                            size="lg"
                            icon={["fas", "id-badge"]}
                            className="text-white mr-2"
                          />{" "}
                          How old is your Bot List?{" "}
                          <span className="text-red-600">*</span>
                        </h2>
                        <p className="mt-4 text-white/50 text-sm text-left">
                          • Example: 12 Months old.
                        </p>
                        <textarea
                          name="listAge"
                          placeholder={list?.listAge}
                          value={list?.listAge}
                          className="w-full mx-auto mt-4 flex transition duration-200 hover:bg-opacity-50 bg-black bg-opacity-30 text-white focus:text-amber-400 rounded-xl border border-white/10 focus:border-amber-400 focus:outline-none py-4 px-6"
                          disabled={true}
                        />
                      </div>
                      <div className="mt-8 col-span-9 pt-5 lg:pt-0 items-center justify-center mt-6">
                        <h2 className="text-white text-2xl text-left">
                          <FontAwesomeIcon
                            size="lg"
                            icon={["fas", "code"]}
                            className="text-white mr-2"
                          />{" "}
                          What is your Bot List made with?{" "}
                          <span className="text-red-600">*</span>
                        </h2>
                        <p className="mt-4 text-white/50 text-sm text-left">
                          • Javascript, Typescript, Python etc
                        </p>
                        <textarea
                          name="listLang"
                          placeholder={list?.listLang}
                          value={list?.listLang}
                          className="w-full mx-auto mt-4 flex transition duration-200 hover:bg-opacity-50 bg-black bg-opacity-30 text-white focus:text-amber-400 rounded-xl border border-white/10 focus:border-amber-400 focus:outline-none py-4 px-6"
                          disabled={true}
                        />
                      </div>
                      <div className="mt-8 col-span-9 pt-5 lg:pt-0 items-center justify-center mt-6">
                        <h2 className="text-white text-2xl text-left">
                          <FontAwesomeIcon
                            size="lg"
                            icon={["fas", "download"]}
                            className="text-white mr-2"
                          />{" "}
                          Is your Bot List a Fork/Clone?{" "}
                          <span className="text-red-600">*</span>
                        </h2>
                        <p className="mt-4 text-white/50 text-sm text-left">
                          • If yes please tell us what list and what you have
                          changed!
                        </p>
                        <textarea
                          name="forkedList"
                          placeholder={list?.forkedList}
                          value={list?.forkedList}
                          className="w-full mx-auto mt-4 flex transition duration-200 hover:bg-opacity-50 bg-black bg-opacity-30 text-white focus:text-amber-400 rounded-xl border border-white/10 focus:border-amber-400 focus:outline-none py-4 px-6"
                          disabled={true}
                        />
                      </div>
                      <div className="mt-8 col-span-9 pt-5 lg:pt-0 items-center justify-center mt-6">
                        <h2 className="text-white text-2xl text-left">
                          <FontAwesomeIcon
                            size="lg"
                            icon={["fas", "code"]}
                            className="text-white mr-2"
                          />{" "}
                          Are you prepared to make changes to your code?{" "}
                          <span className="text-red-600">*</span>
                        </h2>
                        <p className="mt-4 text-white/50 text-sm text-left">
                          • Changes will need to be made to your bot list to
                          support our API!
                        </p>
                        <textarea
                          name="apiChanges"
                          placeholder={list?.apiChanges}
                          value={list?.apiChanges}
                          className="w-full mx-auto mt-4 flex transition duration-200 hover:bg-opacity-50 bg-black bg-opacity-30 text-white focus:text-amber-400 rounded-xl border border-white/10 focus:border-amber-400 focus:outline-none py-4 px-6"
                          disabled={true}
                        />
                      </div>
                      {/**<div className="flex pt-2 mx-auto left-0 mt-8">
                                            <button
									           type="submit"
									           className="inline-flex items-center py-2 px-8 space-x-2 text-lg bg-amber-600 hover:bg-amber-800 selection:rounded-md focus:outline-none focus:ring focus:ring-indigo-600"
								            >
                                                <span>Submit List</span>
								            </button>
                                         </div> */}
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async function (
  ctx
) {
  const user = parseUser(ctx);

  return { props: { user } };
};
