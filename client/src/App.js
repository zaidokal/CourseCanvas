import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./views/HomePage";
import { Register } from "./views/Register";
import { ChangePassword } from "./views/ChangePassword";
import { Login } from "./views/Login";
import COTemplate from "./views/COTemplate";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/homepage" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/ChangePassword" element={<ChangePassword />} />
      <Route path="/COTemplate" element={<COTemplate />} />
    </Routes>
  );
};

export default App;
