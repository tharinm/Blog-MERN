import { useEffect, useState } from "react";
import axios from "axios";

import Header from "../../components/header/Header";
import Post from "../../components/posts/Posts";
import SideBar from "../../components/sidebar/SideBar";
import "./home.css";
import { useLocation } from "react-router-dom";

export default function Home() {
  const { search } = useLocation();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("/posts" + search);
        setPosts(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, [search]);

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
