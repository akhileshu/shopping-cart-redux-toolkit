import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAsyncCart,
  addAsync,
  deleteAsync,
  updateAsync,
} from "./cartSlice";
import styles from "./cart.module.css";

export function Cart() {
  let items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchAsyncCart();
  }, []);
  function handleChange(e, id) {
    console.log(id);
    // you cannot directly pass two separate variables to the dispatch function when using createAsyncThunk. The dispatch function expects a single argument, which should be an action object.
    dispatch(updateAsync({ id, update: { qty: Number(e.target.value) } }));
  }

  return (
    <>
    <h1>
        Total:{items.reduce((acc, item) => acc + item.price * item.qty, 0)}
      </h1>
    <div className={styles.cartContainer}>
      {items &&
        items.map((product) => {
          const { id, title, price, thumbnail, qty } = product;
          return (
            <div className={styles.card} key={id}>
              <img src={thumbnail} alt="Denim Jeans" className={styles.image} />
              <h1>{title}</h1>
              <p className={styles.price}>${price}</p>
              <p>{`${price} × ${qty} = ${price*qty}`}</p>
              <div>
                quantity
                <select
                  value={qty}
                  onChange={(e) => handleChange(e, id)}
                  className={styles.select}
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                </select>
              </div>
              <p>
                <button
                  onClick={() => dispatch(deleteAsync(id))}
                  className={styles.deleteButton}
                >
                  delete
                </button>
              </p>
            </div>
          );
        })}
    </div>
      
    </>
  );
}
