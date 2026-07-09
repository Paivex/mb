import Link from "next/link";
import HeroSearch from "./HeroSearch";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[700px] items-center"
      style={{
        backgroundImage: "url('/images/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-6 text-center">
        <span className="mb-4 rounded-full bg-red-600 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-white">
          MB Automóveis
        </span>

        <h1 className="max-w-4xl text-5xl font-extrabold leading-tight text-white md:text-7xl">
          Encontre o seu próximo automóvel
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-neutral-200 md:text-xl">
          Viaturas cuidadosamente selecionadas, garantia, financiamento e
          acompanhamento profissional em todas as etapas.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/catalogo"
            className="rounded-lg bg-red-600 px-8 py-4 font-semibold text-white transition hover:bg-red-700"
          >
            Ver Catálogo
          </Link>

          <Link
            href="/contactos"
            className="rounded-lg border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-black"
          >
            Contactar
          </Link>
        </div>

        <div className="mt-16 w-full max-w-6xl">
          <HeroSearch />
        </div>
      </div>
    </section>
  );
}