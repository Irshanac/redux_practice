import { configureStore } from "@reduxjs/toolkit";
import ColorSlice from "./ColorSlice";
export default configureStore({
    reducer:{
        color:ColorSlice
    }
})