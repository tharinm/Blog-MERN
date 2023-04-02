import React, { useEffect, useState } from "react";
import "./sidebar.css";
import axios from "axios";
import { Link } from "react-router-dom";


export default function SideBar() {

  const [cats, setCats] = useState([]);


  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/catergories");
      setCats(res.data)
    }
    getCats()
  })

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img
          src="https://images.pexels.com/photos/439816/pexels-photo-439816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        ></img>
        <p>
          Pariatur est ut voluptate aliquip dolor reprehenderit.Ad voluptate
          magna velit of ficia laboris sunt id eiusmod non dolor.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i class="fa-brands fa-square-facebook sidebarIcon"></i>
          <i class="sidebarIcon fa-brands fa-square-twitter"></i>
          <i class="sidebarIcon fa-brands fa-square-pinterest"></i>
          <i class="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  );
}
