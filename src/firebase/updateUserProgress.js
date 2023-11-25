import firebase from "firebase/compat/app";
import "firebase/compat/database";

    function updatePogressDone(id) {
    const user = localStorage.getItem('email');
    firebase
    .database()
    .ref(`users/` + user.replace(/\./g, "-") + '/workoutsDone' + id)
    .update({
        done: true,
    })
      .catch((error) => {
        console.error(error);
      });
}

export function updateProgressExercise(IDtraining, IDexercise, newValue) {
    const user = localStorage.getItem('email');
    firebase
    .database()
    .ref(`users/` + user.replace(/\./g, "-") + '/workoutsProgress' + `/${IDtraining}` + `/${IDexercise}`)
    .update({
        progress: newValue,
    })
      .catch((error) => {
        console.error(error);
      });
}