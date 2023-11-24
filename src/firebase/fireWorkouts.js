import { useDispatch, useSelector } from "react-redux";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { setWorkout } from "../store/slices/workoutsSlices";


  export function useDataWorkout(idWorkout) {
    const dispatch = useDispatch();
    const checkName = useSelector(state => state.workout.name)
    if(checkName !== 'Красота и здоровье') {
        firebase
        .database()
        .ref(`workouts/${idWorkout}`)
        .once("value")
        .then((snapshot) => {
          const data = snapshot.val();
          console.log(data);
          dispatch(
            setWorkout({
            name: data.name,
            type: data.type,
            video_file: data.video_file,
            isFinished: data.isFinished,
            exercise: data.exercise,
            id: data.id,
            })
          )
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }