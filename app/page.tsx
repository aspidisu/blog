import { BlogPosts } from "app/components/posts";

const LIMIT = 3;

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Aspidisu</h1>
      <p className="mb-4">
        {`Selamlar, burada yazılım, bilinçli teknoloji tüketimi, tarih, arkeoloji 
        başta olmak üzere pek çok konu hakkında yazıyorum. Ayrıca internette gezinti 
        yaparken karşılaştığım faydalı içerikleri kaydedip paylaşıyorum. 
        Sadelikten yanayım.`}
      </p>
      <div className="my-8">
        <BlogPosts limit={LIMIT} />
      </div>
    </section>
  );
}
