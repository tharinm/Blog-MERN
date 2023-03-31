import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import Header from "../../components/header/Header";
import Post from "../../components/posts/Posts";
import SideBar from "../../components/sidebar/SideBar";
import "./home.css";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("/posts");
        setPosts(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <Header />
      <div className="home">
        <Post posts={posts} />
        <SideBar />
      </div>
    </div>
  );
}
