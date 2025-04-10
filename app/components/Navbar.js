'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiHome, FiAward, FiSettings, FiBook, FiMail } from 'react-icons/fi';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active link based on scroll position
      const sections = ['home', 'skills', 'services', 'portfolio', 'contact'];
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home', icon: <FiHome /> },
    { id: 'skills', label: 'Skills', icon: <FiAward /> },
    { id: 'services', label: 'Services', icon: <FiSettings /> },
    { id: 'portfolio', label: 'Portfolio', icon: <FiBook /> },
    { id: 'contact', label: 'Contact', icon: <FiMail /> }
  ];

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <motion.div
          className="navbar-brand"
          whileHover={{ scale: 1.05 }}
        >
          <Link href="#home" className="brand-link">
            <span className="gradient-text">Hana Wahyu Triani</span>
          </Link>
        </motion.div>
        
        <div className="navbar-links">
          {navLinks.map((link) => (
            <motion.div
              key={link.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href={`#${link.id}`}
                className={`nav-link ${activeLink === link.id ? 'active' : ''}`}
              >
                <span className="nav-icon">{link.icon}</span>
                <span className="nav-label">{link.label}</span>
                {activeLink === link.id && (
                  <motion.span 
                    className="active-indicator"
                    layoutId="activeIndicator"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}