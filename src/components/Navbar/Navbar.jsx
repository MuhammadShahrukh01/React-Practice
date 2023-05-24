import React from "react";
import "./Navbar.css";
import { NavLink, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const data = useSelector((state) => {
    return state.cart;
  });
  console.log(data);
  return (
    <>
      <div className="nav">
        <div className="logo">
          <h1>Logo</h1>
        </div>
        <div className="tabs">
          <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/profile"}>Profile</NavLink>
            </li>
            <li>
              <NavLink to={"/products"}>All Product</NavLink>
            </li>
            <li>
              <button className="logout-btn">Logout</button>
            </li>
            <li>
              <NavLink to={"/products/cart"}>
                <i className="fa-solid fa-cart-shopping"> </i>
                {data.length}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
