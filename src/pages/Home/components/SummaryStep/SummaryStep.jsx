import React from 'react'

import style from './Summary.module.scss'
import SummaryItems from './SummaryItems'

const SummaryStep = () => {
  return (
    // Finish info
    <div >
        <h2>Finishing Up</h2>
        <p>Double check everything look ok before confirming</p>
        {/* payout */}
        <div className={style.payout}>
            {/* dFlex title */}
            <div className={`${style.title} ${style.dflex}`}>
                <div>
                    <h3>Arcade</h3>
                    <p>Change</p>
                </div>
                <span>price</span>
            </div>

            {/* map the items */}
            <SummaryItems/>

        </div>
        <div className={`${style.total} ${style.dflex}`}>
            <p>Total</p>
            <span>price</span>
        </div>
    </div>
  )
}

export default SummaryStep