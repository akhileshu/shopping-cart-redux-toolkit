import axios from "axios";

const API_BASE_URL = "https://your-json-server-domain.com/products";

export async function fetchProducts() {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    // Handle errors appropriately
    console.error("Error fetching products:", error);
    throw error;
  }
}

