import React from "react";
import styles from './About.module.css';
import ProgrammingBasics from "../../../assets/about/ProgrammingBasics.png";
import ProgrammingFundamentals from "../../../assets/about/ProgrammingFundamentals.png";


export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <a href="https://softuni.bg/certificates/details/151145/d41587fc" target="_blank" rel="noopener noreferrer">
                    <img className={styles.aboutImage} src={ProgrammingBasics} alt="JavaScript Basics Certificate" />
                </a>
                <a href="https://softuni.bg/Certificates/Details/169172/0ac218e2" target="_blank" rel="noopener noreferrer">
                    <img className={styles.aboutImage} src={ProgrammingFundamentals} alt="JavaScript Fundamentals Certificate" />
                </a>
            </div>
        </section>
    );
};


