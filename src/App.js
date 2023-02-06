import "./App.css";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import { SignUp } from "./components/SignUp";
import { Login } from "./components/Login";
import { Categories } from "./components/Categories";
import { Inventory } from "./components/Inventory";
import React, { useState, setState } from "react";
import { Free } from "./components/categories/Free";
import { Tools } from "./components/categories/Tools";
import { Recreation } from "./components/categories/Recreation";
import { Footwear } from "./components/categories/Footwear";
import { Furniture } from "./components/categories/Furniture";
import { Fitness } from "./components/categories/Fitness";
import { Electronics } from "./components/categories/Electronics";
import { Services } from "./components/categories/Services";
// import MPbackground3 from "./assets/MP-background3.jpeg";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// const client = new ApolloClient({
//   uri: "https://whatever-marketplace-server.herokuapp.com/",
//   cache: new InMemoryCache(),
// });

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes className="body">
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/free" element={<Free />} />
          <Route path="/categories/tools" element={<Tools />} />
          <Route path="/categories/recreation" element={<Recreation />} />
          <Route path="/categories/footwear" element={<Footwear />} />
          <Route path="/categories/furniture" element={<Furniture />} />
          <Route path="/categories/fitness" element={<Fitness />} />
          <Route path="/categories/electronics" element={<Electronics />} />
          <Route path="/categories/services" element={<Services />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
