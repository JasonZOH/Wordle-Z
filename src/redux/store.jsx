import { configureStore } from '@reduxjs/toolkit';
import wordReducer from './wordSlicer';

export const store = configureStore({
  reducer: {
    wordData : wordReducer
  },
})