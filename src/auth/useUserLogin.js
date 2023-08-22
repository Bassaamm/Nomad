import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { loginSupabase } from "../service/supabaseAuthAPI";

export function useLoginUser() {
  const navigate = useNavigate();
  const { mutate, isLoading, error } = useMutation({
    mutationFn: ({ email, password }) => loginSupabase({ email, password }),
    onSuccess: () => {
      navigate("/app");
    },
    onError: () => {
      navigate("/login");
    },
  });

  return { mutate, isLoading, error };
}
