import { Routes, Route } from "react-router";

import Authentication from "./components/Authentication";
import Home from "./components/Home";
import Predict from "./components/Predict";
import NotFound from "./components/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./components/Profile";
import Admin from "./components/Admin";
import AddProduct from "./components/AddProduct";
import Products from "./components/Products";

import "./App.css";

function App() {

  

  return (
    <Routes>
      <Route path="/auth" element={<Authentication />} />
      <Route element={<ProtectedRoute />}>
        <Route index element={<Home />} />
        <Route path="/predict" element={<Predict />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products" element={<Products />} />
        <Route element={<Admin />}>
          <Route path="/add/product" element={<AddProduct />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
