import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMapPin, FiCalendar, FiSquare } from 'react-icons/fi';
import PageHeader from '../../components/PageHeader/PageHeader';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import projectsData from '../../data/projects.json';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  const relatedProjects = projectsData
    .filter(p => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <div className="project-detail-page">
      <PageHeader
        title={project.title}
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'Projects', link: '/projects' },
          { label: project.title }
        ]}
      />

      <section className="project-hero">
        <motion.img
          src={project.image}
          alt={project.title}
          className="project-hero-image"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
      </section>

      <section className="project-info-section">
        <div className="container">
          <motion.div
            className="project-meta-grid"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="meta-item">
              <FiMapPin className="meta-icon" />
              <div>
                <span className="meta-label">Location</span>
                <span className="meta-value">{project.location}</span>
              </div>
            </div>
            <div className="meta-item">
              <FiCalendar className="meta-icon" />
              <div>
                <span className="meta-label">Year</span>
                <span className="meta-value">{project.year}</span>
              </div>
            </div>
            <div className="meta-item">
              <FiSquare className="meta-icon" />
              <div>
                <span className="meta-label">Area</span>
                <span className="meta-value">{project.area}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="project-description-section">
        <div className="container">
          <motion.div
            className="project-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="section-title">About This Project</h2>
            <p className="description-text">{project.description}</p>
          </motion.div>
        </div>
      </section>

      <section className="project-gallery-section">
        <div className="container">
          <h2 className="section-title">Project Gallery</h2>
          <ImageGallery images={project.images} />
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="related-projects-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Related Projects</h2>
              <Link to="/projects" className="view-all-link">
                View All Projects →
              </Link>
            </div>
            <div className="projects-grid">
              {relatedProjects.map((relatedProject, index) => (
                <ProjectCard key={relatedProject.id} project={relatedProject} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProjectDetail;
