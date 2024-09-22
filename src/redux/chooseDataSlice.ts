import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface ChooseDataItem {
  id: number;
  title: string;
  image_path: string;
}

interface ChooseDataState {
  items: ChooseDataItem[];
}

const initialState: ChooseDataState = {
  items: [],
};

export const fetchChooseData = createAsyncThunk<ChooseDataItem[]>(
  'chooseData/fetchChooseData',
  async () => {
    const response = await fetch('/chooseData.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  }
);

const chooseDataSlice = createSlice({
  name: 'chooseData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchChooseData.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export default chooseDataSlice.reducer;
