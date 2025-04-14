import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

import Header from "../Header";

import {
  ProfileContainer,
  Heading,
  ProfileDescription,
  CartContainer,
  CartHeading,
  CartCount,
  TotalContainer,
  TotalHeading,
} from "./style";

import CartItem from "../CartItem";
import Purchase from "../Purchase";

const API_BASE_URL = import.meta.env.VITE_API_URL;

function Profile() {
  const { user, loading, error } = useSelector((store) => store.userState);

  const [cart, setCart] = useState({});
  const [cartLoading, setCartLoading] = useState(true);

  if (error !== "") return <div>{error}</div>;

  useEffect(() => {
    const getCart = async () => {
      try {
        setCartLoading(true);
        const cart = await axios.get(`${API_BASE_URL}/api/cart/${user._id}`, {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        });
        setCart(cart.data.cart);
        setCartLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    };

    getCart();
  }, []);

  return (
    <>
      <Header />
      {loading ? (
        <p>Loading...</p>
      ) : !cartLoading ? (
        <ProfileContainer>
          <Heading>Profile</Heading>
          <ProfileDescription>Username: {user.name}</ProfileDescription>
          <ProfileDescription>Email: {user.email}</ProfileDescription>
          <CartContainer>
            <CartHeading>
              Cart Items <CartCount>({cart.items.length} items)</CartCount>
            </CartHeading>
            {cart.items.map((item) => (
              <CartItem
                key={item._id}
                productId={item.product}
                quantity={item.quantity}
              />
            ))}
            <TotalContainer>
              <TotalHeading>Total: {cart.total.toFixed(2)}</TotalHeading>
              {cart.items.length > 0 && <Purchase />}
            </TotalContainer>
          </CartContainer>
        </ProfileContainer>
      ) : (
        <div>Cart is Loading</div>
      )}
    </>
  );
}

export default Profile;
