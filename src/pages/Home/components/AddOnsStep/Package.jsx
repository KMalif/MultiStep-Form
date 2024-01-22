import React from 'react'

import style from './AddOns.module.scss'

const Package = ({packs, onChange}) => {
  return (
    <label className={`${style.dflex} ${style.pack}`}>
      <input type="checkbox" />   
      <div className={style.title}>
          <h3>Online Service</h3>
          <p>Access to multiplayer games</p>
      </div>
      
    </label>
  )
}

export default Package