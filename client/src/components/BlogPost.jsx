// BlogPost.jsx
import React , { useState, useRef, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import styles from '../styles/BlogPost.module.css'

const blogPosts = {
  AiChatBot: {
    title: "How was VHX Ai Chat Bot Made?",
    WhatIs: "<h2>What is <strong>V<span>H</span>X</strong> Ai ChatBot?<h2>",
    Paragraph: "<p> <strong>V<span>H</span>X</strong> AI chatbot is a conversational agent powered by artificial intelligence. It allows users to engage in text-based interactions, providing answers, assistance, and a personalized experience. The chatbot leverages advanced technology to deliver prompt and accurate responses.</p>",
    HeaderImage: `${process.env.PUBLIC_URL}/BlogImages/tile.jpg`,
    Why: "<h2>Why i build the <strong>V<span>H</span>X</strong> Ai chat bot?</h2>",
    Reason: "<p>This chatbot was my first full-stack web application project. I embarked on this journey to gain hands-on experience with several important technologies and concepts, including JSON Web Tokens (JWT), APIs, machine learning, authentication systems, and HTTP request handling. The project served as an excellent opportunity to expand my technical skills and apply them in a real-world scenario.</p>",
    Languages: "<h2>How It Was Built</h2> <p>The chatbot was developed using a range of technologies:</p> <ul>   <li><strong>HTML/CSS:</strong> Used for designing the user interface.</li>   <li><strong>JavaScript:</strong> Employed with Node.js and Express for handling backend logic, user authentication, and managing user data.</li>   <li><strong>Python:</strong> Utilized to build the machine learning model that powers the chatbot's responses.</li>   <li><strong>MySQL:</strong> Implemented for storing user data, chat logs, and bot interactions.</li> </ul><p>Node.js and Express played a crucial role in managing user sessions and authentication, while Python was used to develop the machine learning algorithms that enable the chatbot to understand and generate responses. MySQL ensured the efficient storage and retrieval of user data and interactions.</p> </p>",
    Improvements: "<h2>Future Improvements</h2> <p>Looking ahead, there are several areas for potential enhancement:</p> <ul>   <li><strong>Improving AI Capabilities:</strong> Further training the machine learning model to handle more complex queries and provide more accurate responses.</li>   <li><strong>User Interface Enhancements:</strong> Upgrading the user interface to make it more intuitive and engaging.</li>   <li><strong>Additional Features:</strong> Adding functionalities such as multilingual support and integration with other platforms.</li> </ul>",
    FinalStatment: "<h2>Conclusion</h2> <p>Building the AI chatbot was a rewarding experience that allowed me to apply and expand my knowledge of web development and machine learning.</p>",
    Visit: "<h2>Try it by yourself</h2> <p>For better experience please consider visiting it.</p>",
    iframelink: "http://192.168.0.100:3002/",
    iframetitle: "<h1>You are about to experiment the <strong>V<span>H</span>X</strong> Ai Chatbot</h1>",
    TryProjectdisplay: "flex"
  },
  Portfolio: {
    title: "How Was this Site Made?",
    HeaderImage: `${process.env.PUBLIC_URL}/BlogImages/pfp.jpg`,
    WhatIs: '<h2>Why I Created This Portfolio?</h2>',
    Paragraph: '<p>I created this website with two main goals in mind. First, to showcase my projects and provide commentary on them through the blog page, allowing me to track my progress over time. Second, to learn React and enhance my front-end development skills.</p>',
    Languages: "<h2>How the Portfolio Was Built</h2> <p>This portfolio was developed using a range of technologies:</p> <ul>   <li><strong>React:</strong> Played a key role in managing both HTML and JavaScript efficiently, accelerating the development process.</li>   <li><strong>CSS:</strong> Applied for designing the user interface and overall visual styling.</li>   <li><strong>Node.js:</strong> Used to handle the functionality of the contact form.</li>   <li><strong>MySQL:</strong> Implemented to store user messages securely.</li> </ul>",
    Improvements: "<h2>Future Improvements</h2> <p>Here are a few areas that could be improved:</p> <ul>   <li><strong>Enhancing Website Responsiveness:</strong> While the site works on most devices, such as PCs and phones, certain screen sizes may cause layout issues that need adjustment.</li>   <li><strong>Adding More Projects:</strong> Including more projects will contribute to my growth as a full-stack developer. Though it’s not a direct improvement to the site, it will be an important personal development step.</li> </ul>",
    FinalStatment: "<h2>Conclusion</h2> <p>The primary goal of this website was to learn React, and I feel I’ve learned the essentials. Moving forward, I’ll focus on building more projects to further master React.js and other technologies.</p>",
    TryProjectdisplay: "none"
  },
  AutomateLife: {
    title: "Automate life python app",
    WhatIs: '<h2>What is this python app?</h2>',
    Paragraph: '<p>This python app was build with the main of automating, for example when user runs the operating systems it will open apps, run web server, or if user wants to edit to use light mode or dark mode depending on the hour it would change automatically.</p>',
    HeaderImage: `${process.env.PUBLIC_URL}/BlogImages/AutomateLife.png`,
    Why: "<h2>Why i build this app?</h2>",
    Reason: "<p>To be honest I think i was just bored during summer break and decided to code it, it was a pretty simple app took me less than 3 days to put it running and working, and I've been using it since then.</p>",
    Languages: "<h2>Technologies User</h2> <p>This app was build used 100% python</p> <ul>   <li><strong>Python:</strong> The only programming language involved on this app</li>   <li><strong>PyQt5:</strong> PyQt5 is a python library used to design modern layouts</li> <li><strong>JSON: </strong>It was used to save user settings locally so it doesn't need the use of a database and user account creation</li>   </ul>",
    Visit: `<h2>Try it by yourself</h2> <p>Download it from my github. <a href="https://github.com/VictorhpXavier/AutomateOpening" target='_blank'>https://github.com/VictorhpXavier/AutomateOpening</a></p>`,
    TryProjectdisplay: "none"
  },
  Suspicious: {
    title: "Delete history extension",
    HeaderImage: `${process.env.PUBLIC_URL}/BlogImages/Suspicious.png`,
    TryProjectdisplay: "none"
  },
  Resumes: {
    title: "Improve Resume Ai",
    HeaderImage: `${process.env.PUBLIC_URL}/BlogImages/evaluator.webp`,
    TryProjectdisplay: "none"
  },
  LearningPlatform: {
    title: "Full stack Ai learning platform",
    HeaderImage: `${process.env.PUBLIC_URL}/BlogImages/learning.webp`,
    TryProjectdisplay: "none"
  },
  SocialMediaBot: {
    title: "Content creator Bot",
    HeaderImage: `${process.env.PUBLIC_URL}/BlogImages/what-are-bots.jpg`,
    TryProjectdisplay: "none"
  },
};

export default function BlogPost() {

  //Get height of divs
  const readMoreRef = useRef(null);
  let [numImage, setNumImage] = useState(0);

  const updateHeight = () => {
    if (readMoreRef.current) {
      const ColumnsHeight = readMoreRef.current.offsetHeight;
      let newNumImage = Math.floor(ColumnsHeight / 244 - 1);
      numImage = newNumImage
      // Only update state if the calculated value is different
      if (newNumImage !== numImage) {
        setNumImage(newNumImage);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('resize', updateHeight);
    updateHeight();
    updateReadMore(); 

    return () => window.removeEventListener('resize', updateHeight);
  }, [readMoreRef]);

  const [ReadMoreBlogs, setReadMoreBlogs] = useState({});
  const [ReadMoreArr, setReadMoreArr] = useState([]);
 
  const updateReadMore = () => {  
    window.scrollTo(0, 0)
    const updatedReadMoreArr = [];
    const updatedReadMoreBlogs = {};

    // Get Path
    const CurrentPath = window.location.pathname;
    const Pathparts = CurrentPath.split('/'); 
    const lastSegment = Pathparts.pop(); 

    const BlogKeys = Object.keys(blogPosts);

    // Add to readmore post that user isnt reading right now
    // Loop based on numImage
    
    if(numImage >= 4) {
      for (let i = 0; i < numImage; i++) {
        if (BlogKeys[i] !== lastSegment) {
          updatedReadMoreArr.push(BlogKeys[i]);
        }
      }
    } 
    //Do NOT Delete the else statment.
    //May look like its not doing anything it is, trust me.
    //I don't know what but its working with the else don't touch it!
    else {
      for (let i = 0; i < 2; i++) {
        if (BlogKeys[i] !== lastSegment) {
          updatedReadMoreArr.push(BlogKeys[i]);
        }
      }
    }
    
    // Create object with post info for the read more
    for (const key of updatedReadMoreArr) {
      const blogPost = blogPosts[key]; // Get the blog post object
    
      if (blogPost) { 
        const { title, HeaderImage } = blogPost; 
        updatedReadMoreBlogs[key] = {
          title,
          readMoreImage: HeaderImage
        };
      } 
    }

    // Update state
    setReadMoreArr(updatedReadMoreArr);
    setReadMoreBlogs(updatedReadMoreBlogs);
  };

  useEffect(() => {
    if (numImage > 0) {
      updateReadMore();
    }
  }, [numImage]);
  //each image has 244px
  //Dynamicaly create blogs

  //Get USer location
  const location = useLocation();  
  const IframeShow = useRef(null)
  const TryProject = useRef(null)
  const HandleScreenSize = useRef(null) 
  const IncreaseImg = useRef(null)
  const iframeSize = useRef(null)
  const body = useRef(null)
  const Hide = useRef(null)
  const [hidden, setHidden] = useState(true);

  const Experiment = () => {
      TryProject.current.style.display = 'none';
      IframeShow.current.style.display = 'flex'
  }
  useEffect(() => {
    TryProject.current.style.display = 'flex';
    IframeShow.current.style.display = 'none'
    document.body.style.overflow = "auto";
    iframeSize.current.style.width = '100%'
    IframeShow.current.style.height = '600px'
    IframeShow.current.style.marginLeft = '0'
    IframeShow.current.style.marginTop = '0'
    HandleScreenSize.current.style.display = 'flex'
    Hide.current.style.display = 'block'
    readMoreRef.current.style.display = 'flex'
    updateReadMore();
  }, [location.pathname]);  
  
  

  const resizeWindow = () => {
    iframeSize.current.style.width = '100vw'
    IframeShow.current.style.height = '100vh'
    IframeShow.current.style.marginLeft = '-110px'
    IframeShow.current.style.marginTop = '-10px'
    HandleScreenSize.current.style.display = 'none'
    Hide.current.style.display = 'none'
    readMoreRef.current.style.display = 'none'
  }
  const { slug } = useParams();
  const post = blogPosts[slug];

  const readmore = ReadMoreBlogs; 

  return (
    <div ref={body}>
    <div className={styles.Columns} ref={updateHeight}>
    <div className={styles.Blogcontainer} ref={readMoreRef} >
      <div className={styles.BlogInfo}>
        <div className={styles.Tohide} ref={Hide}>
        <div className={styles.title} dangerouslySetInnerHTML={{ __html: post.title }}></div>
        <div className={styles.What}>
            <div className={styles.WhatIs} dangerouslySetInnerHTML={{ __html: post.WhatIs }}></div>
            <div className={styles.Explanation} dangerouslySetInnerHTML={{ __html: post.Paragraph }}></div>
        </div>
        <div className={styles.Header}>
            <img src={post.HeaderImage} alt="" className={styles.headerimage}/>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
        <div dangerouslySetInnerHTML={{ __html: post.Why }}></div>
        <div dangerouslySetInnerHTML={{ __html: post.Reason }}></div>
        <div dangerouslySetInnerHTML={{ __html: post.Languages }} className={styles.Languages}></div>
        <div dangerouslySetInnerHTML={{ __html: post.Improvements }} className={styles.Improvements}></div>
        <div dangerouslySetInnerHTML={{ __html: post.FinalStatment }} className={styles.FinalStatment} ></div>
        <div dangerouslySetInnerHTML={{ __html: post.Visit }} className={styles.Visit} ></div>
        </div> 
        <div className={styles.TryProject} style={{ display: post.TryProjectdisplay }}>
          <div className={styles.ShowRules} ref={TryProject}>
            <div dangerouslySetInnerHTML={{ __html: post.iframetitle }} className={styles.TryProjectTitle}></div>
            <div className={styles.Buttons}>
              <a ><button className={styles.Experiment} onClick={Experiment}>Experiment it now</button></a>
              <a href={post.iframelink} target='blank'><button className={styles.Visti}>Visit Website</button></a>
            </div>
          </div>
          <div className={styles.IframeShow} ref={IframeShow} >
            <div className={styles.HandleScreenSize} ref={HandleScreenSize}>
              <h1>Screen Size</h1>
              <div className={styles.fullScreenImg}
                onMouseEnter={() => setHidden(false)}
                onMouseLeave={() => setHidden(true)}
              >
                <img src="../BlogImages/fullscreen (1).png" alt="Increase" ref={IncreaseImg} onClick={resizeWindow} />
                {!hidden && <p className={styles.handleScreenSizeText}>Increase Screen Size</p>}
              </div>
            </div>
            <iframe src={`${post.iframelink}`} ref={iframeSize} sandbox="allow-scripts allow-same-origin" />
          </div>
        </div>
      </div>
    </div>
    <div className={styles.readMore} ref={readMoreRef}>
    <div className={styles.readMoreProjects}>
        <div className={styles.ProjectsImage}>
          <h1>Read More</h1>
          {Object.keys(readmore).length > 0 ? (
            ReadMoreArr.map(key => {
              if (readmore[key]) { // Check if readmore[key] exists
                return (
                  <a onClick={updateReadMore} key={key} href={`/blog/${key}`} >
                    <div className={styles.ProjectImage}>
                      <img src={readmore[key].readMoreImage} alt={readmore[key].title}/>
                      <span>
                        <div className={styles.title} dangerouslySetInnerHTML={{ __html: readmore[key].title }}></div>
                      </span>
                    </div>
                  </a>
                );
              } 
            })
          ) : (
            <p>No other blog posts available</p>
          )}
        </div>
      </div>
    </div>
    </div>
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