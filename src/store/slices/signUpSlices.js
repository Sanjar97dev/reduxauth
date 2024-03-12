import { createSlice } from "@reduxjs/toolkit";

const signUpSlice = createSlice({
    name: 'signUp',
    initialState:{
        userData: {},
        loading: false,
        error: ''
    },
    reducers: {
        createUser(state, action){
            state.userData = action.payload;
            localStorage.setItem('auth', JSON.stringify(state.userData));
        },
        getFromLs(state){
            state.userData = JSON.parse(localStorage.getItem("auth"));
        },
        signOut(state){
            state.userData = {};
            localStorage.removeItem("auth");
        }
    },
});

export const { createUser, getFromLs, signOut } = signUpSlice.actions;
export default signUpSlice.reducer;
