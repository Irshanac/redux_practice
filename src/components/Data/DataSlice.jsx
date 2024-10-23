import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchData = createAsyncThunk('data/fetchData', async () => {
    const response = await axios.get('http://localhost:3500/product');
    return response.data;  
});
export const addData = createAsyncThunk('data/addData', async (newData) => {
    const response = await axios.post('http://localhost:3500/product', newData);
    return response.data;
});
export const deleteData=createAsyncThunk('data/deleteData',async(id)=>{
    await axios.delete(`http://localhost:3500/product/${id}`)
    return id
})
export const editData=createAsyncThunk('data/editData',async(data)=>{
    console.log(data);
    
    const {id}=data
    console.log(id);
    
   const response= await axios.put(`http://localhost:3500/product/${id}`,data)
    return response.data
})

export const dataSlice = createSlice({
    name: 'data',
    initialState: {
        product: [],
        status: 'idle', 
        error: null
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = 'loading';  
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = 'succeeded';  
              state.product = action.payload; 
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message; 
            })
            .addCase(addData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.product.push(action.payload);  
            })
            .addCase(addData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message; 
            })
            .addCase(deleteData.pending,(state)=>{
                state.status='loading'
            })
            .addCase(deleteData.fulfilled,(state,action)=>{
                state.status='succeeded'
                state.product=state.product.filter((item)=>item.id!==action.payload)
            })
           
            .addCase(deleteData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message; 
            })
            .addCase(editData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                console.log("success");
                
                state.product = state.product.map((item) => 
                    item.id === action.payload.id ? action.payload : item  
                );
            })
            .addCase(editData.rejected,(state,action)=>{
                state.status="fails"
                state.error=action.error.message
            })
            .addCase(editData.pending,(state)=>{
                state.status='loading'
            })
        
    }
});

export default dataSlice.reducer;
