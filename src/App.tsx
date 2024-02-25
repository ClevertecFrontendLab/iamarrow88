import React from "react";
import {Provider} from "react-redux";
import {history, store} from "@redux/configure-store.ts";
import {HistoryRouter} from "redux-first-history/rr6";
import {routes} from "./routes/routes.tsx";

const App = () => {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <HistoryRouter history={history}>{routes}</HistoryRouter>
            </Provider>
        </React.StrictMode>
    );
};

export default App;
