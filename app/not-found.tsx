import Link from "next/link";

export default function NotFound() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        404 - Sayfa Bulunamadı
      </h1>
      <p className="mb-4">
        <span className="text-xl font-semibold">Oops!</span> Kapıyı açtık ama
        içeride hiç kimse yok! 404 Not Found, yani bu sayfa başka bir{" "}
        <a
          target="_blank"
          className="underline text-gray-300 font-semibold hover:text-gray-400 transition-all duration-300"
          href="https://evrenatlasi.com/andromeda-galaksisi/"
        >
          galaksiye
        </a>{" "}
        seyahate çıkmış olabilir. Belki de tatilde, belki de{" "}
        <a
          target="_blank"
          className="underline text-gray-300 font-semibold hover:text-gray-400 transition-all duration-300"
          href="https://www.youtube.com/watch?v=ld3HRKQCv4c"
        >
          kayboldum
        </a>{" "}
        şarkısına eşlik ediyordur! Neyse ki yollarımızı yeniden birleştirmek
        mümkün;{" "}
        <Link
          className="underline text-gray-300 font-semibold animate-pulse"
          href={"/"}
        >
          anasayfa
        </Link>
        ya dön ve kaybolan bu sayfanın peşine düşme!{" "}
      </p>
    </section>
  );
}
