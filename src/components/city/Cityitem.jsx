import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";
import Flag from "react-world-flags";
import { useDeleteCity } from "../../actions/useDelete";
export default function Cityitem({ city }) {
  const { emoji, cityName, date, id, lat, lng } = city;
  const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
      weekday: "long",
    }).format(new Date(date));
  const { mutate } = useDeleteCity();
  function handleDelete(e) {
    e.preventDefault();
    mutate(id);
  }
  return (
    <li>
      <Link
        className={`${styles.cityItem}  `}
        to={`${id}?lat=${lat}&lng=${lng}`}
      >
        <span className={styles.emoji}>
          <Flag code={`${emoji}`} className="h-10" />
        </span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn} onClick={handleDelete}>
          &times;
        </button>
      </Link>
    </li>
  );
}
