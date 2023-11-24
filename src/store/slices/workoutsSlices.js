import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: null,
    type: null,
    video_file: null,
    isFinished: null,
    exercise: [],
    id: null,

};

const workoutSlice = createSlice({
  name: "workout",
  initialState,
  reducers: {
    setWorkout(state, action) {
        state.name = action.payload.name;
        state.type = action.payload.type;
        state.video_file = action.payload.video_file;
        state.isFinished = action.payload.isFinished;
        state.exercise = action.payload.exercise;
        state.id = action.payload.id;
    },
  },
});

export const { setWorkout } = workoutSlice.actions;
export default workoutSlice.reducer;