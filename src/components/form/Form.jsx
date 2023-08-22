// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useEffect, useState } from "react";
import Button from "../button/Button";
import styles from "./Form.module.css";
import { useNavigate } from "react-router-dom";
import { useLatlng } from "../../hooks/useLatlng";
import Message from "../message/Message";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Flag from "react-world-flags";
import { useAddCity } from "../../actions/useAddCity";
import { useUser } from "../../auth/useUser";
export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

function Form() {
  const navigate = useNavigate();
  const [lat, lng] = useLatlng();
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emoji, setEmoji] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const detectAPI = "https://api.bigdatacloud.net/data/reverse-geocode-client";

  const { mutate, isLoadingAdd } = useAddCity();
  const { userAcc } = useUser();
  useEffect(
    function () {
      async function fetchData() {
        if (!lat && !lng) return;
        try {
          setErrorMessage("");
          setIsLoading(true);
          const res = await fetch(
            `${detectAPI}?latitude=${lat}&longitude=${lng}&localityLanguage=en`
          );
          const data = await res.json();
          console.log(data);
          if (!data.countryCode)
            throw new Error("Click somewhere else the ocean :)");
          setCityName(data.city || data.locality || "");
          setCountry(data.countryCode);
          setEmoji(data.countryCode);
        } catch (error) {
          setErrorMessage(error.message);
        } finally {
          setIsLoading(false);
        }
      }
      fetchData();
    },
    [lat, lng]
  );
  async function handleSubmit(e) {
    e.preventDefault();
    if (!cityName || !date) return;

    const newCity = {
      userId: userAcc.id,
      cityName,
      country,
      emoji,
      date,
      notes,
      lat,
      lng,
    };
    await mutate(newCity);
    navigate("/app/cities");
  }

  if (errorMessage) return <Message message={errorMessage} />;
  if (!lat && !lng) return <Message message={"Start by clicking on the map"} />;

  return (
    <form
      className={`${styles.form} ${isLoadingAdd ? styles.loading : ""} `}
      onSubmit={handleSubmit}
    >
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
          className="text-gray-700 font-semibold"
        />
        <span className={styles.flag}>
          <Flag code={`${emoji}`} className=" h-10 mt-5" />
        </span>
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>

        <ReactDatePicker
          id="date"
          onChange={(date) => setDate(date)}
          selected={date}
          dateFormat={"dd/MM/yyyy"}
          className="text-gray-700 font-semibold"
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
          className="text-gray-700 font-semibold"
        />
      </div>

      <div className={styles.buttons}>
        <Button style="primary">Add</Button>
        <Button
          style="back"
          onClick={(e) => {
            e.preventDefault();
            navigate("/app/cities");
          }}
        >
          &larr; Back
        </Button>
      </div>
    </form>
  );
}

export default Form;
