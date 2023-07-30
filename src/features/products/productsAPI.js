
import axios from "axios";

const API_BASE_URL = "/api"; // Use "/api" as the base URL for your JSON Server

export async function fetchProducts() {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}
