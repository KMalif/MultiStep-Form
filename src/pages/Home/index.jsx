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

  const stepDisplay = () => {
    switch(currentStep){
      case 0:
        return <PersonalInfoStep/>
      case 1:
        return <PlanStep/>
      case 2:
        return <AddOnsStep/>
      case 3:
        return <SummaryStep/>
      case 4:
        return <ThankStep/>
    }
  }

  return (
    <main>
      {/* Container */}
      <div className={style.Container}>
        <Steps/>
        {/* content */}
        <div className={style.content}>
          {stepDisplay}          
          {currentStep !=4 && <NavigateButton/>}
        </div>
      </div>
    </main>
  )
}

export default Home