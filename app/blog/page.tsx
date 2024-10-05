import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: "aspidisu'nun blogu.",
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Blog</h1>
      <BlogPosts />
    </section>
  )
}
