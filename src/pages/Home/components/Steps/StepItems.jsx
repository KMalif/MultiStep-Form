
import React from 'react'

import styles from './Steps.module.scss'

const StepItems = ({step, title, active}) => {
  return (
    // Step
    <div className={styles.Step}>
        {/* "stepNumber active":"stepNumber" */}
        <span className={`${styles.stepNumber} `}>{step}</span>
        {/* stepInfo */}
        <div className={styles.stepInfo}>
            <span>STEP {step}</span>
            <p>{title}</p>
        </div>
    </div>
  )
}

export default StepItems