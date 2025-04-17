import React from 'react'
import style from '../styles/Products.module.css'
import SideBarp from '../components/SideBarp'
import OprationTheater from '../components/OprationTheater'
import AmericanStandard from '../components/AmericanStandard'
import OprationTheaterLightes from '../components/OprationTheaterLightes'

function Products() {
  return (
    <div className={style.Products}>
      <SideBarp />
      {/* <OprationTheater /> */}
      {/* <AmericanStandard /> */}
      <OprationTheaterLightes  />
    </div>
  )
}

export default Products