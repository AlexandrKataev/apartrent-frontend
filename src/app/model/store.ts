import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import estateList from 'entities/EstateList/model/estateListSlice';

export const store = configureStore({
  reducer: { estateList },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
