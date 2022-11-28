import axios, { AxiosError } from 'axios';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { estateProfileState, resStatus } from './types';

export const getEstateProfile = createAsyncThunk<estateProfileState, string>(
  'estateProfile/getEstateProfile',
  async (estateId) => {
    try {
      const { data } = await axios.get(`http://localhost:6100/Estate/getEstate?id=${estateId}`);

      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        handleAxiosError(error);
        console.log('error', error);
      } else {
        console.log('error', error);
      }
    }
  },
);

const initialState: estateProfileState = {
  id: '',
  name: '',
  description: '',
  buyPrice: '',
  rentPayment: '',
  status: '',
  lastUpdated: '',
};

export const estateProfileSlice = createSlice({
  name: 'estateProfile',
  initialState,
  reducers: {
    // resetEstateProfile: (state, action) => {
    //   state = initialState;
    // },
    // resetEstateProfile: (state, action) => {
    //   state = action.payload;
    // },
    // resetEstateProfile: (state, action) => {
    //   state = action.payload;
    // },
    setEstateProfileId: (state, action) => {
      state.name = action.payload;
    },
    setEstateProfileName: (state, action) => {
      state.name = action.payload;
    },
    setEstateProfileDescription: (state, action) => {
      state.description = action.payload;
    },
    setEstateProfileBuyPrice: (state, action) => {
      state.buyPrice = action.payload;
    },
    setEstateProfileRentPayment: (state, action) => {
      state.rentPayment = action.payload;
    },
    setEstateProfileStatus: (state, action) => {
      state.status = action.payload;
    },
    setEstateProfileLastUpdated: (state, action) => {
      state.lastUpdated = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getEstateProfile.fulfilled, (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.description = action.payload.description;
      state.buyPrice = action.payload.buyPrice;
      state.rentPayment = action.payload.rentPayment;
      state.status = action.payload.status;
      state.lastUpdated = action.payload.lastUpdated;
    });
  },
});

export const {
  setEstateProfileId,
  setEstateProfileName,
  setEstateProfileDescription,
  setEstateProfileBuyPrice,
  setEstateProfileRentPayment,
  setEstateProfileStatus,
  setEstateProfileLastUpdated,
} = estateProfileSlice.actions;
export default estateProfileSlice.reducer;

function handleAxiosError(error: AxiosError<any, any>) {
  throw new Error('Function not implemented.');
}
