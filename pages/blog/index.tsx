/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { getSortedPosts } from "@/root/lib/blog/posts";
import { MetaTags } from "@/root/components/Header/Meta";
import { BlogCard } from "@/root/components/Blog/Card";
import Header from "@/root/components/Static/Header";
import { NavItems } from "@/root/utils/navItems";
import { parseUser } from "@/root/utils/parseUser";
import { DiscordUser } from "@/root/utils/types";
import { InferGetStaticPropsType } from "next";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";

const Blog = ({
  allPostsData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const $ = require("../../lang/" + (router.locale || "en"));

  return (
    <>
      <SkeletonTheme
        baseColor="#172033"
        highlightColor="#1e293b"
      ></SkeletonTheme>
      <MetaTags
        title="Blog | Metro Reviews"
        description="Check out our blog to stay up-to date with everything metro."
        image="/img/logo.webp"
        name="Metro Reviews"
      />
      <Header $={$} NavItems={NavItems} props={null} allowLogin={false} />
      <div className="overflow-hidden relative bg-background flex mx-auto items-center justify-center">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:pb-28 lg:w-full lg:max-w-2xl xl:pb-32">
            <main className="px-4 mx-auto mt-10 w-full max-w-7xl sm:px-6 sm:mt-12 md:mt-16 lg:px-8 lg:mt-20 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl font-extrabold tracking-tight text-slate-300 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Metro</span>{" "}
                  <span className="block text-amber-500 xl:inline">Blog</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg sm:text-center md:mt-5 md:text-xl lg:mx-0">
                  Check out our latest updates, news and info.
                </p>
              </div>
            </main>
          </div>
        </div>
      </div>
      <div className="py-12" id="blogs">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mt-10">
            <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
              {allPostsData && allPostsData.length >= 1
                ? allPostsData.map(({ slug, date, title, excerpt, avatar }) => (
                    <BlogCard
                      key={uuidv4()}
                      slug={slug}
                      date={date}
                      title={title}
                      excerpt={excerpt}
                      avatar={avatar}
                    />
                  ))
                : [...Array(8)].map((e, i) => (
                    <div key={i} className="relative">
                      <dt>
                        <div className="flex absolute justify-center items-center text-white rounded-md">
                          <span className="w-12 h-12 rounded-[4px]">
                            <Skeleton
                              style={{
                                width: "48px",
                                height: "48px",
                                borderRadius: "4px",
                              }}
                            />
                          </span>
                        </div>
                        <p className="ml-16 text-lg font-medium leading-6 text-white">
                          <Skeleton width={100} />
                        </p>
                      </dt>
                      <dd className="mt-2 ml-16 text-base text-white">
                        <Skeleton count={2} />
                      </dd>
                    </div>
                  ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const allPostsData = getSortedPosts();
  return {
    props: {
      allPostsData,
    },
  };
}

export default Blog;
