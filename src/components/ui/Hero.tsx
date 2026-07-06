import Container from "../layout/Container";

export default function Hero() {
  return (
    <section className="bg-linear-to-br from-neutral-950 via-neutral-900 to-neutral-800 py-40 text-white">

      <Container>

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
          MB Automóveis
        </p>

        <h1 className="max-w-3xl text-5xl font-bold leading-tight md:text-7xl">
          Encontre a sua próxima viatura.
        </h1>

        <p className="mt-8 max-w-xl text-lg text-neutral-300">
          Descubra viaturas selecionadas com garantia,
          financiamento e entrega em todo o país.
        </p>

        <button className="mt-10 rounded-lg bg-red-600 px-8 py-4 font-semibold text-white transition hover:bg-red-700">
          Ver Catálogo
        </button>

      </Container>

    </section>
  );
}