import React from 'react'
import style from '../styles/Footer.module.css'
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div className={style.footer}>
        <div className={style.pera}>
            <p>Copyright @ MDD MEDICAL SYSTEMS (INDIA) PVT. LTD. All Rights Reserved.
            </p>
        </div>
        <div className={style.socialMedia}>
            <p className={style.socialPera}>Follow Us On </p>
            
            <span><FaLinkedin /></span>
            <span><FaSquareInstagram /></span>
            <span><FaFacebook /></span>
        
           
        </div>
    </div>
  )
}

export default Footer