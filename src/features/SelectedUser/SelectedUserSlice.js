import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedUserDetails: {
    name: "Gokulraj Varatharajan",
    email: "gokul19.v@gmail.com",
    password: 'Gokul$3897'
  }
}

export const SelectedUserDetailsSlice = createSlice({
  name: 'SelectedUserDetails',
  initialState,
  reducers: {
    setSelectedUserData: (state, actions) => {
      state.selectedUserDetails = actions.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setSelectedUserData } = SelectedUserDetailsSlice.actions

export default SelectedUserDetailsSlice