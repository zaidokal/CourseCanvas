import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./views/HomePage";
import { Register } from "./views/Register";
import { ChangePassword } from "./views/ChangePassword";

import { Login } from "./views/Login";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/ChangePassword" element={<ChangePassword />} />
    </Routes>
  );
};

export default App;
