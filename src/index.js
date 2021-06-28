import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import factory from "./redux/configureStore";

const { store, persistor } = factory();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            {/* <PersistGate persistor={persistor}> */}
                <App />
            {/* </PersistGate> */}
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

// npx gh-pages-clean
