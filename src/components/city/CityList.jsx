import Spinner from "../spinner/Spinner";
import styles from "./CityList.module.css";
import Cityitem from "./Cityitem";
import Message from "../message/Message";
import { useCitiess } from "../../actions/useCitites";

export default function CityList() {
  const { data: cities, isLoading } = useCitiess();

  if (isLoading) return <Spinner />;
  if (cities.length === 0)
    return <Message message={"Add your wanted visits"} />;
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <Cityitem city={city} key={city.id} />
      ))}
    </ul>
  );
}
