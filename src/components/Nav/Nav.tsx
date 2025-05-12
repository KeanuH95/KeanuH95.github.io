import React, { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

import styles from "./Nav.module.scss";
import routes from "../../utils/routes";

export const Nav: React.FC = () => {
    const [selected, setSelected] = useState<number | null>(null);
    const navItems = [
        {
            title: "Experience",
            path: `${routes.EXPERIENCE_ROUTE}`
        },
        {
            title: "Work",
            path: `${routes.WORK_ROUTE}`
        },
        {
            title: "Skills",
            path: `${routes.SKILLS_ROUTE}`
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
                        <motion.div
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
                        </motion.div>
                    ))}
                </ul>
        </nav>
    );
};