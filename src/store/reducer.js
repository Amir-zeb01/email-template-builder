import { createSlice } from '@reduxjs/toolkit';

export const myReducer = createSlice({
    name: 'storeReducer',
    initialState: {
        isLogged: false,
        user: null,
        token: null
    },
    reducers: {
        storeUser: (state, payload) => {
            // let token = localStorage.getItem('@AccessToken');
            state.isLogged = true;
            // state.user = payload.user;
            // state.token = token;
        },
        loginUser: (state, payload) => {
            state.isLogged = true;
            // localStorage.setItem('@AccessToken', payload.token);
            // state.user = payload.user;
            // state.token = payload.token;
        },
        logout: (state) => {
            localStorage.clear();
            state.isLogged = false;
            state.user = null;
            state.token = null;
        },
    },
})

// Action creators are generated for each case reducer function
export const { storeUser, loginUser, logout } = myReducer.actions

export default myReducer.reducer