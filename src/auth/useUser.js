import { useQuery } from "@tanstack/react-query";
import { getExistUser } from "../service/supabaseAuthAPI";

export function useUser() {
  const {
    isLoading,
    data: userAcc,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getExistUser,
  });

  return {
    userAcc,
    isLoading,
    error,
    isAuthenticated: userAcc?.aud === "authenticated",
  };
}
