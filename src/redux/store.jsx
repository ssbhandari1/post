import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "./PostSlice";


const store=configureStore({
    reducer:{
       post:PostReducer 
    }
})
export default store