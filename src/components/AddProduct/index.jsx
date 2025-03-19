import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Dropzone from "react-dropzone";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

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
      <div>
        <h1>Add Product</h1>
        <form onSubmit={postProduct} className="space-y-4">
          <input
            type="text"
            value={name}
            placeholder="Product Name"
            onChange={(e) => dispatch(setName(e.target.value))}
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => dispatch(setDescription(e.target.value))}
          />
          <input
            type="number"
            value={price}
            placeholder="Price"
            onChange={(e) => dispatch(setPrice(e.target.value))}
          />
          <div>
            <label>Discount: {discount}%</label>
            <Slider
              min={0}
              max={100}
              value={discount}
              onChange={(value) => dispatch(setDiscount(value))}
            />
          </div>
          <select
            value={category}
            onChange={(e) => dispatch(setCategory(e.target.value))}
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <input
            type="number"
            value={stock}
            placeholder="Stock"
            onChange={(e) => dispatch(setStock(e.target.value))}
          />
          <Dropzone onDrop={onDrop} accept={{ "image/*": [] }}>
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop images here, or click to select (Max: 5)</p>
              </div>
            )}
          </Dropzone>
          <div>
            {imagePreviews.map((src, index) => (
              <img key={index} src={src} alt={`Preview ${index + 1}`} />
            ))}
          </div>
          <button type="submit">Submit</button>
        </form>
        {error && <p>{error}</p>}
      </div>
    </>
  );
}

export default AddProduct;
