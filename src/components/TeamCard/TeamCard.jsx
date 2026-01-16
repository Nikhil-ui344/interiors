import { motion } from 'framer-motion';
import './TeamCard.css';

const TeamCard = ({ member, index }) => {
  return (
    <motion.div
      className="team-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <div className="team-card-image">
        <img src={member.image} alt={member.name} />
        <div className="team-card-overlay">
          <div className="team-card-info">
            <h3 className="team-member-name">{member.name}</h3>
            <p className="team-member-position">{member.position}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamCard;
