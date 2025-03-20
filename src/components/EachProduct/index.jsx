import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "reactjs-popup/dist/index.css";

import Reviews from "../Reviews";
import ReviewInput from "../ReviewInput";
import AddToCart from "../AddToCart";

import {
  ProductItem,
  ProductDetails,
  ProductName,
  RatingContainer,
  RatingIcon,
  RatingDescription,
  ProductDescription,
  PriceContainer,
  Discount,
  DiscountPrice,
  OriginalPrice,
  Scratched,
  ProductImg,
  StockContainer,
  Stock,
  ReactPopup,
  ReviewButton,
  ReviewContainer,
  ReviewHeading,
  ReviewList,
} from "./style";

const API_BASE_URL = import.meta.env.VITE_API_URL;

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const colors = {
  orange: "#F2C265",
  grey: "a9a9a9",
};
const stars = Array(5).fill(0);

function EachProduct(props) {
  const imageArray = props.product.images.split(",");
  const imageUrls = imageArray.map((image) => `${API_BASE_URL}/${image}`);
  let rating = Math.round(props.product.ratingsAverage);

  return (
    <>
      <ProductItem>
        <div style={{ width: "30%" }}>
          <Carousel
            responsive={responsive}
            swipeable
            draggable
            infinite
            autoPlay
            autoPlaySpeed={3000}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          >
            {imageUrls.map((imageUrl, index) => (
              <ProductImg key={index} src={imageUrl} alt={props.product.name} />
            ))}
          </Carousel>
        </div>
        <ProductDetails>
          <ProductName>{props.product.name}</ProductName>
          <RatingContainer>
            {stars.map((_, index) => (
              <RatingIcon
                key={index}
                color={rating > index ? colors.orange : colors.grey}
              />
            ))}
            <RatingDescription>({rating} stars)</RatingDescription>
          </RatingContainer>
          <ProductDescription>{props.product.description}</ProductDescription>
          <PriceContainer>
            <Discount>-{props.product.discount}%</Discount>
            <DiscountPrice>
              &#8377;
              {props.product.price -
                (props.product.price * props.product.discount) / 100}
            </DiscountPrice>
            <OriginalPrice>
              MRP: <Scratched>{props.product.price}</Scratched>
            </OriginalPrice>
          </PriceContainer>
          <StockContainer>
            <Stock stock={props.product.stock}>
              {props.product.stock < 10
                ? `Only ${props.product.stock} left`
                : "In Stock"}
            </Stock>
            <AddToCart productId={props.product._id} stock={props.product.stock} />
          </StockContainer>
          <ReactPopup
            trigger={<ReviewButton>Reviews</ReviewButton>}
            modal
            contentStyle={{
              width: "80%",
              height: "85%",
              overflowY: "scroll",
            }}
          >
            <ReviewContainer>
              <ReviewHeading>Reviews</ReviewHeading>
              <ReviewList>
                {props.product.reviews.length > 0 ? (
                  props.product.reviews.map((review) => (
                    <Reviews key={review._id} review={review} />
                  ))
                ) : (
                  <p>No Reviews</p>
                )}
              </ReviewList>
              <ReviewInput productId={props.product._id} />
            </ReviewContainer>
          </ReactPopup>
        </ProductDetails>
      </ProductItem>
    </>
  );
}

export default EachProduct;
