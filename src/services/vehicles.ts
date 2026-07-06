import { createClient } from "@/lib/supabase/server";

interface GetVehiclesOptions {
  brandId?: number;
}

export async function getVehicles({
  brandId,
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

  const { data, error } = await query;

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}