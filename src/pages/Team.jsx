import React from 'react'
import SideBar from '../components/SideBar'
import Mainteam from '../components/Mainteam'
import styel from '../styles/Team.module.css'
// import Mainteam2 from '../components/Mainteam2'

function Team() {
  return (
    <div className={styel.Team}>
      <SideBar />
      <Mainteam />
      {/* <Mainteam2 /> */}
    </div>
  )
}

export default Team