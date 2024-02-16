import { AppBar, Toolbar } from "@mui/material";
import Geolocation from "../geolocaton";
import { useGetWeatherByLocationQuery } from "../../store/api/weatherApi";

export default function Header() {
  const { data, error, isLoading } = useGetWeatherByLocationQuery("Moscow");
  console.log(data, error, isLoading);
  return (
    <AppBar>
      <Toolbar>
        <Geolocation />
      </Toolbar>
    </AppBar>
  );
}
