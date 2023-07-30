import axios from "axios";

// Set the relative URL for your JSON Server API
const API_BASE_URL = "/api"; // Change "/api" to the appropriate base URL of your JSON Server

export async function fetchItems() {
  try {
    const response = await axios.get(`${API_BASE_URL}/items`);
    return response.data;
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;
  }
}

export async function addItem(item) {
  try {
    const response = await axios.post(`${API_BASE_URL}/items`, item);
    return response.data;
  } catch (error) {
    console.error("Error adding item:", error);
    throw error;
  }
}

export async function deleteItem(id) {
  try {
    const response = await axios.delete(`${API_BASE_URL}/items/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting item:", error);
    throw error;
  }
}

export async function updateItem(id, updatedItem) {
  try {
    const response = await axios.patch(`${API_BASE_URL}/items/${id}`, updatedItem);
    return response.data;
  } catch (error) {
    console.error("Error updating item:", error);
    throw error;
  }
}
