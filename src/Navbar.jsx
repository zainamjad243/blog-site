import React, { useState, useEffect } from 'react';

const navLinksArr = [
  { name: 'Home', href: '#' },
  { name: 'Blog', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Contact', href: '#' },
];

const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@700;500&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

const styles = {
  nav: {
    fontFamily: 'Montserrat, Segoe UI, Arial, sans-serif',
    background: 'linear-gradient(90deg, #ff9966 0%, #ff5e62 100%)',
    color: '#fff',
    padding: '0.7rem 2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 2px 12px rgba(0,0,0,0.10)'
  },
  logo: {
    fontWeight: 700,
    fontSize: '2rem',
    letterSpacing: '2px',
    color: '#fff',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    userSelect: 'none',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
    transition: 'all 0.3s',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 500,
    fontSize: '1.1rem',
    transition: 'color 0.2s',
    position: 'relative',
    padding: '0.2rem 0',
  },
  linkActive: {
    borderBottom: '2px solid #fff',
  },
  ctaButton: {
    background: '#fff',
    color: '#ff5e62',
    border: 'none',
    borderRadius: '22px',
    padding: '0.5rem 1.5rem',
    fontWeight: 700,
    fontSize: '1.1rem',
    cursor: 'pointer',
    marginLeft: '1.5rem',
    boxShadow: '0 2px 8px rgba(255,94,98,0.10)',
    transition: 'background 0.2s, color 0.2s',
  },
  hamburger: {
    display: 'none',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '32px',
    height: '32px',
    cursor: 'pointer',
    marginLeft: '1.5rem',
    zIndex: 1100,
  },
  bar: {
    width: '100%',
    height: '4px',
    background: '#fff',
    margin: '4px 0',
    borderRadius: '2px',
    transition: 'all 0.3s',
  },
  mobileMenu: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: 'linear-gradient(90deg, #ff9966 0%, #ff5e62 100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2.5rem',
    zIndex: 2000,
    transition: 'all 0.3s',
  },
  mobileLink: {
    color: '#fff',
    fontSize: '2rem',
    fontWeight: 700,
    textDecoration: 'none',
    transition: 'color 0.2s',
  },
  mobileButton: {
    background: '#fff',
    color: '#ff5e62',
    border: 'none',
    borderRadius: '22px',
    padding: '0.8rem 2.5rem',
    fontWeight: 700,
    fontSize: '1.3rem',
    cursor: 'pointer',
    boxShadow: '0 2px 8px rgba(255,94,98,0.10)',
    marginTop: '1.5rem',
  },
};

function Navbar() {
  return null;
}

export default Navbar; 