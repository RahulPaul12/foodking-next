
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    currentBlog : null
}

export const blogSlice = createSlice({
    name:'blog',
    initialState,
    reducers:{
        setBlog : (state, action)=>{
        state.currentBlog = action.payload
    }
}
})
export const { setBlog } = blogSlice.actions;

export default blogSlice.reducer;