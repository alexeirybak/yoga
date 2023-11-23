
import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./slices/userSlices"
import logoReducer from "./slices/logoSlices"
import courseReducer from "./slices/courseSlices"
export const store = configureStore({
    reducer: {
        user: userReducer,
        logo: logoReducer,
        course: courseReducer,
    },

})