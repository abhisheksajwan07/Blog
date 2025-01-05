import { createContext, useEffect, useState } from "react";

import axios from "./axiosconfig";
import { baseURL } from "../baseURL";

export const UserContext = createContext();
export const UserContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  async function fetchBlogPosts(page = 1) {
    setLoading(true);
    let url = `${baseURL}?page=${page}`;
    try {
      const result = await fetch(url);
      const data = await result.json();
      console.log(data);
      setPage(data.page);
      setPosts(data.posts);
      setTotalPages(data.totalPages);
    } catch (e) {
      console.log("Error", e);
      setPage(1);
      setPosts([]);
      setTotalPages(null);
    }
    setLoading(false);
  }
  const handlePageChange = (page) => {
    setPage(page);
    fetchBlogPosts(page);
  };
  

  // const fetchBlogPost = async (page = 1) => {
  //   setLoading(true);
  //   try {
  //     const {data} = await axios.get(`?page=${page}`);
  //     console.log(data);
  //     setPage(data.page);
  //     setPosts(data.posts);
  //     setTotalPages(data.totalPages);
  //   } catch (err) {
  //     console.log("error fetching blog posts", err);
  //     setPage(1);
  //     setPosts([]);
  //     setTotalPages(null);
  //   }
  //   setLoading(false);
  // };
  // function handlepage(page){
  //   setPage(page);
  //   fetchBlogPost(page);
  // }

  // useEffect(() => {
  //   fetchBlogPost();
  // }, []);
  const value = {
    loading,
    setLoading,
    posts,
    setPosts,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchBlogPosts,
    handlePageChange,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
