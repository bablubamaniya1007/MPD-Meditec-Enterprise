import React from "react";
import style from "../styles/SideBar.module.css";
import { FaArrowRight } from "react-icons/fa";
function SideBar() {
  return (
    <div className={style.sidebar}>
<div className={style.blank}></div>
      <h2 className={style.heading}>About Us</h2>
      <div className={style.arow}>
      <FaArrowRight />
      <span>About MPD</span>
      </div>
     <div className={style.team}>
     <FaArrowRight />
     <span>MPD Core Team</span>
     </div>
     <div className={style.blank}></div>
    </div>
  );
}

export default SideBar;
