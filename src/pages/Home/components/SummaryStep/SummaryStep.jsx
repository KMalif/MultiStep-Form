import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

import SummaryItems from './SummaryItems'
import {setUser, setStep} from '../../redux/action'

import style from './Summary.module.scss'

const SummaryStep = () => {

    const dispatch = useDispatch()
    const user = useSelector((state) => state.homeReducer.user)
    const symbol = user.plantime === "Yearly" ? "yr" : "mo"
    const [price, setprice] = useState(0)

    useEffect(() => {
        var t = 0
        user.packs.map((e)=>{
            if(e.addon){
            {(user.plantime).toString().toLowerCase() === 'monthly' ? t+=price + e.price.monthly : t += price + e.price.yearly}
        }})
        setprice(t+user.price)
        dispatch(setUser({...user, totalToPay: price}))
    }, [])
    
  return (
    <div>
        <h2>Finishing Up</h2>
        <p>Double check everything look ok before confirming</p>
        <div className={style.payout}>
            <div className={`${style.title} ${style.dflex}`}>
                <div>
                    <h3>{user.plan} ({user.plantime})</h3>
                    <p onClick={() => dispatch(setStep(1))}>Change</p>
                </div>
                <span>${user.price}/{symbol}</span>
            </div>
            {
                user.packs.map((e, i) =>
                    e.addon && <SummaryItems title={e.title} key={i} price={(user.plantime).toString().toLowerCase() === 'monthly' ? e.price.monthly : e.price.yearly} symbol= {symbol}/>
                )
            }
        </div>
        <div className={`${style.total} ${style.dflex}`}>
            <p>Total {user.plantime === "Yearly" ? "(per year)" : "(per month)"}</p>
            <span>${user.price}/{symbol}</span>
        </div>
    </div>
  )
}

export default SummaryStep