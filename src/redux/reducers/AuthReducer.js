import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {Api} from '../../api';

const INITIAL_STATE = {
  userData: null,
  isError: false,
  isLoading: false,
  isSuccess: false,
  errorMessage: '',
  status: '',
};

export const signupUser = createAsyncThunk('signupUser', async () => {});

export const loginUser = createAsyncThunk(
  'loginUser',
  async (paramData, thunkApi) => {
    console.log('paramData', paramData);
    // paramData {"password": "0lelplR", "username": "kminchelle"}
    try {
      // calling post request with body data
      // confusion about paraData 
      const response = await Api.post('/auth/login', paramData);
      console.log('response', response.data);
      return response.data
    } catch (error) {
      console.log('error:', error);
      return thunkApi.rejectWithValue(error);
    }
  },
);

const slice = createSlice({
  name: 'AuthReducer',
  initialState: INITIAL_STATE,
  reducers: {
    // local function
    updateUserData: (state, action) => {
      state.userData = {...state.userData, ...action.payload};
    },
    logoutUser: state => {
      state.userData = null;
    },
  },
  extraReducers: builder => {
    // signup pending case
    builder.addCase(signupUser.pending, state => {
      state.isLoading = true;
    });
    // signupFulfill case
    builder.addCase(signupUser.fulfilled, (state, action) => {
      state.userData = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
    // signupRejected case
    builder.addCase(signupUser.rejected, (state, action) => {
      state.errorMessage = action.payload.message;
      state.isError = true;
      state.isLoading = false;
    });

    // Login Pending case
    builder.addCase(loginUser.pending, state => {
      state.isLoading = true;
    });
    // Login  Fulfil case
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.userData = action.payload;
      state.isLoading = false;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      // this data is coming from API data
      state.errorMessage = action.payload.message;
      state.isError = true;
      state.isLoading = false;
    });
  },
});
// why we use this slice.action

export const {updateUserData, logoutUser} = slice.actions;
export default slice.reducer;
