import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: "ALL"
}

const filter = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeStatus: (state, action: PayloadAction<string>) => {state.value = action.payload}
  }
});

export const {changeStatus} = filter.actions;
export default filter.reducer;