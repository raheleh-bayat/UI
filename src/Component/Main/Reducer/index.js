import  { combineReducers } from "redux";
import Reducer from './product'

const redu = combineReducers({
    product: Reducer,
})
export default redu;

