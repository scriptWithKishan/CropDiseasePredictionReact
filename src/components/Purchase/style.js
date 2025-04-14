import styled from "styled-components";

export const PurchaseContainer = styled.div``;

export const Button = styled.button`
  background-color: rgb(16, 146, 70);
  color: #ffffff;
  border: 1px solid #ffffff;
  padding: 8px 15px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.5s ease-in-out;

  &:hover {
    background-color: #ffffff;
    color: rgb(16, 146, 70);
    border: 1px solid rgb(16, 146, 70);
  }
`;
