import React, { useEffect, useRef,useState } from 'react';
import { Link } from 'react-router-dom';
import Fuse from 'fuse.js';
import debounce from 'lodash.debounce';
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
    
    // Function to toggle the menu state
    const toggleMenu = (event) => {
        event.stopPropagation();
        // Toggle the state
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    const test = () => {
        setIsOpen(false)
    }

    let [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const fuse = new Fuse(myProjects, {
        keys: ['title'], // Specify searchable fields
        threshold: 0.4,  // Adjust to control fuzziness of matching
      });
      const handleSearch = debounce((event) => {
        const searchQuery = openFilterMenu.current.value;
        setQuery(searchQuery);
        
        if (searchQuery) {
          const fuzzyResults = fuse.search(searchQuery);
          setResults(fuzzyResults.map(result => result.item)); // Update results with fuzzy matches
        } else {
          setResults([]); 
        }
      }, 300);
    
    const aboutBoxesRef = useRef([]);
    const FilterMenu = useRef(false)
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
        if (FilterMenu.current && document.addEventListener('click', test)) {
            setIsOpen(false)
        }


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
                <div className={styles.SearchMenu}  >
                    <div className={styles.FilterMenuClosed} onClick={toggleMenu} ref={FilterMenu}>
                        <span className={styles.ToggleIcon}><strong>Filters</strong> {isOpen ? "▼" : "▲"}</span>
                    </div>
                    <div className={`${styles.FilterMenu} ${isOpen ? styles.Open : styles.Closed}`}>
                        <div className={styles.filterContent}>
                            <div className={styles.CloseMenu}>
                                <button onClick={test}>X</button>
                            </div>
                            <h3>Filter By</h3>
                            <label>
                                <input type="checkbox" />
                                <span>Machine Learning</span>
                            </label>
                            <label>
                                <input type="checkbox" />
                                <span>Capture the flag</span>
                            </label>
                            <label>
                                <input type="checkbox" />
                                <span>Most recent</span>
                            </label>
                            <label>
                                <input type="checkbox" />
                                <span>Oldest</span>
                            </label>
                            <div className={styles.Search2}>
                                <input type="text" placeholder="Search by name / language" />
                            </div>
                        </div>
                    </div>
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