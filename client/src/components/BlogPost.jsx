// BlogPost.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
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
  AutomateLife: {
    title: "Automate opening Process",
    HeaderImage: `${process.env.PUBLIC_URL}/BlogImages/AutomateLife.png`,
    content: "<p>Content for another blog post.</p>",
  },
 
};

let ReadMoreBlogs = {};
let ReadMoreArr = [];
function updateReadMore() {
  ReadMoreArr = []
  ReadMoreBlogs = {}
  //Get Path
 const CurrentPath = window.location.pathname;
 const Pathparts = CurrentPath.split('/'); 
 const lastSegment = Pathparts.pop(); 
  
  //add to readmore post that user isnt reading right now
  const BlogKeys = Object.keys(blogPosts);
  for (let i = 0; i < 4; i++) {
    if (BlogKeys[i] !== lastSegment) {
      ReadMoreArr.push(BlogKeys[i]);
    }
  }
  //create object with post info
  for (const key of ReadMoreArr) {
      const { title, HeaderImage } = blogPosts[key];
      ReadMoreBlogs[key] = {
        title,
        readMoreImage: HeaderImage
      };
  }
}
updateReadMore()
 

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts[slug];

  const readmore = ReadMoreBlogs; 

  if (!post) {
    return <h1>Post not found</h1>;
  }

  return (
    <div className={styles.Columns}>
    <div className={styles.Blogcontainer}>
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
    <div className={styles.readMore}>
      <div className={styles.readMoreProjects}>
          <div className={styles.ProjectsImage}>
          {Object.keys(readmore).length > 0 ? (
            ReadMoreArr.map(key => (
              <Link onClick={updateReadMore()} key={key} to={`/blog/${key}`}>
                <div className={styles.ProjectImage}>
                  <img src={readmore[key].readMoreImage} alt={readmore[key].title} />
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
