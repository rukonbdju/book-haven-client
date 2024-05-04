import { Link } from "react-router-dom";

const MenuItems = () => {
    return (
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                <li>
                    <Link to={'/home'}>Home</Link>
                </li>
                <li>
                    <Link to={'/books'}>Books</Link>
                </li>
                <li>
                    <Link to={'/ebooks'}>Ebooks</Link>
                </li>
                <li>
                    <Link to={'/authors'}>Authors</Link>
                </li>
                <li>
                    <Link to={'/blogs'}>Blogs</Link>
                </li>
            </ul>
        </div>
    )
}

export default MenuItems;