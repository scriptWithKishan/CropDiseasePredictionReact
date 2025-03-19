import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

export const ProductsContainer = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
`;

export const SearchContainer = styled.div`
  align-self: center;
  width: 40%;
  border: 2px solid #ccc;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 50px;
`;

export const SearchInput = styled.input`
  width: 90%;
  border: 0px solid #ccc;
  padding-left: 10px;
  outline: none;
`;

export const SearchButton = styled.button`
  background-color: transparent;
  width: 10%;
  border: 0px solid #ccc;
  cursor: pointer;
`;

export const SearchIcon = styled(IoSearch)`
  font-size: 20px;
`;

export const ProductsCard = styled.div`
  display: flex;
`;

export const FilterContainer = styled.div`
  width: 25%;
  padding-top: 60px;
`;

export const ProductsList = styled.div`
  width: 75%;
  border-left: 1px solid #ccc;
  padding-left: 30px;
  display: flex;
  flex-direction: column;
`;

export const FilterHeading = styled.h1`
  font-size: 25px;
  font-family: "Poppins", sans-serif;
`;

export const FilterItems = styled.h3`
  font-size: px;
  font-family: "Poppins", sans-serif;
`;

export const SortingFilter = styled.select`
  padding: 10px;
  width: 60%;
  outline: none;
`;

export const SortingOptions = styled.option`
  padding: 10px;
  border: 1px solid #ccc;
  font-size: 15px;
  color: #4d4d4d;
`;

export const FilterLabel = styled.label`
  font-size: 15px;
  font-family: "Poppins", sans-serif;
`;

export const FilterButton = styled.button`
  background-color: #7fbe70;
  border: 2px solid #7fbe70;
  color: #ffffff;
  padding: 8px 12px;
  font-size: 12px;
  border-radius: 8px;
  cursor: pointer;
  align-self: center;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  margin-top: 20px;
  margin-right: 5px;

  &:hover {
    background-color: #ffffff;
    color: #7fbe70;
  }
`;

export const ProductsHeading = styled.h1`
  font-size: 40px;
  font-family: "Poppins", sans-serif;
  margin-bottom: 0;
`;

export const ProductsCount = styled.h4`
  margin-top: 2px;
  font-size: 15px;
  font-family: "Poppins", sans-serif;
`;

export const PaginationContainer = styled.div`
  align-self: center;
  display: flex;
  align-items: center;
  margin-bottom: 60px;
`;

export const ProductsItems = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
`;

export const ProductElement = styled.li`
  width: 100%;
  margin-bottom: 30px;
  border: 1px solid #ccc;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 20px;
`;

export const LeftButton = styled(FaCaretLeft)`
  font-size: 20px;
  margin-right: 10px;
  cursor: pointer;
  border: 0px solid #ccc;
  border-radius: 4px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #ccc;
  }
`;

export const RightButton = styled(FaCaretRight)`
  font-size: 20px;
  margin-left: 10px;
  cursor: pointer;
  border: 0px solid #ccc;
  border-radius: 4px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #ccc;
  }
`;
