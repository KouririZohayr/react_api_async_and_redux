import {createAsyncThunk , createSlice } from "@reduxjs/toolkit";

export const fetchItems = createAsyncThunk(
    'user/fetchuser',
    async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const items = await response.json();
      return items;
    }
  );
  


const userSlice = createSlice({
    name : 'users',
    initialState : {
        isLoading: false,
        users: [],
        error: null
    },
    reducer :{
        
    },
    extraReducers:{
        [fetchItems.fulfilled]:(state,action)=>{
            state.isLoading=true
            state.users=action.payload
            
        },
        [fetchItems.pending]:(state)=>{
            state.isLoading=true
        },
        [fetchItems.rejected]:(state)=>{
            state.error='error'
        },
    }
})

export default userSlice.reducer;