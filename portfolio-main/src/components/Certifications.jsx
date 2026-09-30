import { Award, ShieldCheck } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: 'RPA Essentials',
      issuer: 'Robotic Process Automation',
      date: 'Certified',
      badge: <Award size={36} />,
    },
    {
      title: 'Microsoft Azure AZ-900',
      issuer: 'Microsoft Azure Fundamentals',
      date: 'Certified',
      badge: <ShieldCheck size={36} />,
    },
  ];

  return (
    <section id="certifications">
      <h2 className="section-title">Certifications</h2>
      <div className="certs-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="glass-card cert-card">
            <div className="cert-badge-wrapper">
              <div className="cert-badge-glow"></div>
              <div className="cert-badge-icon">
                {cert.badge}
              </div>
            </div>
            <div className="cert-content">
              <span className="cert-issuer">{cert.issuer}</span>
              <h3 className="cert-title">{cert.title}</h3>
              <div className="cert-date">{cert.date}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
