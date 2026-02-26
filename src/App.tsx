import React, { useState, useRef } from 'react';
import { 
  Briefcase, 
  Palette, 
  FileText, 
  Globe, 
  Cpu, 
  Zap, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Play, 
  Pause, 
  Volume2,
  ChevronRight,
  ExternalLink,
  CheckCircle2,
  Loader2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { generateSpeech } from './services/geminiService';

const services = [
  {
    title: "Branding & Logo Design",
    description: "Crafting unique visual identities that resonate with your target audience.",
    icon: <Palette className="w-6 h-6" />,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "ATS Friendly CV",
    description: "Professional resumes designed to pass through automated screening systems.",
    icon: <FileText className="w-6 h-6" />,
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    title: "Social Media Setup",
    description: "Complete professional setup and optimization of your social channels.",
    icon: <MessageSquare className="w-6 h-6" />,
    color: "bg-purple-50 text-purple-600"
  },
  {
    title: "Mini Website Development",
    description: "Fast, responsive, and high-converting landing pages for your business.",
    icon: <Globe className="w-6 h-6" />,
    color: "bg-orange-50 text-orange-600"
  },
  {
    title: "AI Content & Prompts",
    description: "Leveraging cutting-edge AI to create high-quality content and custom prompts.",
    icon: <Cpu className="w-6 h-6" />,
    color: "bg-indigo-50 text-indigo-600"
  },
  {
    title: "Business Automation",
    description: "Streamlining your workflows with intelligent automation solutions.",
    icon: <Zap className="w-6 h-6" />,
    color: "bg-rose-50 text-rose-600"
  }
];

export default function App() {
  const [ttsText, setTtsText] = useState("Welcome to Haris Digital Pro. We are your partner in digital growth and AI solutions.");
  const [isGenerating, setIsGenerating] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleGenerateSpeech = async () => {
    if (!ttsText.trim()) return;
    
    setIsGenerating(true);
    try {
      const url = await generateSpeech(ttsText);
      setAudioUrl(url);
      if (audioRef.current) {
        audioRef.current.src = url;
        audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error("Speech generation failed", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-slate-900 font-sans selection:bg-indigo-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
              <Briefcase className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight">Haris Digital Pro</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#services" className="hover:text-indigo-600 transition-colors">Services</a>
            <a href="#ai-voice" className="hover:text-indigo-600 transition-colors">AI Voice</a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
            <button className="bg-slate-900 text-white px-5 py-2.5 rounded-full hover:bg-slate-800 transition-all">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-6">
                <Zap className="w-3 h-3" />
                Your Digital Growth Partner
              </div>
              <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
                Elevate Your <span className="text-indigo-600">Digital Identity</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-xl">
                We provide end-to-end digital marketing and AI solutions designed to scale your business in the modern era.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center gap-2">
                  Start Your Project <ChevronRight className="w-4 h-4" />
                </a>
                <a href="#services" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-2xl font-semibold hover:bg-slate-50 transition-all">
                  View Services
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-[40px] overflow-hidden bg-slate-100 relative group">
                <img 
                  src="https://picsum.photos/seed/digital-agency/800/800" 
                  alt="Digital Agency" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">100% Client Satisfaction</p>
                      <p className="text-white/70 text-sm">Muzaffarabad, Azad Kashmir</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-indigo-100 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-rose-100 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Our Expertise</h2>
            <p className="text-slate-600">Comprehensive solutions to help your business thrive in the digital landscape.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all group"
              >
                <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
                <div className="flex items-center text-indigo-600 font-semibold text-sm gap-1 cursor-pointer">
                  Learn more <ChevronRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Voice Feature (TTS) */}
      <section id="ai-voice" className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-6">
                <Volume2 className="w-3 h-3" />
                AI Voice Solutions
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Experience the Power of <span className="text-indigo-400">AI Speech</span>
              </h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                We integrate advanced AI voice technology into your business. Try our demo below to hear how we can transform your content into professional audio.
              </p>
              
              <div className="bg-white/5 border border-white/10 p-8 rounded-[32px] backdrop-blur-sm">
                <textarea 
                  value={ttsText}
                  onChange={(e) => setTtsText(e.target.value)}
                  className="w-full bg-transparent border-none focus:ring-0 text-white placeholder-slate-500 resize-none h-32 mb-6"
                  placeholder="Type something to hear it in AI voice..."
                />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={handleGenerateSpeech}
                      disabled={isGenerating}
                      className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-500 transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isGenerating ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Generating...
                        </>
                      ) : (
                        <>
                          <Zap className="w-4 h-4" />
                          Generate Audio
                        </>
                      )}
                    </button>
                    
                    {audioUrl && (
                      <button 
                        onClick={togglePlay}
                        className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
                      >
                        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                      </button>
                    )}
                  </div>
                  <div className="text-xs text-slate-500 font-mono uppercase tracking-widest">
                    Powered by Gemini 2.5
                  </div>
                </div>
                <audio 
                  ref={audioRef} 
                  onEnded={() => setIsPlaying(false)}
                  className="hidden"
                />
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-full border border-white/10 flex items-center justify-center relative">
                <motion.div 
                  animate={{ 
                    scale: isPlaying ? [1, 1.1, 1] : 1,
                    opacity: isPlaying ? [0.3, 0.6, 0.3] : 0.3
                  }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute inset-0 rounded-full bg-indigo-500/20 blur-3xl"
                />
                <div className="w-64 h-64 rounded-full bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center relative">
                  <Volume2 className={`w-24 h-24 text-indigo-400 ${isPlaying ? 'animate-pulse' : ''}`} />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background decorative circles */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -mr-64 -mt-64" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -ml-64 -mb-64" />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#FDFCFB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-900 rounded-[48px] p-12 md:p-20 relative overflow-hidden">
            <div className="relative z-10 grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-8">
                  Ready to start your <span className="text-indigo-400">digital journey?</span>
                </h2>
                <p className="text-slate-400 text-lg mb-12">
                  Get in touch with us today for a free consultation and let's build something amazing together.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-white">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Call Us</p>
                      <p className="text-xl font-semibold">03118953960</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-white">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Location</p>
                      <p className="text-xl font-semibold">Muzaffarabad, Azad Kashmir</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 md:p-10 rounded-[32px]">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                      <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Service Interested In</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none appearance-none bg-white">
                      <option>Branding & Logo Design</option>
                      <option>ATS Friendly CV</option>
                      <option>Social Media Setup</option>
                      <option>Mini Website Development</option>
                      <option>AI Content & Prompts</option>
                      <option>Business Automation</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                    <textarea className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none h-32" placeholder="Tell us about your project..."></textarea>
                  </div>
                  <button className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-[100px] -mr-48 -mt-48" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
              <Briefcase className="w-5 h-5" />
            </div>
            <span className="font-bold tracking-tight">Haris Digital Pro</span>
          </div>
          <p className="text-slate-500 text-sm">
            © 2026 Haris Digital Pro. All rights reserved. Muzaffarabad, Azad Kashmir.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors"><ExternalLink className="w-5 h-5" /></a>
            <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors"><MessageSquare className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
