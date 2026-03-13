import { useState, useEffect } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Wrench, 
  MapPin, 
  Mail, 
  Phone, 
  Linkedin, 

  Award,
  BookOpen,
  ChevronRight,
  Menu,
  X,

  ArrowRight,
  Construction
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [scrolled, setScrolled] = useState<boolean>(false);

  // Handle scroll for navbar styling and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'experience', 'skills', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const userData = {
    name: "Er. Siddhesh Jaykumar Kodulkar",
    title: "Civil Site Engineer",
    phone: "9075224466",
    email: "sidkodulkar31102000@gmail.com",
    linkedin: "https://in.linkedin.com/in/sidhhesh-kodulkar-2a714a20b",
    address: "10/977 Rajrajeshwari nagar, Vardhaman chowk, Ichalkaranji",
    profile: "To secure a challenging position as a site engineer in a reputed organization where I can utilize my technical expertise, project coordination skills, and site management abilities to ensure efficient project execution and organizational growth.",
    skills: ["AutoCAD", "MS Office", "Excel", "Q-GIS", "Quantity Surveying", "Construction Site Management", "SketchUp (Learning)", "STAAD-PRO"],
    experience: [
      {
        company: "Sarth Projects",
        role: "Site Engineer",
        duration: "1.5 Years",
        description: "Managing on-site construction activities, coordinating workflows, and ensuring project adherence to specifications."
      },
      {
        company: "Thorat Constructions",
        role: "Site Engineer",
        duration: "6 Months",
        description: "Assisted in site supervision, labor management, and daily reporting of construction progress."
      }
    ],
    education: [
      {
        degree: "B.Tech in Civil Engineering",
        year: "2023",
        institute: "D.K.T.E's Textile and Engineering Institute, Ichalkaranji",
        score: "8.05 CGPA"
      },
      {
        degree: "Diploma in Civil Engineering",
        year: "2020",
        institute: "Sharad Institute of Technology Polytechnic, Yadrav",
        score: "93.20%"
      }
    ],
    training: [
      "Rokade Constructions, Ichalkaranji (Internship)",
      "Total Station Workshop (5 Days)",
      "Entrepreneurship Development Workshop",
      "Q-GIS Workshop (10 Days)",
      "STAAD-PRO Training (8 Days)"
    ]
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

