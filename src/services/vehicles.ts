import { createClient } from "@/lib/supabase/server";

interface GetVehiclesOptions {
  brandId?: number;
  modelId?: number;
  fuel?: string;
  minPrice?: number;
  maxPrice?: number;
  sort?: string;
}

export async function getVehicles({
  brandId,
  modelId,
  fuel,
  minPrice,
  maxPrice,
  sort,
}: GetVehiclesOptions = {}) {
  const supabase = await createClient();

  let query = supabase
    .from("vehicles")
    .select(`
      *,
      brands(name),
      models(name),
      vehicle_images(image_url)
    `);

  if (brandId) {
    query = query.eq("brand_id", brandId);
  }

  if (modelId) {
    query = query.eq("model_id", modelId);
  }

  if (fuel) {
    query = query.eq("fuel", fuel);
  }

  if (minPrice !== undefined) {
    query = query.gte("price", minPrice);
  }

  if (maxPrice !== undefined) {
    query = query.lte("price", maxPrice);
  }

  switch (sort) {
    case "date_asc":
      query = query.order("created_at", { ascending: true });
      break;

    case "price_asc":
      query = query.order("price", { ascending: true });
      break;

    case "price_desc":
      query = query.order("price", { ascending: false });
      break;

    case "kms_asc":
      query = query.order("kms", { ascending: true });
      break;

    case "kms_desc":
      query = query.order("kms", { ascending: false });
      break;

    default:
      query = query.order("created_at", { ascending: false });
  }

  const { data, error } = await query;

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}