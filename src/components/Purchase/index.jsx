import axios from "axios";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { PurchaseContainer, Button } from "./style";

const API_BASE_URL = import.meta.env.VITE_API_URL;

const Purchase = () => {
  const { user } = useSelector((store) => store.userState);

  const Navigate = useNavigate();

  const purchaseOrder = async () => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/order`,
        {
          userId: user._id,
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );

      Navigate(`/orders`);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <PurchaseContainer>
      <Button type="button" onClick={purchaseOrder}>
        Purchase
      </Button>
    </PurchaseContainer>
  );
};

export default Purchase;
