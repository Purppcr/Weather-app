import { useEffect, useState } from "react";
import { IconButton, Typography } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place.js";
import { useGetWeatherByLocationQuery } from "../../store/api/weatherApi";
import { skipToken } from "@reduxjs/toolkit/query";

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

  useGetWeatherByLocationQuery(userLocation ? userLocation : skipToken);

  return (
    <>
      {error ? (
        <Typography color="red">{error}</Typography>
      ) : (
        <>
          <IconButton onClick={getUserLocation} disabled={isLoading}>
            <PlaceIcon />
          </IconButton>
          {isLoading && <Typography>Ищем местоположение</Typography>}
        </>
      )}
    </>
  );
}
