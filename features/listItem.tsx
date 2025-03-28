import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Item {
  _id: string, 
  title: string,
  avatar: string,
  description: string,
  deleted: boolean,
  isDone: boolean
}

const initialState: Item[] = [];

const itemsArray = createSlice({
  name: 'itemArray',
  initialState,
  reducers: {
    reInit : (state, action:PayloadAction<{dataAfterCallAPI: Array<Item>}>) => {return [...action.payload.dataAfterCallAPI]},
    addItem: (state, action: PayloadAction<Item>) => [...state, action.payload],
    removeItem: (state, action: PayloadAction<string>) => {
      const item = state.find(item => item._id == action.payload);
      if(item) item.deleted = true; //You change state already
      // console.log([...state]); 
      // return [...state]; // if you return and still hold line 21, state will not know get value(because you return 2 change)
    },
    editItem: (state, action: PayloadAction<{_id: string, title: string, des: string}>) : void => {
      const itemCurrent : Item | undefined = state.find(item => item._id == action.payload._id);
      if(itemCurrent) {
        itemCurrent.title = action.payload.title;
        itemCurrent.description = action.payload.des;
      }
    },
    finishedItem: (state, action: PayloadAction<string>)=> {
      const item = state.find(item => item._id == action.payload);
      if(item){
        item.isDone = true;
      }
    },
    backItem: (state, action: PayloadAction<string>)=> {
      const item = state.find(item => item._id == action.payload);
      if(item){
        item.isDone = false;
      }
    }
  }
});

export const {reInit, addItem, removeItem, editItem, finishedItem, backItem} = itemsArray.actions;
export default itemsArray.reducer; 

