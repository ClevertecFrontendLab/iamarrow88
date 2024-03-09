import React from "react";
import {Provider} from "react-redux";
import {history, store} from "@redux/configure-store.ts";
import {HistoryRouter} from "redux-first-history/rr6";
import SubApp from "../subApp/SubApp.tsx";
import AuthProvider from '../../../provider/AuthProvider.tsx';
import {routes} from "../../../routes/routes.tsx";

const App = () => {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <HistoryRouter history={history}>
                    <SubApp>
                        {/**/}
                        <AuthProvider>
                            {routes}
                        </AuthProvider>
                    </SubApp>
                </HistoryRouter>
            </Provider>
        </React.StrictMode>
    );
};

export default App;
