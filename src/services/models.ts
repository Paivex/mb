import { createClient } from "@/lib/supabase/server";

export async function getModels(brandId?: number) {
  const supabase = await createClient();

  let query = supabase
    .from("models")
    .select("*")
    .order("name");

  if (brandId) {
    query = query.eq("brand_id", brandId);
  }

  const { data, error } = await query;

  if (error) throw error;

  return data;
}