import React from 'react';
import {AppBar, Toolbar} from "@mui/material";
import Geolocation from "./components/geolocaton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <AppBar>
           <Toolbar>
               <Geolocation />
           </Toolbar>
       </AppBar>
      </header>
    </div>
  );
}

export default App;
