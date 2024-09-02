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
    Visit: "<h2>Test Website</h2>"
  },
  sentimentAnalysis: {
    title: "My First Machine Learning Project",
    HeaderImage: `${process.env.PUBLIC_URL}/BlogImages/Sentiment.jpg`,
    content: "<p>This is the content for the Sentiment Analysis project.</p>",
  },
  Portfolio: {
    title: "How Was this Site Made?",
    HeaderImage: `${process.env.PUBLIC_URL}/BlogImages/pfp.jpg`,
    content: "<p>This is the content for the Sentiment Analysis project.</p>",
  },
  AutomateLife: {
    title: "Automate opening Process",
    HeaderImage: `${process.env.PUBLIC_URL}/BlogImages/AutomateLife.png`,
    content: "<p>Content for another blog post.</p>",
  },
};

export default function BlogPost() {

  //Get height of divs
  const readMoreRef = useRef(null);
  const [numImage, setNumImage] = useState(0);  // Use state for numImage

  useEffect(() => {
    const updateHeight = () => {
      if (readMoreRef.current) {
        const ColumnsHeight = readMoreRef.current.offsetHeight;
        setNumImage(Math.floor((ColumnsHeight / 244) - 1));
      }
    };
  
    window.addEventListener('resize', updateHeight);
    updateHeight(); 
  
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
    
    if(numImage > 4) {
      for (let i = 0; i < numImage; i++) {
        if (BlogKeys[i] !== lastSegment) {
          updatedReadMoreArr.push(BlogKeys[i]);
        }
      }
    } else {
      for (let i = 0; i < 4; i++) {
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

  useEffect(() => {
    updateReadMore();
  }, [location.pathname]);  

  const { slug } = useParams();
  const post = blogPosts[slug];

  const readmore = ReadMoreBlogs; 

  return (
    <div className={styles.Columns}>
    <div className={styles.Blogcontainer} ref={readMoreRef} >
      <div className={styles.BlogInfo}>
        <div className={styles.title} dangerouslySetInnerHTML={{ __html: post.title }}></div>
        <div className={styles.What}>
            <div className={styles.WhatIs} dangerouslySetInnerHTML={{ __html: post.WhatIs }}></div>
            <div className={styles.Explanation} dangerouslySetInnerHTML={{ __html: post.Paragraph }}></div>
        </div>
        <div className={styles.Header}>
            <img src={post.HeaderImage} alt="" />
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
        <div dangerouslySetInnerHTML={{ __html: post.Why }}></div>
        <div dangerouslySetInnerHTML={{ __html: post.Reason }}></div>
        <div dangerouslySetInnerHTML={{ __html: post.Languages }} className={styles.Languages}></div>
        <div dangerouslySetInnerHTML={{ __html: post.Improvements }} className={styles.Improvements}></div>
        <div dangerouslySetInnerHTML={{ __html: post.FinalStatment }} className={styles.FinalStatment} ></div>
        <div dangerouslySetInnerHTML={{ __html: post.Visit }} className={styles.Visit} ></div>
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
                  <Link onClick={updateReadMore} key={key} to={`/blog/${key}`} >
                    <div className={styles.ProjectImage}>
                      <img src={readmore[key].readMoreImage} alt={readmore[key].title}/>
                      <span>
                        <div className={styles.title} dangerouslySetInnerHTML={{ __html: readmore[key].title }}></div>
                      </span>
                    </div>
                  </Link>
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
  );
}