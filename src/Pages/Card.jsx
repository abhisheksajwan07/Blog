import React from "react";

const Card = ({ post }) => {
  return (
    <div className="py-3">
      <p className="text-2xl font-bold">{post.title}</p>
      <p className="text-sm mt-[4px] ">
        By<span className="italic ml-1 text-red-600">{post.author}</span> on
        <span className="underline font-bold ml-1">{post.category}</span>
      </p>
      <p className="text-sm mt-[4px]">Posted on {post.date}</p>
      <p className="text-md mt-[14px]">{post.content}</p>
      <div className="flex gap-x-3 mt-[14px]">
        {post.tags.map((tag, index) => {
          return (
            <span
              key={index}
              className="text-blue-600 underline font-bold text-xs mt-[5px]"
            >{`#${tag}`}</span>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
