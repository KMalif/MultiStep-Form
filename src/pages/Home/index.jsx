import React from 'react'
import '../../index.scss'
import Steps from './components/Steps/Steps'
import ThankStep from './components/ThanksStep/ThankStep'
import PersonalInfoStep from './components/PersonalInfoStep/PersonalInfoStep'
import PlanStep from './components/SelectPlanStep/PlanStep'
import NavigateButton from './components/Navigation/NavigateButton'
import AddOnsStep from './components/AddOnsStep/AddOnsStep'
import SummaryStep from './components/SummaryStep/SummaryStep'

const Home = () => {
  return (
    <main>
      {/* Container */}
      <div className='Container'>
        <Steps/>
        {/* content */}
        <div className='content'>
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