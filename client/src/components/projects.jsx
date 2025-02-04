import React, { useRef, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from '../styles/Projects.module.css';
function About() {
    const aboutBoxesRef = useRef([]);
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.visible);
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
    const projects = [
        {
            year: '2024',
            title: '<strong>VHX</strong> AI chatbot',
            buildWith: '<span className={styles.badge}>HTML</span> <span className={styles.badge}>CSS</span> <span className={styles.badge}>JavaScript</span> <span className={styles.badge}>Node.js</span> <span className={styles.badge}>Python</span> <span className={styles.badge}>MySQL</span>',
            projectLink: '<a href="http://localhost:3002" target="_blank">localhost:3002 </a>',
            readMorelink: `AiChatBot`,
        },
        {
            year: '2024',
            title: '<strong>VHX</strong> Automate Life',
            buildWith: `<span className={styles.badge}>Python</span> <span className={styles.badge}>PyQt5</span>`,
            projectLink: '<a href="http://localhost:3002" target="_blank">localhost:3002 </a>',
            readMorelink: `AutomateLife`,
        },
        {
            year: '2024',
            title: '<strong>VHX</strong> Suspicious',
            buildWith: `<span className={styles.badge}>JavaScript</span> <span className={styles.badge}>Html</span>  <span className={styles.badge}>Css</span>`,
            projectLink: '<a href="http://localhost:3002" target="_blank">localhost:3002 </a>',
            readMorelink: `Suspicious`,
        },
        {
            year: '2024',
            title: '<strong>VHX</strong> Improve resume AI',
            buildWith: `<span className={styles.badge}>Python</span> <span className={styles.badge}>JavaScript</span>`,
            projectLink: '<a href="http://localhost:3002" target="_blank">localhost:3002 </a>',
            readMorelink: `Resumes`,
        },
        {
            year: '2024',
            title: '<strong>VHX</strong> AI learning Platform',
            buildWith: `<span className={styles.badge}>React</span> <span className={styles.badge}>Java</span><span className={styles.badge}>Python</span>`,
            projectLink: '<a href="http://localhost:3002" target="_blank">localhost:3002 </a>',
            readMorelink: `LearningPlatform`,
        },
        {
            year: '2024',
            title: '<strong>VHX</strong> Social media Bot',
            buildWith: `<span className={styles.badge}>Python</span>`,
            projectLink: '<a href="http://localhost:3002" target="_blank">localhost:3002 </a>',
            readMorelink: `SocialMediaBot`,
        },
        
       
    ]
    const projectsPhone = [
        {
            title: '<strong>VHX</strong> AI chatbot',
            projectLink: '<a href="http://localhost:3002" target="_blank">localhost:3002 </a>',
            readMorelink: `AiChatBot`,
        },
        {
            title: '<strong>VHX</strong> Automate Life',
            projectLink: '<a href="http://localhost:3002" target="_blank">localhost:3002 </a>',
            readMorelink: 'AutomateLife'
        },
        {
            title: '<strong>VHX</strong> Suspicious',
            projectLink: '<a href="http://localhost:3002" target="_blank">localhost:3002 </a>',
            readMorelink: `Suspicious`,
        },
        {
            title: '<strong>VHX</strong> Improve resume AI',
            projectLink: '<a href="http://localhost:3002" target="_blank">localhost:3002 </a>',
            readMorelink: `Resumes`,
        },
        {
            title: '<strong>VHX</strong> AI learning Platform',
            projectLink: '<a href="http://localhost:3002" target="_blank">localhost:3002 </a>',
            readMorelink: `LearningPlatform`,
        },
        {
            title: '<strong>VHX</strong> Social media Bot',
            projectLink: '<a href="http://localhost:3002" target="_blank">localhost:3002 </a>',
            readMorelink: `SocialMediaBot`,
        },
        
    ]
    const { slug } = useParams();
    const post = projects[slug];
    const postPhone = projectsPhone[slug]
    return (
        <div>
           <div className={styles.Projects} ref={(el) => (aboutBoxesRef.current[0] = el)}>
                <h1>VHX Projects</h1>
                <div className={styles.ScrollableTable}>
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
                   <tbody className={styles.table}>
                    {projects.map((project) =>
                        <tr>
                            {/* year */}
                            <td>
                                <div>{project.year}</div>
                            </td>
                            {/* Project name */}
                            <td>
                                <div dangerouslySetInnerHTML={{ __html: project.title}}/>
                            </td>
                            {/* Build with */}
                            <td>
                                <div dangerouslySetInnerHTML={{ __html: project.buildWith}}/>
                            </td>
                            {/* Project link */}
                            <td>
                                <div dangerouslySetInnerHTML={{ __html: project.projectLink}}/>
                            </td>
                            {/* Project readMore link */}
                            <td>
                                <div className={styles.ReadMore}  >
                                    <Link to={`/blog/${project.readMorelink}`}><a>Read More</a></Link>
                                </div>
                            </td>
                        </tr>
                    )}
                   </tbody>
               </table>
                </div>
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
                   <tbody className={styles.table}>
                   {projectsPhone.map((projectPhone) =>
                        <tr>
                            {/* Project name */}
                            <td>
                                <div dangerouslySetInnerHTML={{ __html: projectPhone.title}}/>
                            </td>

                            {/* Project link */}
                            <td>
                                <div dangerouslySetInnerHTML={{ __html: projectPhone.projectLink}}/>
                            </td>
                            {/* Project readMore link */}
                            <td>
                                <div className={styles.ReadMore}  >
                                    <Link to={`/blog/${projectPhone.readMorelink}`}><a>Read More</a></Link>
                                </div>
                            </td>
                        </tr>
                    )}
                       
                   </tbody>
               </table>
           </div>
           <div className={styles.footer}>
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
           
        </div>
    );
}

export default About;
