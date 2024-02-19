import {AppBar, Toolbar, Typography} from "@mui/material";
import Geolocation from "../geolocaton";
import {useGetWeatherByLocationQuery} from "../../store/api/weatherApi";

export default function Header() {
    return (
        <AppBar position='sticky'>
            <Toolbar>
                <Geolocation/>
                <Typography  sx={{margin: 'auto', fontSize: '35px'}}> Weather App </Typography>
            </Toolbar>
        </AppBar>
    );
}
