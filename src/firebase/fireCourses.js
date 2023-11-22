import { useDispatch, useSelector } from "react-redux";
import { setCourse } from "../store/slices/courseSlices";
import firebase from "firebase/compat/app";
import "firebase/compat/database";


  export function useDataBase() {
    const dispatch = useDispatch();
    const pageId = useSelector(state => state.course.id)
    if(pageId !== 'ab1') {
        firebase
        .database()
        .ref("courses/ab1")
        .once("value")
        .then((snapshot) => {
          const data = snapshot.val();
          dispatch(
            setCourse({
              id : data._id,
              name : data.name,
              benefits : data.benefits,
              description : data.description,
              workouts : data.workout,
            })
          )
        })
        .catch((error) => {
          console.error(error);
        });
    }
    return
      
  }