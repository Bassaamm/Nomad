import style from "./Sidebar.module.css";
import Logo from "../logo/Logo";
import AppNav from "../appnav/AppNav";
import { Link, Outlet } from "react-router-dom";

export default function SideBar() {
  return (
    <div className={style.sidebar}>
      <Link to="/">
        <Logo />
      </Link>
      <AppNav />
      <Outlet />
      <footer className={style.footer}>
        <p className={style.copyright}>
          &copy; Copyright {new Date().getFullYear()} by me
        </p>
      </footer>
    </div>
  );
}
