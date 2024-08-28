// BlogPost.jsx
import React , { useState, useRef, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import styles from '../styles/BlogPost.module.css'

const blogPosts = {
  AiChatBot: {
    title: "How was <strong>V<span>H</span>X</strong> Ai Chat Bot Made?",
    WhatIs: "<h2>What is <strong>V<span>H</span>X</strong> Ai ChatBot?<h2>",
    Paragraph: "<p> <strong>V<span>H</span>X</strong> Ai ChatBot as the name suggest is an <span>AI chat bot</span> where you can chat with. Its a great tool for Question answer and to get the best responses for any question. <br>On top of that it will give the fastest answer possible with its top notch technology.</p>",
    HeaderImage: `${process.env.PUBLIC_URL}/BlogImages/tile.jpg`,
    content: 'this is a test'
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
  AutomadateLife: {
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
    const ColumnsHeight = readMoreRef.current.offsetHeight;
    setNumImage(Math.floor((ColumnsHeight / 244) - 1));
    console.log(`ReadMore Div height: ${ColumnsHeight}px`);
  }, [readMoreRef]);

  const [ReadMoreBlogs, setReadMoreBlogs] = useState({});
  const [ReadMoreArr, setReadMoreArr] = useState([]);

  const updateReadMore = () => {  
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
    
    // Create object with post info
    for (const key of updatedReadMoreArr) {
      const { title, HeaderImage } = blogPosts[key];
      updatedReadMoreBlogs[key] = {
        title,
        readMoreImage: HeaderImage
      };
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
  console.log(`Global numImage: ${numImage}`);

  //Get USer location
  const location = useLocation();  

  useEffect(() => {
    updateReadMore();
  }, [location.pathname]);  

  const { slug } = useParams();
  const post = blogPosts[slug];

  const readmore = ReadMoreBlogs; 

  if (!post) {
    return <h1>Post not found</h1>;
  }

  return (
    <div className={styles.Columns}>
    <div className={styles.Blogcontainer} ref={readMoreRef}>
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
      </div>
    </div>
    <div className={styles.readMore} ref={readMoreRef}>
      <div className={styles.readMoreProjects}>
          <div className={styles.ProjectsImage}>
            <h1>Read More</h1>
          {Object.keys(readmore).length > 0 ? (
            ReadMoreArr.map(key => (
              <Link onClick={updateReadMore} key={key} to={`/blog/${key}`}>
                <div className={styles.ProjectImage}>
                  <img src={readmore[key].readMoreImage} alt={readmore[key].title}   />
                  <span>
                    <div className={styles.title} dangerouslySetInnerHTML={{ __html: readmore[key].title }}></div>
                  </span>
                </div>
              </Link>
            ))
          ) : (
            <p>No other blog posts available</p>
          )}
          </div>

      </div>
    </div>
    </div>
  );
}
