import { useEffect, useState } from "react";
import styles from "./Map.module.css";
import { useNavigate } from "react-router-dom";
import Flag from "react-world-flags";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useGeolocation } from "../../hooks/useGeolocation";
import Button from "../button/Button";
import { useLatlng } from "../../hooks/useLatlng";
import { useCitiess } from "../../actions/useCitites";
import Spinner from "../spinner/Spinner";
export default function Map() {
  const [mapPosition, setMapPosition] = useState([40, 40]);
  const {
    position: geoPosition,
    getPosition: getGeoPosition,
    isLoading: geoIsLoading,
  } = useGeolocation();

  const { data: cities, isLoading } = useCitiess();
  const [lat, lng] = useLatlng();

  useEffect(() => {
    if (lat && lng) setMapPosition([lat, lng]);
  }, [lat, lng]);
  useEffect(() => {
    if (geoPosition) {
      setMapPosition([geoPosition.lat, geoPosition.lng]);
    }
  }, [geoPosition]);
  if (isLoading) return <Spinner />;

  return (
    <div className={styles.mapContainer}>
      <Button style="position" onClick={getGeoPosition}>
        {geoIsLoading ? "It's Loading" : "Click to get your location"}
      </Button>

      <MapContainer
        className={styles.map}
        center={mapPosition}
        zoom={11}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker position={[city.lat, city.lng]} key={city.id}>
            <Popup>
              <span>
                <Flag code={city.emoji} height="18" />
              </span>{" "}
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
        <MapCenter position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  );
}

function MapCenter({ position }) {
  const map = useMap();
  map.setView(position);
}

function DetectClick() {
  const navigate = useNavigate();

  useMapEvents({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
}
