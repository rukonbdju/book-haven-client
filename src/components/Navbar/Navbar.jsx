import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"
import MenuItems from "../MenuItems/MenuItems";
import MobileMenuItems from "../MobileMenuItems/MobileMenuItems";
import UserDropdown from "../UserDropdown/UserDropdown";
import Notifications from "../Notifications/Notifications";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    console.log(user, loading, error);
    return (
        <div className="navbar sticky top-0 bg-white/80 shadow backdrop-blur-sm">
            {/* Left side of the navbar */}
            <div className="navbar-start">
                {/* Drop down menu for small screen */}
                <MobileMenuItems></MobileMenuItems>
                {/* This is logo */}
                <div className="h-16">
                    <img className="h-full w-full" src={logo} alt="logo" />
                </div>
            </div>
            {/* center of the navbar for large screen */}
            <MenuItems></MenuItems>
            {/* Right side of the nabvar */}
            <div className="navbar-end">
                <div className="flex">
                    {/* search in top bar */}
                    <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                    {/* Notificaion in top bar */}
                    <Notifications></Notifications>
                    <Link to={'/cart'}>
                        <div role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </div>
                    </Link>

                    {/* User info in top bar */}
                    {
                        user?.uid ? <UserDropdown></UserDropdown> : <Link to={"/auth/login"} className="btn">Login</Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar;