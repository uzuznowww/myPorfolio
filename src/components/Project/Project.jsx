import React from "react";
import programmingImage from '../../../assets/project/programming.png';
import styles from './Project.module.css';

export const Project = () => {
    return (
        <section className={styles.projectSection} id="project">
            <div className={styles.container}>
                <img src={programmingImage} alt="Programming Project" className={styles.image} />
                <a href="https://github.com/uzuznowww/myPorfolio" target="_blank" rel="noopener noreferrer" className={styles.githubLink}>GitHub Repository</a>
            </div>
        </section>
    );
};


