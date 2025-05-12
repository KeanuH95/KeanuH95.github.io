import React from "react";
import styles from './BGInitials.module.scss';

export const BGInitials: React.FC = () => {
    return (
        <div className={styles.bgText}>
            <div className={styles.initials}>KH</div>
        </div>
    );
};
