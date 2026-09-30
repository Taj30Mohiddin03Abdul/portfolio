import { Award, Briefcase, FileCode } from 'lucide-react';

export default function About() {
  return (
    <section id="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-grid">
        <div className="about-text">
          <p>
            I am a <strong>Software Engineer</strong> at <strong>EpiMax Solutions LLP</strong> and a graduate of <strong>KL University</strong>. I specialize in building intelligent AI solutions and robust SaaS applications tailored for business services.
          </p>
          <p>
            My engineering stack focuses heavily on <strong>Python</strong> and <strong>Django</strong> for building high-performing, scalable backends, paired with <strong>React.js</strong> to deliver sleek, interactive user interfaces. I also design and implement <strong>AI Agents</strong> and custom <strong>Workflow Automation</strong> to optimize business operations.
          </p>
          <p>
            Currently, my primary focus is developing next-generation AI integrations, building scalable SaaS platforms that streamline business services, and implementing smart automation to drive efficiency and growth.
          </p>
        </div>
        
        <div className="about-stats">
          <div className="glass-card stat-box">
            <Award size={32} style={{ color: 'var(--accent-secondary)', marginBottom: '8px' }} />
            <div className="stat-number">5+</div>
            <div className="stat-label">SaaS & AI Integrations</div>
          </div>
          <div className="glass-card stat-box">
            <FileCode size={32} style={{ color: 'var(--accent-primary)', marginBottom: '8px' }} />
            <div className="stat-number">3+</div>
            <div className="stat-label">Core Business Projects</div>
          </div>
          <div className="glass-card stat-box" style={{ gridColumn: 'span 2' }}>
            <Briefcase size={32} style={{ color: 'var(--accent-secondary)', marginBottom: '8px' }} />
            <div style={{ fontWeight: '700', fontSize: '1.2rem', color: 'var(--text-primary)' }}>Focus Areas</div>
            <div className="stat-label">SaaS Applications | AI Agents | Business Service Automation</div>
          </div>
        </div>
      </div>
    </section>
  );
}
