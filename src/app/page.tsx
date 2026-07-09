import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="mb-8 text-4xl font-bold">
          Viaturas em destaque
        </h2>

        <p className="text-neutral-600">
          Em breve esta secção será alimentada automaticamente pelas viaturas
          marcadas como destaque no painel de administração.
        </p>
      </section>

      <section className="bg-neutral-100 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Porque escolher a MB Automóveis?
          </h2>

          <div className="grid gap-8 md:grid-cols-4">
            <div className="rounded-xl bg-white p-8 shadow">
              <h3 className="mb-4 text-xl font-semibold">Garantia</h3>
              <p className="text-neutral-600">
                Todas as viaturas são entregues com garantia e revisão.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow">
              <h3 className="mb-4 text-xl font-semibold">Financiamento</h3>
              <p className="text-neutral-600">
                Soluções de crédito adaptadas às suas necessidades.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow">
              <h3 className="mb-4 text-xl font-semibold">Retomas</h3>
              <p className="text-neutral-600">
                Avaliamos a sua viatura e tratamos de todo o processo.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow">
              <h3 className="mb-4 text-xl font-semibold">Confiança</h3>
              <p className="text-neutral-600">
                Transparência e acompanhamento desde a compra até à entrega.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}