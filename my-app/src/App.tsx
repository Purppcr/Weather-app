import {Box} from "@mui/material";
import Header from "./components/header";
import currentWeather from "./components/Weather/CurrentWeather";
import CurrentWeather from "./components/Weather/CurrentWeather";


function App() {
    return (
        <Box>
            <Header/>
            <CurrentWeather/>
        </Box>
    );
}

export default App;
