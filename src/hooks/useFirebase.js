import {
  createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut
} from "firebase/auth";
import { useState } from 'react';
import initFirebase from '../api-config/firebase/firebase.init';

initFirebase()
const useFirebase = () => {




  // console.log(location?.state?.form?.pathname)
  const [currentUser, setCurrentUser] = useState({})
  const [authErrorMsg, setAuthErrorMsg] = useState('')
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();


  const successRedirection = (location, history) => {
    setAuthErrorMsg('')
    console.log(location?.state?.form?.pathname)
    const destination = location?.state?.form?.pathname || '/'
    history.push(destination);
  }

  const signInWithGoogle = (location, history) => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        successRedirection(location, history)
      }).catch((error) => {
        setAuthErrorMsg(error.message);
      });
  }



  const signUpWithEmialPassword = (signupData, location, history) => {
    createUserWithEmailAndPassword(auth, signupData.email, signupData.password)
      .then((userCredential) => {
        successRedirection(location, history)
      })
      .catch((error) => {
        setAuthErrorMsg(error.message)
      });
  }



  const loginInWithEmailAndPassword = (loginData, location, history) => {
    signInWithEmailAndPassword(auth, loginData.email, loginData.password)
      .then((userCredential) => {
        successRedirection(location, history)
      })
      .catch((error) => {
        setAuthErrorMsg(error.message)
      });
  }

  const logout = () => {
    signOut(auth).then(() => {
      console.log('logout success')
    }).catch((error) => {
      // An error happened.
    });

  }
  // observer 
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrentUser(user)
      console.log(user)
    } else {
      console.log('calling on auth logout ')
      setCurrentUser(null)
    }
  });

  return {
    signInWithGoogle,
    currentUser, authErrorMsg,
    logout, signUpWithEmialPassword
    , loginInWithEmailAndPassword
  }

}

export default useFirebase





