import PageHeader from '../../components/PageHeader/PageHeader';
import TeamCard from '../../components/TeamCard/TeamCard';
import teamData from '../../data/team.json';
import './People.css';

const People = () => {
  return (
    <div className="people-page">
      <PageHeader
        title="Our Team"
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'People' }
        ]}
      />

      <section className="people-intro">
        <div className="container">
          <div className="intro-content centered">
            <p className="intro-description">
              Our talented team of designers, architects, and project managers brings together 
              decades of combined experience and a shared passion for creating exceptional spaces.
            </p>
          </div>
        </div>
      </section>

      <section className="team-list-section">
        <div className="container">
          <div className="team-grid-full">
            {teamData.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default People;
