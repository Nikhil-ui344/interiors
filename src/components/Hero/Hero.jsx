import { motion } from 'framer-motion';
import './Hero.css';

const Hero = ({ 
  title, 
  subtitle, 
  image, 
  height = 'full',
  overlay = true 
}) => {
  return (
    <section className={`hero hero-${height}`} style={{ backgroundImage: `url(${image})` }}>
      {overlay && <div className="hero-overlay" />}
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="hero-title">{title}</h1>
          {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
