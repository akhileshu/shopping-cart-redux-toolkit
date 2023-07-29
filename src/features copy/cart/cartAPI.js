// A mock function to mimic making an async request for data
import axios from "axios";
export async function fetchItems() {
  return await axios.get("http://localhost:8080/cart");
}
export async function addItem(item) {

  return await axios.post("http://localhost:8080/cart",item);
}
export async function deleteItem(id) {
  return await axios.delete(`http://localhost:8080/cart/${id}`);
}
export async function updateItem(id,updatedItem) {
    // console to debug
  // console.log(id,updatedItem)
  return await axios.patch(`http://localhost:8080/cart/${id}`,updatedItem);
}
