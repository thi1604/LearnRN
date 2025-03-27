import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Item {
  id: string, 
  title: string,
  avatar: string,
  description: string
}

const initialState: Item[] = [];


const itemsArray = createSlice({
  name: 'itemArray',
  initialState,
  reducers: {
    reInit : (state, action:PayloadAction<{dataAfterCallAPI: Array<Item>}>) => [...action.payload.dataAfterCallAPI],
    addItem: (state, action: PayloadAction<Item>) => [...state, action.payload],
    removeItem: (state, action: PayloadAction<string>) => state.filter(item => item.id != action.payload),
    editItem: (state, action: PayloadAction<{id: string, title: string, des: string}>) : void => {
      const itemCurrent : Item | undefined = state.find(item => item.id == action.payload.id);
      if(itemCurrent) {
        itemCurrent.title = action.payload.title;
        itemCurrent.description = action.payload.des;
      }
    }
  }
});

export const {reInit, addItem, removeItem, editItem} = itemsArray.actions;
export default itemsArray.reducer; 

