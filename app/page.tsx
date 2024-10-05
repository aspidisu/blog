import { BlogPosts } from "app/components/posts";
const LIMIT = 3; 

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">aspidisu</h1>
      <p className="mb-4">
        {`selamlar, burada yazılım, bilinçli teknoloji tüketimi, tarih, arkeoloji 
        başta olmak üzere pek çok konu hakkında yazıyorum. ayrıca internette gezinti 
        yaparken karşılaştığım faydalı içerikleri kaydedip paylaşıyorum. 
        sadelikten yanayım.`}
      </p>
      <div className="my-8">
        <BlogPosts limit={LIMIT} />
      </div>
    </section>
  );
}
1