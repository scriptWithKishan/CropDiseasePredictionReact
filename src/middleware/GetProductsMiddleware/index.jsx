import axios from "axios";
import Cookies from "js-cookie";

import { setProducts, setError, setLoading } from "../../redux/ProductsSlice";

export const GetProductsMiddleware = async (dispatch) => {
  try {
    dispatch(setLoading(true));

    const response = await axios.get("http://localhost:4000/api/product", {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    dispatch(setProducts(response.data.data));
  } catch (err) {
    dispatch(setError(err.response.data.message));
  }
};
