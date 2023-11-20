import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    logo: "white",
};

const logoSlice = createSlice({
    name: 'logo',
    initialState,
    reducers: {
        setLogo(state, action) {
            state.logo = action.payload.logo;
        },
        removeLogo(state) {
            state.logo = null;
        }
    },
});

export const {setLogo, removeLogo} = logoSlice.actions;

export default logoSlice.reducer;