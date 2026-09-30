import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section id="education">
      <h2 className="section-title">Education</h2>
      <div className="education-list">
        <div className="education-item glass-card">
          <div className="edu-content">
            <div className="edu-meta">
              <span className="edu-year">2021 - 2025</span>
              <span className="edu-location">Guntur, Andhra Pradesh</span>
            </div>
            <h4 className="edu-school">K L University</h4>
            <p className="edu-degree">Bachelor of Technology in Computer Science and Engineering</p>
            <span className="badge edu-grade">GPA: 8.35 / 10.00</span>
          </div>
        </div>

        <div className="education-item glass-card">
          <div className="edu-content">
            <div className="edu-meta">
              <span className="edu-year">2019 - 2021</span>
              <span className="edu-location">Vijayawada, Andhra Pradesh</span>
            </div>
            <h4 className="edu-school">FIITJEE Junior College</h4>
            <p className="edu-degree">Board of Intermediate Education</p>
            <span className="badge edu-grade">Percentage: 88%</span>
          </div>
        </div>

        <div className="education-item glass-card">
          <div className="edu-content">
            <div className="edu-meta">
              <span className="edu-year">2019</span>
              <span className="edu-location">Nandigama, Andhra Pradesh</span>
            </div>
            <h4 className="edu-school">Sri Chaitanya Techno School</h4>
            <p className="edu-degree">Board of Secondary Education</p>
            <span className="badge edu-grade">GPA: 10.00 / 10.00</span>
          </div>
        </div>
      </div>
    </section>
  );
}
