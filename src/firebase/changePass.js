import {
    getAuth,
    updatePassword,
    reauthenticateWithCredential,
    EmailAuthProvider,
  } from 'firebase/auth';
  

  
//   const oldPassword = 
//   const credential = EmailAuthProvider.credential(
//      this.currentUser.email,
//      oldPassword
//   );
//   await reauthenticateWithCredential(auth.currentUser, credential);
  

  export async function changePassword(newPassword) {
    const user = getAuth()
    await updatePassword(user.currentUser, newPassword);
  }
