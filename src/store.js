import { configureStore } from '@reduxjs/toolkit';
import { UserDataSlice } from './features/UserDataSlice'
import { SelectedUserDetailsSlice } from './features/SelectedUser/SelectedUserSlice'
export const store = configureStore({
  reducer: {
    UserDataSlice: UserDataSlice.reducer,
    SelectedUserDetailsSlice: SelectedUserDetailsSlice.reducer
  },
})