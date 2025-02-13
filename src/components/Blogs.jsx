import  { useContext } from "react";
import { UserContext } from "../Utils/UserContext";
import Loader from "./Loader";
import Card from "../Pages/Card";

const Blogs = () => {
  const { posts, loading } = useContext(UserContext);
  return (
    <div className="max-w-[650px] w-11/12 mx-auto h-full  py-5 flex flex-col gap-y-6 pt-20 pb-20 ">
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
