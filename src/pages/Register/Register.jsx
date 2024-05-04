import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebaseAuth/firebase.init";
import { useState } from "react";

const Register = () => {
    const [createUserWithEmailAndPassword,user,loading,error,] = useCreateUserWithEmailAndPassword(auth);
    const [userInfo,setUserInfo]=useState({name:"",email:"",password:""})
    console.log(userInfo)
    console.log(user)
    console.log(loading)
    console.log(error)
    return (
        <div className="flex flex-col w-4/5 md:w-1/2 lg:w-1/3 mx-auto my-2 h-screen justify-center items-center gap-2">
            <img width={120} src={logo} alt="" />
            <h1 className=" font-bold text-4xl text-center mb-2">User register</h1>
            <label className="input input-bordered flex w-full items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                <input onChange={(e)=>setUserInfo({...userInfo,name:e.target.value})} type="text" className="grow" placeholder="Enter username" />
            </label>
            <label className="input input-bordered flex items-center gap-2 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                <input onChange={(e)=>setUserInfo({...userInfo,email:e.target.value})} type="text" className="grow" placeholder="Enter email" />
            </label>
            <label className="input input-bordered flex items-center gap-2 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                <input type="password" className="grow" placeholder="Enter new password" />
            </label>
            <label className="input input-bordered flex items-center gap-2 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                <input onChange={(e)=>setUserInfo({...userInfo,password:e.target.value})} type="password" className="grow" placeholder="Confirm password" />
            </label>
            <button onClick={() => createUserWithEmailAndPassword(userInfo.email, userInfo.password)} className="btn w-full">Register</button>
            <span>Already registered? <Link className="underline" to={'/auth/login'}>click here</Link> to login.</span>
            <div className="divider">OR</div>
            <button className="btn w-full">Continue with Google</button>
            <button className="btn w-full">Continue with Facebook</button>
        </div>
    )
}
export default Register;