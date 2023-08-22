import Spinner from "../spinner/Spinner";
import styles from ".//CountryList.module.css";
import Message from "../message/Message";
import CountryItem from "./CountryItem";
import { useCitiess } from "../../actions/useCitites";

export default function CountryList() {
  const { data: cities, isLoading } = useCitiess();

  if (isLoading) return <Spinner />;
  if (cities.length === 0)
    return <Message message={"Add your wanted visits"} />;

  const countries = cities.reduce((arr, curr) => {
    if (!arr.map((country) => country.country).includes(curr.country))
      return [
        ...arr,
        { country: curr.country, emoji: curr.emoji, id: curr.id },
      ];
    else return arr;
  }, []);
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
}
