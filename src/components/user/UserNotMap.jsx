import { useNavigate } from "react-router-dom";
import styles from "./UserNotMap.module.css";
import { logOutApiAuth } from "../../service/supabaseAuthAPI";
import { useEffect } from "react";
import { useUser } from "../../auth/useUser";

function UserNotMap() {
  const navigate = useNavigate();
  const { isAuthenticated } = useUser();
  useEffect(() => {
    navigate("/");
  }, [isAuthenticated]);
  function handleClick() {
    logOutApiAuth();
    navigate("/");
  }
  return (
    <div className={styles.user}>
      <img src="\download.png" alt="avatar" />
      <span>Welcome, Bassam</span>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default UserNotMap;
