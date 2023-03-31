import React from "react";
import { Link } from "react-router-dom";
import "./topbar.css";

export default function TopBar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="fa-brands fa-square-facebook topIcon"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem ">
            <Link to="/"> HOME</Link>
          </li>
          <li className="topListItem "> ABOUT</li>
          <li className="topListItem "> CONTACT</li>
          {user && (
            <li className="topListItem ">
              <Link to="/write"> WRITE</Link>
            </li>
          )}

          {user && <li className="topListItem">LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/setting">
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link to="/login"> LOGIN</Link>
            </li>
            <li className="topListItem">
              <Link to="/register"> REGISTER</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
