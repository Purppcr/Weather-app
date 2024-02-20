import {Box} from "@mui/material";
import Header from "./components/header";
import CurrentWeather from "./components/Weather/CurrentWeather";
import Light from "./background/light.jpg"

function App() {
    return (
        <Box
            sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundImage: `url(${Light})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}><Header/><CurrentWeather/>
            </Box>
    );
}

export default App;
