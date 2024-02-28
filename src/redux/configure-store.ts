import {combineReducers, configureStore, EnhancedStore} from '@reduxjs/toolkit';
import {createReduxHistoryContext} from "redux-first-history";
import {createBrowserHistory} from "history";
import {changeAuthData, changeLogReducer, setStatusPage} from "@redux/config/reducers.ts";

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({ history: createBrowserHistory(), savePreviousLocations: 1 })

const rootReducer = combineReducers({
    isLogin: changeLogReducer,
    authData: changeAuthData,
    isLoading: setStatusPage,
    router: routerReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleWare) =>
        getDefaultMiddleWare()
            .concat(routerMiddleware)
});

export const history = createReduxHistory(store as EnhancedStore);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
