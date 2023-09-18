import React from "react";
import styles from "./Nav.module.scss";
import routes from "../../utils/routes";

function Nav () {
    return (
        <nav className={styles.navBar}>
            <h1><a href={routes.HOME_ROUTE}>KH</a></h1>
            <ul>
                <li><a href={routes.WORK_ROUTE}>Work</a></li>
                <li><a href={routes.SKILLS_ROUTE}>Skills</a></li>
                <li><a href={routes.RESUME_ROUTE}>Resume</a></li>
                <li><a href={routes.CONTACT_ROUTE}>Contact</a></li>
            </ul>
        </nav>
    )
}

export default Nav;