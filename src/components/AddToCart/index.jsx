import Popup from "reactjs-popup";
import { useState } from "react";

import {
  BuyButton,
  QuantityContainer,
  QuantityController,
  Quantity,
  AddButton,
} from "./style";

const AddToCart = (props) => {
  const [quantity, setQuantity] = useState(1);

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
        <QuantityController onClick={() => setQuantity(quantity - 1)}>
          -
        </QuantityController>
        <Quantity>{quantity}</Quantity>
        <QuantityController onClick={() => setQuantity(quantity + 1)}>
          +
        </QuantityController>
        <AddButton>Add</AddButton>
      </QuantityContainer>
    </Popup>
  );
};

export default AddToCart;
