// BlogPost.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import styles from '../styles/BlogPost.module.css'

const blogPosts = {
  AiChatBot: {
    title: "How was VHX Ai Chat Bot Made?",
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
    <div className={styles.Blogcontainer}>
      <h1>{post.title}</h1>
      <div className={styles.Header}>
          <img src={post.HeaderImage} alt="" />
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
    </div>
  );
}
