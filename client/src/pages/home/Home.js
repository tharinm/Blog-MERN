import React from "react";
import Header from "../../header/Header";
import Post from "../../posts/Posts";
import SideBar from "../../sidebar/SideBar";
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
