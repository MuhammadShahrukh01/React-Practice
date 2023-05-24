import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Cart.css";

const Cart = () => {
  let data = useSelector((state) => {
    return state.cart;
  });
  return (
    <>
      <div className="main_cart_div">
        {data.length === 0 ? (
          <div className="no_item">
            <h1>No Item</h1>
          </div>
        ) : (
          data.map((item, i) => {
            return (
              <div className="main_border_box" key={i}>
                <div className="border_box">
                  <div className="product_image_box">
                    <img src={item.image} alt="" className="item_image" />
                  </div>
                  <div className="product_title_description_box">
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                  </div>
                  <div className="product_price_box">
                    <h2>{"$" + item.price}</h2>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default Cart;
