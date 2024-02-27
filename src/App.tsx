import React from "react";
import {Provider} from "react-redux";
import {history, store} from "@redux/configure-store.ts";
import {HistoryRouter} from "redux-first-history/rr6";
import {routes} from "./routes/routes.tsx";
import SubApp from "./SubApp.tsx";

const App = () => {


    return (
        <React.StrictMode>
            <Provider store={store}>
                <HistoryRouter history={history}>
                    <SubApp>
                        {routes}
                    </SubApp>
                </HistoryRouter>
            </Provider>
        </React.StrictMode>
    );
};

export default App;
