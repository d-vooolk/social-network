import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
import avatar from './../../img/header-image.svg';
import React from 'react';

function Header (props) {
    return (
    <header className={styles.header}>
        <img src={avatar} alt={'just man'}/>

        <div className={styles.loginBlock}>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Log Out</button></div>
                : <NavLink to={'/login'}>Login</NavLink>
            }
        </div>
    </header>
    );
}

export default Header;