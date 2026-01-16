import { motion } from 'framer-motion';
import PageHeader from '../../components/PageHeader/PageHeader';
import ScrollFadeIn from '../../components/ScrollFadeIn/ScrollFadeIn';
import TeamCard from '../../components/TeamCard/TeamCard';
import teamData from '../../data/team.json';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <PageHeader
        title="About Us"
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'About' }
        ]}
      />

      <section className="about-intro">
        <div className="container">
          <ScrollFadeIn>
            <div className="about-content">
              <div className="about-left">
                <img
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800"
                  alt="About us"
                  className="about-image"
                />
              </div>
              <div className="about-right">
                <span className="section-label">Our Story</span>
                <h2 className="section-title">Designing with Purpose and Passion</h2>
                <p className="about-text">
                  Founded in 2010, our studio has grown from a small team of passionate designers 
                  into a internationally recognized interior design firm. We believe that great 
                  design has the power to transform not just spaces, but lives.
                </p>
                <p className="about-text">
                  Our philosophy centers on creating timeless interiors that seamlessly blend 
                  aesthetics with functionality. We take pride in our collaborative approach, 
                  working closely with clients to understand their vision and bring it to life 
                  with precision and artistry.
                </p>
                <p className="about-text">
                  Every project we undertake is an opportunity to push boundaries, explore new 
                  ideas, and deliver exceptional results that exceed expectations.
                </p>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <ScrollFadeIn>
            <div className="section-header centered">
              <span className="section-label">Our Values</span>
              <h2 className="section-title">What Drives Us</h2>
            </div>
          </ScrollFadeIn>

          <div className="values-grid">
            <motion.div
              className="value-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
            >
              <h3>Excellence</h3>
              <p>We are committed to delivering the highest quality in every aspect of our work, from initial concept to final execution.</p>
            </motion.div>
            <motion.div
              className="value-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3>Innovation</h3>
              <p>We embrace new ideas and technologies, constantly evolving our approach to stay at the forefront of design.</p>
            </motion.div>
            <motion.div
              className="value-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3>Collaboration</h3>
              <p>We believe the best results come from working together, listening to our clients and understanding their needs.</p>
            </motion.div>
            <motion.div
              className="value-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3>Sustainability</h3>
              <p>We are dedicated to creating environmentally responsible designs that minimize impact and maximize longevity.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <ScrollFadeIn>
            <div className="section-header centered">
              <span className="section-label">Meet the Team</span>
              <h2 className="section-title">The People Behind Our Success</h2>
            </div>
          </ScrollFadeIn>

          <div className="team-grid">
            {teamData.slice(0, 4).map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
