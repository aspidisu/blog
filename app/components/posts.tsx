import Link from "next/link";
import { formatDate, getBlogPosts } from "app/blog/utils";

interface BlogPost {
  slug: string;
  metadata: {
    title: string;
    publishedAt: string;
  };
}

interface BlogPostsProps {
  limit?: number;
}

export function BlogPosts({ limit }: BlogPostsProps) {
  const allBlogs: BlogPost[] = getBlogPosts();

  const sortedBlogs = allBlogs.sort((a, b) => {
    return (
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
    );
  });

  const displayedBlogs = limit ? sortedBlogs.slice(0, limit) : sortedBlogs;

  return (
    <div>
      {displayedBlogs.map((post) => (
        <Link
          key={post.slug}
          className="flex flex-col space-y-1 mb-4"
          href={`/blog/${post.slug}`}
        >
          <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
            <p className="text-neutral-600 dark:text-neutral-400 w-[125px] tabular-nums">
              {formatDate(post.metadata.publishedAt, false)}
            </p>
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
              {post.metadata.title}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
