import React from 'react'
import style from '../styles/SideBarp.module.css'
import { FaArrowRight } from "react-icons/fa";
function SideBarp() {
  return (
    <div className={style.SideBarp}>
        {/* <div className={style.blank}></div> */}
              <h2 className={style.heading}>
              Products</h2>
              <div className={style.team}>
              <FaArrowRight />
              <span>Modular Operation Theater
              </span>
              </div>
             <div className={style.team}>
             <FaArrowRight />
             <span>MGPS NFPA-99 American Standards
             </span>
             </div>
             <div className={style.team}>
             <FaArrowRight />
             <span>Operation Theater Lights
             </span>
             </div>
             <div className={style.team}>
             <FaArrowRight />
             <span>Pendant & Architectural Products
             </span>
             </div>
             <div className={style.team}>
             <FaArrowRight />
             <span>Hospital Furniture
             </span>
             </div>
             <div className={style.team}>
             <FaArrowRight />
             <span>Wall Guard / Corner Guards
             </span>
             </div>
             <div className={style.team}>
             <FaArrowRight />
             <span>Curtain Track / I V Track
             </span>
             </div>
             <div className={style.team}>
             <FaArrowRight />
             <span>Modular ICU & CCU
             </span>
             </div>
             <div className={style.team}>
             <FaArrowRight />
             <span>OR Integration & Recording System
             </span>
             </div>
             <div className={style.team}>
             <FaArrowRight />
             <span>I-Control System
             </span>
             </div>
             {/* <div className={style.blank}></div> */}
    </div>
  )
}

export default SideBarp