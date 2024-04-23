import React from "react";
import cssIcon from '../../../assets/skills/css.png';
import githubIcon from '../../../assets/skills/github.png';
import jsIcon from '../../../assets/skills/js.png';
import nodejsIcon from '../../../assets/skills/nodejs.png';
import reactIcon from '../../../assets/skills/react.png';
import styles from './Skills.module.css';

const Skills = () => {
    return (
        <section className={styles.container} id="skills">
            <div className={styles.row}>
                <img src={cssIcon} alt="CSS" className={styles.icon} />
                <img src={githubIcon} alt="GitHub" className={styles.icon} />
                <img src={jsIcon} alt="JavaScript" className={styles.icon} />
            </div>
            <div className={styles.row}>
                <img src={nodejsIcon} alt="Node.js" className={styles.icon} />
                <img src={reactIcon} alt="React" className={styles.icon} />
            </div>
        </section>
    );
};

export default Skills;
