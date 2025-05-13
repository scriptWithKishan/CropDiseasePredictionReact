import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useSelector } from "react-redux";

import {
  OrderContainer,
  OrderHeading,
  OrdersList,
  OrderItem,
  TotalContainer,
  Total,
  Status,
} from "./style";

import Header from "../Header";
import EachOrderItem from "../EachOrderItem";

const API_BASE_URL = import.meta.env.VITE_API_URL;

const Orders = () => {
  const { user } = useSelector((store) => store.userState);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/api/order/${user._id}`,
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("token")}`,
            },
          }
        );

        console.log(response);

        setOrders(response.data.orders);
      } catch (err) {
        console.log(err.message);
      }
    };

    getOrders();
  }, []);

  return (
    <>
      <Header />
      <OrderContainer>
        <OrderHeading>Your Orders</OrderHeading>
        <OrdersList>
          {orders.length === 0 ? (
            <h2>You Have No Orders</h2>
          ) : (
            orders.map((order) => (
              <OrderItem key={order._id}>
                {order.items.map((item) => (
                  <EachOrderItem item={item} key={item._id} />
                ))}
                <TotalContainer>
                  <Total>Total: Rs. {order.total.toFixed(2)}</Total>
                  <Status>Status: {order.status}</Status>
                </TotalContainer>
              </OrderItem>
            ))
          )}
        </OrdersList>
      </OrderContainer>
    </>
  );
};

export default Orders;
