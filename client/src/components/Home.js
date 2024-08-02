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
    
            aboutBoxesRef.current.forEach((box) => {
                if (box) {
                    observer.unobserve(box);
                }
            });
        };
    }, []);
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            if (targetId === "") {
                window.scrollTo({
                    top: 10,
                    behavior: 'smooth'
                });
            } else {
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    window.scroll({
                        top: targetElement.offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

  return (
        <div>
            <section id='home'>
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
            </section>
            <section id="About">
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
            </section>
            <section id='Contact'>
        <div className={styles.ContactContainer}>
            <div className={styles.ContactTitle}>
                <h1>Contact Me</h1>
            </div>
            <div className={styles.ContactBox}>
                <div className={styles.LeftSide}>
                    <h1>Social Links</h1>
                    <h2>My email:</h2>
                    <p>victorhpxavier.09@gmail.com</p>
                    <div className={styles.GitHubButton}>
                        <a href="https://github.com/VictorhpXavier" target="_blank" rel="noopener noreferrer">
                            <img src={`${process.env.PUBLIC_URL}/images/githubLogo.png`} alt="Profile"/>
                        <div className={styles.SocialLinkText}>
                            <h3>Github</h3>
                            <span>VictorhpXavier</span>
                        </div>

                            
                        </a>
                    </div>
                    <div className={styles.LeetCodeButton}>
                        <a href="https://leetcode.com/u/VictorhpXavier/" target="_blank" rel="noopener noreferrer">
                        <img src={`${process.env.PUBLIC_URL}/images/leetCodeLogo.png`} alt="Profile"/>
                        <div className={styles.SocialLinkText}>
                            <h3>LeetCode</h3>
                            <span>VictorhpXavier</span>
                        </div>

                            
                        </a>
                    </div>
                </div>
                <div className={styles.SendMessage}>
                    <h1>Send Message</h1>
                    <form action="/">
                        <label htmlFor="name">Write your name </label>
                        <input type="text" id="name" name="name" placeholder='Your name' required/>
                        
                        <label htmlFor="email">Email address </label>
                        <input type="email" id="email" name="email" placeholder='Your email address'required />
                        
                        <label htmlFor="message">Write Your Message</label>
                        <textarea id="message" name="message" placeholder='Write your message'required></textarea>
                        
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
            </section>
            <footer>
                <div className={styles.footercontent}>
                    <div className={styles.footerlogo}>
                        <h1><strong>V<span>H</span>X</strong></h1>
                        <p>2024 &copy; VHX All rights reserved.</p>
                    </div>
                    <div className={styles.footerlinks}>
                        <div className={styles.linkscolumn}>
                            <a href="#">Home</a>
                            <a href="#About">About</a>
                            <a href="#Contact">Contact</a>

                        </div>
                        <div className={styles.linkscolumn}>
                            <a href="/blog">Blog</a>
                            <a href="/Projects">Projects</a>
                        </div>
                        <div className={styles.linkscolumn}>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms Of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;
