import { configureStore } from '@reduxjs/toolkit';
import ExampleSlice from './Features/ExampleSlice';

const store = configureStore({
  reducer: {
    example : ExampleSlice
  },
});

export default store;