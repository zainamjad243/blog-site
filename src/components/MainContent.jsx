import React from 'react';
import { Link } from 'react-router-dom';
import posts from '../data/posts';

const MainContent = () => (
  <main className="main-content">
    <div className="posts-grid">
      {posts.map(post => (
        <Link to={`/post/${post.slug}`} key={post.slug} className="post-link">
          <article className="post-card">
            <h3>{post.title}</h3>
            <div className="post-meta">
              <span>{post.author}</span> | <time>{post.date}</time>
            </div>
            <p>{post.preview}</p>
          </article>
        </Link>
      ))}
    </div>
  </main>
);

export default MainContent; 