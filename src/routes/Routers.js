import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AllFoodes from "../pages/AllFoods";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import FoodeDetails from "../pages/FoodDetails";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/foods" element={<AllFoodes />} />
      <Route path="/foods/:id" element={<FoodeDetails />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Routers;
