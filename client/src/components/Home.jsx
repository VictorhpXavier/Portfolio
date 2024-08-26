// src/components/Home.js
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Home.module.css'; // Import the CSS module
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Home() {
    //Handle send message
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const data = {
        name,
        email,
        message
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://192.168.0.100:3001/contact', {  // Ensure this URL is correct
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            if (result.success) {
                // Clear the form by resetting state variables
                setName('');
                setEmail('');
                setMessage('');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
   
    //Handle animations
    const aboutBoxesRef = useRef([]);

    useEffect(() => {
        //Handle Scroll Animation when clicking "link"
        const handleAnchorClick = (event) => {
            event.preventDefault();
      
        const targetId = event.currentTarget.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
    
        if (targetElement) {
            window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth',
            });
        } else if (targetId === "") {
            window.scrollTo({
            top: 10,
            behavior: 'smooth',
            });
        }
        };
    
        const anchors = document.querySelectorAll('a[href^="#"]');
        anchors.forEach(anchor => {
            anchor.addEventListener('click', handleAnchorClick);
        });
        //Handle Animation when loading the page
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
            anchors.forEach(anchor => {
                anchor.removeEventListener('click', handleAnchorClick);
            });
        };
    }, []);
    
    //Handle Slideshow
    const slides = [
        {
          title: 'Web Development',
          content: ['Html', 'Css', 'JavaScript', 'React']
        },
        {
          title: 'Server Development',
          content: ['NodeJs', 'Express', 'Python', 'SQL']
        },
        {
          title: 'Other Technologies',
          content: ['Git', 'GitHub', 'REST APIs', 'Docker', 'Linux']
        }
      ];
    
      const [currentSlide, setCurrentSlide] = useState(0);
    
      const handlePrevClick = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      };
      const handleNextClick = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      };
      
  return (
        <div>
            <section id='home'>
            <div className={styles.parentContainer}>
                <div className={styles.Text} ref={(el) => (aboutBoxesRef.current[0] = el)}>
                    <div className={styles.Saudation} ref={(el) => (aboutBoxesRef.current[1] = el)}>
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
                    <div className={styles.Buttons} ref={(el) => (aboutBoxesRef.current[2] = el)}>
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
            <div className={styles.Image} ref={(el) => (aboutBoxesRef.current[3] = el)}>
                <img src={`${process.env.PUBLIC_URL}/images/pfp.jpg`} alt="Profile"/>
                <p>Observation: Not me</p>
            </div>
            </section>
            <section id="About">
            <div className={styles.AboutContainer}>
                <div className={styles.Title} ref={(el) => (aboutBoxesRef.current[4] = el)}>
                    <h1>About Me</h1>
                </div>
                <div className={styles.AboutBox} ref={(el) => (aboutBoxesRef.current[5] = el)}>
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
                
                <div className={styles.AboutBoxMyskills} id={styles.AboutBoxSkills} ref={(el) => (aboutBoxesRef.current[6] = el)}>
                    <h1>My Skills</h1>
                    <div className={styles.Arrows}>
                        <button className={styles.leftArrow}>
                            <FontAwesomeIcon icon={faArrowLeft} style={{ color: '#ffffff' }} />
                        </button>
                         <button className={styles.rightArrow}>
                           <FontAwesomeIcon icon={faArrowRight} style={{ color: '#ffffff'}} />
                         </button>
                    </div>
                    <div className={styles.WebDev}>
                        <p>
                            <strong>Web Development</strong>
                            <br></br>Html<br></br>Css<br></br>JavaScript<br></br>{' '}
                            React{' '}
                        </p>
                    </div>
                    <div className={styles.ServerDev}>
                        <p>
                            <strong>Server Development</strong>
                            <br></br>NodeJs<br></br>Express<br></br>Python<br></br>
                            Sql{' '}
                        </p>
                    </div>
                    <div className={styles.Tech}>
                        <p>
                            <strong>Other Technologies</strong>
                            <br></br>Git<br></br>GitHub<br></br>REST APIs<br></br>Docker<br></br>Linux
                        </p>
                    </div>
                </div>
                <div className={styles.AboutBoxMyskills} id={styles.AboutBoxSkillsMin} ref={(el) => (aboutBoxesRef.current[7] = el)}>
                    <h1>My Skills</h1>
                    <div className={styles.Arrows}>
                    <button className={styles.leftArrow} onClick={handlePrevClick}>
                        <FontAwesomeIcon icon={faArrowLeft} style={{ color: '#ffffff' }} />
                    </button>
                    <button className={styles.rightArrow} onClick={handleNextClick}>
                        <FontAwesomeIcon icon={faArrowRight} style={{ color: '#ffffff' }} />
                    </button>
                    </div>
                    <div className={styles.Slide}>
                    <p>
                        <strong>{slides[currentSlide].title}</strong>
                        {slides[currentSlide].content.map((item, index) => (
                        <span key={index}>
                            <br />
                            {item}
                        </span>
                        ))}
                    </p>
                    </div>
                </div>
                <div className={styles.AboutBox} id={styles.AboutBoxidGoals} ref={(el) => (aboutBoxesRef.current[8] = el)}>
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
            <div className={styles.ContactContainer} ref={(el) => (aboutBoxesRef.current[9] = el)}>
                <div className={styles.ContactTitle} ref={(el) => (aboutBoxesRef.current[10] = el)}>
                    <h1>Contact Me</h1>
                </div>
                <div className={styles.ContactBox} ref={(el) => (aboutBoxesRef.current[11] = el)}>
                    <div className={styles.LeftSide} ref={(el) => (aboutBoxesRef.current[12] = el)}>
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
                <div className={styles.SendMessage} ref={(el) => (aboutBoxesRef.current[13] = el)}>
                    <h1>Send Message</h1>
                    <form onSubmit={handleSubmit}>
                <label htmlFor="name">Write your name </label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder='Your name' 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required />
                
                <label htmlFor="email">Email address </label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder='Your email address' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                required />
                <label htmlFor="message">Write Your Message</label>
                <textarea 
                    id="message" 
                    name="message" 
                    placeholder='Write your message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required ></textarea>
                <button type="submit">Send Message</button>
            </form>
                </div>
            </div>
        </div>
            </section>
            <section id='ContactMin'>
            <div className={styles.ContactContainerMin} ref={(el) => (aboutBoxesRef.current[14] = el)}>
                <div className={styles.ContactTitle} ref={(el) => (aboutBoxesRef.current[15] = el)}>
                    <h1>Contact Me</h1>
                </div>
                <div className={styles.ContactBox} ref={(el) => (aboutBoxesRef.current[16] = el)}>
                    <div className={styles.LeftSide} ref={(el) => (aboutBoxesRef.current[17] = el)}>
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
                <div className={styles.SendMessage} ref={(el) => (aboutBoxesRef.current[18] = el)}>
                    <h1>Send Message</h1>
                    <form onSubmit={handleSubmit}>
                <label htmlFor="name">Write your name </label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder='Your name' 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required />
                
                <label htmlFor="email">Email address </label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder='Your email address' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                required />
                <label htmlFor="message">Write Your Message</label>
                <textarea 
                    id="message" 
                    name="message" 
                    placeholder='Write your message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required ></textarea>
                <button type="submit">Send Message</button>
            </form>
                </div>
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
                            <Link to={'/Projects'}><a>Projects</a></Link>
                            <Link to={'/blog'}><a>Blog</a></Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;
