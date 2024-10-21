import { configureStore } from "@reduxjs/toolkit";
import todoalice from "./todo/todoalice";
export default configureStore({
    reducer:{
        todo:todoalice
    }
})