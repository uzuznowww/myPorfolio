// Contact.jsx

import React from "react";
import emailIcon from '../../../assets/contact/emailIcon.png'
import githubIcon from '../../../assets/contact/githubIcon.png'
import linkedinIcon from '../../../assets/contact/linkedinIcon.png'
import styles from "./Contact.module.css";

export const Contact = () => {
    return (
        <footer id='contact' className={styles.container}>
            <div className={styles.icons}>
                <a href="mailto:anton7uzunov7@gmail.com" target="_blank" rel="noopener noreferrer">
                    <img src={emailIcon} alt='Email icon' />
                </a>
                <a href="https://www.linkedin.com/in/anton-uzunov-63178a258/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinIcon} alt='LinkedIn icon' />
                </a>
                <a href="https://github.com/uzuznowww" target="_blank" rel="noopener noreferrer">
                    <img src={githubIcon} alt='GitHub icon' />
                </a>
            </div>
        </footer>
    )
}
