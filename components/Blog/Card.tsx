import Link from "next/link";

interface Props {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  avatar: string;
}

export const BlogCard = ({ slug, date, title, excerpt, avatar }: Props) => {
  return (
    <Link key={slug} href="/blog/[slug]" as={`/blog/${slug}`}>
      <a>
        <div className="relative bg-gradient-to-br from-neutral-900/80 to-neutral-900/20 p-3 rounded-lg w-auto h-auto border border-amber-800">
          <dt>
            <div className="flex absolute justify-center items-center text-white rounded-md border-2 border-amber-500">
              <img
                src={avatar}
                className="w-12 h-12 rounded-[4px]"
                draggable={false}
                alt={title}
              />
            </div>
            <p className="ml-16 text-lg font-medium leading-6 text-white">
              {title}
            </p>
          </dt>
          <dd className="mt-2 ml-16 text-base text-amber-500/80">
            {excerpt} - 📅 {date}
          </dd>
        </div>
      </a>
    </Link>
  );
};
