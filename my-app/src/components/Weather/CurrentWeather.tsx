import {Card, Grid, Typography} from "@mui/material";
import {useGetWeatherByLocationQuery} from "../../store/api/weatherApi";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import AirIcon from '@mui/icons-material/Air';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import FellSelf from '@mui/icons-material/SelfImprovementOutlined';

function CurrentWeather() {
    useGetWeatherByLocationQuery("Moscow")

    const weather = useSelector((state: RootState) => state.current);
    console.log(weather)

    return (<Card sx={{mt: 20, mr: 70, ml: 70, pl: 10, pr: 10, padding: '2em' }}>
            <Typography sx={{textAlign: 'center', fontSize: '45px', fontWeight: "bold", color: '#3D9AD1'}}>{weather?.location?.name}</Typography>
            <Grid container
                  spacing={1}
            >
                <Grid xs={8}>
                    <Typography sx={{fontSize: '30px', fontWeight: "bold", color:'#3D9AD1'}}>Current weather</Typography>
                </Grid>
                <Grid xs={3}>
                    <Typography sx={{fontSize: '20px', fontWeight: "bold", color:'#3D9AD1'}}><WaterDropIcon/> Влажность</Typography>
                </Grid>
                <Grid xs={1}>
                    <Typography sx={{fontSize: '20px', fontWeight: "bold", color:'#0969A2'}}>{weather?.current?.humidity}</Typography>
                </Grid>
                <Grid xs={4}>
                    {weather?.current?.condition.icon}
                </Grid>
                <Grid xs={4}>
                    <Typography sx={{fontSize: '55px', fontWeight: "bold", color: '#1047A9'}}> <ThermostatIcon/> {weather?.current?.temp_c}</Typography>
                </Grid>
                <Grid xs={3}>
                    <Typography sx={{fontSize: '20px', fontWeight: "bold", color:'#3D9AD1'}}><FellSelf/> Ощущается</Typography>
                </Grid>
                <Grid xs={1}>
                    <Typography sx={{fontSize: '20px', fontWeight: "bold", color:'#0969A2'}}>{weather?.current?.feelslike_c}</Typography>
                </Grid>
                <Grid xs={8}>
                    <Typography sx={{fontSize: '20px', fontWeight: "bold", color:'#3D9AD1'}}>{weather?.current?.condition?.text}</Typography>
                </Grid>
                <Grid xs={3}>
                    <Typography sx={{fontSize: '20px', fontWeight: "bold", color:'#3D9AD1'}}><AirIcon/> Ветер</Typography>
                </Grid>
                <Grid xs={1}>
                    <Typography sx={{fontSize: '20px', fontWeight: "bold", color:'#0969A2'}}>{weather?.current?.wind_mph} м/с</Typography>
                </Grid>
            </Grid>
        </Card>
    )
}

export default CurrentWeather