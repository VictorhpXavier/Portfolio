import React, { useEffect, useRef, useState } from 'react';
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
            pcDate: new Date('2024-08-17'),
            Languages: ['HTML', 'CSS', 'JS', 'JavaScript', 'PYTHON', 'SQL'],
            categories: ['Machine-Learning'],
        },
        {
            link: 'Portfolio',
            title: `How Was this Site Made?`,
            image: 'pfp.jpg',
            date: '23 august 2024',
            pcDate: new Date('2024-08-23'),
            Languages: ['REACT','JavaScript', 'NODEJS', 'SQL'],
            categories: [''],
        },
        {
            link: 'AutomateLife',
            title: `Automate Life`,
            image: 'AutomateLife.png',
            date: '19 august 2024',
            pcDate: new Date('2024-08-19'),
            Languages: ['PYTHON'],
            categories: ['Automation'],
        },
        {
            link: 'Suspicious',
            title: `My google extension`,
            image: 'Suspicious.png',
            date: '11 september 2024',
            pcDate: new Date('2024-09-11'),
            Languages: ['HTML', 'CSS', 'JS'],
            categories: ['Google-Extension'],
        },
        {
            link: 'Resumes',
            title: `Improve resume`,
            image: 'evaluator.webp',
            date: '11 september 2024',
            pcDate: new Date('2024-09-11'),
            Languages: ['REACT','JavaScript', 'PYTHON'],
            categories: ['Machine-Learning'],
        },
        {
            link: 'LearningPlatform',
            title: `Full stack AI learning Platform`,
            image: 'learning.webp',
            date: '11 september 2024',
            pcDate: new Date('2024-09-11'),
            Languages: ['REACT','JavaScript', 'JAVA', 'SQL'],
            categories: ['Machine-Learning'],
        },
        {
            link: 'SocialMediaBot',
            title: 'Social media content creator Bot',
            image: 'what-are-bots.jpg',
            date: '12 september 2024',
            pcDate: new Date('2024-09-12'),
            Languages: ['HTML', 'CSS', 'JS', 'PYTHON'],
            categories: ['Machine-Learning'],
        },
        {
            link: 'BanditCtf',
            title: `Bandit CTF`,
            image: 'evaluator.webp',
            date: '11 september 2024',
            pcDate: new Date('2024-09-11'),
            Languages: ['REACT','JavaScript', 'PYTHON'],
            categories: ['Capture-The-Flag'],
        },
    ];

    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the menu state
    const toggleMenu = (event) => {
        event.stopPropagation();
        // Toggle the state
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    const CloseMenu = () => {
        setIsOpen(false);
    };

    const [IdArray, setIdArray] = useState([]);
    const [checkedStates, setCheckedStates] = useState({
        Recent: false,
        Oldest: false,
    });
    const [filteredProjects, setFilteredProjects] = useState([]);
    let updatedArray = [...IdArray];

    const handleCheckboxChange = (event) => {
        const checkboxId = event.target.id;
        const isChecked = event.target.checked;
        console.log('checkbox id = ', checkboxId)
        let updatedCheckedStates = { ...checkedStates };

        // Update checked states and IdArray based on selection
        if (isChecked) {
            updatedArray.push(checkboxId);
            updatedCheckedStates[checkboxId] = true;
            // If "Recent" is checked, uncheck "Oldest" and vice versa
            if (checkboxId === 'Recent') {
                updatedArray = updatedArray.filter((id) => id !== 'Oldest');
                updatedCheckedStates['Oldest'] = false;
            } else if (checkboxId === 'Oldest') {
                updatedArray = updatedArray.filter((id) => id !== 'Recent');
                updatedCheckedStates['Recent'] = false;
            }
        } else {
            updatedArray = updatedArray.filter((id) => id !== checkboxId);
            updatedCheckedStates[checkboxId] = false;
        }

        setIdArray(updatedArray);
        console.log("updated arr", updatedArray)
        setCheckedStates(updatedCheckedStates);

        handlecheckBoxFuseSearchQuery();
    };


    const searchRef = useRef();
    const [results, setResults] = useState([])
    let [query, setQuery] = useState("")
    
    //Handle Fuse
    const fuseSearchQuery = new Fuse(myProjects, {
        keys: ['Languages'],
        threshold: 0.4,
    });

    const handleSearchQuery = () => {
    const searchQuery = searchRef.current.value;
        setQuery(searchQuery);
        if (searchQuery) {
            const fuzzyResults = fuseSearchQuery.search(searchQuery);
            setResults(fuzzyResults.map(result => result.item)); // Update results with fuzzy matches
        } else {
            setResults(myProjects); 
        }
    };
    
    const handlecheckBoxFuseSearchQuery = () => {
        let sortedProjects = [...myProjects];
    
        // Filter projects based on matching categories in updatedArray
        const projectsWithSpecificCategory = myProjects.filter(project =>
            project.categories.some(category => updatedArray.includes(category))
        );
    
        if (projectsWithSpecificCategory.length > 0) {
            sortedProjects = projectsWithSpecificCategory;
        }
    
        // Sorting logic based on 'Oldest' or 'Recent' in updatedArray
        if (updatedArray.includes('Oldest')) {
            sortedProjects.sort((a, b) => new Date(a.pcDate) - new Date(b.pcDate));
        } else if (updatedArray.includes('Recent')) {
            sortedProjects.sort((a, b) => new Date(b.pcDate) - new Date(a.pcDate));
        }
    
        // Update the state based on whether there are any sorted projects or not
        if (sortedProjects.length === 0) {
            setFilteredProjects(myProjects);
        } else {
            setFilteredProjects(sortedProjects);
        }
    
    };

    const aboutBoxesRef = useRef([]);
    const FilterMenu = useRef(false);
    const searchMenu = useRef(false);
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const [width, setWidth] = useState(window.innerWidth);

    const handleClick = (e) => {
        const x = e.clientX;
        const y = e.clientY;

        // Update the state with the new coordinates
        setCoords({ x, y });
        //left top corner (790, 260)
        //right top corner (789, 260)
        //left bottom corner (1118, 252)
        //right bottom corner (1113, 656)
        if (width >= 1920) {
            // Define the bounding box corners
            const left = 789; // Minimum x (left edge)
            const right = 1113; // Maximum x (right edge)
            const top = 260; // Minimum y (top edge)
            const bottom = 656; // Maximum y (bottom edge)
            const isInsideBox = x >= left && x <= right && y >= top && y <= bottom;
            if (!isInsideBox) {
                CloseMenu();
            }
        } else if (width < 500 && width > 300) {
            //left top corner (40, 254)
            //right top corner(366, 260)
            //left bottom corner (24, 655)
            //right bottom corner (365, 660)
            const left = 40; // Minimum x (left edge)
            const right = 365; // Maximum x (right edge)
            const top = 254; // Minimum y (top edge)
            const bottom = 660; // Maximum y (bottom edge)

            const isInsideBox = x >= left && x <= right && y >= top && y <= bottom;

            if (!isInsideBox) {
                CloseMenu();
            }
        }
    };
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
        <div onClick={handleClick}>
            <div className={styles.BlogContainer}>
                <div className={styles.title}>
                    <h1>VHX Blog</h1>
                </div>
                <div className={styles.SearchMenu} ref={searchMenu}>
                    <div
                        className={styles.FilterMenuClosed}
                        onClick={toggleMenu}
                        ref={FilterMenu}
                    >
                        <span className={styles.ToggleIcon}>
                            <strong>Filters</strong> {isOpen ? '▼' : '▲'}
                        </span>
                    </div>
                    <div
                        className={`${styles.FilterMenu} ${
                            isOpen ? styles.Open : styles.Closed
                        }`}
                    >
                        <div className={styles.filterContent}>
                            <div className={styles.CloseMenu}>
                                <button onClick={CloseMenu}>X</button>
                            </div>
                            <h3>Filter By</h3>
                            <label>
                                <input
                                    type="checkbox"
                                    id="Machine-Learning"
                                    onChange={handleCheckboxChange}
                                />
                                <span>Machine Learning</span>
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    id="Capture-The-Flag"
                                    onChange={handleCheckboxChange}
                                />
                                <span>Capture the flag</span>
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    id="Recent"
                                    onChange={handleCheckboxChange}
                                    checked={checkedStates.Recent}
                                />
                                <span>Most recent</span>
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    id="Oldest"
                                    onChange={handleCheckboxChange}
                                    checked={checkedStates.Oldest}
                                />
                                <span>Oldest</span>
                            </label>
                            <div
                                className={styles.Search2}
                                onChange={handleSearchQuery}
                            >
                                <input
                                    type="text"
                                    placeholder="Programming language"
                                    ref={searchRef}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.ProjectsContainer}>
                {(
                    results.length > 0 && filteredProjects.length === 0 ? results
                    : filteredProjects.length > 0 && results.length === 0 ? filteredProjects
                    : results.length > 0 && filteredProjects.length > 0 ? 
                        // Merge results and filteredProjects, then filter out duplicates
                        [...results, ...filteredProjects].filter(
                            (project, index, self) =>
                                index === self.findIndex((p) => p.link === project.link)
                        )
                    : myProjects
                ).map((project, index) => (
                    <div
                        key={index}
                        className={styles.ProjectItem}
                        ref={(el) => (aboutBoxesRef.current[index] = el)}
                    >
                        <Link to={`/blog/${project.link}`}>
                            <div className={styles.Header}>
                                <img
                                    src={`${process.env.PUBLIC_URL}/BlogImages/${project.image}`}
                                    alt={project.title}
                                />
                            </div>
                            <h1
                                dangerouslySetInnerHTML={{
                                    __html: project.title,
                                }}
                            />
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
                            <Link to={'/Projects'}>
                                <a>Projects</a>
                            </Link>
                            <Link to={'/blog'}>
                                <a>Blog</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Blog;

