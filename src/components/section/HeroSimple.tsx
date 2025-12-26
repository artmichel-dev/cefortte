"use client";

export default function HeroSimple() {
  return (
    <>
      {/* Hero */}
      <section>
        <article className="bg-blue-500 grid grid-cols-1 sm:grid-cols-2 gap-3 py-24 md:py-32 lg:py-40">
          <div className="bg-red-500">
            <h1>Title</h1>
            <p>Textos</p>
          </div>
          <div className="bg-red-500">
            <h1>Title</h1>
            <p>Textos</p>
          </div>
        </article>
      </section>
    </>
  );
}
