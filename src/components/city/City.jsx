import { useNavigate } from "react-router-dom";
import styles from "./City.module.css";
import Spinner from "../spinner/Spinner";
import Button from "../button/Button";
import Flag from "react-world-flags";
import { useCity } from "../../actions/useCity";
const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
  const { data, isLoading } = useCity();
  console.log(data);
  const navigate = useNavigate();
  if (isLoading) return <Spinner />;

  const { cityName, emoji, date, notes } = data[0];

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>
            {emoji === undefined ? (
              emoji
            ) : (
              <Flag code={`${emoji}`} className="h-16" />
            )}
          </span>{" "}
          {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>
      <Button
        style="back"
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
      >
        &larr; Back
      </Button>
    </div>
  );
}

export default City;
