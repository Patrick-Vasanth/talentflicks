import React from "react";
import { navData } from "../Services/Data.js";
import { Link, NavLink } from "react-router-dom";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import "./NavBar.css";
import Logo from "../Images/logo svg.svg";
import GetAppBtn from "./GetAppBtn";

export default function NavBar() {
  return (
    <div className="navBar">
      <div className="logo">
        <Link to="/home">
          <img src={Logo} alt="Talentflicks Logo" />
        </Link>
      </div>
      <div className="menus">
        <div className="navList">
          <ul className="nav">
            {navData.map((data, index) => (
              <li key={index}>
                <NavLink
                  to={data.navLink}
                  className="lists"
                  activeclassname="active"
                >
                  {<data.icon></data.icon>}
                  {data.navMenu}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="profile">
          <button className="btn profile-menu">
            <AccountCircleRoundedIcon className="profileIcon"></AccountCircleRoundedIcon>
            Profile
          </button>

          <div className="app">
            <GetAppBtn />
          </div>
        </div>
      </div>
    </div>
  );
}
