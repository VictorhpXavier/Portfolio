// src/components/Home.js
import React, { useEffect, useRef } from 'react';
import styles from '../styles/Home.module.css'; // Import the CSS module

function Home() {
    const aboutBoxesRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.visible);
                    } else {
                        entry.target.classList.remove(styles.visible);
                    }
                });
            },
            { threshold: 0.5 }
        );

        aboutBoxesRef.current.forEach((box) => {
            if (box) {
                observer.observe(box);
            }
        });

        return () => {
            if (aboutBoxesRef.current) {
                aboutBoxesRef.current.forEach((box) => {
                    observer.unobserve(box);
                });
            }
        };
    }, []);


  return (
        <div>
            <div className={styles.parentContainer}>
                <div className={styles.Text}>
                    <div className={styles.Saudation}>
                        <h1>
                            Hello, I'm <span>Victor</span>
                        </h1>
                        <p>
                            I'm currently a high school student from Portugal
                            with <br></br>a passion for technology.<br></br>
                            Welcome to my Portfolio where i showcase my projects{' '}
                            <br></br> and share insights into how i build and
                            create various <br></br>applications.
                        </p>
                    </div>
                    <div className={styles.Buttons}>
                        <a href="/Projects">
                            <button className={styles.ProjectsButton}>
                                Projects
                            </button>
                        </a>
                        <a href="#Contact">
                            <button className={styles.ContactButton}>
                                Contact
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.Image}>
                <img
                    src={`${process.env.PUBLIC_URL}/images/pfp.jpg`}
                    alt="Profile"
                />
                <p>Observation: Not me</p>
            </div>
            <div className={styles.AboutContainer}>
                <div className={styles.Title} ref={(el) => (aboutBoxesRef.current[0] = el)}>
                    <h1>About Me</h1>
                </div>
                <div className={styles.AboutBox} ref={(el) => (aboutBoxesRef.current[1] = el)}>
                    <h1>History of My life</h1>
                    <p>
                        I’m a high school student passionate about technology,
                        my goal is to become a full stack developer, I have been
                        coding since 12 years when i wrote my first line of code
                        in java trying to create a Minecraft Server, at that
                        time I didn’t fully understand what programming was.
                        Since then I have been focused on improving my coding
                        skills.{' '}
                    </p>
                    <span>Wrote on 1 august 2024</span>
                </div>
                <div className={styles.AboutBoxMyskills} id={styles.AboutBoxSkills} ref={(el) => (aboutBoxesRef.current[2] = el)}>
                    <h1>My Skills</h1>
                    
                    <p>
                        <strong>Web Development</strong>
                        <br></br>Html<br></br>Css<br></br>JavaScript<br></br>{' '}
                        React{' '}
                    </p>
                    <p>
                        <strong>Server Development</strong>
                        <br></br>NodeJs<br></br>Express<br></br>Python<br></br>
                        Sql{' '}
                    </p>
                    <p>
                        <strong>Other Technologies</strong>
                        <br></br>Git<br></br>GitHub<br></br>REST APIs<br></br>
                    </p>
                </div>
                <div className={styles.AboutBox} id={styles.AboutBoxidGoals} ref={(el) => (aboutBoxesRef.current[3] = el)}>
                    <h1>My goals</h1>
                    <p>
                        I aim to further my education in computer science and
                        continue building innovative projects. My ultimate goal
                        is to develop advanced AI models that can significantly
                        contribute to society. I am particularly interested in
                        creating AI solutions that can improve healthcare and
                        enhance education.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;
