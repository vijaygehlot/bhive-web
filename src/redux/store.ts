import { configureStore } from '@reduxjs/toolkit';
import chooseDataReducer from './chooseDataSlice';
import spaceDataReducer from './spaceDataSlice';

const store = configureStore({
  reducer: {
    chooseData: chooseDataReducer,
    spaceData: spaceDataReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
