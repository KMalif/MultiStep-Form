import React from 'react'

import StepItems from './StepItems'

import styles from './Steps.module.scss'



const Steps = () => {

    //page

  return (
    // Steps
    <div className={styles.Steps}>
        <StepItems step={1} title={"Personal Info"}/>
        <StepItems step={2} title={"SELECT PLAN"}/>
        <StepItems step={3} title={"ADD-ONS"}/>
        <StepItems step={4} title={"SUMMARY"}/>
    </div>
  )
}

export default Steps