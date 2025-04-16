import React from 'react'
import style from '../styles/NavBar.module.css';
import { IoHomeSharp } from "react-icons/io5";


function NavBar() {
  return (
    <div className={style.NavBar}>
  <ul className={style.navbarlist}>
    <li className={style.home}><IoHomeSharp /></li>
    <li>About Us</li>
    <li>Products</li>
    <li>Clientele</li>
    <li>Our Showroom</li>
    <li>Certifications</li>
    <li>Gallery</li>
    <li>Career</li>
    <li>Contacts</li>
  </ul>
    </div>
  )
}

export default NavBar