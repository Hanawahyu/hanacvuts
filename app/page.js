'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiPhone, FiLinkedin, FiInstagram, FiAward, FiStar, FiSun, FiMoon } from 'react-icons/fi';
import { FaRobot, FaPaperPlane } from 'react-icons/fa';
import Navbar from './components/Navbar';
import SkillCard from './components/SkillCard';
import ServiceCard from './components/ServiceCard';
import PortfolioItem from './components/PortfolioItem';
import ThemeToggle from './components/ThemeToggle';
import ChatBot from './components/ChatBot';
import RatingWidget from './components/RatingWidget';
import CommentSection from './components/CommentSection';
import { hardSkills, softSkills } from './data/skillsData';
import { services } from './data/servicesData';
import { portfolioItems } from './data/portfolioData';

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [activeTheme, setActiveTheme] = useState('light');

  useEffect(() => {
    setIsMounted(true);
    const savedTheme = localStorage.getItem('theme') || 'light';
    setActiveTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  if (!isMounted) return null;

  return (
    <div className={`theme-${activeTheme}`}>
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="gradient-bg"></div>
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-text">
              <motion.h1
                initial={{ y: -50 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Hana Wahyu Triani
                <motion.span 
                  className="text-gradient"
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] 
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                >
                  SEO Content Writer
                </motion.span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Creating content that ranks on Google's first page. Proven track record of producing 50+ 
                articles ranking in top 5 search results and increasing reader engagement by 40%.
              </motion.p>
              
              <motion.div 
                className="hero-actions"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.a 
                  href="#contact" 
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiMail className="icon" /> Hire Me
                </motion.a>
                <motion.a 
                  href="#portfolio" 
                  className="btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiStar className="icon" /> View Work
                </motion.a>
              </motion.div>
            </div>
            
            <motion.div 
              className="hero-image"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="image-frame">
                <Image
                  src="/hana.jpg"
                  alt="Hana Wahyu Triani"
                  width={400}
                  height={400}
                  className="profile-img"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
          
          <div className="hero-stats">
            {[
              { value: '50+', label: 'Top 5 Google Articles', icon: '🏆' },
              { value: '40%', label: 'Engagement Boost', icon: '📈' },
              { value: '3-5', label: 'Daily Articles', icon: '✍️' }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="stat-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
              >
                <span className="stat-icon">{item.icon}</span>
                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>My <span className="text-gradient">Skills</span></h2>
            <p>Combining technical SEO knowledge with creative content writing for optimal results</p>
          </motion.div>
          
          <div className="skills-container">
            <motion.div 
              className="hard-skills"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>Hard Skills</h3>
              <div className="skills-grid">
                {hardSkills.map((skill, index) => (
                  <SkillCard 
                    key={index} 
                    skill={skill} 
                    isHardSkill={true} 
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="soft-skills"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>Soft Skills</h3>
              <div className="skills-tags">
                {softSkills.map((skill, index) => (
                  <motion.span 
                    key={index}
                    className="skill-tag"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill.icon} {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>My <span className="text-gradient">Services</span></h2>
            <p>Professional content writing services tailored to your needs</p>
          </motion.div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <ServiceCard service={service} index={index} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <PortfolioItem item={item} index={index} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Features Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-500">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Rating Widget */}
            <div className="w-full md:w-1/3">
              <RatingWidget />
            </div>

            {/* Theme Toggle */}
            <div className="w-full md:w-1/3">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-white mb-4">Theme Settings</h3>
                <ThemeToggle />
              </div>
            </div>

            {/* Chat Bot */}
            <div className="w-full md:w-1/3">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-white mb-4">AI Assistant</h3>
                <ChatBot />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comment Section */}
      <CommentSection />

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Get In <span className="text-gradient">Touch</span></h2>
            <p>Interested in working together? Have questions about my services?</p>
          </motion.div>
          
          <div className="contact-container">
            <motion.div 
              className="contact-form"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows="5" required></textarea>
                </div>
                <motion.button 
                  type="submit" 
                  className="btn-primary"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaPaperPlane className="icon" /> Send Message
                </motion.button>
              </form>
            </motion.div>
            
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>Contact Information</h3>
              <ul className="contact-list">
                <li>
                  <FiMail className="contact-icon" />
                  <a href="mailto:hanawt539@gmail.com">hanawt539@gmail.com</a>
                </li>
                <li>
                  <FiPhone className="contact-icon" />
                  <a href="tel:+6285793432920">+62 857 9343 2920</a>
                </li>
                <li>
                  <FiLinkedin className="contact-icon" />
                  <a href="https://www.linkedin.com/in/hana-wahyu-triani" target="_blank">
                    LinkedIn: Hana Wahyu Triani
                  </a>
                </li>
                <li>
                  <FiInstagram className="contact-icon" />
                  <a href="https://www.instagram.com/hanawahyutriani?igsh=MWp1M3U4b3B2NGNvag==" target="_blank">
                    @hanawahyutriani
                  </a>
                </li>
              </ul>
              
              <div className="certifications">
                <h4><FiAward className="icon" /> Certifications</h4>
                <ul>
                  <li>
                    <a href="https://drive.google.com/file/d/1KPEr4eO9hwiC-aAHSp1MrJptmInt6JlG/view?usp=sharing" target="_blank">
                      Onpage & Offpage SEO Mini Bootcamp - Dibimbing.id
                    </a>
                  </li>
                  <li>
                    <a href="https://drive.google.com/file/d/1__SMjUMXTG9ozakOpfNeN4DmUYZwKdGb/view?usp=sharing" target="_blank">
                      Social Media Management - Tempatbelajar
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Hana Wahyu. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}