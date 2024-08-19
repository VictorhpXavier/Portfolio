import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Projects.module.css';
function About() {
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
        //Settings menu
        const [isMenuOpen, setIsMenuOpen] = useState(false);

        const toggleMenu = () => {
            setIsMenuOpen(!isMenuOpen);
        };
 return (
        <div>
            <div className={styles.AboutContainer}>
                <div className={styles.Title}>
                    <h1>My Projects</h1>
                </div>
                <div className={styles.Settings}>
                            <h2>Search Settings </h2>
                            <div className={styles.HamburgerMenu} onClick={toggleMenu}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                    
                    {isMenuOpen && (
                        <div className={styles.Menu}>
                        <h2>Search Settings</h2>
                    </div>
                    )}
                </div>
                <div className={styles.ProjectContainer}>
                    
                    <div
                        className={styles.AboutBox}
                        ref={(el) => (aboutBoxesRef.current[0] = el)}
                    >
                        <h1>AI ChatBot </h1>
                        <p>
                        Unlock your expertise with our AI-powered platform

                        </p>
                        <span>Wrote on 1 august 2024</span>
                        
                        <div className={styles.Buttons}>
                            <div className={styles.Visit}>
                                <a href="http://localhost:3002" target='blank'>
                                    <button className={styles.VisitButton}>Visit Now</button>
                                </a>
                            </div>
                            <div className={styles.LearnMore}>
                                <Link to="/blog/VHX-ChatBotAi">
                                    <button className={styles.LearnMore}>Read About</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div
                        className={styles.AboutBox}
                        ref={(el) => (aboutBoxesRef.current[1] = el)}
                    >
                        <h1>Sentiment Analysis </h1>
                        <p>Get sentiment feedback from a phrase</p>
                        <span>Wrote on 1 august 2024</span>
                        <div className={styles.Buttons}>
                            <div className={styles.Visit}>
                                <a href="http://localhost:3002" target='blank'>
                                    <button className={styles.VisitButton}>Visit Now</button>
                                </a>
                            </div>
                            <div className={styles.LearnMore}>
                                <Link to="/blog/VHX-SentimentAnalysis">
                                    <button className={styles.LearnMore}>Read About</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div
                        className={styles.AboutBox}
                        ref={(el) => (aboutBoxesRef.current[2] = el)}
                    >
                        <h1>Portfolio </h1>
                        <p>
                            Explore my work, showcasing a range of web
                            development projects and interactive designs.
                        </p>
                        <span>Wrote on 1 august 2024</span>
                        <div className={styles.Buttons}>
                            <div className={styles.Visit}>
                                <a href="http://localhost:3002" target='blank'>
                                    <button className={styles.VisitButton}>Visit Now</button>
                                </a>
                            </div>
                            <div className={styles.LearnMore}>
                                <Link to="/blog/VHX-PortFolio">
                                    <button className={styles.LearnMore}>Read About</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div
                        className={styles.AboutBox}
                        ref={(el) => (aboutBoxesRef.current[3] = el)}
                    >
                        <h1>AI ChatBot </h1>
                        <p>
                            Unlock your expertise with our AI-powered platform
                        </p>
                        <span>Wrote on 1 august 2024</span>
                        <div className={styles.Buttons}>
                            <div className={styles.Visit}>
                                <a href="http://localhost:3002" target='blank'>
                                    <button className={styles.VisitButton}>Visit Now</button>
                                </a>
                            </div>
                            <div className={styles.LearnMore}>
                                <Link to="/blog/VHX-ChatBotAi">
                                    <button className={styles.LearnMore}>Read About</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div
                        className={styles.AboutBox}
                        ref={(el) => (aboutBoxesRef.current[4] = el)}
                    >
                        <h1>Sentiment Analysis </h1>
                        <p>Get sentiment feedback from a phrase</p>
                        <span>Wrote on 1 august 2024</span>
                        <div className={styles.Buttons}>
                            <div className={styles.Visit}>
                                <a href="http://localhost:3002" target='blank'>
                                    <button className={styles.VisitButton}>Visit Now</button>
                                </a>
                            </div>
                            <div className={styles.LearnMore}>
                                <Link to="/blog/VHX-ChatBotAi">
                                    <button className={styles.LearnMore}>Read About</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div
                        className={styles.AboutBox}
                        ref={(el) => (aboutBoxesRef.current[5] = el)}
                    >
                        <h1>Portfolio </h1>
                        <p>
                            Explore my work, showcasing a range of web
                            development projects and interactive designs.
                        </p>
                        <span>Wrote on 1 august 2024</span>
                        <div className={styles.Buttons}>
                            <div className={styles.Visit}>
                                <a href="http://localhost:3002" target='blank'>
                                    <button className={styles.VisitButton}>Visit Now</button>
                                </a>
                            </div>
                            <div className={styles.LearnMore}>
                                <Link to="/blog/VHX-ChatBotAi">
                                    <button className={styles.LearnMore}>Read About</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div
                        className={styles.AboutBox}
                        ref={(el) => (aboutBoxesRef.current[6] = el)}
                    >
                        <h1>AI ChatBot </h1>
                        <p>
                            Unlock your expertise with our AI-powered platform
                        </p>
                        <span>Wrote on 1 august 2024</span>
                    </div>
                    <div
                        className={styles.AboutBox}
                        ref={(el) => (aboutBoxesRef.current[7] = el)}
                    >
                        <h1>Sentiment Analysis </h1>
                        <p>Get sentiment feedback from a phrase</p>
                        <span>Wrote on 1 august 2024</span>
                    </div>
                    <div
                        className={styles.AboutBox}
                        ref={(el) => (aboutBoxesRef.current[8] = el)}
                    >
                        <h1>Portfolio </h1>
                        <p>
                            Explore my work, showcasing a range of web
                            development projects and interactive designs.
                        </p>
                        <span>Wrote on 1 august 2024</span>
                    </div>
                    <div
                        className={styles.AboutBox}
                        ref={(el) => (aboutBoxesRef.current[9] = el)}
                    >
                        <h1>AI ChatBot </h1>
                        <p>
                            Unlock your expertise with our AI-powered platform
                        </p>
                        <span>Wrote on 1 august 2024</span>
                    </div>
                    <div
                        className={styles.AboutBox}
                        ref={(el) => (aboutBoxesRef.current[10] = el)}
                    >
                        <h1>Sentiment Analysis </h1>
                        <p>Get sentiment feedback from a phrase</p>
                        <span>Wrote on 1 august 2024</span>
                    </div>
                    <div
                        className={styles.AboutBox}
                        ref={(el) => (aboutBoxesRef.current[11] = el)}
                    >
                        <h1>Portfolio </h1>
                        <p>
                            Explore my work, showcasing a range of web
                            development projects and interactive designs.
                        </p>
                        <span>Wrote on 1 august 2024</span>
                    </div>
                </div>
            </div>
            <footer>
                <div className={styles.footercontent}>
                    <div className={styles.footerlogo}>
                        <h1><strong>V<span>H</span>X</strong></h1>
                        <p>2024 &copy; VHX All rights reserved.</p>
                    </div>
                    <div className={styles.footerlinks}>
                        <div className={styles.linkscolumn}>
                            <a href="/">Home</a>
                            <Link to="/home#About">About</Link>
                            <Link to="/home#Contact">Contact</Link>


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

export default About;
