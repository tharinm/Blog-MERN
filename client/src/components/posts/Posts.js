import React from "react";
import "./posts.css";
import Post from "../post/Post";

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((val, key) => {
        return <Post post={val} key={key} />;
      })}
    </div>
  );
}
