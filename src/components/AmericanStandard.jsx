import React from 'react'
import style from '../styles/AmericanStandard.module.css'
function AmericanStandard() {
  return (
    <div className={style.AmericanStandard}>
      <h2 className={style.heading}>Modular Operation Theater</h2>
            <div className={style.imageContainer}>
              <div className={style.image}>
              <img src="img1.jpg" alt="1" />
              <span>Wall Panel</span>
              </div>
              <div className={style.image}>
              <img src="img2.jpg" alt="" />
              <span>Doors</span>
              </div>
              <div className={style.image}>
              <img src="img3.jpg" alt="" />
              <span>LED OT Lights</span>
              </div>
              <div className={style.image}>
              <img src="img4.jpg" alt="" />
              <span>Single Arm OT Pendant</span>
              </div>
              <div className={style.image}>
              <img src="img5.jpg" alt="" />
              <span>Double Arm OT Pendant</span>
              </div>
              <div className={style.image}>
              <img src="img6.jpg" alt="" />
              <span>Media Bridge</span>
              </div>
              <div className={style.image}>
              <img src="img7.jpg" alt="" />
              <span>Surgeon Control Panel</span>
              </div>
              <div className={style.image}>
              <img src="img8.jpg" alt="" />
              <span>Surgical Scrub Sink</span>
              </div>
              <div className={style.image}>
              <img src="img9.jpg" alt="" />
              <span>OT Table</span>
              </div>
            </div>
    </div>
  )
}

export default AmericanStandard