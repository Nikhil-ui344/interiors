import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHeader from '../../components/PageHeader/PageHeader';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import projectsData from '../../data/projects.json';
import './Projects.css';

const Projects = () => {
  const { category } = useParams();
  const [activeFilter, setActiveFilter] = useState(category || 'all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'hospitality', label: 'Hospitality' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <div className="projects-page">
      <PageHeader
        title="Our Projects"
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'Projects' }
        ]}
      />

      <section className="projects-filter-section">
        <div className="container">
          <div className="filter-buttons">
            {filters.map(filter => (
              <button
                key={filter.id}
                className={`filter-button ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-list-section">
        <div className="container">
          <motion.div
            className="projects-grid-full"
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
