import Container from "@/components/layout/Container";
import FilterBar from "@/components/filters/FilterBar";
import VehicleGrid from "@/components/vehicles/VehicleGrid";

import { getBrands } from "@/services/brands";
import { getModels } from "@/services/models";
import { getVehicles } from "@/services/vehicles";

interface Props {
  searchParams: Promise<{
    brand?: string;
    model?: string;
    fuel?: string;
    minPrice?: string;
    maxPrice?: string;
    sort?: string;
  }>;
}

export default async function Catalogo({ searchParams }: Props) {
  const params = await searchParams;

  const brandId = params.brand ? Number(params.brand) : undefined;
  const modelId = params.model ? Number(params.model) : undefined;

  const fuel = params.fuel || undefined;

  const minPrice = params.minPrice
    ? Number(params.minPrice)
    : undefined;

  const maxPrice = params.maxPrice
    ? Number(params.maxPrice)
    : undefined;

  const sort = params.sort;

  const brands = await getBrands();
  const models = await getModels(brandId);

  const vehicles = await getVehicles({
    brandId,
    modelId,
    fuel,
    minPrice,
    maxPrice,
    sort,
  });

  return (
    <Container className="py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Catálogo</h1>

        <p className="mt-2 text-gray-500">
          {vehicles.length} viatura
          {vehicles.length !== 1 ? "s" : ""} encontrada
          {vehicles.length !== 1 ? "s" : ""}
        </p>
      </div>

      <FilterBar
        brands={brands}
        models={models}
        selectedBrand={brandId}
        selectedModel={modelId}
        selectedFuel={fuel}
        minPrice={minPrice}
        maxPrice={maxPrice}
        selectedSort={sort}
      />

      <div className="mt-10">
        <VehicleGrid vehicles={vehicles} />
      </div>
    </Container>
  );
}