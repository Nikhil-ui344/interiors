import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <motion.nav
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="logo">
            <span className="logo-text">INTERIORS</span>
          </Link>

          <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <NavLink to="/" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              About
            </NavLink>
            
            <div className="nav-dropdown">
              <button 
                className="nav-link dropdown-trigger"
                onClick={() => toggleDropdown('services')}
              >
                Services <FiChevronDown />
              </button>
              <AnimatePresence>
                {openDropdown === 'services' && (
                  <motion.div
                    className="dropdown-menu"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link to="/services" className="dropdown-item">All Services</Link>
                    <Link to="/services/residential-design" className="dropdown-item">Residential Design</Link>
                    <Link to="/services/commercial-spaces" className="dropdown-item">Commercial Spaces</Link>
                    <Link to="/services/hospitality-design" className="dropdown-item">Hospitality Design</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="nav-dropdown">
              <button 
                className="nav-link dropdown-trigger"
                onClick={() => toggleDropdown('projects')}
              >
                Projects <FiChevronDown />
              </button>
              <AnimatePresence>
                {openDropdown === 'projects' && (
                  <motion.div
                    className="dropdown-menu"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link to="/projects" className="dropdown-item">All Projects</Link>
                    <Link to="/projects/residential" className="dropdown-item">Residential</Link>
                    <Link to="/projects/commercial" className="dropdown-item">Commercial</Link>
                    <Link to="/projects/hospitality" className="dropdown-item">Hospitality</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink to="/people" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              People
            </NavLink>
            <NavLink to="/news" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              News
            </NavLink>
            <NavLink to="/contact" className="nav-link nav-link-cta" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </NavLink>
          </div>

          <button
            className="mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
