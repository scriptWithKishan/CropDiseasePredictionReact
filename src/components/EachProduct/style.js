import styled from "styled-components";
import { FaStar } from "react-icons/fa";

export const ProductItem = styled.div`
  display: flex;
  font-family: "Poppins", sans-serif;
`;

export const ProductImg = styled.img`
  width: 300px;
  height: 250px;
  object-fit: contain;
`;

export const ProductDetails = styled.div`
  width: 100%;
  padding-left: 20px;
`;

export const ProductName = styled.h1`
  font-size: 22px;
  margin-bottom: 2px;
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

export const RatingIcon = styled(FaStar)`
  font-size: 15px;
  margin: 0;
`;

export const RatingDescription = styled.p`
  font-size: 10px;
  margin: 0;
  margin-left: 5px;
`;

export const ProductDescription = styled.p`
  font-size: 15px;
  max-height: 4.5em;
  overflow-y: auto;
  line-height: 1.5em;
  text-align: justify;
  padding-right: 10px;

  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(70, 70, 70);
    border-radius: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: rgb(190, 190, 190);
  }

  &::-webkit-scrollbar-button {
    display: none;
    height: 0;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const Discount = styled.p`
  font-size: 25px;
  margin: 0;
  margin-right: 10px;
  color: rgb(188, 31, 13);
`;

export const DiscountPrice = styled.p`
  font-size: 16px;
  margin: 0;
  margin-right: 10px;
  color: rgb(0, 0, 0);
`;

export const OriginalPrice = styled.p`
  font-size: 12px;
  margin: 0;
  color: rgb(105, 105, 105);
`;

export const Scratched = styled.span`
  text-decoration: line-through;
`;
