import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {setStep} from '../../redux/action'

import style from './NavigateButton.module.scss'

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
    if (currentStep === 0) {
      dispatch(setStep(0))
    } else {
      dispatch(setStep(currentStep - 1))
    }
  }

  return (
    <div className={currentStep === 0 ? `${style.navigation} ${style.btnRight}` : style.navigation}>
      {currentStep !== 0 && <button onClick={backStepHanlder} className={style.btn1}>Go Back</button>}
      <button onClick={nextStepHanlder} className={style.btn2}>Next Step</button>
    </div>
  )
}

export default NavigateButton