import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Nav.module.scss";
import routes from "../../utils/routes";
import { Link } from "react-router-dom";

function Nav () {
    const [selected, setSelected] = useState(null);
    const navItems = [
        {
            title: "Work",
            path: `${routes.WORK_ROUTE}`
        },
        {
            title: "Skills",
            path: `${routes.SKILLS_ROUTE}`
        },
        {
            title: "Experience",
            path: `${routes.EXPERIENCE_ROUTE}`
        },
        {
            title: "Contact",
            path: `${routes.CONTACT_ROUTE}`
        }
    ];
    return (
        <nav className={styles.navBar}>
            <h1><Link onClick={() => setSelected(null)} to={routes.HOME_ROUTE}>KH</Link></h1>
                <ul>
                    {navItems.map(({ title, path }, i) => (
                        <motion.li
                            key={i}
                            className={`${styles.title} ${i === selected && `${styles.selected}`}`}
                            onClick={() => setSelected(i)}
                            animate
                        >
                            <Link to={path}>{title}</Link>
                            {i === selected && (
                                <motion.div
                                    className={styles.underline}
                                    layoutId="underline"
                                />
                            )}
                        </motion.li>
                    ))}
                </ul>
        </nav>
    )
}

export default Nav;