import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Associate Software Engineer / AI Engineer',
      company: 'EpiMax Solutions LLP',
      type: 'Full-time',
      duration: 'Dec 2025 - Present',
      location: 'Hyderabad, Telangana, India',
      highlights: [
        'Engineering intelligent AI Agents and bot solutions to automate business workflows and enhance enterprise efficiency.',
        'Developing robust, high-performance backends and microservices using Python, FastAPI, and Django.',
        'Building responsive, modern user interfaces with React.js for seamless SaaS application user experiences.',
        'Integrating ServiceNow workflows (CSA & CAD certified) with custom enterprise SaaS platforms.',
      ],
      skills: ['Python', 'FastAPI', 'Django', 'AI Agents', 'React.js', 'ServiceNow', 'SaaS Architecture'],
    },
  ];

  return (
    <section id="experience">
      <h2 className="section-title">Work Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="glass-card experience-card">
            <div className="exp-header">
              <div className="exp-company-badge">
                <Briefcase size={24} className="exp-icon" />
              </div>
              <div className="exp-title-group">
                <h3 className="exp-role">{exp.role}</h3>
                <h4 className="exp-company">
                  {exp.company} <span className="exp-type">• {exp.type}</span>
                </h4>
              </div>
            </div>

            <div className="exp-meta">
              <span className="exp-meta-item">
                <Calendar size={15} /> {exp.duration}
              </span>
              <span className="exp-meta-item">
                <MapPin size={15} /> {exp.location}
              </span>
            </div>

            <ul className="exp-highlights">
              {exp.highlights.map((item, i) => (
                <li key={i}>
                  <CheckCircle2 size={16} className="exp-check-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="exp-skills">
              {exp.skills.map((skill, i) => (
                <span key={i} className="badge exp-skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
