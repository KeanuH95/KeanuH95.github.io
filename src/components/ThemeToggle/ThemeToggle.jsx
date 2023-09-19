import React from "react";
import styles from './ThemeToggle.module.scss';
import Sun from "../../images/sun.svg"
import { useTheme } from "styled-components";

function ThemeToggle({ isBlackTheme, setIsBlackTheme }) {
    const theme = useTheme();
    return (
        <div onClick={() => setIsBlackTheme(!isBlackTheme)} style={{ background: `${theme.shadow}`, boxShadow: `0px 0px 30px 20px ${theme.background}`}} className={styles.toggle}>
            <img src={Sun} alt="sun" />
        </div>
    );
}

export default ThemeToggle;
