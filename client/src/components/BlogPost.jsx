// BlogPost.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import styles from '../styles/BlogPost.module.css'

const blogPosts = {
  sentimentAnalysis: {
    title: "My First Machine Learning Project",
    content: "<p>This is the content for the Sentiment Analysis project.</p>",
  },
  anotherPost: {
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
      <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
    </div>
  );
}
