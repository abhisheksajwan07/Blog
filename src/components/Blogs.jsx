import React, { useContext } from "react";
import { UserContext } from "../Utils/UserContext";
import Loader from "./Loader";
import Card from "../Pages/Card";

const Blogs = () => {
  const { posts, loading } = useContext(UserContext);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : posts.length == 0 ? (
        <div>
          <p>No Post</p>
        </div>
      ) : (
        posts.map((post) => <Card key={post.id} post={post}/>)
      )}
    </div>
  );
};

export default Blogs;
