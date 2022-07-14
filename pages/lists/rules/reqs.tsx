import Link from "next/link";
import { useRef, useState } from "react";
import { MetaTags } from "@/root/components/Header/Meta";
import { useRouter } from "next/router";
import Header from "@/root/components/Static/Header";
import { NavItems } from "@/root/utils/navItems";
import { parseUser } from "@/root/utils/parseUser";
import { DiscordUser } from "@/root/utils/types";
import { GetServerSideProps } from "next";

interface Props {
  user: DiscordUser;
}

export default function Requirements(props: Props) {
  const router = useRouter();
  const $ = require("@/root/lang/" + (router.locale || "en"));
  const [enterLoading, setEnterLoading] = useState(false);
  const mainButton = useRef(null);

  return (
    <>
      <MetaTags
        title="Requirements | Metro Reviews"
        description="List of requirements that all Bot List are expected to meet!"
        image="/img/logo.webp"
        name="Metro Reviews"
      />
      <Header $={$} NavItems={NavItems} props={props} allowLogin={true} />
      <div className="overflow-hidden relative bg-background flex mx-auto items-center justify-center">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:pb-28 lg:w-full lg:max-w-2xl xl:pb-32">
            <main className="px-4 mx-auto mt-10 w-full max-w-7xl sm:px-6 sm:mt-12 md:mt-16 lg:px-8 lg:mt-20 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl font-extrabold tracking-tight text-slate-300 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">{$.guidelines.title1}</span>{" "}
                  <span className="block text-amber-500 xl:inline">
                    {$.guidelines.title2}
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  {$.guidelines.description}
                </p>
                <div className="animateHeader mt-10 mb-10 flex flex-wrap items-center justify-center gap-x-4">
                  <Link
                    className="mt-4 mb-4"
                    href={"https://github.com/MetroReviews/support"}
                  >
                    <a
                      target="_blank"
                      onClick={() => setEnterLoading(true)}
                      ref={mainButton}
                      className={
                        "flex items-center px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white " +
                        "w-auto"
                      }
                    >
                      {" "}
                      {$.guidelines.buttons.support}
                    </a>
                  </Link>
                  <Link className="mt-4 mb-4" href={"/lists/rules/eq"}>
                    <a
                      target="_blank"
                      onClick={() => setEnterLoading(true)}
                      ref={mainButton}
                      className={
                        "flex items-center px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white " +
                        "w-auto"
                      }
                    >
                      {" "}
                      {$.guidelines.buttons.eq}
                    </a>
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
                  {$.guidelines.navigation.title}
                </p>
                <p className="text-white text-sm text-opacity-50 mb-5 text-center">
                  {$.guidelines.navigation.desc}
                </p>
                <hr />
                <div className="mt-5">
                  <div className="items-center justify-center">
                    <div className="flex items-center shadow-xl">
                      <div className="mt-2 w-full px-4 py-2 rounded-r-lg text-white">
                        <p className="line-clamp-1">
                          <ol className="mt-1 text-white/50 font-medium text-base ml-10 mb-5 list-disc">
                            <li>
                              <a
                                className="text-amber-500 hover:text-amber-800"
                                href="#new_lists"
                              >
                                {$.guidelines.navigation.new}
                              </a>
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
                              <a
                                className="text-amber-500 hover:text-amber-800"
                                href="#domain_reqs"
                              >
                                {$.guidelines.navigation.tld}
                              </a>
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
                              <a
                                className="text-amber-500 hover:text-amber-800"
                                href="#free_domains"
                              >
                                {$.guidelines.navigation.free}
                              </a>
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
                              <a
                                className="text-amber-500 hover:text-amber-800"
                                href="#forked_lists"
                              >
                                {$.guidelines.navigation.fork}
                              </a>
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
                              <a
                                className="text-amber-500 hover:text-amber-800"
                                href="#cross_add"
                              >
                                {$.guidelines.navigation.cross}
                              </a>
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
                <div
                  className="text-left w-auto h-auto bg-gradient-to-br from-neutral-900/90 to-neutral-900/50 rounded-lg p-6 shadow-md mx-auto"
                  id="widgets"
                >
                  <div className="px-4 mx-auto w-auto sm:px-6 lg:px-8">
                    <div className="col-span-9 pt-5 lg:pt-0 w-auto">
                      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:text-center"></div>
                      <p className="text-sm text-white/30 mb-1">
                        {$.guidelines.updated}
                      </p>

                      <h2 className="mt-10 text-white font-bold text-3xl">
                        <span className="text-amber-500" id="new_lists">
                          1.
                        </span>{" "}
                        {$.guidelines.sections.new.title}
                      </h2>

                      <p className="mt-1 text-white/50 font-medium text-lg">
                        {$.guidelines.sections.new.desc}
                      </p>

                      <h2 className="mt-10 text-white font-bold text-3xl">
                        <span className="text-amber-500" id="domain_reqs">
                          2.
                        </span>{" "}
                        {$.guidelines.sections.tld.title}
                      </h2>

                      <p className="mt-1 text-white/50 font-medium text-lg">
                        {$.guidelines.sections.tld.desc.text}{" "}
                        <Link href="https://en.m.wikipedia.org/wiki/List_of_Internet_top-level_domains">
                          <span className="text-blue-500 hover:text-blue-800 hover:underline transition-all duration-200 cursor-pointer">
                            {$.guidelines.sections.tld.desc.link}
                          </span>
                        </Link>
                      </p>

                      <p className="mt-4 text-white/50 font-medium text-lg">
                        {$.guidelines.sections.tld.list.title}
                      </p>

                      <ul className="mt-1 text-amber-500/50 font-medium text-base ml-10 mb-5 list-disc">
                        <li>{$.guidelines.sections.tld.list.items.item1}</li>
                        <li>{$.guidelines.sections.tld.list.items.item2}</li>
                        <li>{$.guidelines.sections.tld.list.items.item3}</li>
                        <li>{$.guidelines.sections.tld.list.items.item4}</li>
                        <li>{$.guidelines.sections.tld.list.items.item5}</li>
                      </ul>

                      <h2 className="mt-10 text-white font-bold text-3xl">
                        <span className="text-amber-500" id="free_domains">
                          3.
                        </span>{" "}
                        {$.guidelines.sections.free.title}
                      </h2>

                      <p className="mt-1 text-white/50 font-medium text-lg">
                        {$.guidelines.sections.free.desc}
                      </p>

                      <ul className="mt-1 text-amber-500/50 font-medium text-base ml-10 mb-5 list-disc">
                        <li>{$.guidelines.sections.free.list.items.item1}</li>
                        <li>{$.guidelines.sections.free.list.items.item2}</li>
                        <li>{$.guidelines.sections.free.list.items.item3}</li>
                        <li>{$.guidelines.sections.free.list.items.item4}</li>
                      </ul>

                      <h2 className="mt-10 text-white font-bold text-3xl">
                        <span className="text-amber-500" id="forked_lists">
                          4.
                        </span>{" "}
                        {$.guidelines.sections.fork.title}
                      </h2>

                      <p className="mt-1 text-white/50 font-medium text-lg">
                        {$.guidelines.sections.fork.desc}
                      </p>

                      <ul className="mt-1 text-amber-500/50 font-medium text-base ml-10 mb-5 list-disc">
                        <li>{$.guidelines.sections.fork.list.items.item1}</li>
                        <li>{$.guidelines.sections.fork.list.items.item2}</li>
                      </ul>

                      <h2 className="mt-10 text-white font-bold text-3xl">
                        <span className="text-amber-500" id="cross_add">
                          5.
                        </span>{" "}
                        {$.guidelines.sections.cross.title}
                      </h2>

                      <p className="mt-1 text-white/50 font-medium text-lg">
                        {$.guidelines.sections.cross.desc.text1}
                        <span className="text-amber-500">
                          {" "}
                          {$.guidelines.sections.cross.desc.text2}
                        </span>{" "}
                        {$.guidelines.sections.cross.desc.text3}
                      </p>

                      <ul className="mt-1 text-amber-500/50 font-medium text-base ml-10 mb-5 list-disc">
                        <li>{$.guidelines.sections.cross.list.items.item1}</li>
                        <li>{$.guidelines.sections.cross.list.items.item2}</li>
                      </ul>
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

export const getServerSideProps: GetServerSideProps<Props> = async function (
  ctx
) {
  const user = parseUser(ctx);

  return { props: { user } };
};
