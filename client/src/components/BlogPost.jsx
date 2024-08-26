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
    content: "<p>This is the content for the Sentiment Analysis project.</p>",
  },
  AutomateLife: {
    title: "Another Blog Post",
    content: "<p>Content for another blog post.</p>",
  },
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts[slug];

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
          <Link to = '/home'>
          <div className={styles.ProjectImage}>
            <img src={`${process.env.PUBLIC_URL}/BlogImages/Sentiment.jpg`} alt="" /> 
          </div>
          </Link>
          <span>Sentiment Analysis</span>
      </div>
    </div>
    </div>
  );
}
