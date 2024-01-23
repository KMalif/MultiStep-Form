import { SET_STEP, SET_USER } from "./constants";

export const setStep = (step) => ({
    type: SET_STEP,
    step
})

export const setUser = (user) => ({
    type: SET_USER,
    user
})