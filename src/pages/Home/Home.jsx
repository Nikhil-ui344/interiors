import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../../components/Hero/Hero';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import ScrollFadeIn from '../../components/ScrollFadeIn/ScrollFadeIn';
import projectsData from '../../data/projects.json';
import servicesData from '../../data/services.json';
import './Home.css';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const parallaxRef = useRef(null);
  const featuredProjects = projectsData.filter(p => p.featured);
  const displayServices = servicesData.slice(0, 4);

  useEffect(() => {
    // Parallax effect
    if (parallaxRef.current) {
      gsap.to(parallaxRef.current, {
        yPercent: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    }
  }, []);

  return (
    <div className="home">
      <Hero
        title="Designing Timeless Spaces"
        subtitle="Crafting exceptional interiors with precision, elegance, and innovation"
        image="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920"
        height="full"
      />

      {/* Introduction Section */}
      <section className="intro-section">
        <div className="container">
          <ScrollFadeIn>
            <div className="intro-content">
              <div className="intro-left">
                <span className="intro-label">About Our Studio</span>
                <h2 className="section-title">Creating Environments<br />That Inspire</h2>
              </div>
              <div className="intro-right">
                <p className="intro-text">
                  We are a team of passionate designers dedicated to transforming spaces into 
                  extraordinary experiences. Our approach combines timeless aesthetics with 
                  contemporary functionality, ensuring every project reflects our commitment 
                  to excellence.
                </p>
                <p className="intro-text">
                  From luxury residences to innovative commercial spaces, we bring vision to 
                  life through meticulous attention to detail and a deep understanding of our 
                  clients' needs.
                </p>
                <Link to="/about" className="cta-link">
                  Discover Our Story →
                </Link>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Divider Line */}
      <div className="divider-line" />

      {/* Featured Projects Section */}
      <section className="featured-projects-section">
        <div className="container">
          <ScrollFadeIn>
            <div className="section-header">
              <div>
                <span className="section-label">Our Work</span>
                <h2 className="section-title">Featured Projects</h2>
              </div>
              <Link to="/projects" className="view-all-link">
                View All Projects →
              </Link>
            </div>
          </ScrollFadeIn>

          <div className="projects-grid">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Section */}
      <section className="parallax-section" ref={parallaxRef}>
        <div className="parallax-image" style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1920)'
        }} />
        <div className="parallax-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="parallax-title">Excellence in Every Detail</h2>
            <p className="parallax-subtitle">
              Award-winning designs that push boundaries and set new standards
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <ScrollFadeIn>
            <div className="section-header centered">
              <span className="section-label">What We Do</span>
              <h2 className="section-title">Our Services</h2>
              <p className="section-description">
                Comprehensive interior design solutions tailored to your vision
              </p>
            </div>
          </ScrollFadeIn>

          <div className="services-grid">
            {displayServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          <div className="section-footer">
            <Link to="/services" className="cta-button">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <motion.div
              className="stat-item"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0 }}
            >
              <h3 className="stat-number">150+</h3>
              <p className="stat-label">Projects Completed</p>
            </motion.div>
            <motion.div
              className="stat-item"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 }}
            >
              <h3 className="stat-number">25+</h3>
              <p className="stat-label">Design Awards</p>
            </motion.div>
            <motion.div
              className="stat-item"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h3 className="stat-number">15</h3>
              <p className="stat-label">Years Experience</p>
            </motion.div>
            <motion.div
              className="stat-item"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              <h3 className="stat-number">98%</h3>
              <p className="stat-label">Client Satisfaction</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="cta-title">Let's Create Something Beautiful Together</h2>
            <p className="cta-description">
              Ready to transform your space? Get in touch with our team to discuss your project.
            </p>
            <Link to="/contact" className="cta-button-large">
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
