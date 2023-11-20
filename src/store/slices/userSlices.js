
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    userMail: null,
    token: null,
    id: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.userMail = action.payload.userMail;
            state.token = action.payload.token;
            state.id = action.payload.id;
            localStorage.setItem("email", state.userMail);
            localStorage.setItem("token", state.token);
            localStorage.setItem("id", state.id);
        },
        removeUser(state) {
            state.userMail = null;
            state.token = null;
            state.id = null;
            localStorage.removeItem("email");
            localStorage.removeItem("token");
            localStorage.removeItem("id");
        }
    },
});



export const {setUser, removeUser} = userSlice.actions;

export default userSlice.reducer;