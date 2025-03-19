import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const Container = styled.div`
  background: linear-gradient(180deg, #7fbe70 550px, #ffffff 0.1px);
  height: 100%;
`;

export const Description = styled.div`
  display: flex;
`;

export const Start = styled.div`
  width: 65%;
  padding: 50px;
  height: 100%;
  align-self: start;
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.h1`
  font-size: 70px;
  color: #ffffff;
  text-align: center;
  font-family: "Poppins", sans-serif;
`;

export const PredictButton = styled.button`
  background-color: transparent;
  border: 2px solid #ffffff;
  color: #ffffff;
  padding: 15px 30px;
  font-size: 16px;
  border-radius: 20px;
  cursor: pointer;
  align-self: center;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    background-color: #ffffff;
    color: #7fbe70;
  }
`;

export const Banner = styled.div`
  width: 35%;
`;

export const Image = styled.img`
  width: 100%;
  height: 700px;
`;

export const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px;
`;

export const ProductHeading = styled.h1`
  font-size: 35px;
  color: rgb(0, 0, 0);
  font-family: "Poppins", sans-serif;
`;

export const ProductSpan = styled.span`
  color: #7fbe70;
`;

export const ProductDescription = styled.p`
  font-size: 15px;
  color: rgb(136, 136, 136);
  font-family: "Poppins", sans-serif;
`;

export const ProductButton = styled.button`
  background-color: #7fbe70;
  border: 2px solid #7fbe70;
  color: #ffffff;
  padding: 15px 30px;
  font-size: 16px;
  border-radius: 30px;
  cursor: pointer;
  align-self: center;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    background-color: #ffffff;
    color: #7fbe70;
  }
`;

export const CustomSwipe = styled(Swiper)`
  height: 25rem;
  padding: 2rem 0;
  width: 60%;
  position: relative;
`;

export const CustomSwiperSlide = styled(SwiperSlide)`
  width: 27rem;
  height: 12rem;
  position: relative;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 22rem;
  border-radius: 20px;
`;

export const ProductName = styled.p`
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  font-size: 40px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  text-align: center;
`;
