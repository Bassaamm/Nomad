import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCity } from "../service/citiesApi";

export function useAddCity() {
  const queryClint = useQueryClient();
  const { mutate, error, isLoading } = useMutation({
    mutationFn: (newCity) => addCity(newCity),
    mutationKey: ["add"],
    onSuccess: () => {
      queryClint.invalidateQueries({ queryKey: ["allcities"] });
    },
  });
  return { mutate, error, isLoading };
}
