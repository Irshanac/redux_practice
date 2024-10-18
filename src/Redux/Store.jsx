import {configureStore} from "@reduxjs/toolkit"
import colorReducer from "./Color"
import countReducer from "./Counter"
export default configureStore({
    reducer:{
        color:colorReducer,
        count:countReducer
    }
})