import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import PageNav from "../../components/pagenav/PageNav";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>
          With Nomad, you can keep a record of your around the world journeys
          <br />
        </h1>
        <h2>
          A world map that shows every city you have visited and the memories
          you have made there.
          <br />
          Share your wanderlust with your friends and never forget your amazing
          experiences.
        </h2>
        <Link to="/login" className="cta">
          Start tracking now
        </Link>
      </section>
    </main>
  );
}
