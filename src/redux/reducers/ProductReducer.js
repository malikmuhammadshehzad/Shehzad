import {Api} from '../../api';

import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const INITIAL_STATE = {
  products: [],
  isLoading: false,
  isError: false,
  errorMessage: null,
};

export const productsData = createAsyncThunk('productData', async thunkApi => {
  try {
    const response = await Api.get('/products');
    // console.log(' Product response :', response.data);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

const AllProductSlice = createSlice({
  name: 'AllProducts',
  initialState: INITIAL_STATE,
  reducers: {
    productRendering: (state, action) => {
      state.products = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(productsData.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(productsData.fulfilled, (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    });
    builder.addCase(productsData.rejected, (state, action) => {
      state.errorMessage = action.payload.message;
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default AllProductSlice.reducer;
