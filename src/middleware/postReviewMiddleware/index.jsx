import axios from "axios";
import Cookies from "js-cookie";

import { clearInput } from "../../redux/ReviewSlice";

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const postReviewMiddleware = async (
  dispatch,
  productId,
  rating,
  comment
) => {
  try {
    const response = await axios.patch(
      `${API_BASE_URL}/api/review/${productId}`,
      {
        rating,
        comment,
      },
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    );

    dispatch(clearInput());
  } catch (err) {
    console.log(err.response.data.message);
  }
};
