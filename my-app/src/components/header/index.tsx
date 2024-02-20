import { AppBar, Switch, Toolbar, Typography } from "@mui/material";
import Geolocation from "../geolocaton";
import { useColorScheme } from "@mui/material/styles";
import React from "react";
import { DarkMode } from "@mui/icons-material";

const ModeSwitcher = () => {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <Switch
      // @ts-ignore
      slotProps={{
        thumb: {
          children: <DarkMode />,
        },
      }}
      onChange={() => setMode(mode === "light" ? "dark" : "light")}
      sx={{
        color: "red",
      }}
    />
  );
};

export default function Header() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Geolocation />
        <ModeSwitcher />
        <Typography sx={{ margin: "auto", fontSize: "35px" }}>
          {" "}
          Weather App{" "}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
