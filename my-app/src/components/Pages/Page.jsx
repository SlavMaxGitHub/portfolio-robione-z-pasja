import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../Home/Home";
import PhotoGallery from "../Gallery/PhotoGallery";
import GraphGallery from "../Gallery/GraphGalery";
import Contacts from "../Contacts/Contacts";
import ErrorPage from "./ErrorPage";

const Page = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/photos" element={<PhotoGallery />} />
      <Route path="/graphics" element={<GraphGallery />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Page;
