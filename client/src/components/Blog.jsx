// src/components/Home.js
import React, { useEffect, useRef,useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Blog.module.css'; // Import the CSS module

function Blog() {
    const myProjects = [
        {
            link: 'AiChatBot',
            title: 'How Was <strong>VHX</strong> AI ChatBot Made?',
            image: 'tile.jpg',
            date: '17 August 2024',
        },
        {
            link: 'Portfolio',
            title: `How Was this Site Made?`,
            image: 'pfp.jpg',
            date: '23 august 2024',
        },
        {
            link: 'AutomateLife',
            title: `Automate Life`,
            image: 'AutomateLife.png',
            date: '19 august 2024',
        },
        {
            link: 'Suspicious',
            title: `My google extension`,
            image: 'Suspicious.png',
            date: '11 september 2024',
        },
        {
            link: 'Resumes',
            title: `Improve resume`,
            image: 'evaluator.webp',
            date: '11 september 2024',
        },
        {
            link: 'LearningPlatform',
            title: `Full stack AI learning Platform`,
            image: 'learning.webp',
            date: '11 september 2024',
        },
        {
            link: "SocialMediaBot",
            title: "Social media content creator Bot",
            image: "what-are-bots.jpg",
            date: '12 september 2024'
        }
    ];
    const [isOpen, setIsOpen] = useState(false);
    const openFilterMenu = useRef(null);
    const toggleButtonRef = useRef(null); // Ref for the toggle button
    
    // Function to toggle the menu state

    const toggleMenu = (event) => {
        event.stopPropagation();
        setIsOpen((prevState) => !prevState); // Toggle the state
    };

    
    // Close the menu if clicking outside of it
    const handleClickOutside = (event) => {
        // Check if the click was outside the menu and outside the toggle button
        if (
            openFilterMenu.current && 
            !openFilterMenu.current.contains(event.target) && 
            toggleButtonRef.current && 
            !toggleButtonRef.current.contains(event.target)
        ) {
            setIsOpen(false); // Close the menu
        }
        setIsOpen(false); // Close the menu

    };
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

        
        document.addEventListener("mousedown", handleClickOutside);

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
        <div>
            <div className={styles.BlogContainer}>
                <div className={styles.title}>
                    <h1>VHX Blog</h1>
                </div>
                <div className={styles.SearchMenu} onClick={toggleMenu} >
                    <div className={styles.FilterMenuClosed}>
                        <span className={styles.ToggleIcon}><strong>Filters</strong> {isOpen ? "▼" : "▲"}</span>
                    </div>
                    <div className={`${styles.FilterMenu} ${isOpen ? styles.Open : styles.Closed}`} ref={openFilterMenu}></div>
                </div>
            <div className={styles.ProjectsContainer}>
                {myProjects.map((project, index) => (
                    <div key={index} className={styles.ProjectItem} ref={(el) => (aboutBoxesRef.current[index] = el)}>
                        <Link to={`/blog/${project.link}`}>
                            <div className={styles.Header}>
                                <img
                                    src={`${process.env.PUBLIC_URL}/BlogImages/${project.image}`}
                                    alt={project.title}
                                />
                            </div>
                            <h1 dangerouslySetInnerHTML={{ __html: project.title }} />
                            <span>Created on {project.date}</span>
                        </Link>
                    </div>
                ))}
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
                            <Link to={'/Projects'}><a>Projects</a></Link>
                            <Link to={'/blog'}><a>Blog</a></Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Blog;
