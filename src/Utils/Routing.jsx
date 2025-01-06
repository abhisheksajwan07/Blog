import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import BlogPage from "../Pages/BlogPage";
import TagPage from "../Pages/TagPage";
import CategoryPage from "../Pages/CategoryPage";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:blogId" element={<BlogPage />} />
        <Route path="/tags/:tag" element={<TagPage />} />
        <Route path="/categories/:category" element={<CategoryPage />} />
      </Routes>
    </div>
  );
};

export default Routing;
