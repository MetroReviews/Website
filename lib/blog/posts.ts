import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDir = path.join(process.cwd(), "/data/posts");

export const getSortedPosts = () => {
  const fileNames = fs.readdirSync(postDir);

  const allPostData = fileNames.map((filename) => {
    const slug = filename.replace(".mdx", "");

    const fullPath = path.join(postDir, filename);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    const formattedDate = new Date(data.date).toLocaleDateString("en-US");

    const frontMatter = {
      ...(data as {
        title: string;
        excerpt: string;
        avatar: string;
        coavatar: string;
        authorLink: string;
        coauthorLink: string;
        isCoAuthor: boolean;
      }),
      date: formattedDate,
    };

    return {
      slug,
      ...frontMatter,
    };
  });

  return allPostData.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return 1;
    } else {
      return -1;
    }
  });
};

export const getAllPostSlugs = () => {
  const fileNames = fs.readdirSync(postDir);

  return fileNames.map((filename) => {
    return {
      params: {
        slug: filename.replace(".mdx", ""),
      },
    };
  });
};

export const getPostData = async (slug: string) => {
  const fullPath = path.join(postDir, `${slug}.mdx`);
  const postContent = fs.readFileSync(fullPath, "utf8");

  return postContent;
};
