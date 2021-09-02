import { createSlice } from '@reduxjs/toolkit';


export const slice = createSlice({
  name: 'user',
  initialState: {
    user: {userName:'',mail:'',password:'',isLogin:'',lang:'tr'},
  },
  reducers: {
    userLogin: (state,action) => {
     
      state.user =action.payload
    },
    userLogOut:(state,action)=>{
        state.user=action.payload;
    }
  },
});

export const { userLogin,userLogOut } = slice.actions;

export const userInf = (state) => state.user;

export default slice.reducer;
