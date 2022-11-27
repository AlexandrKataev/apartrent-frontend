import axios, { AxiosError } from 'axios';

import { estateItem, estateListState, Status } from './types';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getEstateList = createAsyncThunk<estateItem[]>(
  'estateList/getEstateList',
  //@ts-ignore
  async () => {
    try {
      const { data } = await axios.get('http://localhost:6100/Estate/getEstatesList');
      console.log(data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        handleAxiosError(error);
        console.log('error');
      } else {
        console.log(error);
      }
    }
    // console.log('fetch');
    // const response = await axios.get<estateItem[]>('http://localhost:6100/Estate/getEstatesList');
    // console.log(response.data);
    // return response.data;
  },
);

const initialState: estateListState = {
  estateList: [],
  status: null,
};

export const estateListSlice = createSlice({
  name: 'estateList',
  initialState,
  reducers: {
    setEstateList: (state, action) => {
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

export const { setEstateList, updateProgress } = estateListSlice.actions;
export default estateListSlice.reducer;
function handleAxiosError(error: AxiosError<any, any>) {
  throw new Error('Function not implemented.');
}
