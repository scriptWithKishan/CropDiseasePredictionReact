import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import Cookies from "js-cookie";

import {
  CartItemContainer,
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
  Quantity,
} from "./style";

const API_BASE_URL = import.meta.env.VITE_API_URL;

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const colors = { orange: "#F2C265", grey: "a9a9a9" };
const stars = Array(5).fill(0);

const CartItem = (props) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/api/product/${props.productId}`,
          {
            headers: { Authorization: `Bearer ${Cookies.get("token")}` },
          }
        );
        setProduct(response.data.dataDetails);
      } catch (error) {
        console.error("Failed to fetch product:", error.message);
      }
    };

    fetchProduct();
  }, [props.productId]);

  if (!product) return <p>Loading product...</p>;

  const imageUrls = product.images
    .split(",")
    .map((img) => `${API_BASE_URL}/${img}`);
  const rating = Math.round(product.ratingsAverage);
  const discountedPrice =
    product.price - (product.price * product.discount) / 100;

  return (
    <CartItemContainer>
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
            {imageUrls.map((url, index) => (
              <ProductImg key={index} src={url} alt={product.name} />
            ))}
          </Carousel>
        </div>

        <ProductDetails>
          <ProductName>{product.name}</ProductName>
          <RatingContainer>
            {stars.map((_, index) => (
              <RatingIcon
                key={index}
                color={rating > index ? colors.orange : colors.grey}
              />
            ))}
            <RatingDescription>({rating} stars)</RatingDescription>
          </RatingContainer>
          <ProductDescription>{product.description}</ProductDescription>
          <PriceContainer>
            <Discount>-{product.discount}%</Discount>
            <DiscountPrice>&#8377;{discountedPrice}</DiscountPrice>
            <OriginalPrice>
              MRP: <Scratched>{product.price}</Scratched>
            </OriginalPrice>
          </PriceContainer>
          <StockContainer>
            <Stock stock={product.stock}>
              {product.stock < 10 ? `Only ${product.stock} left` : "In Stock"}
            </Stock>
            <Quantity>Quantity: {props.quantity}</Quantity>
          </StockContainer>
        </ProductDetails>
      </ProductItem>
    </CartItemContainer>
  );
};

export default CartItem;
