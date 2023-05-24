import React, { useEffect, useState } from "react";
import Axios from "../../axios/Axios";
import Loader from "../../Loader/Loader";
import Card from "../../Card/Card";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);

  const getProducts = async () => {
    try {
      let res = await Axios.get("/products");
      setProducts(res.data);
      setLoader(false);
    } catch (err) {
      console.log(err);
      setLoader(true);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="heading1">
        <h1>All Products</h1>
      </div>

      <div className="main_card_div">
        {loader ? (
          <Loader />
        ) : (
          products.map((currElem) => {
            return <Card currElem={currElem} key={currElem.id} />;
          })
        )}
      </div>
    </>
  );
};

export default Products;
