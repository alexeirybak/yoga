import { useDispatch, useSelector } from "react-redux";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { setWorkout } from "../store/slices/workoutsSlices";


  export function useDataWorkout() {
    const dispatch = useDispatch();
    const check = useSelector(state => state.workout)
    if(check.trainingData.length === 0) {
        firebase
        .database()
        .ref(`workouts`)
        .once("value")
        .then((snapshot) => {
          const data = snapshot.val();
          dispatch(
            setWorkout(data)
          )
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }