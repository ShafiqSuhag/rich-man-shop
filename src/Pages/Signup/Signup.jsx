import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Layout/Footer/Footer';
import Header from '../Layout/Header/Header';

const Signup = () => {
    const location = useLocation()
    const history = useHistory()
    const [loginData, setLoginData] = useState({})

    const handleOnBlur = (e) => {
        const name = e.target.name
        const value = e.target.value
        console.log(name, value)
        const newLoginData = { ...loginData }
        newLoginData[name] = value
        setLoginData(newLoginData)
        console.log('signupData', loginData)
    }

    // console.log(location?.state?.form?.pathname)
    const { signInWithGoogle, signUpWithEmialPassword, authErrorMsg } = useAuth()
    const handleGoogleSignIn = () => {

        signInWithGoogle(location, history)

    }
    const handleEmailPasswordSignup = (e) => {
        e.preventDefault()
        if(!loginData.email || !loginData.password || !loginData.fullName) {
            alert("Please fillup the required fields.")
            return ; 
        }
        console.log('signupdata ', loginData)
      

        signUpWithEmialPassword(loginData, location, history)
    }

    return (
        <>
            <Header></Header>
            <div>
                <>

                    <div class="h-screen flex justify-center items-center bg-gray-100">
                        <div className="py-10">
                            {/* form  */}
                            <form onSubmit={handleEmailPasswordSignup} class="p-10 bg-white rounded flex justify-center items-center flex-col shadow-md">

                                <p class="mb-5 text-3xl uppercase text-gray-600">Signup</p>
                                <input onBlur={handleOnBlur} type="text" name="fullName" class="mb-5 p-3 w-80 focus:border-purple-700 rounded border-2 outline-none" autocomplete="off" placeholder="Full Name" required />
                                <input onBlur={handleOnBlur} type="email" name="email" class="mb-5 p-3 w-80 focus:border-purple-700 rounded border-2 outline-none" autocomplete="off" placeholder="Email" required />
                                <input onBlur={handleOnBlur} type="password" name="password" class="mb-5 p-3 w-80 focus:border-purple-700 rounded border-2 outline-none" autocomplete="off" placeholder="Password" required />
                                <button class="bg-purple-600 hover:bg-purple-900 text-white font-bold p-2 rounded w-80" id="login" type="submit"><span>submit</span></button>
                            </form>
                            {/* form  */}

                            <div className="flex flex-col justify-center items-center my-5">

                                <div className="my-3">
                                    <Link className="text-lg font-semibold underline text-gray-600" to="/login">Have account ? Login</Link>
                                </div>
                                <button onClick={handleGoogleSignIn} class="bg-green-600 hover:bg-green-900 text-white font-bold p-2 rounded w-80" id="login" type="submit"><span>Sign In With Google</span></button>
                                {
                                    authErrorMsg ? <div className="bg-red-400 text-white px-10 py-5">{authErrorMsg}</div> : ''
                                }
                            </div>
                        </div>

                    </div>


                </>
                {/* <h1>Login</h1> */}
                {/* <div className="m-20">
                    <form onSubmit={handleEmailPasswordLogin} className="flex flex-col" >

                        <input type="text" name="email" placeholder="Email" className="bg-blue-100" onBlur={handleOnBlur} ></input>
                        <input type="password" name="password" className="bg-blue-100" onBlur={handleOnBlur}></input>
                        <button type="submit" className="bg-green-500">SUBMIT</button>
                    </form>
                </div> */}
                {/* <Link to="/signup">Have no account ? Signup</Link>
                <button onClick={handleGoogleSignIn} className="p-5 bg-green-200">Google Sign in </button>
                {
                    authErrorMsg ? <div className="bg-red-400 text-white px-10 py-5">{authErrorMsg}</div> : ''
                } */}
            </div>
            <Footer></Footer>
        </>
    );

};

export default Signup;