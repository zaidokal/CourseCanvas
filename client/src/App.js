import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./views/HomePage";
import { Login } from "./views/Login";
import COTemplate from "./views/COTemplate";
import ViewSingleOutline from "./views/ViewSingleOutline";
import { AssignInstructor } from "./views/AssignInstructor";
import AdminApproval from "./views/AdminApproval";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/homepage" element={<HomePage />} />
      <Route path="/:id" element={<ViewSingleOutline />} />
      <Route path="/login" element={<Login />} />
      <Route path="/COTemplate" element={<COTemplate />} />
      <Route path="/AssignInstructor" element={<AssignInstructor />} />
      <Route path="/AdminApproval" element={<AdminApproval />} />
    </Routes>
  );
};

export default App;
