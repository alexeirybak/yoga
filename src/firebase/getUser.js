import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { useDispatch, useSelector } from "react-redux";
import { setProgress } from "../store/slices/userProgressSlices";

export function useUser() {
  const dispatch = useDispatch();
  const user = localStorage.getItem('email');
  const dataProgress = useSelector(state => state.progress);
    if(user !== null && dataProgress.userProgressAll === null) {
        firebase
        .database()
        .ref(`users/` + user.replace(/\./g, "-"))
        .once("value")
        .then((snapshot) => {
            const data = snapshot.val();
            dispatch(
              setProgress({
                userProgressAll: data,
                })
              )
          })
          .catch((error) => {
            console.error(error);
          });
    }
}
