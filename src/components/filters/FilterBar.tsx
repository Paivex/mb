"use client";

import { useRouter, useSearchParams } from "next/navigation";
import FilterSelect from "./FilterSelect";
import FilterInput from "./FilterInput";

interface Brand {
  id: number;
  name: string;
}

interface Model {
  id: number;
  name: string;
}

interface Props {
  brands: Brand[];
  models: Model[];

  selectedBrand?: number;
  selectedModel?: number;
  selectedFuel?: string;

  minPrice?: number;
  maxPrice?: number;

  selectedSort?: string;
}

const fuelOptions = [
  { value: "Gasolina", label: "Gasolina" },
  { value: "Diesel", label: "Diesel" },
  { value: "Híbrido", label: "Híbrido" },
  { value: "Elétrico", label: "Elétrico" },
  { value: "GPL", label: "GPL" },
];

const sortOptions = [
  { value: "date_desc", label: "Mais recentes" },
  { value: "date_asc", label: "Mais antigos" },
  { value: "price_asc", label: "Menor preço" },
  { value: "price_desc", label: "Maior preço" },
  { value: "kms_asc", label: "Menos quilómetros" },
  { value: "kms_desc", label: "Mais quilómetros" },
];

export default function FilterBar({
  brands,
  models,
  selectedBrand,
  selectedModel,
  selectedFuel,
  minPrice,
  maxPrice,
  selectedSort,
}: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function push(params: URLSearchParams) {
    router.push(`/catalogo?${params.toString()}`);
  }

  function handleBrandChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const params = new URLSearchParams(searchParams.toString());

    if (e.target.value) {
      params.set("brand", e.target.value);
    } else {
      params.delete("brand");
    }

    params.delete("model");

    push(params);
  }

  function handleModelChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const params = new URLSearchParams(searchParams.toString());

    if (e.target.value) {
      params.set("model", e.target.value);
    } else {
      params.delete("model");
    }

    push(params);
  }

  function handleFuelChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const params = new URLSearchParams(searchParams.toString());

    if (e.target.value) {
      params.set("fuel", e.target.value);
    } else {
      params.delete("fuel");
    }

    push(params);
  }

  function handleMinPriceChange(e: React.ChangeEvent<HTMLInputElement>) {
    const params = new URLSearchParams(searchParams.toString());

    if (e.target.value) {
      params.set("minPrice", e.target.value);
    } else {
      params.delete("minPrice");
    }

    push(params);
  }

  function handleMaxPriceChange(e: React.ChangeEvent<HTMLInputElement>) {
    const params = new URLSearchParams(searchParams.toString());

    if (e.target.value) {
      params.set("maxPrice", e.target.value);
    } else {
      params.delete("maxPrice");
    }

    push(params);
  }

  function handleSortChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const params = new URLSearchParams(searchParams.toString());

    if (e.target.value) {
      params.set("sort", e.target.value);
    } else {
      params.delete("sort");
    }

    push(params);
  }

  return (
    <section className="mb-10 rounded-xl border bg-white p-6 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-6">
        <FilterSelect
          value={selectedBrand ?? ""}
          placeholder="Todas as marcas"
          options={brands.map((brand) => ({
            value: brand.id,
            label: brand.name,
          }))}
          onChange={handleBrandChange}
        />

        <FilterSelect
          value={selectedModel ?? ""}
          placeholder="Todos os modelos"
          disabled={!selectedBrand}
          options={models.map((model) => ({
            value: model.id,
            label: model.name,
          }))}
          onChange={handleModelChange}
        />

        <FilterSelect
          value={selectedFuel ?? ""}
          placeholder="Combustível"
          options={fuelOptions}
          onChange={handleFuelChange}
        />

        <FilterInput
          value={minPrice ?? ""}
          placeholder="Preço mínimo"
          onChange={handleMinPriceChange}
        />

        <FilterInput
          value={maxPrice ?? ""}
          placeholder="Preço máximo"
          onChange={handleMaxPriceChange}
        />

        <FilterSelect
          value={selectedSort ?? "date_desc"}
          placeholder="Ordenar por"
          options={sortOptions}
          onChange={handleSortChange}
        />
      </div>
    </section>
  );
}