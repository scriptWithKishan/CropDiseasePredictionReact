import styled from "styled-components";

export const AddProductContainer = styled.div`
  padding: 50px;
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.h1`
  font-size: 50px;
  color: #000000;
  text-align: center;
  font-weight: 700;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  align-self: center;
  width: 70%;
`;

export const Input = styled.input`
  width: 300px;
  height: 40px;
  padding-left: 10px;
  border: 0px solid #ccc;
  background-color: #ccc;
  border-radius: 5px;
  margin: 20px;
  outline: none;
`;

export const Label = styled.label`
  font-size: 20px;
  margin-right: 10px;
`;

export const DescriptionDiscountCategory = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Description = styled.textarea`
  width: 100%;
  height: 200px;
  border: 0px solid #ccc;
  border-radius: 5px;
  background-color: #ccc;
  padding: 10px;
  outline: none;
  box-sizing: border-box;
`;

export const SliderContainer = styled.div`
  width: 100%;
  margin: 30px 0px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 30px;
`;

export const Select = styled.select`
  width: 100%;
  height: 40px;
  padding: 10px;
  border: 0px solid #ccc;
  border-radius: 5px;
  background-color: #ccc;
  outline: none;
`;

export const Stock = styled.label`
  font-size: 20px;
  margin-top: 10px;
`;

export const InputStock = styled.input`
  width: 200px;
  height: 30px;
  padding-left: 10px;
  border: 0px solid #ccc;
  background-color: #ccc;
  border-radius: 5px;
  margin: 10px;
  outline: none;
`;

export const DropzoneContainer = styled.div`
  width: 80%;
  margin: 30px auto;
  border: 2px dashed #ccc;
  border-radius: 12px;
  padding: 40px;
  text-align: center;
  background-color: rgb(229, 229, 229);
  color: rgb(27, 27, 27);
  cursor: pointer;
  transition: border 0.3s ease, background-color 0.3s ease;
  flex-shrink: 0;
  white-space: nowrap;

  &:hover {
    border-color: rgb(41, 41, 41);
    background-color: rgb(223, 223, 223);
  }

  & p {
    margin: 0;
    font-size: 16px;
    color: rgb(30, 30, 30);
  }
`;

export const Button = styled.button`
  background-color: rgb(16, 146, 70);
  color: #ffffff;
  border: 1px solid #ffffff;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.5s ease-in-out;
  display: block;
  white-space: nowrap;

  &:hover {
    background-color: #ffffff;
    color: rgb(16, 146, 70);
    border: 1px solid rgb(16, 146, 70);
  }
`;
