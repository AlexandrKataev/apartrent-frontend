import axios, { AxiosError } from 'axios';

import { estatesListState, resStatus } from './types';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getEstatesList = createAsyncThunk('estateList/getEstateList', async () => {
  try {
    const { data } = await axios.get('http://localhost:6100/Estate/getEstatesList');
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      handleAxiosError(error);
      console.log('error', error);
    } else {
      console.log('error', error);
    }
  }
});

const initialState: estatesListState = {
  estatesList: [],
  status: null,
};

export const estatesListSlice = createSlice({
  name: 'estatesList',
  initialState,
  reducers: {
    setEstatesList: (state, action) => {
      state.estatesList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getEstatesList.pending, (state) => {
      state.status = resStatus.LOADING;
    });
    builder.addCase(getEstatesList.fulfilled, (state, action) => {
      state.status = resStatus.SUCCESS;
      state.estatesList = action.payload;
    });
    builder.addCase(getEstatesList.rejected, (state) => {
      state.status = resStatus.ERROR;
    });
  },
});

export const { setEstatesList } = estatesListSlice.actions;
export default estatesListSlice.reducer;

function handleAxiosError(error: AxiosError<any, any>) {
  throw new Error('Function not implemented.');
}
