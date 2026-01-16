import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import PageHeader from '../../components/PageHeader/PageHeader';
import ContactForm from '../../components/ContactForm/ContactForm';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <PageHeader
        title="Get in Touch"
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'Contact' }
        ]}
      />

      <section className="contact-intro">
        <div className="container">
          <div className="intro-content centered">
            <p className="intro-description">
              Whether you're ready to start a new project or simply want to learn more about 
              our services, we'd love to hear from you. Reach out to our team today.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-content-section">
        <div className="container">
          <div className="contact-layout">
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="contact-info-title">Contact Information</h2>
              
              <div className="contact-info-item">
                <FiMapPin className="contact-icon" />
                <div>
                  <h3>Address</h3>
                  <p>123 Design Avenue<br />New York, NY 10001<br />United States</p>
                </div>
              </div>

              <div className="contact-info-item">
                <FiPhone className="contact-icon" />
                <div>
                  <h3>Phone</h3>
                  <p>+1 (555) 123-4567<br />Mon - Fri, 9:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="contact-info-item">
                <FiMail className="contact-icon" />
                <div>
                  <h3>Email</h3>
                  <p>info@interiors.com<br />careers@interiors.com</p>
                </div>
              </div>

              <div className="business-hours">
                <h3>Business Hours</h3>
                <div className="hours-list">
                  <div className="hours-item">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="contact-form-wrapper"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="form-title">Send Us a Message</h2>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="map-placeholder">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1234567890"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
