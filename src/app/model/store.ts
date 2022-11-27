import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import estatesList from 'entities/EstatesList/model/estateListSlice';

export const store = configureStore({
  reducer: { estatesList },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
