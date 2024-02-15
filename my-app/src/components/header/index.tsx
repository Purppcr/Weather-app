import { AppBar, Toolbar } from "@mui/material";
import Geolocation from "../geolocaton";

export default function Header() {
  return (
    <AppBar>
      <Toolbar>
        <Geolocation />
      </Toolbar>
    </AppBar>
  );
}
