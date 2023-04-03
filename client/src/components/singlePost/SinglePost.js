import React from "react";
import "./singlePost.css";
import axios from "axios";
import { useLocation } from "react-router";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

export default function SinglePost() {
  const location = useLocation();
  const PF = "http://localhost:3000/images/";

  const { user } = useContext(Context);

  //get post location
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  // const [title, setTitle] = useState({})
  // const [desc,setDesc]=useState({})

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      //  setTitle(res.data.title);
      //  setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      //axios delete method
      await axios.delete(`/posts/${post._id}`, { data: { username: user.username } });
      window.location.replace("/");
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={PF + post.photo} alt="" className="singlePostImg " />
        )}
        <h1 className="singlePostTitle">
          {post.title}
          {post.username === user?.username && (
            <div className="singlePostEdit">
              <i class="singlePostIcon fa-solid fa-pen-to-square"></i>
              <i
                class="singlePostIcon fa-solid fa-trash"
                onClick={handleDelete}
              ></i>
            </div>
          )}
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <Link to={`/?user=${post.username}`}>
              <b className="singlePostAuthor Link">{post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="singlePostDesc">{post.desc}</p>
      </div>
    </div>
  );
}
