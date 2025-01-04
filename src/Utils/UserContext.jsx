import { createContext, useEffect, useState } from "react";

import axios from "axios";

export const UserContext = createContext();
export const UserContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  const fetchBlogPost = async (page = 1) => {
    setLoading(true);
    const fetchBlogPost = async (page = 1) => {
      setLoading(true);
      try {
        const data = await axiosInstance.get(?page=${page});
        console.log(data);
  
      } catch (err) {
        console.log("error fetching blog posts", err);
        setPage(1);
        setPosts([]);
        setTotalPages(null);
      }
      setLoading(false);
    };
  //   try {
  //     const { data } = await axios.get(`?page=${page}`);

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

  useEffect(() => {
    fetchBlogPost();
  }, [page]);
  const value = {
    loading,
    setLoading,
    posts,
    setPosts,
    page,
    setPage,
    totalPages,
    setTotalPages,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
