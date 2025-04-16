import React from "react";
import style from "../styles/Mainteam2.module.css";
function Mainteam2() {
  return (
    <div className={style.Mainteam2}>
      <img src="banerT.jpg" alt="baner" />
      <h2 className={style.maintH}>MDD Core Team</h2>
      <div className={style.container}>
        <div className={style.profileContainer}>
          <div className={style.profile}>
            <img src="profile.jpg" alt="profile" />
          </div>
          <div className={style.containt}>
            <span>Vijay Tripathi</span>
            <p>
              Having 20 years of experience in the field of Medical Gas Pipeline
              System, Modular OT, Modular ICU,CSSD, Nurse Call System and Oxygen
              Plant.
            </p>
          </div>
        </div>
        <div className={style.profileContainer}>
          <div className={style.profile}>
            <img src="profile.jpg" alt="profile" />
          </div>
          <div className={style.containt}>
            <span>Chandra Shekar</span>
            <p>Having 21 Years of Experience in Projects.</p>
          </div>
        </div>
        <div className={style.profileContainer}>
          <div className={style.profile}>
            <img src="profile.jpg" alt="profile" />
          </div>
          <div className={style.containt}>
            <span>Sanjay Singh</span>
            <p>
              AGM-Civil & Mechanical division Having 20 years of experience of
              the same industry
            </p>
          </div>
        </div>
        <div className={style.profileContainer}>
          <div className={style.profile}>
            <img src="profile.jpg" alt="profile" />
          </div>
          <div className={style.containt}>
            <span>Meenakshi B. Choudhury</span>
            <p>
              Compliance manager-She has completed her CS for ICSI having 12
              years of experience
            </p>
          </div>
        </div>
      </div>
      <div className={style.pageChange}>
              <p>Showing 11-14 of 14 entries</p>
              <button>Previous</button>
              <span className={style.s2}>1</span>
              <span >2</span>
             
            </div>
    </div>
  );
}

export default Mainteam2;
