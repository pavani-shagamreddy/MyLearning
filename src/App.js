import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import MyLearningOne from "./components/MyLearningOne";
import FrontEnd from "./components/FrontEnd";
import BackEnd from "./components/BackEnd";
import DataBase from "./components/DataBase";
import ViewResource from "./components/ViewResource";
import React from "react";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MyLearningOne />} />
      <Route path="/frontend" element={<FrontEnd />} />
      <Route path="/backend" element={<BackEnd />} />
      <Route path="/database" element={<DataBase />} />
      <Route path="/viewresource" element={<ViewResource />} />
    </Routes>
  );
}

export default App;
