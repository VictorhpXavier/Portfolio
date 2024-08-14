// src/components/About.js
import React from 'react';
import styles from '../styles/Projects.module.css'
function About() {
  return (
    <div>
        <section id={styles.ProjectsContainer}>
            <div className={styles.VHXProjects}>
                <p>Website</p>
            </div>
            <div className={styles.VHXProjects2}>
                <p>PortFolio</p>
            </div>
            <div className={styles.VHXProjects3}>
                <p>Sentiment analysis</p>

            </div>

        </section>
    </div>
  );
}

export default About;
