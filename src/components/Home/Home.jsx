import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.scss";
import Silhouette from "../../images/silhouette.png"
import routes from "../../utils/routes";

function Home() {
    return (
            <div className={styles.homeContent}>
                <div className={styles.homeIntro}>
                    <div className={styles.introText}>
                        <span>Hey, my name is</span>
                        <h2>Keanu Hilaire.</h2>
                        <h3>I like to build cool products.</h3>
                        <p>
                            I'm a software engineer with based in Brooklyn specializing in backend, 
                            web and microservices development. I have a strong history of developing application 
                            features and software solutions to enhance user experience on several startups. 
                        </p>
                        <Link to={routes.CONTACT_ROUTE}>
                            <button className={styles.contactButton}>Contact Me</button>
                        </Link>
                        
                    </div>
                    <div className={styles.portraitImgContainer}>
                        <img src={Silhouette} alt="Portrait"></img>
                    </div>
                </div>
            </div>
    );
}

export default Home;