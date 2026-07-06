import { getBrands } from "@/services/brands";

export default async function Home() {
  const brands = await getBrands();

  return (
    <pre>{JSON.stringify(brands, null, 2)}</pre>
  );
}