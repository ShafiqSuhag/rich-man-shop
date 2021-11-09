import React from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {signInWithGoogle} = useAuth()
    const handleGoogleSignIn = ()=> {
        alert('Sign in')
        signInWithGoogle()
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn} className="p-5 bg-green-200">Loing</button>
        </div>
    );
};

export default Login;