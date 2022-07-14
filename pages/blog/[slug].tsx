/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState } from "react";
import { getAllPostSlugs, getPostData } from "@/root/lib/blog/posts";
import { mdxComponents } from "@/root/components/Blog/MDXComp";
import { MetaTags } from "@/root/components/Header/Meta";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Header from "@/root/components/Static/Header";
import { useRouter } from "next/router";
import { NavItems } from "@/root/utils/navItems";
import { ParsedUrlQuery } from "querystring";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import readingTime from "reading-time";
import rehypePrism from "@mapbox/rehype-prism";
import matter from "gray-matter";
import Image from "next/image";

export default function Posts({
  source,
  frontMatter,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  const $ = require("../../lang/" + (router.locale || "en"));

  return (
    <>
      <MetaTags
        title={frontMatter.title + " | Metro Blog"}
        description={frontMatter.excerpt}
        image="/img/logo.webp"
        name={"Posted By: " + frontMatter.author}
      />
      <Header $={$} NavItems={NavItems} props={null} allowLogin={false} />
      <div className="overflow-hidden relative bg-background flex mx-auto items-center justify-center">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:pb-28 lg:w-full lg:max-w-2xl xl:pb-32">
            <main className="px-4 mx-auto mt-10 w-full max-w-7xl sm:px-6 sm:mt-12 md:mt-16 lg:px-8 lg:mt-20 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl font-extrabold tracking-tight text-slate-300 sm:text-5xl md:text-6xl">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-indigo-600">
                    {frontMatter.title}
                  </span>{" "}
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg sm:text-center md:mt-5 md:text-xl lg:mx-0">
                  {frontMatter.excerpt}
                </p>
              </div>
            </main>
          </div>
        </div>
      </div>
      <div className="container p-4 mx-auto mt-20 max-w-6xl">
        <div className="items-center lg:flex">
          <div className="w-full text-center lg:w-2/3 lg:text-left">
            <div className="mx-auto mt-10 text-lg text-slate-400 sm:w-full md:w-4/5 lg:w-full font-regular">
              {frontMatter.isCoAuthor === true ? (
                <div className="flex overflow-hidden items-center mt-6 -space-x-2">
                  <Image
                    className="inline-block w-8 h-8 rounded-full ring-2 ring-amber-700"
                    src={frontMatter.avatar}
                    alt="Author profile picture"
                    width={24}
                    height={24}
                    draggable={false}
                  />
                  <Image
                    className="inline-block w-8 h-8 rounded-full ring-2 ring-amber-700"
                    src={frontMatter.coavatar}
                    alt="Co-author profile picture"
                    width={24}
                    height={24}
                    draggable={false}
                  />
                  <p className="ml-2 font-semibold">
                    <a
                      className="ml-4 text-transparent bg-clip-text bg-gradient-to-l from-indigo-300 to-indigo-600 focus:outline-none transition duration-300 ease-in-out"
                      href={frontMatter.authorLink}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {frontMatter.author}
                    </a>{" "}
                    &{" "}
                    <a
                      className="text-transparent bg-clip-text bg-gradient-to-l from-indigo-300 to-indigo-600 focus:outline-none transition duration-300 ease-in-out"
                      href={frontMatter.coauthorLink}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {frontMatter.coauthor}
                    </a>{" "}
                    • 📆 Published on {frontMatter.date} • 🍿{" "}
                    {frontMatter.readingTime.text}
                  </p>
                </div>
              ) : (
                <div className="flex flex-row items-center mt-6">
                  <Image
                    className="rounded-full"
                    src={frontMatter.avatar}
                    alt="ven profile picture"
                    width={24}
                    height={24}
                    draggable={false}
                  />
                  <p className="ml-2 font-semibold">
                    <a
                      className="text-transparent bg-clip-text bg-gradient-to-l from-indigo-300 to-indigo-600 focus:outline-none transition duration-300 ease-in-out"
                      href="/twitter"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {frontMatter.author}
                    </a>{" "}
                    • 📆 Published on {frontMatter.date} • 🍿{" "}
                    {frontMatter.readingTime.text}
                  </p>
                </div>
              )}
              <article className="mt-12 w-full max-w-none text-slate-400 prose prose-lg">
                <MDXRemote {...source} components={mdxComponents} />
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostSlugs();
  return {
    paths,
    fallback: false,
  };
}

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params as Params;
  const postContent = await getPostData(params.slug);
  const { data, content } = matter(postContent);
  const mdxSource = await serialize(content, {
    scope: data,
    mdxOptions: {
      remarkPlugins: [
        // @ts-ignore
        import("remark-slug"),
        // @ts-ignore
        import("remark-autolink-headings"),
        // @ts-ignore
        import("remark-code-titles"),
      ],
      rehypePlugins: [rehypePrism],
    },
  });
  return {
    props: {
      source: mdxSource,
      frontMatter: { readingTime: readingTime(content), ...data },
    },
  };
};
