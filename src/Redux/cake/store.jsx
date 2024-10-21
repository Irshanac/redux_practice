import { configureStore } from "@reduxjs/toolkit";
import cakecount from './cakeAction'
export default configureStore({
    reducer:{
        cake:cakecount
    }
})