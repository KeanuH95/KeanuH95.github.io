import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";
import initialState from "./initial-state";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { ThunkAction, Action } from "@reduxjs/toolkit";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

export const persistor = persistStore(store);

// Extend the Window interface to include the persistor property
declare global {
    interface Window {
        persistor: typeof persistor;
    }
}

window.persistor = persistor;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

