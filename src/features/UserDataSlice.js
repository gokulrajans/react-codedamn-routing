import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios  from 'axios';
export const fetchUserData = createAsyncThunk("fetch user data", async()=> {
    try{
        const { data } = await axios(
            "https://jsonplaceholder.typicode.com/users"
          );
          console.log(data,"data-- check");
    } catch {
        console.log("Error occurred...")
    }
})

export const UserDataSlice = createSlice({
  name: 'userData',
  initialState: {
    useData: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.fulfilled, (state, {payload}) => {
        state.useData = payload;
    });
    builder.addCase(fetchUserData.pending, (state) => {
        console.log(state)
    });
    builder.addCase(fetchUserData.rejected, (state) => {
        console.log("Error occured...");
    })

  }
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default UserDataSlice