import {
  createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile
} from "firebase/auth";
import { useState } from 'react';
import initFirebase from '../api-config/firebase/firebase.init';

initFirebase()
const useFirebase = () => {



  const [isLoading, setIsLoading] = useState(true)
  // console.log(location?.state?.form?.pathname)
  const [currentUser, setCurrentUser] = useState({})
  const [authErrorMsg, setAuthErrorMsg] = useState('')
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();


  const successRedirection = (location, history) => {
    setIsLoading(false)
    setAuthErrorMsg('')
    console.log(location?.state?.form?.pathname)
    const destination = location?.state?.form?.pathname || '/'
    history.push(destination);
  }

  const signInWithGoogle = (location, history) => {
    setIsLoading(true)
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log("signin in with google ", result.user)
        // setCurrentUser(result.user)
        successRedirection(location, history)
      }).catch((error) => {
        setAuthErrorMsg(error.message);
      });
  }



  const signUpWithEmialPassword = (signupData, location, history) => {

    console.log('firebase-', signupData, signupData.fullName)


    createUserWithEmailAndPassword(auth, signupData.email, signupData.password)
      .then((result) => {
        console.log("signUpWithEmialPassword ", result.user)
        // setCurrentUser(result.user)
        // // updateProfileInfo(signupData.fullName)
        updateProfile(auth.currentUser, {
          displayName: signupData.fullName
        }).then((updateResulte) => {
          console.log("updateResulte -", updateResulte)
          const newUser = { email: signupData.email, displayName: signupData.fullName }
          setCurrentUser(newUser)
        }).catch((error) => {
          console.log("updateResulte failed -", error)
        });
        // console.log('newuser-1' , newUser)
        // // newUser["displayName"] = signupData.fullName
        // console.log("New user",currentUser)
        // setCurrentUser(result.user)
        successRedirection(location, history)
      })
      .catch((error) => {
        setAuthErrorMsg(error.message)
      });
  }



  const loginInWithEmailAndPassword = (loginData, location, history) => {
    console.log("firebase > loginInWithEmailAndPassword ", loginData)
    setIsLoading(true)
    signInWithEmailAndPassword(auth, loginData.email, loginData.password)
      .then((result) => {

        console.log("loginInWithEmailAndPassword - success", result.user)
        setCurrentUser(result.user)
        successRedirection(location, history)

      })
      .catch((error) => {
        console.log('loginInWithEmailAndPassword-failed')
        setAuthErrorMsg(error.message)
      });
  }


  const updateProfileInfo = (userName) => {
    console.log('fb-username', userName)

    updateProfile(auth.currentUser, {
      displayName: { userName }
    }).then(() => {



      // Profile updated!
      // ...
    }).catch((error) => {
      // An error occurred
      // ...
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
      console.log("onAuthStateChanged- success", user)
    } else {
      console.log('calling on auth logout ')
      setCurrentUser(null)
    }
    setIsLoading(false)
  });

  return {
    signInWithGoogle,
    currentUser,
    authErrorMsg,
    logout,
    signUpWithEmialPassword,
    loginInWithEmailAndPassword,
    isLoading
  }

}

export default useFirebase





