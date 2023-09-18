import React from "react";
import styles from "./Nav.module.scss";
import routes from "../../utils/routes";
import { Link } from "react-router-dom";

function Nav () {
    return (
        <nav className={styles.navBar}>
            <h1><a href={routes.HOME_ROUTE}>KH</a></h1>
            <ul>
                <li><Link to={routes.WORK_ROUTE}>Work</Link></li>
                <li><Link to={routes.SKILLS_ROUTE}>Skills</Link></li>
                <li><Link to={routes.EXPERIENCE_ROUTE}>Experience</Link></li>
                <li><Link to={routes.CONTACT_ROUTE}>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;