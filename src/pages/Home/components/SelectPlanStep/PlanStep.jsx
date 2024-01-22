import React from 'react'

import PlanItems from './PlanItems'
import Arcade from '../../../../assets/images/icon-arcade.svg'
import Advance from '../../../../assets/images/icon-advanced.svg'
import Pro from '../../../../assets/images/icon-pro.svg'


import style from './SelectPlan.module.scss'

const PlanStep = () => {
  return (
    <div className={style.Plan}>
        <h2>Select your plan</h2>
        <p>You have the option of monthly or yearly billing</p>
        <div className={style.plansCards}>
            <div>
                <PlanItems  img={Arcade} title='Arcade' price={'Price'}/>
            </div>
            <div>
                <PlanItems img={Advance} title='Advance' price={'Price'}/>
            </div>
            <div>
                <PlanItems img={Pro} title='Pro' price={'Price'}/>
            </div>
        </div>
        <label className={style.switch}>
            <span className={style.switchOn}>Monthly</span>
            <input type="checkbox" />
            <span className={style.switchOn}>Yearly</span>
        </label>
    </div>
  )
}

export default PlanStep