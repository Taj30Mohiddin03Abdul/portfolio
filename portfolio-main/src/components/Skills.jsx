import { Terminal, Database, Code, Globe, Shield, GitBranch, Bot, Cpu, Layers, Activity, Volume2, MessageSquare } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming & Web Dev',
      skills: [
        { name: 'Python', level: 'Advanced', icon: <Terminal size={22} /> },
        { name: 'React.js', level: 'Intermediate', icon: <Globe size={22} /> },
        { name: 'Django', level: 'Advanced', icon: <Code size={22} /> },
        { name: 'PostgreSQL & SQL', level: 'Intermediate', icon: <Database size={22} /> },
      ],
    },
    {
      title: 'AI, SaaS & Automation',
      skills: [
        { name: 'AI Agents', level: 'Advanced', icon: <Bot size={22} /> },
        { name: 'Workflow Automation', level: 'Advanced', icon: <Cpu size={22} /> },
        { name: 'n8n Platform', level: 'Advanced', icon: <Activity size={22} /> },
        { name: 'Retell AI', level: 'Advanced', icon: <MessageSquare size={22} /> },
        { name: 'AssemblyAI', level: 'Advanced', icon: <Volume2 size={22} /> },
        { name: 'LangChain', level: 'Advanced', icon: <Shield size={22} /> },
      ],
    },
    {
      title: 'Platforms & Tools',
      skills: [
        { name: 'Git & GitHub', level: 'Advanced', icon: <GitBranch size={22} /> },
        { name: 'Supabase', level: 'Intermediate', icon: <Database size={22} /> },
        { name: 'API Integrations', level: 'Advanced', icon: <Layers size={22} /> },
        { name: 'Cloud Deployments', level: 'Intermediate', icon: <Globe size={22} /> },
      ],
    },
  ];

  return (
    <section id="skills">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-categories">
        {skillCategories.map((category, index) => (
          <div key={index} className="skills-category-group">
            <h3 className="skills-category-title">{category.title}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx} className="glass-card skill-card">
                  <div className="skill-icon-wrapper">
                    {skill.icon}
                  </div>
                  <div className="skill-info">
                    <div className="skill-name">{skill.name}</div>
                    <div className="skill-level">{skill.level}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
