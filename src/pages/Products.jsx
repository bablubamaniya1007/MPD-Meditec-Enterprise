import React from 'react'
import style from '../styles/Products.module.css'
import SideBarp from '../components/SideBarp'
import OprationTheater from '../components/OprationTheater'

function Products() {
  return (
    <div className={style.Products}>
      <SideBarp />
      <OprationTheater />
    </div>
  )
}

export default Products