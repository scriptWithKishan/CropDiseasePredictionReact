import styled from "styled-components";
import { FaStar } from "react-icons/fa";

export const ReviewItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Review = styled.div`
  border-bottom: 1px solid #ccc;
  width: 100%;
  display: flex;
  justify-content: space-between;
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

export const RatingValue = styled.p`
  font-size: 8px;
  margin: 0;
  margin-right: 5px;
`;
