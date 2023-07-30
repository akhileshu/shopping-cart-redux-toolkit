import axios from "axios";

const API_BASE_URL = "https://your-json-server-domain.com/cart";

export async function fetchItems() {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    // Handle errors appropriately
    console.error("Error fetching items:", error);
    throw error;
  }
}

export async function addItem(item) {
  try {
    const response = await axios.post(API_BASE_URL, item);
    return response.data;
  } catch (error) {
    // Handle errors appropriately
    console.error("Error adding item:", error);
    throw error;
  }
}

export async function deleteItem(id) {
  try {
    const response = await axios.delete(`${API_BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    // Handle errors appropriately
    console.error("Error deleting item:", error);
    throw error;
  }
}

export async function updateItem(id, updatedItem) {
  try {
    // console to debug
    // console.log(id, updatedItem)
    const response = await axios.patch(`${API_BASE_URL}/${id}`, updatedItem);
    return response.data;
  } catch (error) {
    // Handle errors appropriately
    console.error("Error updating item:", error);
    throw error;
  }
}
