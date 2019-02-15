import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from "./App.js";
import {Provider} from "react-redux";
import {persistor, store} from "../src/app/redux-stuffs/store/store";
import {PersistGate} from "redux-persist/lib/integration/react";


render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);
