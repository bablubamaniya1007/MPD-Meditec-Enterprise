import React from 'react'
import SideBar from '../components/SideBar'
import Main from '../components/Main'

import style from '../styles/AboutMPD.module.css'
function AboutMPD() {
  return (
    <div className={style.AboutMPD}>
      {/* <Logo /> */}
     
      <SideBar />
      <Main />
    </div>
  )
}

export default AboutMPD