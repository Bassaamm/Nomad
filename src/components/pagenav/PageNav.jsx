import styles from "./PageNav.module.css";
import { NavLink, Link } from "react-router-dom";
import Logo from "../logo/Logo";
// import { useAuth } from "../../context/FakeAuthContext";
import UserNotMap from "../user/UserNotMap";
import { useUser } from "../../auth/useUser";
export default function PageNav() {
  const { isAuthenticated } = useUser();

  return (
    <nav className={styles.nav}>
      <Link to="/">
        <Logo />
      </Link>
      <ul>
        <li>
          {isAuthenticated ? (
            <UserNotMap />
          ) : (
            <NavLink to="/login" className={styles.ctaLink}>
              Login
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
}
