import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedPosts from './components/FeaturedPosts';
import MainContent from './components/MainContent';
import Sidebar, { SidebarSearchForm } from './components/Sidebar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import About from './components/About';
import Contact from './components/Contact';
import React, { useState, useEffect } from 'react';
import posts from './data/posts';

const NotFound = () => (
  <main style={{ textAlign: 'center', padding: '4rem 1rem' }}>
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
  </main>
);

function ReadPost() {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);
  if (!post) return <NotFound />;
  return (
    <main className="read-post">
      <article className="read-post-article">
        <h1>{post.title}</h1>
        <div className="post-meta">
          <span>{post.author}</span> | <time>{post.date}</time>
        </div>
        <div className="read-post-content">
          <p>{post.content}</p>
        </div>
      </article>
    </main>
  );
}

function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 700);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Hero />
      <FeaturedPosts />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: '2rem', padding: '2rem 1rem', minHeight: '60vh' }}>
        <div style={{ flex: 2, minWidth: 0 }}>
          <div className="main-header-row">
            <h2>Latest Posts</h2>
            {isMobile && <SidebarSearchForm />}
          </div>
          <MainContent />
        </div>
        {!isMobile && <Sidebar showSearchForm />}
      </div>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/post/:slug" element={<ReadPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <BackToTop />
    </Router>
  );
}
