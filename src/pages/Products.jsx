import React from 'react'
import style from '../styles/Products.module.css'
import SideBarp from '../components/SideBarp'
import OprationTheater from '../components/OprationTheater'
import AmericanStandard from '../components/AmericanStandard'
import OprationTheaterLightes from '../components/OprationTheaterLightes'
import ArchitecturalProduct from '../components/ArchitecturalProduct'
import HospitalFurniture from '../components/HospitalFurniture'
import WallGuard from '../components/WallGuard'

function Products() {
  return (
    <div className={style.Products}>
      <SideBarp />
      {/* <OprationTheater /> */}
      {/* <AmericanStandard /> */}
      {/* <OprationTheaterLightes  /> */}
      {/* <ArchitecturalProduct /> */}
      {/* <HospitalFurniture /> */}
      <WallGuard />
    </div>
  )
}

export default Products