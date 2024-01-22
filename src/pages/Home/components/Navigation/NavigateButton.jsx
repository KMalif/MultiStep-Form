import React from 'react'

import style from './NavigateButton.module.scss'

const NavigateButton = () => {
  return (
    <div className={`${style.navigation}`}>
        <button className={style.btn1}>Go Back</button>
        <button className={style.btn2}>Next Step</button>
    </div>
  )
}

export default NavigateButton