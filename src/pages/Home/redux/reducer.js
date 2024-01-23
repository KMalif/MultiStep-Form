import { produce } from "immer";
import { SET_STEP, SET_USER } from "./constants";

export const initialState = {
    step: 0,
    user: {
        name: "",
        email: "",
        phone: "",
        nextPermition: false,
        nextClick: false,
        emailValid:false,
        phoneValid:false,
        plan:"",
        price:0,
        plantime:"",
        totalToPay:0,
        packs:[
            {
                title: "Online service",
                text: "Access to multiplayer games",
                price: {
                    monthly: 1,
                    yearly: 10,
                },
                addon: false,
            },
            {
                title: "Larger storage",
                text: "Extra 1TB of cloud save",
                price: {
                    monthly: 2,
                    yearly: 20,
                },
                addon: false,
            },
            {
                title: "Customizable profile",
                text: "Custom theme on your profile",
                price: {
                    monthly: 2,
                    yearly: 20,
                },
                addon: false,
            },
        ]
    }
}

const homeReducer = (state = initialState, action) => 
    produce(state, (draft) => {
        switch(action.type) {
            case SET_STEP:
                draft.step = action.step
                break;
            case SET_USER:
                draft.user = action.user
                break;
            
            default:
                break;
        }
    })

export default homeReducer;