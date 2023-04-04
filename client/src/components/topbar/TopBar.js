import React from "react";
import { Link } from "react-router-dom";
import "./topbar.css";
import { useContext } from "react";
import { Context } from "../../context/Context";


export default function TopBar() {
   const { user,dispatch } = useContext(Context);
   const PF = "http://localhost:3000/images/";
  const hanldeLogout = () => {
    dispatch({type:"LOGOUT"})
  }
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

          {user && (
            <li className="topListItem" onClick={hanldeLogout}>
              LOGOUT
            </li>
          )}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/setting">
            <img className="topImg" src={PF+user.profilePic} alt="" />
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
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
