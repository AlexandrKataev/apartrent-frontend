import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import estatesList from 'entities/EstatesList/model/estateListSlice';
import estateProfile from 'entities/EstateProfile/model/estateProfileSlice';

export const store = configureStore({
  reducer: { estatesList, estateProfile },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
