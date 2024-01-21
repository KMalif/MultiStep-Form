import React from 'react'
import StepItems from './StepItems'

const Steps = () => {

    //page

  return (
    // Steps
    <div>
        <StepItems title={"Personal Info"}/>
        <StepItems title={"SELECT PLAN"}/>
        <StepItems title={"ADD-ONS"}/>
        <StepItems title={"SUMMARY"}/>
    </div>
  )
}

export default Steps