import PageHeader from '../../components/PageHeader/PageHeader';
import ScrollFadeIn from '../../components/ScrollFadeIn/ScrollFadeIn';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import servicesData from '../../data/services.json';
import './Services.css';

const Services = () => {
  return (
    <div className="services-page">
      <PageHeader
        title="Our Services"
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'Services' }
        ]}
      />

      <section className="services-intro">
        <div className="container">
          <ScrollFadeIn>
            <div className="intro-content centered">
              <p className="intro-description">
                We offer comprehensive interior design solutions tailored to meet your unique 
                needs. From initial concept to final installation, our expert team guides you 
                through every step of the design journey.
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      <section className="services-list">
        <div className="container">
          <div className="services-grid-page">
            {servicesData.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
