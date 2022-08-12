import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { contactsApi } from './contactsApi'
import { filterReducer } from './filterSlicer';

export const store = configureStore({
    reducer: {
        [contactsApi.reducerPath]: contactsApi.reducer,
        filter: filterReducer,
    },
    middleware: getDefaultMiddleware => [
        ...getDefaultMiddleware(),
        contactsApi.middleware,
    ],
});

setupListeners(store.dispatch);

export default store;