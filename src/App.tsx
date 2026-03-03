import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Layers, Home, Folder, Briefcase, Wrench, PenTool } from 'lucide-react';
import profileImage from './assets/my-image.jpeg';
import resumePdf from './assets/Muhammad Ibrahim - Resume.pdf';

// --- Constants & Data ---
const NAV_LINKS = [
  { name: 'Home', icon: Home, href: '#' },
  { name: 'Projects', icon: Folder, href: '#projects' },
  { name: 'Experience', icon: Briefcase, href: '#experience' },
  { name: 'Skills', icon: Wrench, href: '#skills' },
  { name: 'Education', icon: PenTool, href: '#education' },
];

const STATS = [
  { value: '+2', label: 'YEARS OF EXPERIENCE' },
  { value: '+5', label: 'MAJOR PROJECTS' },
  { value: '+10', label: 'TECHNOLOGIES MASTERED' },
];

const PROJECTS = [
  { title: 'SchooLama', subtitle: 'Full-Stack Educational Dashboard', image: 'https://picsum.photos/seed/schoolama/600/400', link: 'https://github.com/Mastermoh0/schoolama' },
  { title: 'BMO', subtitle: 'Budget Money Online', image: 'https://picsum.photos/seed/bmo/600/400', link: 'https://github.com/Mastermoh0/bmo-budget-app' },
  { title: 'Feedback Engine', subtitle: 'AI-driven Feedback', image: 'https://picsum.photos/seed/feedback/600/400', link: 'https://github.com/Mastermoh0/intelligent-feedback-engine' },
  { title: 'Pivea Real Estate', subtitle: 'Real Estate Platform', image: 'https://picsum.photos/seed/pivea/600/400', link: 'https://github.com/Mastermoh0/pivea-real-estate' },
  { title: 'Vue Lesson App', subtitle: 'Educational App', image: 'https://picsum.photos/seed/vuelesson/600/400', link: 'https://github.com/Mastermoh0/vue-lesson-app' },
];

const EXPERIENCES = [
  { company: 'Freelancer', role: 'Collaborated with clients to define project requirements, delivering tailored creative solutions, managing multiple projects concurrently.', period: 'Mar 2026 - Present' },
  { company: 'NIIT Abuja Student', role: 'Developed academic projects to address real-world problems using problem-solving methodologies, applying object-oriented programming concepts.', period: 'Oct 2023 - Jun 2025' },
];

