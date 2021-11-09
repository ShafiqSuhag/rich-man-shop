import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Signup = () => {
    const location  = useLocation()
    const history  = useHistory()

    // console.log(location?.state?.form?.pathname)
    const {signInWithGoogle, signUpWithEmialPassword, authErrorMsg} = useAuth()
    const [signupData  , setSignupData]  = useState({})
    const handleGoogleSignIn = ()=> {
        alert('Sign in')
        signInWithGoogle(location, history)
       
    }

    const handleOnBlur = (e)=>{
        const  name =  e.target.name 
        const  value =  e.target.value
        console.log(name , value)
        const newSignupData = {...signupData}
        newSignupData[name] = value 
        setSignupData(newSignupData)
        console.log('signupData',signupData)
    }

    const handleEmailPasswordSignIn = (e)=> {
        e.preventDefault()
        
        if(signupData['password']===signupData['cr_password']){
            alert('signup process  ')
            signUpWithEmialPassword(signupData, location, history)
        }
        else{
            alert('password not match  ')
        }
    }

    return (
        <div>
            <h1>Singup </h1>
            <div className="m-20">
                <form onSubmit={handleEmailPasswordSignIn} className="flex flex-col" >
                    <input type="text" name="full_name" placeholder="Full name" className="bg-blue-100" onBlur={handleOnBlur} ></input>
                    <input type="text" name="email" placeholder="Email" className="bg-blue-100"   onBlur={handleOnBlur} ></input>
                    <input type="password" name="password"  className="bg-blue-100"  onBlur={handleOnBlur} ></input>
                    <input type="password" name="cr_password" className="bg-blue-100"  onBlur={handleOnBlur} ></input>
                    <button type="submit" className="bg-green-500">SUBMIT</button>
                </form>
            </div>
            <Link to="/login">Have any account ? Login</Link>
            {
                authErrorMsg ? <div className="bg-red-400 text-white px-10 py-5">{authErrorMsg}</div> : ''
            }
            {/* <button onClick={handleGoogleSignIn} className="p-5 bg-green-200">Google Sign in </button> */}
        </div>
    );
};

export default Signup;