import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import { useUser } from "./useUser";
import { useEffect } from "react";

export default function ProtectedRoutes({ children }) {
  const navigate = useNavigate();
  const { userAcc, isLoading, error, isAuthenticated } = useUser();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) return navigate("/login");
  }, [isAuthenticated]);
  return children;
}
