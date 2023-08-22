import { useNavigate } from "react-router-dom";
import styles from "./User.module.css";
import { logOutApiAuth } from "../../service/supabaseAuthAPI";

function User() {
  const navigate = useNavigate();
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

export default User;
