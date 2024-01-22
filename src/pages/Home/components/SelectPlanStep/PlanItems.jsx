import React from 'react'


import style from './SelectPlan.module.scss'

const PlanItems = ({img, title, price, selected}) => {
  return (
    <div className={style.planCard}>
        <img src={img} alt="Plan images" />
        <div>
            <h3 className={style.title}>{title}</h3>
            <p>{price}</p>
            <p style={{color:"#174a89"}}>2 Month Free</p>
        </div>
    </div>
  )
}

export default PlanItems