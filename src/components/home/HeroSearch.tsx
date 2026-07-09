"use client";

import { useRouter } from "next/navigation";

export default function HeroSearch() {
  const router = useRouter();

  return (
    <div className="rounded-2xl bg-white p-6 shadow-2xl">
      <div className="grid gap-4 md:grid-cols-4">

        <select className="rounded-lg border border-neutral-300 p-4">
          <option>Todas as marcas</option>
        </select>

        <select className="rounded-lg border border-neutral-300 p-4">
          <option>Todos os modelos</option>
        </select>

        <select className="rounded-lg border border-neutral-300 p-4">
          <option>Combustível</option>
        </select>

        <button
          onClick={() => router.push("/catalogo")}
          className="rounded-lg bg-red-600 p-4 font-semibold text-white transition hover:bg-red-700"
        >
          Pesquisar
        </button>

      </div>
    </div>
  );
}