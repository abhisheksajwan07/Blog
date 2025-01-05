import React from 'react';


const Card = ({post}) => {
  return (
    <div>
        <p className="text-3xl">{post.title}</p>
        <p>By<span>{post.author}</span> on <span>{post.category}</span></p>
        <p>Posted on {post.date}</p>
        <p>{post.content}</p>
        <div>
          {post.tags.map((tag,index)=>{
            return <span key={index}>{`#${tag}`}</span>
          })}
        </div>

    </div>
  )
}

export default Card