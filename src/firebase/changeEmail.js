import { getAuth, updateEmail } from "firebase/auth";

export function changeLogin(login) {
const auth = getAuth();
console.log(auth);
updateEmail(auth.currentUser, login).then((response) => {
    console.log(response);
    console.log(login);
}).catch((error) => {
console.error(error)
});
}