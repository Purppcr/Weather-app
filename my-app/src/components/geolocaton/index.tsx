import React, { useState } from "react";
import {IconButton, Typography} from '@mui/material';
import PlaceIcon from "@mui/icons-material/Place.js";

export default function Geolocation() {
    const [userLocation, setUserLocation] = useState<{
        latitude: number;
        longitude: number;
    } | null>(null);
const [isLoading, setIsLoading] = useState(false)
    const getUserLocation = () => {
        if (navigator.geolocation) {
            setUserLocation(null)
            setIsLoading(true)
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;

                    setUserLocation({ latitude, longitude });
                    setIsLoading(false)
                },

                (error) => {
                    console.error("Ошибка при получении локации  ", error);
                }
            );
        } else {
            console.log("Геолокация не поддерживается в этом браузере");
        }
    };

    return (
        <>
            <IconButton onClick={getUserLocation}><PlaceIcon /></IconButton>
            {userLocation && (
                <div>
                    <p>Широта: {userLocation.latitude}</p>
                    <p>Долгота: {userLocation.longitude}</p>
                </div>
            )}
            {isLoading && <Typography>Идет загрузка</Typography>}
        </>
    );
}