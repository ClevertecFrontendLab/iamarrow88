import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { HistoryRouter } from "redux-first-history/rr6";
import { history, store } from '@redux/configure-store';
import {routes} from "./routes/routes.tsx";

import 'normalize.css';
import './index.css';
import 'antd/dist/antd.css'

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <HistoryRouter history={history}>{routes}</HistoryRouter>
        </Provider>
    </React.StrictMode>,
);
