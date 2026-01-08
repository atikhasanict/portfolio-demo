import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X, ExternalLink, Code, Briefcase, User, MessageSquare } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration and real-time inventory management.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#'
    },
    {
      title: 'AI Content Generator',
      description: 'Machine learning powered content creation tool with natural language processing capabilities.',
      tags: ['Python', 'TensorFlow', 'React', 'FastAPI'],
      link: '#'
    },
    {
      title: 'Real-Time Analytics Dashboard',
      description: 'Interactive data visualization platform for tracking business metrics and KPIs.',
      tags: ['React', 'D3.js', 'PostgreSQL', 'WebSocket'],
      link: '#'
    }
  ];

  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'CI/CD'] },
    { category: 'Design', items: ['Figma', 'UI/UX', 'Responsive Design', 'Accessibility'] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Portfolio
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`transition-colors hover:text-purple-400 ${activeSection === item.toLowerCase() ? 'text-purple-400' : 'text-gray-300'
                  }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-sm">
            <div className="px-6 py-4 space-y-4">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left transition-colors hover:text-purple-400"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <h2 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              John Doe
            </h2>
            <p className="text-2xl md:text-3xl text-gray-300 mb-8">
              Full Stack Developer & Creative Problem Solver
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
              Crafting beautiful, functional web experiences with modern technologies.
              Passionate about clean code and innovative solutions.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all hover:scale-110">
                <Github size={24} />
              </a>
              <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all hover:scale-110">
                <Linkedin size={24} />
              </a>
              <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all hover:scale-110">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 flex items-center">
            <User className="mr-4 text-purple-400" size={40} />
            About Me
          </h2>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              I'm a passionate full stack developer with 5+ years of experience building scalable web applications.
              My journey in tech started with a curiosity about how things work, and evolved into a career focused
              on creating impactful digital solutions.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open source projects,
              or sharing knowledge with the developer community. I believe in continuous learning and the power of
              collaboration to solve complex problems.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-5xl font-bold mb-12 flex items-center">
            <Briefcase className="mr-4 text-purple-400" size={40} />
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all hover:transform hover:scale-105"
              >
                <h3 className="text-2xl font-bold mb-3 text-purple-300">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-purple-500/20 rounded-full text-sm text-purple-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                >
                  View Project <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-5xl font-bold mb-12 flex items-center">
            <Code className="mr-4 text-purple-400" size={40} />
            Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <h3 className="text-2xl font-bold mb-4 text-purple-300">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-5xl font-bold mb-12 flex items-center">
            <MessageSquare className="mr-4 text-purple-400" size={40} />
            Get In Touch
          </h2>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <p className="text-xl text-gray-300 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-400 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-400 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-400 transition-colors resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  alert('Message sent! (This is a demo)');
                }}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 border-t border-white/10">
        <p>© 2026 John Doe. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}
