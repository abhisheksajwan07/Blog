import React from 'react';


const Card = ({post}) => {
  return (
    <div>
        <p className="text-md font-bold">{post.title}</p>
        <p className='text-[1rem]'>By<span>{post.author}</span> on <span>{post.category}</span></p>
        <p>Posted on {post.date}</p>
        <p>{post.content}</p>
        <div>
          {post.tags.map((tag,index)=>{
            return <span key={index} className='text-blue-600'>{`#${tag}`}</span>
          })}
        </div>

    </div>
  )
}

export default Card