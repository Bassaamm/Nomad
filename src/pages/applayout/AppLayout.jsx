import Map from "../../components/map/Map";
import SideBar from "../../components/sidebar/SideBar";
import User from "../../components/user/User";
import styles from "./AppLayout.module.css";
export default function AppLayout() {
  return (
    <>
      <div className="lg:block hidden">
        <div className={styles.app}>
          <SideBar />
          <Map />
          <User />
        </div>
      </div>
      <div className={styles.mobileOverlay}>
        This application is only available for large screens.
      </div>
    </>
  );
}
