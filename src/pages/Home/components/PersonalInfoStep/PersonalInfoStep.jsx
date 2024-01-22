import React from 'react'

import style from './PersonalInfo.module.scss'

const PersonalInfoStep = () => {
  return (
    // info
    <div className={style.info}>
        <h2>Personal info</h2>
        <p>Please provide your name, email address, and phone number.</p>
        <form className={style.form} autoComplete='on'>
          {/* fields */}
          <div className={style.fields}>
            {/* dFlex */}
            <div className={style.dFlex}>
              <label >Name</label>
              <span>This field requred</span>
            </div>
            <input type="text"
            placeholder="e.g. Khafidul Mualif" />
          </div>

          {/* fields */}
          <div className={style.fields}>
            {/* dFlex */}
            <div className={style.dFlex}>
              <label >Email Address</label>
              <span>This field requred</span>
            </div>
            <input type="text" 
            placeholder="e.g. kmalif@gmail.com"/>
          </div>

          {/* fields */}
          <div className={style.fields}>
            {/* dFlex */}
            <div className={style.dFlex}>
              <label >Phone number</label>
              <span>This field requred</span>
            </div>
            <input type="text" 
            placeholder="+62 828 8349 9277"/>
          </div>
        </form>
    </div>
  )
}

export default PersonalInfoStep