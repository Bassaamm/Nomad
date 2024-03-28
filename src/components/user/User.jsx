import styles from "./User.module.css";
import { useLogout } from "../../auth/useLogout";

function User() {
  const { logout } = useLogout();

  return (
    <div className={styles.user}>
      <img src="\download.png" alt="avatar" />
      <span>Welcome, Bassam</span>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default User;
