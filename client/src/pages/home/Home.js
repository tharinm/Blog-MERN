import React from "react";
import Header from "../../components/header/Header";
import Post from "../../components/posts/Posts";
import SideBar from "../../components/sidebar/SideBar";
import './home.css'

export default function Home() {
  return (
    <div>
      <Header />
      <div className="home">
        <Post />
        <SideBar />
      </div>
    </div>
  );
}
