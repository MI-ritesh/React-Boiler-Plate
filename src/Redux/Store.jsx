import { configureStore } from '@reduxjs/toolkit';
import ExampleSlice from './Features/ExampleSlice';
import ApiSlice from './Features/ApiSlice';

const store = configureStore({
  reducer: {
    example : ExampleSlice,
    someApiFeature : ApiSlice
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;