import styles from "./CountryItem.module.css";
import Flag from "react-world-flags";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <div>
        <Flag code={country.emoji} className="h-12 my-3" />
      </div>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
