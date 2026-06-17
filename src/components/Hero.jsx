import { useState, useEffect } from 'react';
import { Download, ArrowRight, Cpu, Code2 } from 'lucide-react';
import tajPhoto from '../assets/taj_photo.jpg';

export default function Hero() {
  const words = ['AI Agents & Bots', 'SaaS Applications', 'Workflow Automations', 'Django & React Stacks'];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const delay = setTimeout(() => setReverse(true), 1200); // pause at the end
      return () => clearTimeout(delay);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [subIndex, reverse, index]);

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <span className="hero-subtitle">Welcome to my Portfolio</span>
        <h1 className="hero-title">
          Hi, I am <span>Taj Mohiddin Abdul</span>
        </h1>
        <p className="hero-tagline">
          Building <span className="gradient-text">{words[index].substring(0, subIndex)}</span><span className="cursor-blink">|</span>
        </p>
        <p className="hero-description">
          I am a Software Engineer at EpiMax Solutions LLP. I specialize in building robust enterprise and SaaS applications, automating workflows, and designing intelligent AI agents.
        </p>
        <p className="hero-quote">
          "The future is built by those who create it."
        </p>
        <div className="hero-actions">
          <a href="#projects" onClick={handleScrollToProjects} className="btn btn-primary">
            View My Work <ArrowRight size={18} />
          </a>
          <a href="/resume.pdf" download="Taj_Mohiddin_Resume.pdf" className="btn btn-secondary">
            Download Resume <Download size={18} />
          </a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="visual-canvas"></div>
        <div className="visual-image-container">
          <img src={tajPhoto} alt="Taj Mohiddin" className="visual-image" />
        </div>
        <div className="floating-tech-badge float-badge-1" title="AI & Python Engineering">
          <Cpu size={28} />
        </div>
        <div className="floating-tech-badge float-badge-2" title="React UI & AI Solutions">
          <Code2 size={28} />
        </div>
      </div>
    </section>
  );
}
