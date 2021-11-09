import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const location  = useLocation()
    const history  = useHistory()
    const [loginData  , setLoginData]  = useState({})

    const handleOnBlur = (e)=>{
        const  name =  e.target.name 
        const  value =  e.target.value
        console.log(name , value)
        const newLoginData = {...loginData}
        newLoginData[name] = value 
        setLoginData(newLoginData)
        console.log('signupData',loginData)
    }

    // console.log(location?.state?.form?.pathname)
    const {signInWithGoogle, loginInWithEmailAndPassword, authErrorMsg} = useAuth()
    const handleGoogleSignIn = ()=> {
        alert('Sign in')
        signInWithGoogle(location, history)
       
    }
    const handleEmailPasswordLogin = (e) =>{
        e.preventDefault()
        
        alert('login process  ')
        loginInWithEmailAndPassword(loginData, location, history)
    }


    // const handleEmailPasswordSignIn = ()=> {
    //     loginInWithEmailAndPassword()
    // }

    return (
        <div>
            <h1>Login</h1>
            <div className="m-20">
                <form onSubmit={handleEmailPasswordLogin} className="flex flex-col" >
                    
                    <input type="text" name="email" placeholder="Email" className="bg-blue-100"  onBlur={handleOnBlur} ></input>
                    <input type="password" name="password"  className="bg-blue-100"  onBlur={handleOnBlur}></input>
                    <button type="submit" className="bg-green-500">SUBMIT</button>
                </form>
            </div>
            <Link to="/signup">Have no account ? Signup</Link>
            <button onClick={handleGoogleSignIn} className="p-5 bg-green-200">Google Sign in </button>
            {
                authErrorMsg ? <div className="bg-red-400 text-white px-10 py-5">{authErrorMsg}</div> : ''
            }
        </div>
    );
};

export default Login;