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
           <div className={styles.Projects} ref={(el) => (aboutBoxesRef.current[0] = el)}>
                <h1>VHX Projects</h1>
                <table className={styles.ProjectTable}>
                   <thead>
                       <tr>
                           <th>Year</th>
                           <th>Project</th>
                           <th>Built with</th>
                           <th>Link</th>
                           <th>Read More</th>
                       </tr>
                   </thead>
                   <tbody>
                       <tr>
                           <td>2024</td>
                           <td><strong>VHX</strong> AI chatbot</td>
                           <td>
                                <span className={styles.badge}>HTML</span>
                                <span className={styles.badge}>CSS</span>
                                <span className={styles.badge}>JavaScript</span>
                                <span className={styles.badge}>Node.js</span>
                                <span className={styles.badge}>Python</span>
                                <span className={styles.badge}>MySQL</span>
                           </td>
                           <td><a href="http://localhost:3002" target="_blank">localhost:3002 </a></td>
                            <td>
                                <div className={styles.ReadMore}>
                                    <Link to={'/blog/AiChatBot'}><a>Read More</a></Link>
                                </div>
                            </td>
                       </tr>
                       <tr>
                           <td>2024</td>
                           <td><strong>VHX</strong> Sentiment Analysis</td>
                           <td>
                                <span className={styles.badge}>HTML</span>
                                <span className={styles.badge}>CSS</span>
                                <span className={styles.badge}>Flask</span>
                                <span className={styles.badge}>Python</span>
                           </td>
                           <td><a href="http://localhost:3002" target="_blank">localhost:3002 </a></td>
                            <td>
                                <div className={styles.ReadMore}>
                                    <Link to={'/blog/sentimentAnalysis'}><a>Read More</a></Link>
                                </div>
                            </td>
                       </tr>
                       <tr>
                           <td>2024</td>
                           <td><strong>VHX</strong> Automate Life</td>
                           <td>
                                <span className={styles.badge}>Python</span>
                                <span className={styles.badge}>PyQt5</span>
                           </td>
                           <td><a href="http://localhost:3002" target="_blank">localhost:3002 </a></td>
                            <td>
                                <div className={styles.ReadMore}>
                                    <Link to={'/blog/AutomateLife'}><a>Read More</a></Link>
                                </div>
                            </td>
                       </tr>
                       <tr>
                           <td>2024</td>
                           <td><strong>VHX</strong> AI chatbot</td>
                           <td>
                                <span className={styles.badge}>HTML</span>
                                <span className={styles.badge}>CSS</span>
                                <span className={styles.badge}>JavaScript</span>
                                <span className={styles.badge}>Node.js</span>
                                <span className={styles.badge}>Python</span>
                                <span className={styles.badge}>MySQL</span>
                           </td>
                           <td><a href="http://localhost:3002" target="_blank">localhost:3002 </a></td>
                            <td>
                                <div className={styles.ReadMore}>
                                    <Link to={'/blog/VHX-AiChatBot'}><a>Read More</a></Link>
                                </div>
                            </td>
                       </tr>
                       <tr>
                           <td>2024</td>
                           <td><strong>VHX</strong> Sentiment Analysis</td>
                           <td>
                                <span className={styles.badge}>HTML</span>
                                <span className={styles.badge}>CSS</span>
                                <span className={styles.badge}>Flask</span>
                                <span className={styles.badge}>Python</span>
                           </td>
                           <td><a href="http://localhost:3002" target="_blank">localhost:3002 </a></td>
                            <td>
                                <div className={styles.ReadMore}>
                                    <Link to={'/blog/VHX-AiChatBot'}><a>Read More</a></Link>
                                </div>
                            </td>
                       </tr>
                       <tr>
                           <td>2024</td>
                           <td><strong>VHX</strong> Automate Life</td>
                           <td>
                                <span className={styles.badge}>Python</span>
                                <span className={styles.badge}>PyQt5</span>
                           </td>
                           <td><a href="http://localhost:3002" target="_blank">localhost:3002 </a></td>
                            <td>
                                <div className={styles.ReadMore}>
                                    <Link to={'/blog/VHX-AiChatBot'}><a>Read More</a></Link>
                                </div>
                            </td>
                       </tr>
                      
                   </tbody>
               </table>
           </div>
           <div className={styles.ProjectsPhone} ref={(el) => (aboutBoxesRef.current[1] = el)}>
                <h1>VHX Projects</h1>
                <table className={styles.ProjectTable}>
                   <thead>
                       <tr>
                           <th>Project</th>
                           <th>Link</th>
                           <th>Read More</th>
                       </tr>
                   </thead>
                   <tbody>
                       <tr>
                           <td><strong>VHX</strong> AI chatbot</td>
                         
                           <td><a href="http://localhost:3002" target="_blank">localhost:3002 </a></td>
                            <td>
                                <div className={styles.ReadMore}>
                                    <Link to={`/blog/AiChatBot`}><a>Read More</a></Link>
                                </div>
                            </td>
                       </tr>
                       <tr>
                           <td><strong>VHX</strong> Sentiment Analysis</td>
                           <td><a href="http://localhost:3002" target="_blank">localhost:3002 </a></td>
                            <td>
                                <div className={styles.ReadMore}>
                                    <Link to={'/blog/sentimentAnalysis'}><a>Read More</a></Link>
                                </div>
                            </td>
                       </tr>
                       <tr>
                           <td><strong>VHX</strong> Automate Life</td>
                           <td><a href="http://localhost:3002" target="_blank">localhost:3002 </a></td>
                            <td>
                                <div className={styles.ReadMore}>
                                    <Link to={'/blog/Portfolio'}><a>Read More</a></Link>
                                </div>
                            </td>
                       </tr>
                       <tr>
                           <td><strong>VHX</strong> AI chatbot</td>
                         
                           <td><a href="http://localhost:3002" target="_blank">localhost:3002 </a></td>
                            <td>
                                <div className={styles.ReadMore}>
                                    <Link to={'/blog/AutomateLife'}><a>Read More</a></Link>
                                </div>
                            </td>
                       </tr>
                   </tbody>
               </table>
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
                            <Link to={'/Projects'}><a>Projects</a></Link>
                            <Link to={'/blog'}><a>Blog</a></Link>
                        </div>

                    </div>
                </div>
            </footer>
        </div>
    );
}

export default About;
