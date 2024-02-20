import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {Provider} from "react-redux";
import {store} from "./store/store";
import {Experimental_CssVarsProvider as CssVarsProvider, useColorScheme,
} from '@mui/material/styles';
import {CssBaseline} from "@mui/material";


const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <CssVarsProvider>
            <Provider store={store}>
                <CssBaseline/>
                <App/>
            </Provider>
        </CssVarsProvider>
    </React.StrictMode>
);
