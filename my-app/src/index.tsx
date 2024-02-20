import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {Provider} from "react-redux";
import {store} from "./store/store";
import {
    Experimental_CssVarsProvider as CssVarsProvider,
    useColorScheme,
} from '@mui/material/styles';
import {Button, CssBaseline} from "@mui/material";

// ModeSwitcher is an example interface for toggling between modes.
// Material UI does not provide the toggle interface—you have to build it yourself.
const ModeSwitcher = () => {
    const {mode, setMode} = useColorScheme();
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <Button
            variant="outlined"
            onClick={() => {
                if (mode === 'light') {
                    setMode('dark');
                } else {
                    setMode('light');
                }
            }}
        >
            {mode === 'light' ? 'Dark' : 'Light'}
        </Button>
    );
};
const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <CssVarsProvider>
            <Provider store={store}>
                <ModeSwitcher />
                <CssBaseline/>
                <App/>
            </Provider>
        </CssVarsProvider>
    </React.StrictMode>
);
