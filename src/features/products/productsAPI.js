// A mock function to mimic making an async request for data
import axios from "axios";
export async function fetchProducts() {
  return await axios.get("http://localhost:8080/products");
}
