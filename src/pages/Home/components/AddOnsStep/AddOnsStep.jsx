import React from 'react'

import Package from './Package'

import style from './AddOns.module.scss'


const AddOnsStep = () => {
  return (
    <div className={style.info}>
        <h2>Pick add-ons</h2>
        <p>Add-on help enhance your gaming experience</p>
        <div className={style.packs}>
            {/* map the pack */}
            <Package/>
            <Package/>
            <Package/>
        </div>
    </div>
  )
}

export default AddOnsStep
