import React from 'react'

import style from './SelectPlan.module.scss'

const PlanItems = ({img, title, price, selected}) => {
  return (
    <div className={selected ? `${style.planCard} ${style.planClick}` : style.planCard}>
        <img src={img} alt="Plan images" />
        <div>
            <h3 className={style.title}>{title}</h3>
            <p>{price}</p>
        </div>
    </div>
  )
}

export default PlanItems