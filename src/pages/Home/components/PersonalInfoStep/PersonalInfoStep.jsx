import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"

import {setUser} from '../../redux/action'

import style from './PersonalInfo.module.scss'

const PersonalInfoStep = () => {

  const dispatch = useDispatch()
  const user = useSelector((state) => state.homeReducer.user)
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: ""
  })

  const isEmailvalid = e => {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,10})$/i;
    return regex.test(e);
  };
  const isPhoneValid = e => {
    const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i;
    return regex.test(e);
  };

  const refName = useRef()
  const refEmail=useRef();
  const refPhone=useRef(); 

  useEffect(() => {
    dispatch(setUser({...user, name: refName.current.value, email: refEmail.current.value, phone: refPhone.current.value, emailValid:isEmailvalid(refEmail.current.value),phoneValid:isPhoneValid(refPhone.current.value)}))
  }, [userInfo.name, userInfo.email, userInfo.phone])

  useEffect(() => {
    refName.current.value=user.name;
    refEmail.current.value=user.email;
    refPhone.current.value=user.phone;
    dispatch(setUser({...user, name: refName.current.value, email: refEmail.current.value, phone: refPhone.current.value, emailValid:isEmailvalid(refEmail.current.value),phoneValid:isPhoneValid(refPhone.current.value)}))
  }, [])

  return (
    <div className={style.info}>
        <h2>Personal info</h2>
        <p>Please provide your name, email address, and phone number.</p>
        <form className={style.form} autoComplete='on'>
          <div className={style.fields}>
            <div className={style.dFlex}>
              <label>Name</label>
            </div>
            <input 
            type="text"
            ref={refName}
            placeholder="e.g. Khafidul Mualif"
            onChange={e => setUserInfo({...userInfo, name: e.target.value})}
            />
            {user.nextClick && (
                <span>{user.name.length <= 3 && 'This field requred'}</span>
            )}
          </div>
          <div className={style.fields}>
            <div className={style.dFlex}>
              <label >Email Address</label>
            </div>
            <input
            type="text" 
            ref={refEmail}
            placeholder="e.g. kmalif@gmail.com"
            onChange={e => setUserInfo({...userInfo, email: e.target.value})}/>
            {!user.emailValid && user.nextClick && (
              <span>
                {user.email == ""
                  ? "This field is required"
                  : "Invalid Email Address"}
              </span>
            )}
          </div>
          <div className={style.fields}>
            <div className={style.dFlex}>
              <label >Phone number</label>
            </div>
            <input
            type="text" 
            ref={refPhone}
            placeholder="+62 828 8349 9277"
            onChange={e => setUserInfo({...userInfo, phone: e.target.value})}/>
            {!user.phoneValid && user.nextClick && (
              <span>This field is required</span>
            )}
          </div>
        </form>
    </div>
  )
}

export default PersonalInfoStep