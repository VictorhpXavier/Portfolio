import React, { useRef, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation, Navigate, useParams} from 'react-router-dom';
import Fuse from 'fuse.js';
import debounce from 'lodash.debounce';
import Home from './components/Home'; // gets the html structure and sends it to here
import Projects from './components/projects';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import styles from './App.css';

function Header() {
    const myProjects = [
        {
            link: 'AiChatBot',
            title: '<strong>VHX</strong> AI ChatBot',
            image: 'tile.jpg',
        },
        {
            link: 'AutomateLife',
            title: `Automate opening`,
            image: 'AutomateLife.png',
        },
        {
            link: 'Suspicious',
            title: `My google extension`,
            image: 'Suspicious.png',
        },
        {
            link: 'Resumes',
            title: `Improve resume`,
            image: 'evaluator.webp',
        },
        {
            link: 'LearningPlatform',
            title: `Full stack AI learning Platform`,
            image: 'learning.webp',
        },
        {
            link: "SocialMediaBot",
            title: "Social media content creator Bot",
            image: "what-are-bots.jpg",
        }
    ];
    const location = useLocation();
    const pathname = location.pathname;

    // Get screen size
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        document.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const containerMenuRef = useRef(null);
    const mainRoutesRef = useRef(null);
    const searchRef = useRef(null);
    const headerRef = useRef(null);

    function enableMenu() {
        containerMenuRef.current.classList.toggle('change');
        if (width < 479) {
            if (mainRoutesRef.current.style.display !== 'block') {
                mainRoutesRef.current.style.display = 'block';
                searchRef.current.style.display = 'flex';
                headerRef.current.style.height = '220px';
            } else {
                mainRoutesRef.current.style.display = 'none';
                searchRef.current.style.display = 'none';
                headerRef.current.style.height = '60px';
            }
        } else if (width > 479) {
            if (mainRoutesRef.current.style.display !== 'block') {
                mainRoutesRef.current.style.display = 'block';
                searchRef.current.style.display = 'block';
            } else {
                mainRoutesRef.current.style.display = 'none';
                searchRef.current.style.display = 'none';
            }
        }
    }

    function CloseMenu() {
        if (width < 479) {
            containerMenuRef.current.classList.remove('change');
            mainRoutesRef.current.style.display = 'none';
            searchRef.current.style.display = 'none';
            headerRef.current.style.height = '60px';
        }
    }

    const inputRef = useRef(null);
    const searchMenuRef = useRef(null); 

    
    function handleClickOutside(event) {
        if (inputRef.current && !inputRef.current.contains(event.target)) {
          inputRef.current.value = ''; 
          searchMenuRef.current.classList.remove('visible'); 
          setQuery("");       
        }
    }

    function SearchMenu() {
        if (inputRef.current) {
          inputRef.current.classList.add('focused-input');
          inputRef.current.focus(); // Focus the input field
          searchMenuRef.current.classList.add('visible');

        } 
    }
    function searchRef2(event) {

    }

    let [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const fuse = new Fuse(myProjects, {
        keys: ['title'], // Specify searchable fields
        threshold: 0.4,  // Adjust to control fuzziness of matching
      });
      const handleSearch = debounce((event) => {
        const searchQuery = inputRef.current.value;
        setQuery(searchQuery);
        
        if (searchQuery) {
          const fuzzyResults = fuse.search(searchQuery);
          setResults(fuzzyResults.map(result => result.item)); // Update results with fuzzy matches
        } else {
          setResults([]); 
        }
      }, 300);

    
    return (
        <div>
        <div className="header " ref={headerRef}>
            <div className="container">
                <div className="Logo">
                    <Link to="/home">
                        <h1>
                            V<span>H</span>X
                        </h1>
                    </Link>
                </div>
                <div
                    className="containerMenu"
                    ref={containerMenuRef}
                    onClick={enableMenu}
                >
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
                <div
                    className="MainRoutes"
                    ref={mainRoutesRef}
                    onClick={CloseMenu}
                >
                    <ul>
                        <li
                            className={
                                pathname === '/' || pathname === '/home'
                                    ? 'Home active'
                                    : 'Home'
                            }
                        >
                            <Link to="/home">Home</Link>
                        </li>
                        <li
                            className={pathname === '/Projects' ? 'active' : ''}
                        >
                            <Link to="/Projects">Projects</Link>
                        </li>
                        <li
                            className={
                                pathname === '/blog' ||
                                pathname.startsWith('/blog')
                                    ? 'active'
                                    : ''
                            }
                        >
                            <Link to="/blog">Blog</Link>
                        </li>
                    </ul>
                </div>
                <div className="Search" ref={searchRef} onClick={SearchMenu} onChange={handleSearch}>
                    <input
                        type="text"
                        placeholder="Search Projects"
                        ref={inputRef}
                    />
                    <Link to="#"  >
                        <img
                            src={`${process.env.PUBLIC_URL}/images/search.png`}
                            alt="Search"
                        />
                    </Link>
                </div>
                <div className="SearchMenu" ref={searchMenuRef}>
                    { // If no search query, display all projects 
                    }
                  {query === "" ? (
                    myProjects.map((project, index) => (
                      <Link to={`/blog/${project.link}`} key={index}>
                        <div className="ShowProjects">
                          <img
                            src={`${process.env.PUBLIC_URL}/BlogImages/${project.image}`}
                            alt={project.title}
                          />
                          <div className="TextContainer">
                            <h1 dangerouslySetInnerHTML={{ __html: project.title }} />
                            <span dangerouslySetInnerHTML={{ __html: project.span }} />
                          </div>
                        </div>
                      </Link>
                    ))
                  ) : results.length > 0 ? (
                    results.map((project, index) => (
                      <Link to={`/blog/${project.link}`} key={index}>
                        <div className="ShowProjects">
                          <img
                            src={`${process.env.PUBLIC_URL}/BlogImages/${project.image}`}
                            alt={project.title}
                          />
                          <div className="TextContainer">
                            <h1 dangerouslySetInnerHTML={{ __html: project.title }} />
                            <span dangerouslySetInnerHTML={{ __html: project.span }} />
                          </div>
                        </div>
                      </Link>
                    ))
                ) : (
                    <div className="noProject">
                        <h1>No matching projects found.</h1>
                    </div>
                  )}
                </div>
            </div>
        </div>
        </div>
    );
}

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="*" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/Projects" element={<Projects />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
            </Routes>
        </Router>
    );
}

export default App;