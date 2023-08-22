import { useNavigate } from "react-router-dom";
import styles from "./UserNotMap.module.css";
import { logOutApiAuth } from "../../service/supabaseAuthAPI";
import { useMemo } from "react";
import { useUser } from "../../auth/useUser";
import { useLogout } from "../../auth/useLogout";

function UserNotMap() {
  const navigate = useNavigate();
  const { isAuthenticated } = useUser();
  const { logout, isLoading } = useLogout();
  const useState = useMemo(() => {
    navigate(0);
  }, [isAuthenticated]);
  return (
    <div className={styles.user}>
      <img src="\download.png" alt="avatar" />
      <span>Welcome, Bassam</span>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default UserNotMap;
