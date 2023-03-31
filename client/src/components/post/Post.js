import React from "react";
import "./post.css";

export default function Post({post}) {
  return (
    <div className="post">
      {post.photo && <img className="postImg" alt="" src={post.photo} />}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}

          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">{post.title}</span>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}
