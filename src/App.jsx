import { Mail } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

const GithubIcon = ({ size = 20, ...props }) => (
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

const LinkedinIcon = ({ size = 20, ...props }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="footer-logo">TMA</div>
            <p className="footer-tagline">
              Software Engineer specializing in AI Agents, Workflow Automation, and SaaS Applications.
            </p>
          </div>
          
          <div className="footer-nav">
            <h4>Navigate</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-socials">
            <h4>Connect</h4>
            <div className="footer-social-links">
              <a href="https://github.com/Taj30Mohiddin03Abdul" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <GithubIcon size={18} />
              </a>
              <a href="https://www.linkedin.com/in/abdultajmohiddin/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedinIcon size={18} />
              </a>
              <a href="mailto:abdultajmohiddin30503@gmail.com" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-status-badge">
            <span className="status-dot"></span> Available for SaaS & AI Agent Collaborations
          </div>
          <div className="footer-mission">
            Dream. Design. Develop. Deliver.
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
