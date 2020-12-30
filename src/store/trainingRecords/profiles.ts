import { createSlice } from "@reduxjs/toolkit";

const Profileslice = createSlice({
  name: "profile",
  initialState: [],
  reducers: {
    profileSelected: (profile, action) => {
      profile.filter((item) => {
        return item._id === action.payload._id;
      });
    },
  },
});

export default Profileslice.reducer;
