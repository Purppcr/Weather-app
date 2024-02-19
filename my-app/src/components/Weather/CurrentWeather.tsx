import {Box, Typography} from "@mui/material";
import {useGetWeatherByLocationQuery, WeatherAPI} from "../../store/api/weatherApi";
import { useSelector} from "react-redux";
import {WeatherData} from "../../store/api/types";
import {RootState} from "../../store/store";

function CurrentWeather() {
    useGetWeatherByLocationQuery("Moscow")

    const weather = useSelector((state: RootState) => state.current);
    console.log(weather)

    return ( <Box>
            <div>
                <Typography>Погода сегодня</Typography>
                <h4>{weather?.}</h4>
            </div>
        </Box>
    )
}
export default CurrentWeather