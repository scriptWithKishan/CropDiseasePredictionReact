import styled from "styled-components";
import { Rating } from "react-simple-star-rating";

export const ReviewForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ccc;
  padding: 10px;
`;

export const ReviewComment = styled.input`
  width: 60%;
  height: 30px;
  border: 0px solid #ccc;
  border-bottom: 2px solid #000000;
  padding: 5px;
  padding-left: 10px;
  font-size: 16px;
  margin: 10px;
  color: #000000;
  outline: none;
`;

export const RatingInput = styled(Rating)`
  
`;

export const Submit = styled.button`
  padding: 5px 10px;
  background-color: #000000;
  color: #ffffff;
  border: 1px solid #000000;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  margin-right: 20px;
`;
