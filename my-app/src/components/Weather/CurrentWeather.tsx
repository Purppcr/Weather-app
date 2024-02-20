// @ts-nocheck

import {
  Box,
  Card,
  CardHeader,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { useGetWeatherByLocationQuery } from "../../store/api/weatherApi";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import AirIcon from "@mui/icons-material/Air";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import FellSelf from "@mui/icons-material/SelfImprovementOutlined";
import { StyledContainer } from "./styled";

function CurrentWeather() {
  const weather = useSelector((state: RootState) => state.current);
  console.log(weather);

  return (
    weather && (
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        minHeight="calc(100vh - 64px)"
      >
        <Paper elevation={10}>
          <StyledContainer>
            <Typography variant="h3" color="blue" mb={5} textAlign="center">
              {weather?.location?.name}
            </Typography>
            <Grid container justifyContent="space-between">
              <Grid>Current weather</Grid>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <WaterDropIcon />
                  </ListItemIcon>
                  <ListItemText primary="Влажность" />
                </ListItem>
              </List>
            </Grid>
          </StyledContainer>
        </Paper>
      </Grid>
    )
  );

  return (
    <Card sx={{ mt: 30, mr: 70, ml: 70, padding: "2em" }}>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "45px",
          fontWeight: "bold",
          color: "#3D9AD1",
        }}
      >
        {weather?.location?.name}
      </Typography>
      <Grid container spacing={1}>
        <Grid xs={8}>
          <Typography
            sx={{ fontSize: "30px", fontWeight: "bold", color: "#3D9AD1" }}
          >
            Current weather
          </Typography>
        </Grid>
        <Grid xs={3}>
          <Typography
            sx={{ fontSize: "20px", fontWeight: "bold", color: "#3D9AD1" }}
          >
            <WaterDropIcon /> Влажность
          </Typography>
        </Grid>
        <Grid xs={1}>
          <Typography
            sx={{ fontSize: "20px", fontWeight: "bold", color: "#0969A2" }}
          >
            {weather?.current?.humidity}
          </Typography>
        </Grid>
        <Grid xs={4}>
          <Box component="img" src={weather?.current?.condition?.icon}></Box>
        </Grid>
        <Grid xs={4}>
          <Typography
            sx={{ fontSize: "55px", fontWeight: "bold", color: "#1047A9" }}
          >
            {" "}
            <ThermostatIcon /> {weather?.current?.temp_c}
          </Typography>
        </Grid>
        <Grid xs={3}>
          <Typography
            sx={{ fontSize: "20px", fontWeight: "bold", color: "#3D9AD1" }}
          >
            <FellSelf /> Ощущается
          </Typography>
        </Grid>
        <Grid xs={1}>
          <Typography
            sx={{ fontSize: "20px", fontWeight: "bold", color: "#0969A2" }}
          >
            {weather?.current?.feelslike_c}
          </Typography>
        </Grid>
        <Grid xs={8}>
          <Typography
            sx={{ fontSize: "20px", fontWeight: "bold", color: "#3D9AD1" }}
          >
            {weather?.current?.condition?.text}
          </Typography>
        </Grid>
        <Grid xs={3}>
          <Typography
            sx={{ fontSize: "20px", fontWeight: "bold", color: "#3D9AD1" }}
          >
            <AirIcon /> Ветер
          </Typography>
        </Grid>
        <Grid xs={1}>
          <Typography
            sx={{ fontSize: "20px", fontWeight: "bold", color: "#0969A2" }}
          >
            {weather?.current?.wind_mph} м/с
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
}

export default CurrentWeather;
