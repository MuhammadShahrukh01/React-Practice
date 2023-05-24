import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "../../axios/Axios";
import "./ProductItem.css";
import Loader from "../../Loader/Loader";

const ProductItem = () => {
  const [productData, setProductData] = useState([]);
  const [loader, setLoader] = useState(true);

  const param = useParams();
  let { id } = param;
  console.log(id);

  const getEachProduct = async () => {
    try {
      let res = await Axios.get("/products/" + id);
      setProductData([res.data]);
      setLoader(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEachProduct();
  }, []);
  return (
    <>
      <div className="main_product_div">
        {loader ? (
          <Loader />
        ) : (
          productData.map((item) => {
            return (
              <div className="item" key={item.id}>
                <img src={item.image} alt="" className="item_image" />
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <h2>{"$" + item.price}</h2>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default ProductItem;
