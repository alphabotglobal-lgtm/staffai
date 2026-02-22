import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Zap,
  Cpu,
  RotateCcw,
  ShieldCheck,
  ChevronRight,
  Check,
  X,
  Menu,
  Clock,
  ExternalLink,
  ChevronDown,
  Activity,
  Diamond
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// --- HELPER COMPONENTS ---

const MagneticButton = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`btn-magnetic group flex items-center justify-center gap-2 px-10 py-5 rounded-full font-bold uppercase tracking-widest transition-all ${className}`}
      {...props}
    >
      <span>{children}</span>
    </button>
  );
};

// --- SECTIONS ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-obsidian/95 backdrop-blur-md py-4 px-8 border-b border-champagne/10' : 'bg-transparent py-8 px-12'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 border border-champagne bg-obsidian flex items-center justify-center rotate-45">
            <Diamond className="w-5 h-5 text-champagne -rotate-45" />
          </div>
          <span className="font-bold text-2xl tracking-tight text-champagne uppercase">Time & Pay</span>
        </div>

        <div className="hidden md:flex items-center gap-12 text-[11px] font-bold uppercase tracking-[0.2em] text-ivory/60">
          <a href="#features" className="hover:text-champagne transition-colors">Curated Functions</a>
          <a href="#philosophy" className="hover:text-champagne transition-colors">Manifesto</a>
          <a href="#protocol" className="hover:text-champagne transition-colors">The Protocol</a>
        </div>

        <button className="bg-champagne text-obsidian px-8 py-3 rounded-full font-bold uppercase text-[10px] tracking-widest hover:bg-ivory transition-colors">
          Private Access
        </button>
      </div>
    </nav>
  );
};

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.hero-content > *', {
        y: 60,
        opacity: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: 'power4.out'
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen flex flex-col justify-end p-12 lg:p-24 bg-obsidian overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2601"
          alt="Luxury Architecture"
          className="w-full h-full object-cover scale-110 grayscale brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
      </div>

      <div className="hero-content relative z-10 max-w-5xl">
        <h1 className="flex flex-col mb-12">
          <span className="text-ivory text-5xl md:text-8xl font-sans font-bold leading-[0.9] tracking-tighter uppercase">Intelligence meets</span>
          <span className="text-champagne text-8xl md:text-[12rem] font-drama italic -mt-6">Finesse.</span>
        </h1>
        <div className="flex flex-col md:flex-row md:items-end gap-16">
          <p className="text-ivory/40 text-xl max-w-xl font-sans leading-relaxed border-l border-champagne/30 pl-10">
            Time and Pay: AI-powered staff time and pay solutions for those who demand uncompromising administrative precision.
          </p>
          <MagneticButton className="bg-transparent border border-champagne/40 text-champagne w-fit hover:bg-champagne hover:text-obsidian group shadow-[0_0_20px_rgba(201,168,76,0.1)]">
            Explore Tiers
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </MagneticButton>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const [shuffleItems, setShuffleItems] = useState([
    { id: 1, label: 'L_01 // ATELIER_CORE', color: 'bg-obsidian' },
    { id: 2, label: 'L_02 // SYNC_VALOR', color: 'bg-champagne' },
    { id: 3, label: 'L_03 // FLOW_ELITE', color: 'bg-slate' }
  ]);
  const [typeWriterText, setTypeWriterText] = useState('');
  const fullTypeWriter = "> INITIATING VAULT_PROTOCOL\n> SYNCING STAFF_GENOME\n> AI_MANAGEMENT: OPERATIONAL\n> STATUS: OPTIMIZED_LUXE";

  useEffect(() => {
    const shuffle = setInterval(() => {
      setShuffleItems(prev => {
        const next = [...prev];
        next.unshift(next.pop());
        return next;
      });
    }, 3000);

    let charIdx = 0;
    const type = setInterval(() => {
      if (charIdx < fullTypeWriter.length) {
        setTypeWriterText(prev => prev + fullTypeWriter[charIdx]);
        charIdx++;
      } else {
        setTimeout(() => {
          setTypeWriterText('');
          charIdx = 0;
        }, 3000);
      }
    }, 40);

    return () => {
      clearInterval(shuffle);
      clearInterval(type);
    };
  }, []);

  return (
    <section id="features" className="py-32 px-12 lg:px-24 bg-ivory">
      <div className="mb-32 flex flex-col md:flex-row md:items-end justify-between gap-12">
        <div>
          <div className="flex items-center gap-6 mb-4">
            <div className="w-12 h-[1px] bg-champagne" />
            <span className="font-mono text-xs tracking-[0.4em] text-champagne font-bold uppercase">The Diagnostic Suite</span>
          </div>
          <h2 className="text-obsidian text-6xl md:text-8xl font-sans font-bold uppercase tracking-tighter">
            Intelligence.
          </h2>
        </div>
        <p className="text-obsidian/40 max-w-xs text-sm font-medium leading-relaxed uppercase tracking-widest text-right">
          Bespoke AI management engineered for high-performance organizations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 shadow-[40px_40px_0px_rgba(201,168,76,0.05)] bg-champagne/10 p-1 border border-champagne/10 rounded-[3rem]">
        {/* Card 1: Diagnostic Shuffler */}
        <div className="bg-ivory p-12 rounded-[2.8rem] flex flex-col h-[550px] relative overflow-hidden group">
          <div className="mb-12">
            <div className="text-[10px] font-mono border border-obsidian/10 w-fit px-3 py-1 rounded-full mb-6 uppercase font-bold text-champagne">Vault_01</div>
            <h3 className="text-3xl font-bold uppercase tracking-tighter mb-4 leading-none">The Shuffler</h3>
            <p className="text-obsidian/60 text-sm font-medium leading-relaxed uppercase tracking-wider">Molecular reallocation of administrative resources via AI.</p>
          </div>
          <div className="relative flex-grow overflow-hidden flex items-center justify-center">
            {shuffleItems.map((item, idx) => (
              <div
                key={item.id}
                className={`absolute w-full h-16 ${item.color} rounded-2xl flex items-center justify-center text-[11px] font-mono tracking-widest uppercase transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${idx === 1 ? 'text-ivory shadow-[0_20px_40px_rgba(0,0,0,0.2)]' : 'text-ivory/20 scale-90'}`}
                style={{
                  transform: `translateY(${(idx - 1) * 80}px)`,
                  zIndex: idx === 1 ? 10 : 0
                }}
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>

        {/* Card 2: Telemetry Typewriter */}
        <div className="bg-obsidian p-12 rounded-[2.8rem] flex flex-col h-[550px] relative">
          <div className="mb-12 text-ivory">
            <div className="text-[10px] font-mono border border-champagne/30 w-fit px-3 py-1 rounded-full mb-6 uppercase font-bold text-champagne">Vault_02</div>
            <h3 className="text-3xl font-bold uppercase tracking-tighter mb-4 leading-none">Vault Telemetry</h3>
            <p className="text-ivory/40 text-sm font-medium leading-relaxed uppercase tracking-wider">Direct observation of AI performance intervals.</p>
          </div>
          <div className="bg-black/60 p-8 rounded-2xl flex-grow font-mono text-[10px] text-champagne relative border border-champagne/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-champagne rounded-full animate-pulse shadow-[0_0_10px_#C9A84C]" />
              <span className="uppercase tracking-[0.4em] text-[9px] font-bold">Encrypted Feed</span>
            </div>
            {typeWriterText}
            <span className="inline-block w-1.5 h-3 bg-champagne ml-1 animate-pulse" />
          </div>
        </div>

        {/* Card 3: Cursor Protocol Scheduler */}
        <div className="bg-ivory p-12 rounded-[2.8rem] flex flex-col h-[550px] relative overflow-hidden group">
          <div className="mb-12">
            <div className="text-[10px] font-mono border border-obsidian/10 w-fit px-3 py-1 rounded-full mb-6 uppercase font-bold text-champagne">Vault_03</div>
            <h3 className="text-3xl font-bold uppercase tracking-tighter mb-4 leading-none">Sequence Pro</h3>
            <p className="text-obsidian/60 text-sm font-medium leading-relaxed uppercase tracking-wider">A seamless integration for refined operational flow.</p>
          </div>
          <div className="grid grid-cols-7 gap-px bg-slate/10 mt-auto rounded-xl overflow-hidden border border-slate/10">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
              <div key={i} className="flex flex-col items-center bg-ivory py-4 border-r border-slate/5 last:border-r-0">
                <span className="text-[9px] font-mono text-obsidian/30 mb-2 uppercase font-bold">{day}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold ${i === 3 ? 'bg-champagne text-obsidian shadow-lg' : 'text-obsidian/40'}`}>
                  {i + 1}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-end">
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-champagne border-b border-champagne pb-1">Master Schedule</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Philosophy = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.philo-text', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        x: -40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power4.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="philosophy" ref={sectionRef} className="relative py-48 px-12 lg:px-24 bg-obsidian overflow-hidden border-y border-champagne/10">
      <div className="absolute inset-0 opacity-10">
        <img src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?auto=format&fit=crop&q=80&w=2600" className="w-full h-full object-cover mix-blend-overlay" alt="Silk Texture" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-32">
        <div className="philo-text grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="border-t border-champagne/20 pt-12">
            <p className="text-champagne font-mono mb-8 uppercase tracking-[0.4em] text-xs font-bold">Legacy Mode</p>
            <p className="text-ivory/30 text-4xl font-sans uppercase font-bold leading-none tracking-tighter">
              Administrative friction is accepted as an unavoidable necessity.
            </p>
          </div>
          <div className="border-t border-champagne pt-12">
            <p className="text-champagne font-mono mb-8 uppercase tracking-[0.4em] text-xs font-bold">The Atelier Mode</p>
            <div className="text-ivory text-6xl md:text-8xl font-drama italic leading-[0.85] tracking-tighter mb-8">
              We focus on <span className="text-champagne">unseen efficiency</span> as the ultimate luxury.
            </div>
            <p className="text-ivory/50 text-xl font-sans max-w-md font-medium leading-relaxed">
              Eradicating manual labor through an editorial lens of automated precision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProtocolStep = ({ number, title, desc, children }) => {
  return (
    <div className="protocol-card min-h-screen sticky top-0 flex items-center bg-ivory border-t border-obsidian/10 px-12 py-24 overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="order-2 lg:order-1">
          <span className="text-champagne font-mono text-xl mb-6 block font-bold tracking-widest">{number}</span>
          <h3 className="text-obsidian text-6xl md:text-9xl font-bold mb-12 uppercase tracking-tighter leading-[0.8]">{title}</h3>
          <p className="text-obsidian/40 text-2xl max-w-sm font-sans font-bold leading-tight">{desc}</p>
        </div>
        <div className="order-1 lg:order-2 flex items-center justify-center p-12 bg-obsidian rounded-[3rem] shadow-2xl aspect-square relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-champagne/10 to-transparent opacity-50" />
          {children}
        </div>
      </div>
    </div>
  );
};

const Protocol = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card');
      cards.forEach((card, i) => {
        if (i !== cards.length - 1) {
          ScrollTrigger.create({
            trigger: card,
            start: 'top top',
            pin: true,
            pinSpacing: false,
            scrub: true,
            onUpdate: (self) => {
              gsap.to(card, {
                scale: 1 - (self.progress * 0.05),
                opacity: 1 - self.progress,
                filter: `blur(${self.progress * 10}px)`,
                duration: 0.1
              });
            }
          });
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="protocol" ref={containerRef} className="bg-ivory text-ivory">
      <ProtocolStep
        number="01"
        title="Structural Curate"
        desc="Indexing organizational nodes to identify administrative leak points."
      >
        <div className="w-64 h-64 border-[0.5px] border-champagne/40 rounded-full flex items-center justify-center animate-spin-slow p-8">
          <div className="w-full h-full border-t border-champagne rounded-full" />
        </div>
      </ProtocolStep>

      <ProtocolStep
        number="02"
        title="Logic Sync"
        desc="Molecular integration with legacy HR stacks for frictionless command flow."
      >
        <div className="w-80 h-1 bg-white/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 h-full w-32 bg-champagne shadow-[0_0_20px_#C9A84C] animate-scan" />
        </div>
      </ProtocolStep>

      <ProtocolStep
        number="03"
        title="Apex Lock"
        desc="24/7 autonomous monitoring with automatic error resolution protocols."
      >
        <svg viewBox="0 0 200 100" className="w-full text-champagne drop-shadow-[0_0_10px_#C9A84C]">
          <path
            className="animate-waveform"
            d="M 0,50 L 30,50 L 35,20 L 40,80 L 50,50 L 100,50 L 110,10 L 130,90 L 150,50 L 200,50"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="500"
            strokeDashoffset="500"
          />
        </svg>
      </ProtocolStep>
    </section>
  );
};

const Pricing = () => {
  return (
    <section className="py-32 px-12 lg:px-24 bg-ivory border-t border-obsidian/10">
      <div className="mb-32 flex flex-col md:flex-row md:items-end justify-between gap-12 text-obsidian">
        <h2 className="text-7xl font-sans font-bold uppercase tracking-tighter leading-none">Curated Entry</h2>
        <p className="text-obsidian/30 font-mono text-xs uppercase font-bold tracking-[0.4em] max-w-xs text-right">Choose the right package for your company.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-obsidian/10 border border-obsidian/10 rounded-[3rem] overflow-hidden shadow-xl">
        <div className="p-16 bg-ivory flex flex-col group hover:bg-white transition-colors">
          <h3 className="font-bold text-xl uppercase tracking-widest mb-12 border-b border-obsidian/10 pb-6 italic">Essential</h3>
          <div className="text-7xl font-bold mb-16 tracking-tighter text-obsidian leading-none font-drama italic">$450<span className="text-[10px] font-mono uppercase font-bold text-obsidian/30 align-top ml-2">/Mo</span></div>
          <ul className="mb-24 space-y-8">
            <li className="flex items-center gap-4 text-[11px] font-mono font-bold uppercase tracking-widest text-obsidian/60"> [01] Core Logic</li>
            <li className="flex items-center gap-4 text-[11px] font-mono font-bold uppercase tracking-widest text-obsidian/60"> [02] Basic Synapse</li>
            <li className="flex items-center gap-4 text-[11px] font-mono font-bold uppercase tracking-widest text-obsidian/20"> [03] Manual Overhaul</li>
          </ul>
          <button className="mt-auto w-full py-6 rounded-full border border-obsidian/10 text-obsidian font-bold uppercase text-[10px] tracking-widest hover:bg-obsidian hover:text-ivory transition-all shadow-sm">Initialize</button>
        </div>

        <div className="p-16 bg-obsidian flex flex-col relative group text-ivory">
          <div className="absolute top-12 right-12 text-champagne"><Diamond className="w-6 h-6 animate-pulse" /></div>
          <h3 className="font-bold text-xl uppercase tracking-widest mb-12 border-b border-champagne/20 pb-6 italic">Performance</h3>
          <div className="text-7xl font-bold mb-16 tracking-tighter text-champagne leading-none font-drama italic">$1200<span className="text-[10px] font-mono uppercase font-bold text-ivory/20 align-top ml-2">/Mo</span></div>
          <ul className="mb-24 space-y-8">
            <li className="flex items-center gap-4 text-[11px] font-mono font-bold uppercase tracking-widest text-champagne"> [01] Full Logic Sync</li>
            <li className="flex items-center gap-4 text-[11px] font-mono font-bold uppercase tracking-widest text-champagne"> [02] Predictive DNA</li>
            <li className="flex items-center gap-4 text-[11px] font-mono font-bold uppercase tracking-widest text-champagne"> [03] 24/7 Vault Line</li>
          </ul>
          <button className="mt-auto w-full py-6 rounded-full bg-champagne text-obsidian font-bold uppercase text-[10px] tracking-widest hover:bg-ivory transition-all shadow-[0_20px_40px_rgba(201,168,76,0.3)]">Elevate</button>
        </div>

        <div className="p-16 bg-ivory flex flex-col hover:bg-white transition-colors border-l border-obsidian/10">
          <h3 className="font-bold text-xl uppercase tracking-widest mb-12 border-b border-obsidian/10 pb-6 italic">Industrial</h3>
          <div className="text-7xl font-bold mb-16 tracking-tighter text-obsidian leading-none font-drama italic">Contact</div>
          <ul className="mb-24 space-y-8">
            <li className="flex items-center gap-4 text-[11px] font-mono font-bold uppercase tracking-widest text-obsidian/60"> [01] Multi-Site Sync</li>
            <li className="flex items-center gap-4 text-[11px] font-mono font-bold uppercase tracking-widest text-obsidian/60"> [02] Bespoke Engine</li>
            <li className="flex items-center gap-4 text-[11px] font-mono font-bold uppercase tracking-widest text-obsidian/60"> [03] Priority Apex</li>
          </ul>
          <button className="mt-auto w-full py-6 rounded-full border border-obsidian/10 text-obsidian font-bold uppercase text-[10px] tracking-widest hover:bg-champagne hover:text-obsidian transition-all">Request Suite</button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-obsidian text-ivory pt-48 pb-12 px-12 lg:px-24 rounded-t-[5rem]">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-32 mb-48">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-12 h-12 border border-champagne flex items-center justify-center rotate-45">
              <Diamond className="w-6 h-6 text-champagne -rotate-45" />
            </div>
            <span className="font-bold text-4xl tracking-tighter uppercase italic text-champagne font-sans">Time & Pay</span>
          </div>
          <p className="text-ivory/20 max-w-sm text-3xl font-drama italic leading-tight tracking-tight">
            Eradicating management friction through an editorial lens of luxury and automated precision.
          </p>
        </div>
        <div>
          <h4 className="font-mono uppercase tracking-[0.5em] text-[10px] mb-12 text-champagne font-bold">Atelier</h4>
          <ul className="space-y-8 text-[11px] text-ivory/40 font-bold uppercase tracking-[0.2em]">
            <li><a href="#" className="hover:text-champagne transition-colors italic underline underline-offset-8 decoration-champagne/30">Platform</a></li>
            <li><a href="#" className="hover:text-champagne transition-colors italic underline underline-offset-8 decoration-champagne/30">Manifesto</a></li>
            <li><a href="#" className="hover:text-champagne transition-colors italic underline underline-offset-8 decoration-champagne/30">Archives</a></li>
            <li><a href="#" className="hover:text-champagne transition-colors italic underline underline-offset-8 decoration-champagne/30">Connect</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-mono uppercase tracking-[0.5em] text-[10px] mb-12 text-champagne font-bold">Vault Status</h4>
          <div className="bg-white/5 p-8 rounded-3xl border border-champagne/10 shadow-inner">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-2.5 h-2.5 bg-champagne rounded-full animate-pulse shadow-[0_0_15px_#C9A84C]" />
              <span className="font-mono text-[10px] tracking-[0.4em] uppercase font-bold text-champagne">Vault: Online</span>
            </div>
            <p className="font-mono text-[9px] opacity-20 leading-loose uppercase tracking-widest italic">
              All administrative nodes synced.<br />
              Precision core: Optimal.
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row items-center justify-between gap-12 text-[10px] font-mono font-bold uppercase tracking-[0.4em] opacity-10">
        <p>© 2026 Time & Pay Atelier // Private Edition.</p>
        <div className="flex gap-16">
          <a href="#">/Privacy</a>
          <a href="#">/Legal</a>
          <a href="#">/Secure</a>
        </div>
      </div>
    </footer>
  );
};

// --- MAIN APP ---

function App() {
  return (
    <main className="relative selection:bg-champagne selection:text-obsidian bg-ivory">
      <Navbar />
      <Hero />
      <Features />
      <Philosophy />
      <Protocol />
      <Pricing />
      <Footer />

      {/* Global Style Additions for specific animations */}
      <style>{`
        @keyframes scan {
          from { transform: translateX(-100%); }
          to { transform: translateX(500%); }
        }
        .animate-scan {
          animation: scan 4s cubic-bezier(0.65, 0, 0.35, 1) infinite;
        }
        .animate-spin-slow {
          animation: spin 50s linear infinite;
        }
        @keyframes waveform {
          to { stroke-dashoffset: 0; }
        }
        .animate-waveform {
          animation: waveform 3s cubic-bezier(0.5, 0, 0.5, 1) forwards infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </main>
  );
}

export default App;
