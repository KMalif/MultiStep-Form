import { combineReducers } from "redux";
import homeReducer from './src/pages/Home/redux/reducer'

const rootReducer = combineReducers({
    homeReducer: homeReducer
})

export default rootReducer;