import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAsync } from "./productsSlice";
import { addAsync, fetchAsyncCart } from "../../features copy/cart/cartSlice";

import styles from "./product.module.css"; // Import the CSS module

export function Product() {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  // cart
  let items = useSelector((state) => state.cart.items);

  useEffect(() => {
    dispatch(fetchAsyncCart());
    dispatch(fetchAsync());
  }, []);

  return (
    <div className={styles.homeContainer}>
      {" "}
      {/* Use the CSS module class */}
      {products &&
        products.map((product) => {
          const { id, title, description, price, thumbnail } = product;
          const item = items.find((item) => item.id === id);
          return (
            <div className={styles.card} key={id}>
              {" "}
              <img
                src={thumbnail}
                alt="Denim Jeans"
                style={{ width: "100%" }}
              />
              <h3>{title}</h3>
              <p className={styles.price}>${price}</p> <p>{description}</p>
              <p>
                {!item && (
                  <button
                    onClick={() =>
                      dispatch(
                        addAsync({ id, title, price, qty: 1, thumbnail })
                      )
                    }
                  >
                    Add to Cart
                  </button>
                )}
              </p>
            </div>
          );
        })}
    </div>
  );
}
