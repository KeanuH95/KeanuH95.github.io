import React from 'react';
import { createRoot } from 'react-dom/client';
import "./index.css";
import App from './App.jsx';

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App tab="home"/>
        </PersistGate>
    </Provider>
);