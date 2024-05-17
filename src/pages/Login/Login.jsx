import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import auth from "../../../firebase.init";


const Login = () => {
    const [signInWithEmailAndPassword,user,loading,error,] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    console.log(gUser?.user)
    /* by checking the creation time identify the user is new or not */
    /* console.log(gUser.user.metadata.creationTime, gLoading, gError) */
    const [userInfo,setUserInfo]=useState({email:'',password:''})
    useEffect(()=>{
        if(gUser?.user?.uid){
            window.location='/'
        }
    },[gUser?.user?.uid])
    return (
        <div className="flex flex-col w-4/5 md:w-1/2 lg:w-1/3 mx-auto justify-center items-center gap-2">
            <img src={logo} alt="" />
            <h1 className=" font-bold text-4xl text-center mb-2">Welcome back !</h1>
            <label className="input input-bordered flex items-center gap-2 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                <input onChange={(e)=>setUserInfo({...userInfo,email:e.target.value})} type="text" className="grow" placeholder="Enter email" />
            </label>
            <label className="input input-bordered flex items-center gap-2 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                <input onChange={(e)=>setUserInfo({...userInfo,password:e.target.value})} type="password" className="grow" placeholder="Enter password" />
            </label>
            <button onClick={()=>signInWithEmailAndPassword(userInfo.email,userInfo.password)} className="btn w-full">Login</button>
            <div>
                 <span className="text-left">New user? <Link className="underline" to={'/auth/register'}>click here</Link> to register.</span>
            </div>
           
            <div className="divider">OR</div>
            <button onClick={()=>signInWithGoogle()} className="btn w-full">Continue with Google</button>
            <button className="btn w-full">Continue with Facebook</button>
        </div>
    )
}
export default Login;