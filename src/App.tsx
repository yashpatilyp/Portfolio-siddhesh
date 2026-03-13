import { useState } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Wrench, 
  MapPin, 
  Mail, 
  Phone, 
  Linkedin, 
  ChevronRight,
  Menu,
  X,
  Image as ImageIcon
} from 'lucide-react';

interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string;
}

interface Education {
  degree: string;
  year: string;
  institute: string;
  score: string;
}

interface UserData {
  name: string;
  title: string;
  phone: string;
  email: string;
  linkedin: string;
  address: string;
  profile: string;
  skills: string[];
  experience: Experience[];
  education: Education[];
  training: string[];
}

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showAllImages, setShowAllImages] = useState(false);

  const userData: UserData = {
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
    { id: 'gallery', label: 'Gallery' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  const allGalleryImages = [
    'WhatsApp Image 2026-03-13 at 10.32.24 AM.jpeg',
    'WhatsApp Image 2026-03-13 at 10.32.25 AM.jpeg',
    'WhatsApp Image 2026-03-13 at 10.32.26 AM.jpeg',
    '/src/assets/images/WhatsApp Image 2026-03-13 at 10.32.27 AM.jpeg',
    '/src/assets/images/WhatsApp Image 2026-03-13 at 10.32.28 AM.jpeg',
    '/src/assets/images/WhatsApp Image 2026-03-13 at 10.32.29 AM.jpeg',
    '/src/assets/images/WhatsApp Image 2026-03-13 at 10.32.31 AM.jpeg',
    '/src/assets/images/WhatsApp Image 2026-03-13 at 10.32.32 AM.jpeg',
    '/src/assets/images/WhatsApp Image 2026-03-13 at 10.32.33 AM.jpeg',
    '/src/assets/images/WhatsApp Image 2026-03-13 at 10.32.34 AM.jpeg',
    '/src/assets/images/WhatsApp Image 2026-03-13 at 10.32.36 AM.jpeg',
    '/src/assets/images/WhatsApp Image 2026-03-13 at 10.32.38 AM.jpeg',
    '/src/assets/images/WhatsApp Image 2026-03-13 at 10.32.39 AM.jpeg',
    '/src/assets/images/WhatsApp Image 2026-03-13 at 10.32.40 AM.jpeg',
    '/src/assets/images/WhatsApp Image 2026-03-13 at 10.32.42 AM.jpeg',
    '/src/assets/images/WhatsApp Image 2026-03-13 at 10.32.44 AM.jpeg',
    '/src/assets/images/WhatsApp Image 2026-03-13 at 10.32.45 AM.jpeg',
    '/src/assets/images/WhatsApp Image 2026-03-13 at 10.32.46 AM.jpeg',
    '/src/assets/images/WhatsApp Image 2026-03-13 at 10.32.48 AM.jpeg',
    '/src/assets/images/WhatsApp Image 2026-03-13 at 10.32.49 AM.jpeg',
    '/src/assets/images/WhatsApp Image 2026-03-13 at 10.32.50 AM.jpeg',
    '/src/assets/images/WhatsApp Image 2026-03-13 at 10.32.52 AM.jpeg',
    '/src/assets/images/WhatsApp Image 2026-03-13 at 10.32.53 AM.jpeg',
    '/src/assets/images/WhatsApp Image 2026-03-13 at 10.32.54 AM.jpeg',
    '/src/assets/images/WhatsApp Image 2026-03-13 at 10.32.55 AM.jpeg',
    '/src/assets/images/WhatsApp Image 2026-03-13 at 10.32.56 AM.jpeg',
    '/src/assets/images/WhatsApp Image 2026-03-13 at 10.32.57 AM.jpeg',
    '/src/assets/images/WhatsApp Image 2026-03-13 at 10.32.59 AM.jpeg',
    '/src/assets/images/WhatsApp Image 2026-03-13 at 10.33.00 AM.jpeg',
    '/src/assets/images/WhatsApp Image 2026-03-13 at 10.33.01 AM.jpeg',
    '/src/assets/images/WhatsApp Image 2026-03-13 at 10.33.02 AM.jpeg',
    '/src/assets/images/WhatsApp Image 2026-03-13 at 10.33.03 AM.jpeg',
    '/src/assets/images/WhatsApp Image 2026-03-13 at 10.33.04 AM.jpeg'
  ];

  const galleryImages = showAllImages ? allGalleryImages : allGalleryImages.slice(0, 12);

  const scrollTo = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    setActiveSection(id);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="font-bold text-xl text-blue-700 tracking-tight">Er. SIDDHESH K.</span>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${activeSection === item.id ? 'text-blue-700' : 'text-slate-600'}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t px-4 py-4 space-y-4">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block w-full text-left py-2 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full animate-pulse">
            Available for Site Engineer Roles
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">
            Building the Future, <span className="text-blue-600">One Site at a Time.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            {userData.profile}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => scrollTo('contact')}
              className="px-8 py-3 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition shadow-lg shadow-blue-200"
            >
              Contact Me
            </button>
            <a 
              href={userData.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white border border-slate-200 text-slate-700 rounded-lg font-semibold hover:bg-slate-50 transition flex items-center justify-center gap-2"
            >
              LinkedIn  <Linkedin size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="text-blue-600" size={32} />
            <h2 className="text-3xl font-bold">Work Experience</h2>
          </div>
          <div className="grid gap-8">
            {userData.experience.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-blue-200 group">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full group-hover:scale-125 transition-transform"></div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 group-hover:shadow-md transition">
                  <span className="inline-block text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded mb-2">{exp.duration}</span>
                  <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                  <p className="text-lg text-blue-600 font-medium mb-3">{exp.company}</p>
                  <p className="text-slate-600 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section with Show More */}
      <section id="gallery" className="py-20 px-4 bg-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <ImageIcon className="mx-auto h-16 w-16 text-blue-600 mb-4" />
            <h2 className="text-4xl font-bold text-slate-900 mb-4">My Work Gallery</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Selected construction site photos showcasing real-world engineering projects</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-12">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-2xl shadow-lg aspect-square cursor-pointer bg-slate-200 hover:shadow-2xl transition-all hover:scale-105"
                onClick={() => setSelectedImage(image)}
              >
                <img 
                  src={image} 
                  alt={`Site work ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white drop-shadow-2xl opacity-0 group-hover:opacity-100 transition-all">
                  <h4 className="font-bold text-lg mb-1">Site Photo #{index + 1}</h4>
                  <p className="text-sm opacity-90">Construction Progress</p>
                </div>
              </div>
            ))}
          </div>
          {!showAllImages && (
            <div className="text-center">
              <button 
                onClick={() => setShowAllImages(true)}
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 shadow-xl hover:shadow-blue-200 transition-all transform hover:-translate-y-1"
              >
                <ImageIcon size={20} />
                Show All {allGalleryImages.length} Photos
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[10000] flex items-center justify-center p-8 bg-black/95 backdrop-blur-sm animate-in fade-in zoom-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl max-h-[95vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
            <button 
              className="absolute -top-12 right-0 text-white/90 hover:text-white text-3xl font-bold p-2 rounded-full hover:bg-white/20 transition-all"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img 
              src={selectedImage} 
              alt="Full project photo"
              className="w-full h-auto max-h-[95vh] object-contain rounded-2xl shadow-2xl" 
            />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center bg-black/60 backdrop-blur-md px-12 py-6 rounded-3xl max-w-md mx-auto">
              <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">Construction Site Gallery</h3>
              <p className="text-slate-200 opacity-90 drop-shadow-md">Click outside or X to close</p>
              <button 
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all"
                onClick={() => window.open(selectedImage, '_blank')}
              >
                Open Full Size
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Skills & Tools */}
      <section id="skills" className="py-20 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Wrench className="text-blue-600" size={32} />
            <h2 className="text-3xl font-bold">Skills & Tools</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {userData.skills.map((skill, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 flex items-center gap-3 hover:border-blue-300 transition group">
                <div className="w-2 h-2 rounded-full bg-blue-400 group-hover:bg-blue-600"></div>
                <span className="font-medium text-slate-700">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Training */}
      <section id="education" className="py-20 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-blue-600" size={32} />
              <h2 className="text-3xl font-bold">Education</h2>
            </div>
            <div className="space-y-6">
              {userData.education.map((edu, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                  <h3 className="font-bold text-lg text-slate-900">{edu.degree}</h3>
                  <p className="text-blue-600 font-medium">{edu.year}</p>
                  <p className="text-slate-600 text-sm mt-1">{edu.institute}</p>
                  <div className="mt-3 inline-flex items-center gap-1 bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                    Result: {edu.score}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-8">
              <ChevronRight className="text-blue-600" size={32} />
              <h2 className="text-3xl font-bold">Training & Internships</h2>
            </div>
            <div className="bg-blue-600 rounded-2xl p-6 text-white shadow-xl shadow-blue-200">
              <ul className="space-y-4">
                {userData.training.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ChevronRight size={18} className="mt-1 flex-shrink-0 opacity-70" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-slate-400 mb-12">I am currently looking for new opportunities as a Site Engineer. Feel free to reach out via any of the platforms below.</p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <a href={`tel:${userData.phone}`} className="p-6 bg-slate-800 rounded-2xl hover:bg-slate-700 transition">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone size={24} />
              </div>
              <p className="font-semibold">{userData.phone}</p>
              <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest">Phone</p>
            </a>
            <a href={`mailto:${userData.email}`} className="p-6 bg-slate-800 rounded-2xl hover:bg-slate-700 transition">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail size={24} />
              </div>
              <p className="font-semibold break-words text-sm">{userData.email}</p>
              <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest">Email</p>
            </a>
            <div className="p-6 bg-slate-800 rounded-2xl">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin size={24} />
              </div>
              <p className="font-semibold text-sm">Ichalkaranji, Maharashtra</p>
              <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest">Location</p>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <a href={userData.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-full hover:bg-blue-600 transition">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-900 border-t border-slate-800 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Er. Siddhesh Jaykumar Kodulkar. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;

