import { produce } from "immer";
import { SET_STEP } from "./constants";

export const initialState = {
    step: 0
}

const homeReducer = (state = initialState, action) => 
    produce(state, (draft) => {
        switch(action.type) {
            case SET_STEP:
                draft.step = action.step
        }
    })

export default homeReducer;