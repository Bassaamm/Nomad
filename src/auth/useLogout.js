import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { logOutApiAuth } from "../service/supabaseAuthAPI";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading } = useMutation({
    mutationKey: ["logout"],
    mutationFn: logOutApiAuth,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/");
    },
  });
  return { logout, isLoading };
}
