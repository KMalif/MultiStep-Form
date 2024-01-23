import React from 'react'
import { useRef } from 'react'
import { useSelector } from 'react-redux'

import style from './AddOns.module.scss'

const Package = ({packs, chengeClick}) => {
  const refCheck = useRef()
  const user = useSelector((state) => state.homeReducer.user)
  const planTime = user.plantime
  const price = planTime === "Yearly" ? packs.price.yearly : packs.price.monthly
  return (
    <label className={ !packs.addon ? `${style.dflex} ${style.pack}` : `${style.dflex} ${style.pack} ${style.packActive}`}>
      <input 
          id={packs.title}
          name={packs.title}
          type="checkbox"
          ref={refCheck}
          defaultChecked={packs.addon}
          onChange={() => {chengeClick(packs.title)}}
      />   
      <div className={style.title}>
          <h3>{packs.title}</h3>
          <p>{packs.text}</p>
      </div>
      <span>+{price}$/{planTime === "Yearly" ? "yr" : "mo"}</span>
    </label>
  )
}

export default Package