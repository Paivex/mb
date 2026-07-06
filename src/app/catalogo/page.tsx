import Container from "@/components/layout/Container";
import FilterBar from "@/components/filters/FilterBar";
import VehicleGrid from "@/components/vehicles/VehicleGrid";

import { getBrands } from "@/services/brands";
import { getVehicles } from "@/services/vehicles";

interface Props {
  searchParams: Promise<{
    brand?: string;
  }>;
}

export default async function Catalogo({
  searchParams,
}: Props) {
  const params = await searchParams;

  const brandId = params.brand
    ? Number(params.brand)
    : undefined;

  const brands = await getBrands();

  const vehicles = await getVehicles({
    brandId,
  });

  return (
    <Container className="py-12">
      <h1 className="mb-8 text-4xl font-bold">
        Catálogo
      </h1>

      <FilterBar
        brands={brands}
        selectedBrand={brandId}
      />

      <div className="mt-10">
        <VehicleGrid vehicles={vehicles} />
      </div>
    </Container>
  );
}