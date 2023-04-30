import { legacy_createStore } from "redux";
import cakeReducer from "./cake/cakeReducer/cakeReducer";
import imageReducer from './cake/cakeReducer/ImageReducer'

const store = legacy_createStore(imageReducer)

 export default store