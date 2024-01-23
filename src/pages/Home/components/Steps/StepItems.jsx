
import React from 'react'

import styles from './Steps.module.scss'

const StepItems = ({step, title, active}) => {
  return (
    <div className={styles.Step}>
        <span className={active ? `${styles.stepNumber} ${styles.active} ` : `${styles.stepNumber}`}>{step}</span>
        <div className={styles.stepInfo}>
            <span>STEP {step}</span>
            <p>{title}</p>
        </div>
    </div>
  )
}

export default StepItems