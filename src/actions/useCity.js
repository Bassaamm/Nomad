import { useQuery } from "@tanstack/react-query";
import { getCity } from "../service/citiesApi";
import { useParams } from "react-router-dom";

export function useCity() {
  const { id } = useParams();
  const { data, error, isLoading } = useQuery({
    queryFn: () => getCity(id),
    queryKey: ["city"],
  });
  return { data, error, isLoading };
}
