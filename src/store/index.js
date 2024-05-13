
import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./slices/userSlices"
import logoReducer from "./slices/logoSlices"
import courseReducer from "./slices/courseSlices"
import workoutReducer from "./slices/workoutsSlices"
import progressUserAllReducer from "./slices/userProgressSlices"
export const store = configureStore({
    reducer: {
        user: userReducer,
        logo: logoReducer,
        course: courseReducer,
        workout: workoutReducer,
        progress: progressUserAllReducer,
    },

})