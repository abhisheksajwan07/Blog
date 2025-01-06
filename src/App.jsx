import React, { useContext, useEffect } from "react";
import Pagination from "./components/Pagination";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import { UserContext } from "./Utils/UserContext";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import Home from "./Pages/Home";
import BlogPage from "./Pages/BlogPage";
import TagPage from "./Pages/TagPage";
import CategoryPage from "./Pages/CategoryPage";
import Routing from "./Utils/Routing";

const App = () => {
  const { fetchBlogPosts } = useContext(UserContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const page = searchParams.get("page") ?? 1;
    if (location.pathname.includes("tags")) {
      const tag = location.pathname.split("/").at(-1).replaceAll("-", "");
      fetchBlogPosts(Number(page), tag);
    } else if (location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replaceAll("-", "");
      fetchBlogPosts(Number(page), null, category);
    } else {
      fetchBlogPosts(Number(page));
    }
  }, [location.pathname, location.search]);
  return (
    <>
      <Routing />
    </>
  );
};

export default App;
