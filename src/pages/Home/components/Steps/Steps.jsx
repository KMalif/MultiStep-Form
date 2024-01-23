import React from 'react'
import { useSelector } from 'react-redux'

import StepItems from './StepItems'

import styles from './Steps.module.scss'



const Steps = () => {
  const step = useSelector((state) => state.homeReducer.step)
  return (
    <div className={styles.Steps}>
        <StepItems step={1} title={"Personal Info"} active={step===0}/>
        <StepItems step={2} title={"SELECT PLAN"} active={step===1}/>
        <StepItems step={3} title={"ADD-ONS"} active={step===2}/>
        <StepItems step={4} title={"SUMMARY"} active={step===3}/>
    </div>
  )
}

export default Steps