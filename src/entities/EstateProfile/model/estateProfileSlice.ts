import axios, { AxiosError } from 'axios';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { estatePostType, estateProfileState } from './types';
import { EstateDto } from 'shared/api/swagger/myApi';

export const getEstateProfile = createAsyncThunk<EstateDto, string>(
  'estateProfile/getEstate',
  async (estateId) => {
    try {
      const { data } = await axios.get(`http://localhost:6100/Estate/getEstate?id=${estateId}`);
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        handleAxiosError(error);
        console.log('error', error);
      } else {
        console.log('error');
      }
    }
  },
);

// export const postEstateProfile = createAsyncThunk<estateProfileState, estatePostType>(
//   'estateProfile/postEstate',
//   async (newEstateData) => {
//     try {
//       axios.post(`http://localhost:6100/Estate/addEstate`){
//         newEstateData: newEstateData
// 			};

//     } catch (error) {
//       if (axios.isAxiosError(error)) {
//         handleAxiosError(error);
//         console.log('error', error);
//       } else {
//         console.log('error');
//       }
//     }
//   },
// );

const initialState: EstateDto = {
  id: undefined,
  name: undefined,
  description: undefined,
  buyPrice: undefined,
  rentPayment: undefined,
  status: undefined,
  lastUpdated: undefined,
};

export const estateProfileSlice = createSlice({
  name: 'estateProfile',
  initialState,
  reducers: {
    resetEstate: () => initialState,
    setEstateId: (state, action) => {
      state.id = action.payload;
    },
    setEstateName: (state, action) => {
      state.name = action.payload;
    },
    setEstateDescription: (state, action) => {
      state.description = action.payload;
    },
    setEstateBuyPrice: (state, action) => {
      state.buyPrice = action.payload;
    },
    setEstateRentPayment: (state, action) => {
      state.rentPayment = action.payload;
    },
    setEstateStatus: (state, action) => {
      state.status = action.payload;
    },
    setEstateLastUpdated: (state, action) => {
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
  resetEstate,
  setEstateId,
  setEstateName,
  setEstateDescription,
  setEstateBuyPrice,
  setEstateRentPayment,
  setEstateStatus,
  setEstateLastUpdated,
} = estateProfileSlice.actions;
export default estateProfileSlice.reducer;

function handleAxiosError(error: AxiosError<any, any>) {
  throw new Error('Function not implemented.');
}
