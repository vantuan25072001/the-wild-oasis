import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutAPi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { isLoading, mutate: logout } = useMutation({
    mutationFn: logoutAPi,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/login", { replace: true });
    },
  });

  return { isLoading, logout };
}
