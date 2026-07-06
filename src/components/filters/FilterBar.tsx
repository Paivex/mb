"use client";

import { useRouter, useSearchParams } from "next/navigation";

interface Brand {
  id: number;
  name: string;
}

interface Props {
  brands: Brand[];
  selectedBrand?: number;
}

export default function FilterBar({
  brands,
  selectedBrand,
}: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleBrandChange(
    e: React.ChangeEvent<HTMLSelectElement>
  ) {
    const params = new URLSearchParams(searchParams);

    if (e.target.value) {
      params.set("brand", e.target.value);
    } else {
      params.delete("brand");
    }

    router.push(`/catalogo?${params.toString()}`);
  }

  return (
    <section className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="grid gap-4 md:grid-cols-6">

        <select
          className="rounded-lg border p-3"
          value={selectedBrand ?? ""}
          onChange={handleBrandChange}
        >
          <option value="">
            Todas as marcas
          </option>

          {brands.map((brand) => (
            <option
              key={brand.id}
              value={brand.id}
            >
              {brand.name}
            </option>
          ))}
        </select>

      </div>
    </section>
  );
}