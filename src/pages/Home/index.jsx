import React from 'react'

import Steps from './components/Steps/Steps'
import ThankStep from './components/ThanksStep/ThankStep'
import PersonalInfoStep from './components/PersonalInfoStep/PersonalInfoStep'
import PlanStep from './components/SelectPlanStep/PlanStep'
import NavigateButton from './components/Navigation/NavigateButton'
import AddOnsStep from './components/AddOnsStep/AddOnsStep'
import SummaryStep from './components/SummaryStep/SummaryStep'
import {setStep} from '../Home/redux/action'

import style from './Home.module.scss'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
  const dispatch = useDispatch()
  const currentStep = useSelector((state) => state.homeReducer.step)

  const stepHanlder = () => {
    if (currentStep === 5) {
      dispatch(setStep(1))
    } else {
      dispatch(setStep(currentStep + 1))
    }
  }
  
  return (
    <main>
      {/* Container */}
      <div className={style.Container}>
        <Steps/>
        {/* content */}
        <div className={style.content}>
            {/* <PersonalInfoStep/> */}
            <PlanStep/>
            {/* <AddOnsStep/> */}
            {/* <SummaryStep/> */}
            {/* <ThankStep/> */}
            <NavigateButton/>
        </div>
      </div>
    </main>
  )
}

export default Home