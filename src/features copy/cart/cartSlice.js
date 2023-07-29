import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchItems, addItem, deleteItem, updateItem } from "./cartAPI";

const initialState = {
  items: [],
  status: "idle",
};

export const fetchAsyncCart = createAsyncThunk("cart/fetchItems", async () => {
  // this will do our work in db
  // api calling here
  const response = await fetchItems();
  // The value we return becomes the `fulfilled` action payload
  return response.data;
});
export const addAsync = createAsyncThunk("cart/addItem", async (item) => {
  const response = await addItem(item);
  return response.data;
});
export const deleteAsync = createAsyncThunk("cart/deleteItem", async (id) => {
  try {
    const response = await deleteItem(id);
    if (response.status === 200) {
      return id;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error deleting item:", error);
    throw error;
  }
}); 
export const updateAsync = createAsyncThunk(
  "cart/updateItem",
  // expects a single argument
  async ({ id, update }) => {
    // { id,{ qty: e.target.value } }
    const response = await updateItem(id, update);
    return { id, updatedItem: response.data };
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAsyncCart.fulfilled, (state, action) => {
        state.status = "idle";
        // we are updating frontend after changes updated in db
        state.items = action.payload;
      })
      .addCase(addAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.items.push(action.payload);
      })
      .addCase(deleteAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.items = state.items.filter((item) => item.id != action.payload);
      })
      .addCase(updateAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const { id, updatedItem } = action.payload;
        state.items = state.items.map((item) =>
          item.id == id ? updatedItem : item
        );
      });
  },
});

// export const { increment, decrement, incrementByAmount } = cartSlice.actions;

export default cartSlice.reducer;
