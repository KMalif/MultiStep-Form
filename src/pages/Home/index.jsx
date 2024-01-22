import React from 'react'

import Steps from './components/Steps/Steps'
import ThankStep from './components/ThanksStep/ThankStep'
import PersonalInfoStep from './components/PersonalInfoStep/PersonalInfoStep'
import PlanStep from './components/SelectPlanStep/PlanStep'
import NavigateButton from './components/Navigation/NavigateButton'
import AddOnsStep from './components/AddOnsStep/AddOnsStep'
import SummaryStep from './components/SummaryStep/SummaryStep'

import style from './Home.module.scss'

const Home = () => {
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