import {
  ReviewItem,
  Review,
  RatingIcon,
  RatingContainer,
  RatingValue,
} from "./style";

const colors = {
  orange: "#F2C265",
  grey: "a9a9a9",
};
const stars = Array(5).fill(0);

const Reviews = (props) => {
  return (
    <ReviewItem>
      <Review>
        <p>Comment: {props.review.comment}</p>
        <RatingContainer>
          <RatingValue>({props.review.rating} stars)</RatingValue>
          {stars.map((_, index) => (
            <RatingIcon
              key={index}
              color={props.review.rating > index ? colors.orange : colors.grey}
            />
          ))}
        </RatingContainer>
      </Review>
    </ReviewItem>
  );
};

export default Reviews;
