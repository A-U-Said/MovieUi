import { IApiError } from "@/clients/client.types";
import { IReducerBase } from "../reducer.types";
import { UserStartupView } from "@/sharedTypes/users";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface ICurrentUserState extends IReducerBase {
  user: UserStartupView | null;
}

export const currentUserInitialState: ICurrentUserState = {
  user: null,
  loading: false,
  error: null
};


const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState: currentUserInitialState,
  reducers: {
    authStartupStart: (state) => {
      state.user = null;
      state.loading = true;
      state.error = null;
    },
    authStartupSuccess: (state, action: PayloadAction<UserStartupView>) => {
      state.user = action.payload
      state.loading = false;
    },
    authStartupError: (state, action: PayloadAction<IApiError>) => {
      state.loading = false;
      state.error = action.payload;
    },

    resetUserState: (state) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      state = currentUserInitialState;
    }
  }
})


export const { 
  authStartupStart, 
  authStartupSuccess, 
  authStartupError, 
  
  resetUserState
} = currentUserSlice.actions;

export default currentUserSlice.reducer;