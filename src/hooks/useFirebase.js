import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useState } from 'react';
import initFirebase from '../api-config/firebase/firebase.init';

initFirebase()
const useFirebase = () => {
    const [currentUser, setCurrentUser] = useState({})
    const [authError, setAuthError] = useState()
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                // const credential = GoogleAuthProvider.credentialFromResult(result);
                // const token = credential.accessToken;
                // The signed-in user info.
                console.log(result.user)
                setCurrentUser(result.user);
                console.log(currentUser);
                // ...
            }).catch((error) => {
                // Handle Errors here.
                // const errorCode = error.code;
                setAuthError(error.message);
                // The email of the user's account used.
                // const email = error.email;
                // The AuthCredential type that was used.
                // const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    const logout = ( ) => {
        signOut(auth).then(() => {
            setCurrentUser({})
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
          
    }
    // observer 
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setCurrentUser(user)
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          
          // ...
        } else {
            setCurrentUser({})
          // User is signed out
          // ...
        }
      });

    return {
        signInWithGoogle,
        currentUser, authError,
        logout
    }

}

export default useFirebase





