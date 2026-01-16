import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHeader from '../../components/PageHeader/PageHeader';
import Accordion from '../../components/Accordion/Accordion';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import servicesData from '../../data/services.json';
import projectsData from '../../data/projects.json';
import './ServiceDetail.css';

const ServiceDetail = () => {
  const { id } = useParams();
  const service = servicesData.find(s => s.id === id);

  if (!service) {
    return <div>Service not found</div>;
  }

  const relatedProjects = projectsData.slice(0, 3);

  const accordionItems = [
    {
      title: 'Our Process',
      content: (
        <ul className="process-list">
          {service.process.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      )
    },
    {
      title: 'Timeline',
      content: <p>Typical project duration: {service.timeline}</p>
    },
    {
      title: 'Deliverables',
      content: (
        <ul className="deliverables-list">
          {service.deliverables.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )
    }
  ];

  return (
    <div className="service-detail-page">
      <PageHeader
        title={service.title}
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'Services', link: '/services' },
          { label: service.title }
        ]}
      />

      <section className="service-hero">
        <img src={service.image} alt={service.title} className="service-hero-image" />
      </section>

      <section className="service-content">
        <div className="container">
          <div className="service-layout">
            <motion.div
              className="service-main"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="service-subtitle">{service.subtitle}</h2>
              <p className="service-description">{service.description}</p>
            </motion.div>
          </div>

          <div className="service-details">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Accordion items={accordionItems} />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="related-projects">
        <div className="container">
          <h2 className="section-title">Related Projects</h2>
          <div className="projects-grid">
            {relatedProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="service-cta">
        <div className="container">
          <motion.div
            className="cta-box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Interested in This Service?</h2>
            <p>Let's discuss how we can help bring your vision to life</p>
            <Link to="/contact" className="cta-button-large">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
