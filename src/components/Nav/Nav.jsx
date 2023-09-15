import React from "react";
import styles from "./Nav.module.scss";

function Nav () {
    return (
        <nav className={styles.navBar}>
            <h1>KH LOGO</h1>
            <ul>
                <li>Work</li>
                <li>Skills</li>
                <li>Resumé</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Nav;