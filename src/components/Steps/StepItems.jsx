
import React from 'react'

const StepItems = ({step, title, active}) => {
  return (
    // Step
    <div>
        {/* "stepNumber active":"stepNumber" */}
        <span>{step}</span>
        {/* stepInfo */}
        <div>
            <span>`STEP ${step}`</span>
            <p>{title}</p>
        </div>
    </div>
  )
}

export default StepItems