import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {setStep, setUser} from '../../redux/action'

import style from './NavigateButton.module.scss'

const NavigateButton = () => {
  const dispatch = useDispatch()
  const currentStep = useSelector((state) => state.homeReducer.step)
  const user = useSelector((state) => state.homeReducer.user)

  const nextStepHanlder = () => {
    dispatch(setUser({...user, nextClick: true}))
    if(user.emailValid && user.phoneValid && user.name.length>2 && currentStep===0){
      dispatch(setStep(currentStep + 1))
      dispatch(setUser({...user, nextClick: false}))
    }else if(currentStep === 5){
      dispatch(setStep(0))
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