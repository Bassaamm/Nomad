import Map from "../../components/map/Map";
import SideBar from "../../components/sidebar/SideBar";
import User from "../../components/user/User";
import styles from "./AppLayout.module.css";
export default function AppLayout() {
  return (
    <>
      <div className={`${styles.app} hidden lg:block`}>
        <SideBar />
        <Map />
        <User />
      </div>
      <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-2xl">
        This application is not available for mobile screens.
      </div>
    </>
  );
}
