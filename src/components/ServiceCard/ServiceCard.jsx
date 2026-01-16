import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import './ServiceCard.css';

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      className="service-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link to={`/services/${service.id}`} className="service-card-link">
        <div className="service-card-number">{String(index + 1).padStart(2, '0')}</div>
        <h3 className="service-card-title">{service.title}</h3>
        <p className="service-card-subtitle">{service.subtitle}</p>
        <div className="service-card-footer">
          <span className="learn-more">
            Learn More <FiArrowRight />
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
