import { configureStore, Store } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import authReducer from "../global/redux/authSlice";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export const createStore = (initialState = {}): Store => {
  const localStore = configureStore({
    reducer: {
      auth: authReducer,
    },
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware(),
      ...middlewares,
    ],
    preloadedState: initialState,
    devTools: process.env.NODE_ENV !== "production",
  });

  sagaMiddleware.run(rootSaga);

  return localStore;
};

export const store = createStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
