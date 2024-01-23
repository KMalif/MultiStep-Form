import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useRef, useState, useEffect } from 'react';

import { setUser } from '../../redux/action';
import PlanItems from './PlanItems'
import Arcade from '../../../../assets/images/icon-arcade.svg'
import Advance from '../../../../assets/images/icon-advanced.svg'
import Pro from '../../../../assets/images/icon-pro.svg'

import style from './SelectPlan.module.scss'

const PlanStep = () => {

    const dispatch = useDispatch()
    const refSwitch = useRef()
    const user = useSelector((state) => state.homeReducer.user)

    const [yearly, setYearly] = useState({
        arcade: 90,
        advanced: 120,
        pro: 150,
    });
    
    const [monthly, setMonthly] = useState({
        arcade: 9,
        advanced: 12,
        pro: 15,
    });

    const [switchOff, setSwitch] = useState(false);

    const [plan, setPlan] = useState({
        arcade: true,
        advanced: false,
        pro: false,
    });

    useEffect(() => {
        if(user.plantime=="Yearly"){
            setSwitch(true);
            refSwitch.current.checked=true;
        }
        switch(user.plan){
            case "advanced":
              setPlan({arcade: false, advanced: true, pro: false});
              break;
            case "pro":
              setPlan({arcade: false, advanced: false, pro: true});
              break;
        }
    }, [])

    useEffect(() => {
        let val = 0
        let planTitle, planPrice, planTime

        Object.values(plan).map((e, i) => {if(e == true) val = i})
        Object.keys(plan).map((e, i) => {if(i == val) planTitle = e})

        if(!switchOff){
            Object.values(monthly).map((e, i) => {if(i == val) planPrice = e})
            planTime="Monthly";
          }
        else{
            Object.values(yearly).map((e, i) => {if(i == val ) planPrice = e})
            planTime="Yearly";
        }

        dispatch(setUser({...user, plan: planTitle, price: planPrice, plantime: planTime}))

    },[user.nextClick, plan, switchOff])


  return (
    <div className={style.Plan}>
        <h2>Select your plan</h2>
        <p>You have the option of monthly or yearly billing</p>
        <div className={style.plansCards}>
            <div onClick={()=>setPlan({arcade: true,advanced: false,pro: false,})}>
                <PlanItems
                    img={Arcade} 
                    title='Arcade' 
                    price={switchOff ? yearly.arcade + "/yr" : monthly.arcade + "/mo"}
                    selected={plan.arcade}
                />
            </div>
            <div onClick={()=>setPlan({arcade: false,advanced: true,pro: false,})}>
                <PlanItems 
                    img={Advance} 
                    title='Advance' 
                    price={
                        switchOff ? yearly.advanced + "/yr" : monthly.advanced + "/mo"
                    }
                    selected={plan.advanced}
                    />
            </div>
            <div onClick={()=>setPlan({arcade: false,advanced: false,pro: true,})}>
                <PlanItems 
                    img={Pro} 
                    title='Pro' 
                    price={switchOff ? yearly.pro + "/yr" : monthly.pro + "/mo"}
                    selected={plan.pro}
                />
            </div>
        </div>
        <label className={style.switch}>
            <span className={!switchOff ? `${style.switchOn}` : ''}>Monthly</span>
            <input 
                id="plan" 
                name="plan"
                type="checkbox"
                ref={refSwitch} 
                onChange={() => setSwitch(!switchOff)}
            />
            <span className={switchOff ? `${style.switchOn}` : ''}>Yearly</span>
        </label>
    </div>
  )
}

export default PlanStep