import { useQuery } from "@tanstack/react-query";
import { getAllCities } from "../service/citiesApi";

export function useCitiess() {
  const { data, error, isLoading } = useQuery({
    queryFn: getAllCities,
    queryKey: ["allcities"],
  });
  return { data, error, isLoading };
}
