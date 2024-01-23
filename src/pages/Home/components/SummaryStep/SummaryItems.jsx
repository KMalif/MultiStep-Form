import React from 'react'

import style from './Summary.module.scss'

const SummaryItems = ({title, price, symbol}) => {
  return (
    <div className={`${style.dflex} ${style.addFinish}`}>
        <p>{title || 'Title'}</p>
        <span>+${price}/{symbol}</span>
    </div>
  )
}

export default SummaryItems