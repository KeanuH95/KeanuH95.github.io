import React from "react";
import { Link } from "react-router-dom";
import styles from './ContentCard.module.scss';

interface ContentCardProps {
    cardTitle: string;
    cardImage: string;
    cardDesc: string;
    cardLink?: string;
}

export const ContentCard: React.FC<ContentCardProps> = ({ cardTitle, cardImage, cardDesc, cardLink }) => {
    const renderCardImage = () => (
        <Link to={cardLink || "#"} target={cardLink ? "_blank" : undefined} rel={cardLink ? "noopener noreferrer" : undefined} className={styles.cardImage}>
            <img src={cardImage} alt={cardTitle} />
        </Link>
    );

    return (
        <div className={styles.card}>
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{cardTitle}</h3>
                {renderCardImage()}
                <p className={styles.cardDesc}>{cardDesc}</p>
            </div>
        </div>
    );
};
