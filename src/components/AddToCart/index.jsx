import Popup from "reactjs-popup";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";

import {
  BuyButton,
  QuantityContainer,
  QuantityController,
  Quantity,
  AddButton,
} from "./style";

const AddToCart = (props) => {
  const [quantity, setQuantity] = useState(1);
  const { user } = useSelector((store) => store.userState);

  const addToCart = async () => {
    const API_BASE_URL = import.meta.env.VITE_API_URL;
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/cart/add`,
        {
          productId: props.productId,
          userId: user._id,
          quantity,
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Popup
      trigger={
        <BuyButton type="button" disabled={props.stock <= 0}>
          Add to Cart
        </BuyButton>
      }
      position="right center"
    >
      <QuantityContainer>
        <QuantityController
          disabled={quantity <= 1}
          onClick={() => setQuantity(quantity - 1)}
        >
          -
        </QuantityController>
        <Quantity>{quantity}</Quantity>
        <QuantityController
          disabled={quantity >= props.stock}
          onClick={() => setQuantity(quantity + 1)}
        >
          +
        </QuantityController>
        <AddButton onClick={addToCart}>Add</AddButton>
      </QuantityContainer>
    </Popup>
  );
};

export default AddToCart;
