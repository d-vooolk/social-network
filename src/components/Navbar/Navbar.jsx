import navbarStyle from './Navbar.module.css';
import {NavLink} from "react-router-dom";

function Navbar(props) {
    return (
        <nav className={navbarStyle.nav}>
            <div className={navbarStyle.item}>
                <NavLink activeClassName={navbarStyle.active} to={'/profile'}>Profile</NavLink>
            </div>
            <div className={navbarStyle.item}>
                <NavLink activeClassName={navbarStyle.active} to={'/messages'}>Messages</NavLink>
            </div>
            <div className={navbarStyle.item}>
                <NavLink activeClassName={navbarStyle.active} to={'/news'}>News</NavLink>
            </div>
            <div className={navbarStyle.item}>
                <NavLink activeClassName={navbarStyle.active} to={'/music'}>Music</NavLink>
            </div>
            <div className={navbarStyle.item}>
                <NavLink activeClassName={navbarStyle.active} to={'/settings'}>Settings</NavLink>
            </div>
            <div className={navbarStyle.item}>
                <NavLink activeClassName={navbarStyle.active} to={'/users'}>Users</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;