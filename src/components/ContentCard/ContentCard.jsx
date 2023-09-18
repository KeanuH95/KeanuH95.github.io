import React from "react";
import styles from './ContentCard.module.scss';
import { useMediaQuery } from "react-responsive";

function ContentCard({cardTitle, cardSubtitle, cols}) {
    const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
    const cardWidth = isMobile ? 100 : 1/cols * 100;

    return (
        <div className={styles.card} style={{width: `${cardWidth}%`}}>
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{cardTitle}</h3>
                <h4 className={styles.cardSubtitle}>{cardSubtitle}</h4>
            </div>
        </div>
    );
}

export default ContentCard;
