
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
trainingData: [],
};

const workoutSlice = createSlice({
  name: "workouts",
  initialState,
  reducers: {
    setWorkout(state, action) {
        state.trainingData = action.payload;
    },
  },
});

export const { setWorkout } = workoutSlice.actions;
export default workoutSlice.reducer;

