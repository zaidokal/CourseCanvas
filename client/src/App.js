import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./views/HomePage";
import { Login } from "./views/Login";
import COTemplate from "./views/COTemplate";
import ViewSingleOutline from "./views/ViewSingleOutline";
import { AssignInstructor } from "./views/AssignInstructor";
import AdminApproval from "./views/AdminApproval";
import HomePageAdmin from "./views/HomePageAdmin";
import HomePageDirector from "./views/HomePageDirector";
import EditOutline from "./views/EditOutline";

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
      <Route path="/HomePageAdmin" element={<HomePageAdmin />} />
      <Route path="/HomePageDirector" element={<HomePageDirector />} />
      <Route path="/EditOutline/:id" element={<EditOutline />} />
    </Routes>
  );
};

export default App;
