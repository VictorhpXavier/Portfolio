import React, {useRef, useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation  } from 'react-router-dom';
import Home from './components/Home'; // gets the html structure and sends it to here
import Projects from './components/projects'
import Blog from './components/Blog';
import './App.css';


function Header() {
  const location = useLocation();
  const pathname = location.pathname;
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
   // Get screen size
   const [width, setWidth] = useState(window.innerWidth);

   useEffect(() => {
     const handleResize = () => setWidth(window.innerWidth);
     window.addEventListener('resize', handleResize);
     return () => window.removeEventListener('resize', handleResize);
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
         headerRef.current.style.height = '290px'; 
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
  return (
    <div className="header" ref={headerRef}>
      <div className="container">
        <div className="Logo">
          <Link to='/home'>
            <h1>V<span>H</span>X</h1>
          </Link>
        </div>
        <div className="containerMenu" ref={containerMenuRef} onClick={enableMenu}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <div className="MainRoutes" ref={mainRoutesRef}>
          <ul>
            <li className={pathname === '/' || pathname === '/home' ? 'Home active' : 'Home'}>
              <Link to="/home">Home</Link>
            </li>
            <li className={pathname === '/Projects' ? 'active' : ''}>
              <Link to="/Projects">Projects</Link>
            </li>
            <li className={pathname === '/blog' ? 'active' : ''}>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="Search" ref={searchRef}>
          <input type="text" placeholder="Search Projects" />
          <Link to="#"><img src={`${process.env.PUBLIC_URL}/images/search.png`} alt="Search" /></Link>
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
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/home" element={<Projects />} />

      <Route path="/Projects" element={<Projects />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  </Router>
  );
}
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
export default App;