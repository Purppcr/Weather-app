import { useState } from "react";
import { IconButton, Typography } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place.js";

export default function Geolocation() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [userLocation, setUserLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const getUserLocation = () => {
    if (navigator.geolocation) {
      setUserLocation(null);
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          setUserLocation({ latitude, longitude });
          setIsLoading(false);
        },

        (error) => {
          console.error("Ошибка при получении локации  ", error);
        }
      );
    } else setError("Геолокация не поддерживается в этом браузере");
  };

  return (
    <>
      {error ? (
        <Typography color="red">{error}</Typography>
      ) : (
        <>
          <IconButton onClick={getUserLocation}>
            <PlaceIcon />
          </IconButton>
          {userLocation && (
            <div>
              <p>Широта: {userLocation.latitude}</p>
              <p>Долгота: {userLocation.longitude}</p>
            </div>
          )}
          {isLoading && <Typography>Ищем местоположение</Typography>}
        </>
      )}
    </>
  );
}
