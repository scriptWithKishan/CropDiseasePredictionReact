import styled from "styled-components";

export const BuyButton = styled.button`
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

export const QuantityContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 5px 0px;
`;

export const QuantityController = styled.button`
  padding: 2px 5px;
  background-color: transparent;
  border: 0px solid #ccc;
  cursor: pointer;
`;

export const Quantity = styled.p`
  font-size: 15px;
  margin: 0px 15px;
`;

export const AddButton = styled.button`
  padding: 5px 8px;
  background-color: rgb(16, 146, 70);
  color: #ffffff;
  border: 0px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 20px;
  font-size: 10px;
`;
