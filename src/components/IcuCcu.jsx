import React from "react";
import style from "../styles/IcuCcu.module.css";
function IcuCcu() {
  return (
    <div className={style.IcuCcu}>
      <h2 className={style.heading}>Modular ICU & CCU
      </h2>
      <div className={style.imageContainer}>
        <div className={style.image}>
          <img src="img80.jpg" alt="1" />
          <span>Modular ICU</span>
        </div>
        <div className={style.image}>
          <img src="img81.jpg" alt="" />
          <span>Modular ICU</span>
        </div>
        <div className={style.image}>
          <img src="img82.jpg" alt="" />
          <span>Modular ICU</span>
        </div>
        <div className={style.image}>
          <img src="img83.jpg" alt="" />
          <span>Modular ICU</span>
        </div>
        <div className={style.image}>
          <img src="img84.jpg" alt="" />
          <span>Modular ICU</span>
        </div>
        <div className={style.image}>
          <img src="img85.jpg" alt="" />
          <span>Modular ICU</span>
        </div>
        
      </div>
    </div>
  );
}

export default IcuCcu;
