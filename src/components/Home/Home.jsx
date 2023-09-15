import { React, useEffect } from "react";
import styles from "./Home.module.scss";
import Portrait from "../../images/portrait.jpg"

function Home() {
    useEffect(() => {
        const subtitle = document.getElementsByClassName(styles.cardSubtitle)[0];

        const createWord = (text, index) => {
            const word = document.createElement("span");
            word.innerHTML = `${text} `;
            word.classList.add(styles.cardSubtitleWord);
            word.style.transitionDelay = `${index * 40}ms`;
            return word;
        }

        const addWord = (text, index) => subtitle.appendChild(createWord(text, index));

        const createSubtitle = text => text.split(" ").map(addWord);

        createSubtitle("I'm a software engineer with 4+ years of experience specializing in backend, web and microservices development. I have a strong history of developing application features and software solutions to enhance user experience on several startups. I've been successful in working closely with founders, PMs, designers and integration partners to create truly innovative products.");
    }, []);
    
    return (
            <div className={styles.homeContent}>
                <div className={styles.homeIntro}>
                    <span>Hello, my name is <h2>Keanu Hilaire</h2></span>
                    <div className={styles.portraitImgContainer}>
                        <img src={Portrait} alt="Portrait"></img>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>Who am I, you ask?</h3>
                        <h4 className={styles.cardSubtitle}></h4>
                    </div>
                </div>
            </div>
    );
}

export default Home;