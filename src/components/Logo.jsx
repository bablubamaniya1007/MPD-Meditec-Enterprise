import React from 'react'
import style from '../styles/Logo.module.css';

function Logo() {
  return (
    <div className={style.logo}>
        < img className = {style.image} src="mme_logo.jpg" alt="logo" />
    </div>
  )
}

export default Logo