import { createClient } from "@/lib/supabase/server";

export async function getBrands() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("brands")
    .select("*")
    .order("name");

  if (error) throw error;

  return data;
}