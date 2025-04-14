import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

import { EachItem, ProductName, ProductPrice, ProductTotal } from "./style";

const API_BASE_URL = import.meta.env.VITE_API_URL;

const EachOrderItem = (props) => {
  const { item } = props;
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/api/product/${item.product}`,
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("token")}`,
            },
          }
        );
        setProduct(response.data.dataDetails);
      } catch (err) {
        console.log(err.message);
      }
    };

    getProduct();
  }, []);

  const discountPrice = product.price * (1 - product.discount / 100);

  return (
    <EachItem>
      <ProductName>{product.name}</ProductName>
      <ProductPrice>
        Rs. {discountPrice.toFixed(2)} x {item.quantity}
      </ProductPrice>
      <ProductTotal>Rs. {item.price.toFixed(2)}</ProductTotal>
    </EachItem>
  );
};

export default EachOrderItem;
