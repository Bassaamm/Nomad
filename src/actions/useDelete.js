import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCity } from "../service/citiesApi";

export function useDeleteCity() {
  const queryClint = useQueryClient();
  const { mutate, error, isLoading } = useMutation({
    mutationFn: (id) => deleteCity(id),
    mutationKey: ["deletecity"],
    onSuccess: () => {
      queryClint.invalidateQueries({ queryKey: ["allcities"] });
    },
  });
  return { mutate, error, isLoading };
}
