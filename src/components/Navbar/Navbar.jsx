import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"
import MenuItems from "../MenuItems/MenuItems";
import MobileMenuItems from "../MobileMenuItems/MobileMenuItems";
import CartDropdown from "../CartDropdown/CartDropdown";
import UserDropdown from "../UserDropdown/UserDropdown";
import Notifications from "../Notifications/Notifications";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebaseAuth/firebase.init";
const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    console.log(user, loading, error);
    return (
        <div className="navbar">
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
                    {/* Cart in top bar */}
                    <CartDropdown></CartDropdown>
                    {/* User info in top bar */}
                    {
                        user?.uid?<UserDropdown></UserDropdown>:<Link to={"/auth/login"} className="btn">Login</Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar;