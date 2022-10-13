import { auth } from './firebaseInitialisation'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

export const register = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}

export const login = (email, password) => {}