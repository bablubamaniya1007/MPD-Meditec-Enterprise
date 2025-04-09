import React from "react";
import style from "../styles/MPDNote.module.css";

function MPDNote() {
  return (
    <div className={style.mpdnote}>
      <div className={style.blank}></div>
      <div className={style.mpd}>
        <h1 className={style.h1}>Mdd medical systems (india) Pvt. ltd.</h1>
        <img src="https://mddmedical.com/images/human-life.png" alt="" />
        <p className={style.pera}>
          MDD Medical was founded by Shri. S.C. Verma – Chairman & Managing <br />
          Director in the memory of his Mother Maa Dropati Devi to serve human <br />
          kind. MDD's aim & motto is to provide Technological Solutions for <br />
          Improving Human life.
        </p>
      </div>
      <div className={style.Product}>
        <div className={style.left}>
          <h1 className={style.proh1}>Product Range</h1>
          <h1 className={style.lighth1}>LED OT LIGHTS</h1>
          <h1 className={style.maxh1}>Maximum performance <br /> minimum consumption</h1>
          
        </div>
        <div className={style.right}>
          <img
            src="https://mddmedical.com/productrange/1954628542.jpg"
            alt=""
          />
        </div>
      </div>
      <div className={style.blank}></div>
    </div>
  );
}

export default MPDNote;
