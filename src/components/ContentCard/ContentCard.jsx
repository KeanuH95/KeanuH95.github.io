import React from "react";
import { Link } from "react-router-dom";
import styles from './ContentCard.module.scss';

function ContentCard({cardTitle, cardImage, cardDesc, cardLink}) {
    return (
        <div className={styles.card} >
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{cardTitle}</h3>
                { !!cardLink && (
                    <Link to={cardLink} target="_blank" rel="noopener noreferrer" className={styles.cardImage}>
                        <img src={cardImage} alt="cardImage" />
                    </Link>
                )}
                {!cardLink && (
                    <Link to={"#"} className={styles.cardImage}>
                        <img src={cardImage} alt="cardImage" />
                    </Link>
                )}
                <p className={styles.cardDesc}>{cardDesc}</p>
            </div>
        </div>
    );
}

export default ContentCard;
