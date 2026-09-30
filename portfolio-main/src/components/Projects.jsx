import { ExternalLink, Smile, BookOpen, Bot, HelpCircle } from 'lucide-react';

const Github = ({ size = 20, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function Projects() {
  const projects = [
    {
      title: 'Face Recognition System',
      description: 'A robust biometric verification web app built with Django and OpenCV. It detects, trains, and recognizes user faces in real-time, matching them against an authenticated database.',
      tags: ['Django', 'Python', 'OpenCV', 'SQLite'],
      github: 'https://github.com/Taj30Mohiddin03Abdul',
      demo: '#',
      icon: <Smile size={22} />,
    },
    {
      title: 'Student Grade Calculator',
      description: 'A desktop/CLI application designed to track and calculate student course performance, letter grades, GPAs, and visualize statistics using data science libraries.',
      tags: ['Python', 'Matplotlib', 'Tkinter'],
      github: 'https://github.com/Taj30Mohiddin03Abdul',
      demo: '#',
      icon: <BookOpen size={22} />,
    },
    {
      title: 'AI English Teaching Agent',
      description: 'An interactive natural language processing application that guides learners, corrects grammar mistakes, suggests improvements, and acts as an intelligent speech companion.',
      tags: ['Python', 'NLP', 'AI Agent', 'API Integration'],
      github: 'https://github.com/Taj30Mohiddin03Abdul',
      demo: '#',
      icon: <Bot size={22} />,
    },
  ];

  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="glass-card project-card">
            <div className="project-header">
              <div className="project-icon-box">
                {project.icon}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="GitHub Repository">
                  <Github size={20} />
                </a>
                <a href={project.demo} className="project-link" aria-label="Live Demo">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, tIdx) => (
                <span key={tIdx} className="project-tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
        
        <div className="glass-card project-card future-project">
          <div className="future-project-content">
            <div className="future-project-header">
              <HelpCircle size={26} className="future-project-icon" />
              <h3>Future Projects</h3>
              <span className="badge">Under Construction</span>
            </div>
            <p className="future-project-description">
              Designing next-generation AI automation solutions, building scalable SaaS platforms, and deploying web applications for business services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
