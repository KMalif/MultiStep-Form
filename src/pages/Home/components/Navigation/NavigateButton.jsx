import React from 'react'

import {setStep} from '../../redux/reducer'

import style from './NavigateButton.module.scss'
import { useDispatch, useSelector } from 'react-redux'

const NavigateButton = () => {

  const dispatch = useDispatch()
  const currentStep = useSelector((state) => state.homeReducer.step)

  const nextStepHanlder = () => {
    if (currentStep === 5) {
      dispatch(setStep(1))
    } else {
      dispatch(setStep(currentStep + 1))
    }
  }

  const backStepHanlder = () => {
    if (currentStep === 5) {
      dispatch(setStep(1))
    } else {
      dispatch(setStep(currentStep - 1))
    }
  }

  return (
    <div className={`${style.navigation}`}>
        <button onClick={backStepHanlder} className={style.btn1}>Go Back</button>
        <button onClick={nextStepHanlder} className={style.btn2}>Next Step</button>
    </div>
  )
}

export default NavigateButton