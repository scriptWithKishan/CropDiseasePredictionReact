import { useSelector, useDispatch } from "react-redux";

import { setRating, setComment } from "../../redux/ReviewSlice";
import { postReviewMiddleware } from "../../middleware/postReviewMiddleware";

import { ReviewForm, ReviewComment, RatingInput, Submit } from "./style";
import { ProductDescription } from "../EachProduct/style";

const ReviewInput = (props) => {
  const dispatch = useDispatch();
  const { rating, comment } = useSelector((state) => state.reviewState);

  const postReview = (e) => {
    e.preventDefault();
    postReviewMiddleware(dispatch, props.productId, rating, comment);
    window.location.reload();
  };

  return (
    <ReviewForm onSubmit={postReview}>
      <ReviewComment
        type="text"
        placeholder="Write a review"
        value={comment}
        onChange={(e) => dispatch(setComment(e.target.value))}
        required
      />
      <RatingInput
        onClick={(rate) => dispatch(setRating(rate))}
        initialValue={rating}
        size={20}
        
      />
      <Submit typ="submit">Post</Submit>
    </ReviewForm>
  );
};

export default ReviewInput;
