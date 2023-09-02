import { createSlice } from "@reduxjs/toolkit";



const PostSlice=createSlice({
    name:'post',
    initialState:{
        data:[]
    },
    reducers:{
        savePostData:(state,action)=>{
            state.data=action.payload
        }
    }
})
export const {savePostData}=PostSlice.actions

export default PostSlice.reducer