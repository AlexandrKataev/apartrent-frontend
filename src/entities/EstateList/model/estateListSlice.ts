import axios from 'axios';

import { estateItem, estateListState, Status } from './types';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getEstateList = createAsyncThunk<estateItem[]>('pizza/getEstateList', async () => {
  const response = await axios.get<estateItem[]>('http://localhost:6100/Estate/getEstatesList');
  console.log(response.data);
  return response.data;
});

const initialState: estateListState = {
  estateList: [],
  status: null,
};

export const estateListSlice = createSlice({
  name: 'estateList',
  initialState,
  reducers: {
    setProgress: (state, action) => {
      state.estateList = action.payload;
    },
    updateProgress: (state, action) => {
      state.estateList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getEstateList.pending, (state, action) => {
      state.status = Status.LOADING;
    });
    builder.addCase(getEstateList.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.estateList = action.payload;
    });
    builder.addCase(getEstateList.rejected, (state, action) => {
      state.status = Status.ERROR;
    });
  },
});

export const { setProgress, updateProgress } = estateListSlice.actions;
export default estateListSlice.reducer;
