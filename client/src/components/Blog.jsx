// src/components/Home.js
import React, {useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Blog.module.css'; // Import the CSS module

function Blog() {
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
    return (
        <div >
            <div className={styles.BlogContainer} ref={(el) => (aboutBoxesRef.current[0] = el)} >
                <div className={styles.title}>
                  <h1>VHX Blog</h1>
                </div>
                <div className={styles.ProjectsContainer} >
                    <div className={styles.AiChatBot}>
                        <Link to="/blog/VHX-AiChatBot">
                            <div className={styles.Header}>
                              <img src={`${process.env.PUBLIC_URL}/images/pfp.jpg`} alt="Profile"/>
                            </div>
                            <h1>How Was <strong>VHX</strong> Ai ChatBot Made?</h1>
                            <span>Created at 17 agust 2024</span>
                        </Link>
                    </div>
                    <div className={styles.SentimentAnalysis}>
                        <Link to="/home">
                            <div className={styles.Header}></div>
                            <h1>My First Machine Learning Project</h1>
                        </Link>
                    </div>
                    <div className={styles.AutomateLife}>
                        <div className={styles.Header}></div>
                        <h1>To try Something different than Web</h1>
                    </div>
                    <div className={styles.AiChatBot}>
                        <div className={styles.Header}></div>
                        <h1>How Was VHX Ai ChatBot Made?</h1>
                    </div>
                    <div className={styles.SentimentAnalysis}>
                        <div className={styles.Header}></div>

                        <h1>My First Machine Learning Project</h1>
                    </div>
                    <div className={styles.AutomateLife}>
                        <div className={styles.Header}></div>
                        <h1>To try Something different than Web</h1>
                    </div>
                    <div className={styles.AiChatBot}>
                        <div className={styles.Header}></div>
                        <h1>How Was VHX Ai ChatBot Made?</h1>
                    </div>
                    <div className={styles.SentimentAnalysis}>
                        <div className={styles.Header}></div>

                        <h1>My First Machine Learning Project</h1>
                    </div>
                    <div className={styles.AutomateLife}>
                        <div className={styles.Header}></div>
                        <h1>To try Something different than Web</h1>
                    </div>
                    <div className={styles.AutomateLife} id='OnlyOne'>
                        <div className={styles.Header}></div>
                        <h1>To try Something different than Web</h1>
                    </div>
                </div>
                
            </div>
            <footer>
                <div className={styles.footercontent}>
                    <div className={styles.footerlogo}>
                        <h1>
                            <strong>
                                V<span>H</span>X
                            </strong>
                        </h1>
                        <p>2024 &copy; VHX All rights reserved.</p>
                    </div>
                    <div className={styles.footerlinks}>
                        <div className={styles.linkscolumn}>
                            <Link to="/home">Home</Link>
                            <Link to="/home#About">About</Link>
                            <Link to="/home#Contact">Contact</Link>
                        </div>
                        <div className={styles.linkscolumn}>
                            <Link to="/blog">Blog</Link>
                            <Link to="/Projects">Projects</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Blog;
