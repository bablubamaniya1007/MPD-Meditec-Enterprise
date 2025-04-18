import React from 'react'
import style from '../styles/ControlSystem.module.css'
function ControlSystem() {
  return (
    <div className={style.ControlSystem}>
         <h2 className={style.heading}>I-Control System
         </h2>
              <div className={style.imageContainer}>
                <div className={style.image}>
                  <img src="img98.jpg" alt="1" />
                  <span>I-Control</span>
                </div>
                <div className={style.image}>
                  <img src="img99.jpg" alt="" />
                  <span>I-Control Plus</span>
                </div>
                <div className={style.image}>
                  <img src="img100.jpg" alt="" />
                  <span>I-Control Plus</span>
                </div>
                <div className={style.image}>
                  <img src="img101.jpg" alt="" />
                  <span>
                  IPS Panel</span>
                </div>
    </div>
    </div>
  )
}

export default ControlSystem