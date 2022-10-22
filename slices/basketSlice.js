import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    //actions
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {
      const i = state.items.findIndex(basketItem => basketItem.id === action.payload.id
      );
      let newBasket = [...state.items];
      if (i >= 0){
        //the items is in the basket remove it
        newBasket.splice(i, 1)
      }else{
        console.warn("Can't find the item your are trying to delete"
      );
    }
    state.items = newBasket
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) =>state.basket.items.reduce((total, item) => total + item.price,0);

export default basketSlice.reducer;
