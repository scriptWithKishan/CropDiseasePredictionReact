import axios from "axios";
import Cookies from "js-cookie";

import { setProducts, setError, setLoading } from "../../redux/ProductsSlice";

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const GetProductsMiddleware = async (dispatch) => {
  try {
    dispatch(setLoading(true));

    const response = await axios.get(`${API_BASE_URL}/api/product`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    dispatch(setProducts(response.data.data));
  } catch (err) {
    dispatch(setError(err.response.data.message));
  }
};
