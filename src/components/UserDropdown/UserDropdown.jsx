import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import auth from "../../firebaseAuth/firebase.init";

const UserDropdown = () => {
    const [user,loading,error]=useAuthState(auth)
    const [signOut, isLoading, isError] = useSignOut(auth);
    console.log( loading, error);
    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img alt="user" src={user.photoURL} />
                </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                    <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </a>
                </li>
                <li><a>Settings</a></li>
                <li onClick={()=>signOut()}><a>Logout</a></li>
            </ul>
        </div>
    )
}
export default UserDropdown;