import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation  } from 'react-router-dom';
import Home from './components/Home'; // gets the html structure and sends it to here
import Projects from './components/projects'
import Blog from './components/Blog';
import './App.css';

function Header() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="header">
      <div className="container">
        <div className="Logo">
          <Link to='/home'>
            <h1>V<span>H</span>X</h1>
          </Link>
        </div>
        <div className="MainRoutes">
          <ul>
            <li className={pathname === '/' || pathname === '/home' ? 'Home active' : 'Home'}>
              <Link to="/">Home</Link>
            </li>
            <li className={pathname === '/Projects' ? 'active' : ''}>
              <Link to="/Projects">Projects</Link>
            </li>
            <li className={pathname === '/blog' ? 'active' : ''}>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="Search">
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
      <Route path="/Projects" element={<Projects />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  </Router>
  );
}

export default App;