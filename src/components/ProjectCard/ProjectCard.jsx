import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import './ProjectCard.css';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link to={`/project/${project.id}`} className="project-card-link">
        <div className="project-card-image">
          <img src={project.image} alt={project.title} />
          <div className="project-card-overlay">
            <div className="project-card-overlay-content">
              <span className="view-project">
                View Project <FiArrowRight />
              </span>
            </div>
          </div>
        </div>
        <div className="project-card-info">
          <div className="project-card-meta">
            <span className="project-category">{project.category}</span>
            <span className="project-location">{project.location}</span>
          </div>
          <h3 className="project-card-title">{project.title}</h3>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
