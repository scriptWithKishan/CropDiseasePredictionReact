import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Dropzone from "react-dropzone";

import Header from "../Header";
import {
  setName,
  setDescription,
  setPrice,
  setDiscount,
  setCategory,
  setStock,
  setImagePreviews,
} from "../../redux/AddProductSlice";
import { PostProductMiddleware } from "../../middleware/PostProductMiddleware";

import {
  AddProductContainer,
  Heading,
  Form,
  Input,
  Label,
  Description,
  SliderContainer,
  DescriptionDiscountCategory,
  Select,
  Stock,
  InputStock,
  DropzoneContainer,
  Button,
} from "./style";

const categories = [
  "Fertilizers",
  "Pesticides",
  "Seeds",
  "Plant Growth Regulators",
  "Soil Conditioners",
  "Gardening Tools",
  "Packaging & Storing",
];

function AddProduct() {
  const dispatch = useDispatch();
  const {
    name,
    description,
    price,
    discount,
    category,
    stock,
    error,
    imagePreviews,

  } = useSelector((store) => store.addProductState);

  const [images, setImages] = useState([]);

  const postProduct = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("discount", discount);
    formData.append("category", category);
    formData.append("stock", stock);
    images.forEach((image) => formData.append("images[]", image));

    dispatch(PostProductMiddleware(formData));
  };

  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles.length <= 5) {
        setImages(acceptedFiles);
        const previews = acceptedFiles.map((file) => URL.createObjectURL(file));
        dispatch(setImagePreviews(previews));
      } else {
        alert("You can upload a maximum of 5 images.");
      }
    },
    [dispatch]
  );

  return (
    <>
      <Header />
      <AddProductContainer>
        <Heading>Add Product</Heading>
        <Form onSubmit={postProduct} className="space-y-4">
          <Label>
            Product Name:
            <Input
              type="text"
              value={name}
              onChange={(e) => dispatch(setName(e.target.value))}
            />
          </Label>
          <Label>
            Product Price:
            <Input
              type="number"
              value={price}
              placeholder="Price"
              onChange={(e) => dispatch(setPrice(e.target.value))}
            />
          </Label>
          <DescriptionDiscountCategory>
            <div
              style={{ width: "50%", marginRight: "10px", marginLeft: "10px" }}
            >
              <Label>
                Product Description:
                <Description
                  value={description}
                  onChange={(e) => dispatch(setDescription(e.target.value))}
                />
              </Label>
            </div>
            <div
              style={{
                width: "50%",
                marginRight: "10px",
                marginLeft: "10px",
                padding: "50px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                boxSizing: "border-box",
              }}
            >
              <SliderContainer>
                <label>Discount: {discount}%</label>
                <Slider
                  min={0}
                  max={100}
                  value={discount}
                  onChange={(value) => dispatch(setDiscount(value))}
                />
              </SliderContainer>
              <Select
                value={category}
                onChange={(e) => dispatch(setCategory(e.target.value))}
              >
                <option value="">Select Category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </Select>
              <Stock>
                Product Stock:
                <InputStock
                  type="number"
                  value={stock}
                  placeholder="Stock"
                  onChange={(e) => dispatch(setStock(e.target.value))}
                />
              </Stock>
            </div>
          </DescriptionDiscountCategory>
          <Dropzone onDrop={onDrop} accept={{ "image/*": [] }}>
            {({ getRootProps, getInputProps }) => (
              <DropzoneContainer {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop images here, or click to select (Max: 5)</p>
              </DropzoneContainer>
            )}
          </Dropzone>
          <div>
            {imagePreviews.map((src, index) => (
              <img key={index} src={src} alt={`Preview ${index + 1}`} />
            ))}
          </div>
          <Button type="submit">Sell</Button>
        </Form>
        {error && <p>{error}</p>}
      </AddProductContainer>
    </>
  );
}

export default AddProduct;
