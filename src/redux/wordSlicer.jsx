import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wordRandomData: "",
}

export const wordSlice = createSlice({
  name : 'Wordle',
  initialState,
  reducers: {
    setWordRandomData : (state, action) =>{
      state.wordRandomData = action.payload;
    }
  }
})

export const { setWordRandomData, setLengthWord } = wordSlice.actions;

export default wordSlice.reducer;