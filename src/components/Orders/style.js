import styled from "styled-components";

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  padding: 50px;
`;

export const OrderHeading = styled.h1`
  font-size: 50px;
  text-align: center;
  color: #000000;
`;

export const OrdersList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const OrderItem = styled.li`
  width: 100%;
  margin: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
`;

export const TotalContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const Total = styled.p`
  font-size: 25px;
  font-weight: 500;
  margin-right: 50px;
  margin-bottom: 0;
`;

export const Status = styled.p`
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 0;
`;