const scrollTo = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Dynamic Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md py-3 shadow-md' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => scrollTo('home')}>
            <div className="bg-blue-600 p-2 rounded-lg text-white transform group-hover:rotate-12 transition-transform">
              <Construction size={20} />
            </div>
            <span className={`font-bold text-xl tracking-tighter transition-colors ${scrolled ? 'text-blue-700' : 'text-slate-900'}`}>
              SIDDHESH<span className="text-blue-500">.K</span>
            </span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1 bg-slate-100/50 p-1 rounded-full border border-slate-200/50">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${activeSection === item.id ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-blue-600'}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Contact Button */}
          <button 
            onClick={() => scrollTo('contact')}
            className="hidden md:block px-6 py-2 bg-blue-600 text-white rounded-full text-sm font-bold hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 transition-all active:scale-95"
          >
            Hire Me
          </button>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2 text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`absolute top-full left-0 w-full bg-white border-t transition-all duration-300 origin-top ${isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}>
          <div className="p-6 space-y-4">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block w-full text-left py-3 px-4 text-lg font-bold text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Animated Hero Section */}
      <section id="home" className="relative pt-48 pb-32 px-6 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-blue-50/50 rounded-l-[100px] transform translate-x-20 skew-x-6"></div>
        <div className="absolute top-40 left-10 -z-10 w-24 h-24 bg-blue-100 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-blue-100 rounded-full text-blue-700 text-sm font-bold shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-ping"></span>
              Available for immediate joining
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
              Civil Engineer <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Transforming Plans into Reality</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-xl leading-relaxed">
              {userData.profile}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button 
                onClick={() => scrollTo('experience')}
                className="group px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-blue-600 transition-all shadow-xl hover:shadow-blue-200"
              >
                View My Projects <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href={userData.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white border-2 border-slate-100 text-slate-700 rounded-2xl font-bold hover:border-blue-600 hover:text-blue-600 transition-all flex items-center gap-2"
              >
                <Linkedin size={20} /> LinkedIn
              </a>
            </div>
          </div>
          <div className="flex-1 relative animate-in fade-in zoom-in duration-1000 delay-200">
            <div className="relative z-10 bg-gradient-to-br from-blue-600 to-indigo-700 p-1 rounded-[40px] shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-white rounded-[38px] overflow-hidden p-8 aspect-square flex flex-col items-center justify-center text-center">
                <div className="w-32 h-32 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  <Construction size={64} className="text-blue-600" />
                </div>
                <h2 className="text-3xl font-black text-slate-900 mb-2">Er. SIDDHESH</h2>
                <p className="text-blue-600 font-bold uppercase tracking-widest text-sm">Site Engineer</p>
                <div className="mt-8 grid grid-cols-2 gap-4 w-full">
                  <div className="bg-slate-50 p-4 rounded-2xl">
                    <p className="text-2xl font-black text-slate-900">2+</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase">Years Exp.</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-2xl">
                    <p className="text-2xl font-black text-slate-900">5+</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase">Training</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative blobs */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-400/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Experience Section with Entrance Animation */}
      <section id="experience" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm">Professional Journey</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Work Experience</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {userData.experience.map((exp, index) => (
              <div key={index} className="group relative bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-100 group-hover:scale-110 transition-transform">
                    <Briefcase size={28} />
                  </div>
                  <span className="px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-black uppercase tracking-wider">{exp.duration}</span>
                </div>
                <h4 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{exp.role}</h4>
                <p className="text-lg font-semibold text-slate-500 mb-4">{exp.company}</p>
                <p className="text-slate-600 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Skills Section */}
      <section id="skills" className="py-24 px-6 bg-slate-50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="space-y-4 max-w-xl">
              <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm">Technical Arsenal</h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Skills & Software Tools</h3>
              <p className="text-slate-500 font-medium">Equipped with modern engineering software and site management expertise to deliver precision in every project.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {userData.skills.map((skill, index) => (
              <div key={index} className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Wrench size={20} />
                </div>
                <span className="font-bold text-slate-800 tracking-tight">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Training - Split Card Style */}
      <section id="education" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm">Academic Background</h2>
                <h3 className="text-4xl font-black text-slate-900">Education</h3>
              </div>
              <div className="space-y-6">
                {userData.education.map((edu, index) => (
                  <div key={index} className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-white rounded-xl shadow-sm text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                        <GraduationCap size={24} />
                      </div>
                      <span className="text-blue-600 font-bold text-sm">{edu.year}</span>
                    </div>
                    <h4 className="text-xl font-extrabold text-slate-900 mb-1">{edu.degree}</h4>
                    <p className="text-slate-500 text-sm font-medium mb-4 leading-snug">{edu.institute}</p>
                    <div className="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-lg font-black text-xs">
                      SCORE: {edu.score}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 h-full">
              <div className="bg-slate-900 rounded-[40px] p-10 lg:p-14 text-white h-full relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-10">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                      <Award size={24} />
                    </div>
                    <h3 className="text-3xl font-black">Certifications & Training</h3>
                  </div>
                  <div className="grid gap-4">
                    {userData.training.map((item, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                        <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 transition-transform"></div>
                        <span className="font-semibold text-slate-300 group-hover:text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-12 p-6 rounded-3xl bg-blue-600/20 border border-blue-500/20 flex items-center justify-between group cursor-pointer hover:bg-blue-600/30 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                        <BookOpen size={18} />
                      </div>
                      <div>
                        <p className="font-bold">Portfolio Extras</p>
                        <p className="text-xs text-slate-400">Leadership & Event Coordination</p>
                      </div>
                    </div>
                    <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Contact Section */}
      <section id="contact" className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-[40px] shadow-xl border border-slate-100 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-10 lg:p-20 bg-blue-600 text-white flex flex-col justify-between">
                <div>
                  <h3 className="text-4xl font-black mb-6">Let's build something <span className="text-blue-200 underline decoration-wavy underline-offset-8">extraordinary</span> together.</h3>
                  <p className="text-blue-100 text-lg mb-10 leading-relaxed">I am currently open to new opportunities and relocation. Let's discuss how my expertise can contribute to your project success.</p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center"><Phone size={24} /></div>
                    <p className="text-xl font-bold">{userData.phone}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center"><Mail size={24} /></div>
                    <p className="text-xl font-bold break-words">{userData.email}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center"><MapPin size={24} /></div>
                    <p className="text-xl font-bold">Ichalkaranji, Maharashtra</p>
                  </div>
                </div>
              </div>
              <div className="p-10 lg:p-20">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Your Name</label>
                      <input type="text" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
                      <input type="email" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Subject</label>
                    <input type="text" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all" placeholder="Project Inquiry" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Message</label>
                    <textarea rows={4} className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all resize-none" placeholder="How can I help you?"></textarea>
                  </div>
                  <button className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-lg hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-200 transition-all active:scale-[0.98]">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-12 bg-white border-t border-slate-100 text-center">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="bg-slate-900 p-1.5 rounded text-white">
              <Construction size={16} />
            </div>
            <span className="font-black text-lg tracking-tighter">SIDDHESH.</span>
          </div>
          <p className="text-slate-400 font-medium text-sm italic">"Precision in Planning , Excellence in Execution"</p>
          <div className="flex items-center gap-4 text-slate-400">
            <a href={userData.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        <p className="mt-8 text-slate-300 text-xs font-bold uppercase tracking-[0.2em]">© {new Date().getFullYear()} SIDDHESH JAYKUMAR KODULKAR</p>
      </footer>
    </div>
  );
};

export default App;