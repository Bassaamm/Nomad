import { supabase } from "./supabase";

export async function addCity(newCity) {
  console.log(newCity);
  await supabase.from("Cities").insert(newCity).select();
}

export async function deleteCity(id) {
  await supabase.from("Cities").delete().eq("id", id);
  console.log("deleted");
}
export async function getAllCities() {
  let { data: Cities } = await supabase.from("Cities").select("*");
  return Cities;
}
export async function getCity(id) {
  let { data: city } = await supabase.from("Cities").select("*").eq("id", id);

  return city;
}
