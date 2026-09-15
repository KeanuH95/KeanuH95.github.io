import { createRoot } from 'react-dom/client';
import "./index.css";
import App from './App';

import { Provider } from "react-redux";
import { ColorModeScript } from "@chakra-ui/react";
import { store } from "./redux/store";
import { chakraTheme } from "./chakraTheme";

const container = document.getElementById('root') as HTMLElement | null;
if (container) {
    const root = createRoot(container);
    root.render(
        <>
            {/* Applies the initial color mode before paint (prevents FOUC).
                Kept in sync with chakraTheme.config.initialColorMode. */}
            <ColorModeScript initialColorMode={chakraTheme.config.initialColorMode} />
            <Provider store={store}>
                <App />
            </Provider>
        </>
    );
}
