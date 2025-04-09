import React from 'react'
import style from '../styles/News.module.css'

function News() {
  return (
    <div className={style.news}>
{/* <div className={style.khali}><hr /></div> */}
<div className={style.newsEvent}>
    <h1 className={style.head}>NEWS & EVENTS</h1>
    <div className={style.containt}>
        <h1 className={style.date}>22 JAN <br /> 2025</h1>
        <a>MADEGATE TODAY,NEWS RELEASE ON JAN 2025</a>
    </div>
</div>
<div className={style.partner}>
  <h1>OUR PARTNER</h1>

</div>
    </div>
  )
}

export default News