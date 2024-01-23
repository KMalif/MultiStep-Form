import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import Package from './Package'
import {setUser} from '../../redux/action'

import style from './AddOns.module.scss'


const AddOnsStep = () => {

  const dispatch = useDispatch()
  const user = useSelector((state) => state.homeReducer.user)
  const [packages, setPackages] = useState(user.packs)
  const chengeClick = title => {
    setPackages(packages.map(e => (e.title === title ? { ...e, addon: !e.addon } : e)));
  };

  useEffect(()=>{
    packages.map((e)=>{
        dispatch(setUser({...user, packs: packages}));
    })
  },[packages])
  
  return (
    <div className={style.info}>
        <h2>Pick add-ons</h2>
        <p>Add-on help enhance your gaming experience</p>
        <div className={style.packs}>
          {packages.map((e, i) => (
            <Package key={i} packs={e} chengeClick={chengeClick} />
          ))}
        </div>
    </div>
  )
}

export default AddOnsStep
