import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import { estateApi } from 'shared/api/services/EstateService';

export const store = configureStore({
  reducer: { [estateApi.reducerPath]: estateApi.reducer },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(estateApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
