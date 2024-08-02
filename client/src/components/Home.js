// src/components/Home.js
import React, { useEffect } from 'react';
import styles from '../styles/Home.module.css'; // Import the CSS module

function Home() {
    const title = document.querySelector('.Title');
const aboutBox = document.querySelector('.AboutBox');
const aboutBoxSkills = document.querySelector('.AboutBoxMyskills');

// Function to handle scroll event
function handleScroll() {
  // Get the current scroll position
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Check if the elements are in the viewport and apply the visible class
  if (scrollTop > title.offsetTop - window.innerHeight) {
    title.classList.add('visible');
  }
  if (scrollTop > aboutBox.offsetTop - window.innerHeight) {
    aboutBox.classList.add('visible');
  }
  if (scrollTop > aboutBoxSkills.offsetTop - window.innerHeight) {
    aboutBoxSkills.classList.add('visible');
  }
}

// Add event listener for scroll event
window.addEventListener('scroll', handleScroll);
    
    
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
                <div className={styles.Title}>
                    <h1>About Me</h1>
                </div>
                <div className={styles.AboutBox}>
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
                <div className={styles.AboutBoxMyskills} id={styles.AboutBoxSkills}>
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
                <div className={styles.AboutBox} id={styles.AboutBoxidGoals}>
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
