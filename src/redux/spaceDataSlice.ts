import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface SpaceDataItem {
  id: number;
  title: string;
  image_path: string;
  category: string;
  category_icon: string;
  distance: string;
  price: number;
}

interface SpaceDataState {
  items: SpaceDataItem[];
}

const initialState: SpaceDataState = {
  items: [],
};

export const fetchSpaceData = createAsyncThunk<SpaceDataItem[]>(
  'spaceData/fetchSpaceData',
  async () => {
    const response = await fetch('/spaceData.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  }
);

const spaceDataSlice = createSlice({
  name: 'spaceData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSpaceData.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export default spaceDataSlice.reducer;