const SKILLS = [
  { name: 'Python', desc: 'Backend & Data', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'React', desc: 'Frontend Library', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', desc: 'React Framework', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Node.js', desc: 'JavaScript Runtime', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'TypeScript', desc: 'Typed JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'PostgreSQL', desc: 'Relational Database', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MongoDB', desc: 'NoSQL Database', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Docker', desc: 'Containerization', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
];

const EDUCATION = [
  { title: 'BSc (Hons) Information Technology', inst: 'Middlesex University Mauritius', date: 'Expected Jul 2026' },
  { title: 'Advanced Diploma in Technology', inst: 'NIIT Abuja', date: 'Jun 2025' },
];

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

// --- Components ---

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-tighter text-[#D6D6D6]"
        >
          Muhammad
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              whileHover={{ y: -2, color: '#FFFFFF' }}
              className="text-sm font-medium text-gray-400 transition-colors flex items-center gap-2"
            >
              <link.icon className="w-4 h-4" />
              {link.name}
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-400 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-[#0A0A0A] border-b border-[#1F1F1F] overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {NAV_LINKS.map((link, i) => (
                <a key={i} href={link.href} className="text-gray-400 hover:text-white font-medium flex items-center gap-3" onClick={() => setIsOpen(false)}>
                  <link.icon className="w-5 h-5" />
                  {link.name}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

const Marquee = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-[#1A1A1A] border border-[#2A2A2A] rounded-3xl py-4 flex items-center">
      <motion.div
        className="flex gap-8 px-4"
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
      >
        {[...Array(2)].map((_, i) => (
          <React.Fragment key={i}>
            <span className="text-[#D6D6D6] font-bold text-sm tracking-widest">PYTHON</span>
            <span className="text-[#D6D6D6] font-bold text-sm tracking-widest">REACT</span>
            <span className="text-[#D6D6D6] font-bold text-sm tracking-widest">NEXT.JS</span>
            <span className="text-[#D6D6D6] font-bold text-sm tracking-widest">NODE.JS</span>
            <span className="text-[#D6D6D6] font-bold text-sm tracking-widest">POSTGRESQL</span>
            <span className="text-[#D6D6D6] font-bold text-sm tracking-widest">MONGODB</span>
            <span className="text-[#D6D6D6] font-bold text-sm tracking-widest">DOCKER</span>
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

const LeftPanel = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-6 lg:sticky lg:top-28 lg:h-[calc(100vh-8rem)] lg:overflow-y-auto no-scrollbar pb-10"
    >
      {/* Intro Card */}
      <motion.div variants={fadeInUp} className="rounded-[40px] overflow-hidden shadow-2xl relative aspect-[4/5]">
        {/* Background Image */}
        <img
          src={profileImage}
          alt="Muhammad Ibrahim"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#03045E] via-[#03045E]/40 to-transparent" />

        {/* Content overlaid at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col items-center text-center">
          <h1 className="text-3xl font-extrabold text-white tracking-tight mb-3 leading-tight drop-shadow-lg">Muhammad Ibrahim</h1>

          <div className="bg-[#0077B6] text-white p-3 rounded-full mb-5">
            <Layers className="w-5 h-5" />
          </div>

          <div className="flex items-center gap-4 text-white">
            <motion.a whileHover={{ scale: 1.1 }} href="https://github.com/Mastermoh0" target="_blank" rel="noopener noreferrer" className="p-2 border border-white/20 rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
            </motion.a>
            <motion.a whileHover={{ scale: 1.1 }} href="https://www.linkedin.com/in/muhammad-ibrahim-083639260/" target="_blank" rel="noopener noreferrer" className="p-2 border border-white/20 rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href={resumePdf}
              download="Muhammad Ibrahim - Resume.pdf"
              className="p-2 border border-white/20 rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm"
              title="Download Resume"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </motion.a>
          </div>
        </div>
      </motion.div>


      {/* Stats Cards */}
      <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-4">
        {STATS.map((stat, i) => (
          <div key={i} className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-3xl p-6 flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-white mb-2">{stat.value}</h2>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">{stat.label}</p>
          </div>
        ))}
      </motion.div>

      {/* Marquee */}
      <motion.div variants={fadeInUp}>
        <Marquee />
      </motion.div>
    </motion.div>
  );
};

const RightPanel = () => {
  return (
    <div className="flex flex-col gap-24 pb-24 lg:pt-28">

      {/* Hero Text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="pt-10 lg:pt-0"
      >
        <h1 className="text-6xl md:text-8xl font-black text-[#D6D6D6] tracking-tighter leading-[0.9]">
          SOFTWARE<br />
          <span className="text-[#0077B6]">ENGINEER</span>
        </h1>
        <p className="mt-8 text-[#D6D6D6] text-lg md:text-xl max-w-xl leading-relaxed">
          Dynamic professional with a foundation in software engineering and a strong focus on collaboration and adaptability. Proven ability to develop innovative solutions and manage projects effectively, leveraging skills in Python and React to drive results.
        </p>
      </motion.div>

      {/* Recent Projects */}
      <motion.section
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl font-black text-[#D6D6D6] tracking-tighter leading-[0.9] mb-12">
          RECENT<br />
          <span className="text-[#0077B6]">PROJECTS</span>
        </motion.h2>

        <div className="flex flex-col gap-6">
          {PROJECTS.map((project, i) => (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={i}
              variants={fadeInUp}
              whileHover={{ scale: 1.02, borderColor: '#0077B6' }}
              className="bg-[#03045E] border border-[#03045E]/50 rounded-[40px] p-6 flex flex-col md:flex-row gap-8 items-center justify-between group cursor-pointer transition-colors"
            >
              <div className="px-4">
                <h3 className="text-3xl font-bold text-[#D6D6D6] mb-2">{project.title}</h3>
                <p className="text-[#D6D6D6]/80">{project.subtitle}</p>
              </div>
              <div className="w-12 h-12 shrink-0 rounded-full border border-[#0077B6]/30 flex items-center justify-center text-[#D6D6D6]/80 group-hover:text-white group-hover:bg-[#0077B6] transition-all mr-4">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </motion.a>
          ))}
        </div>
      </motion.section>

      {/* Experience */}
      <motion.section
        id="experience"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl font-black text-[#D6D6D6] tracking-tighter leading-[0.9] mb-12">
          WORK<br />
          <span className="text-[#0077B6]">EXPERIENCE</span>
        </motion.h2>

        <div className="flex flex-col gap-12 border-l-2 border-[#0077B6]/30 ml-4 pl-8 relative">
          {EXPERIENCES.map((exp, i) => (
            <motion.div key={i} variants={fadeInUp} className="relative group">
              <div className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-[#03045E] border-2 border-[#0077B6]/50 group-hover:border-[#0077B6] group-hover:bg-[#0077B6] transition-colors"></div>
              <h3 className="text-2xl font-bold text-[#D6D6D6] mb-4">{exp.company}</h3>
              <p className="text-[#D6D6D6]/80 leading-relaxed mb-6 max-w-xl">{exp.role}</p>
              <p className="text-sm text-[#0077B6] font-medium tracking-wide uppercase">{exp.period}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Skills & Tools */}
      <motion.section
        id="skills"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl font-black text-[#D6D6D6] tracking-tighter leading-[0.9] mb-12">
          TECHNICAL<br />
          <span className="text-[#0077B6]">SKILLS</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ scale: 1.02, borderColor: '#0077B6' }}
              className="bg-[#03045E] border border-[#03045E]/50 rounded-3xl p-6 flex items-center gap-6 cursor-pointer transition-colors"
            >
              <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white p-3 flex items-center justify-center">
                <img src={skill.icon} alt={skill.name} className="w-10 h-10 object-contain" referrerPolicy="no-referrer" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#D6D6D6] mb-1">{skill.name}</h3>
                <p className="text-[#D6D6D6]/70 text-sm font-medium">{skill.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Education */}
      <motion.section
        id="education"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl font-black text-[#D6D6D6] tracking-tighter leading-[0.9] mb-12">
          ACADEMIC<br />
          <span className="text-[#0077B6]">EDUCATION</span>
        </motion.h2>

        <div className="flex flex-col gap-4">
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ scale: 1.02, borderColor: '#0077B6' }}
              className="bg-[#03045E] border border-[#03045E]/50 rounded-3xl p-8 flex flex-col md:flex-row md:justify-between md:items-center gap-4 group cursor-pointer transition-colors"
            >
              <div>
                <h3 className="text-2xl font-bold text-[#D6D6D6] mb-2">{edu.title}</h3>
                <p className="text-[#D6D6D6]/80 text-lg">{edu.inst}</p>
              </div>
              <div className="md:text-right">
                <p className="text-[#0077B6] font-bold uppercase tracking-wide text-sm bg-[#0077B6]/10 px-4 py-2 rounded-full inline-block">{edu.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* WhatsApp Contact */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl font-black text-[#D6D6D6] tracking-tighter leading-[0.9] mb-12">
          LET'S WORK<br />
          <span className="text-[#0077B6]">TOGETHER</span>
        </motion.h2>

        <motion.a
          variants={fadeInUp}
          href="https://wa.me/+2347082331550?text=Hello%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-[#0077B6] hover:bg-[#0077B6]/90 text-white font-bold text-xl rounded-[32px] p-8 flex items-center justify-between group transition-all shadow-xl hover:shadow-[#0077B6]/20"
        >
          <div className="flex flex-col gap-2">
            <span className="text-3xl">Ready to start a project?</span>
            <span className="text-[#D6D6D6] font-medium text-lg">Send me a message on WhatsApp.</span>
          </div>
          <div className="bg-white text-[#0077B6] p-5 rounded-full group-hover:rotate-12 transition-transform">
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </div>
        </motion.a>
      </motion.section>

    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] font-sans selection:bg-[#E84A27] selection:text-white">
      <Header />

      <main className="max-w-7xl mx-auto px-6 pt-28 lg:pt-0">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Left Column (Sticky on Desktop) */}
          <div className="w-full lg:w-[400px] shrink-0">
            <LeftPanel />
          </div>

          {/* Right Column (Scrollable) */}
          <div className="w-full flex-1">
            <RightPanel />
          </div>
        </div>
      </main>
    </div>
  );
}
