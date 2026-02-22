import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ScanFace,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Smartphone,
  Fingerprint,
  Zap,
  Lock,
  Workflow,
  BarChart3,
  Scale
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// --- ATOM COMPONENTS ---

const SectionTag = ({ children }) => (
  <div className="inline-flex items-center gap-2 bg-champagne/10 text-champagne px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] mb-8 border border-champagne/10">
    {children}
  </div>
);

const PhoneDiagram = ({ active = false, status = "HOLD" }) => (
  <div className="relative w-72 h-[550px] bg-obsidian rounded-[3rem] border-[8px] border-slate-800 shadow-2xl p-6 overflow-hidden transform-gpu transition-all duration-700 hover:rotate-2">
    {/* Screen Content */}
    <div className="relative h-full w-full bg-ivory rounded-[2rem] p-8 flex flex-col items-center justify-between text-obsidian overflow-hidden">
      <div className="w-full flex justify-between items-center opacity-40">
        <div className="w-3 h-3 bg-obsidian/20 rounded-full" />
        <div className="text-[10px] font-mono font-bold">L_SYNC</div>
      </div>

      <div className="flex-grow flex flex-col items-center justify-center gap-12 w-full">
        <div className="relative">
          <div className={`w-36 h-36 border-2 border-champagne rounded-full flex items-center justify-center transition-all duration-1000 ${active ? 'scale-110 shadow-[0_0_30px_rgba(201,168,76,0.3)]' : 'opacity-20 scale-90'}`}>
            <ScanFace className={`w-16 h-16 text-champagne transition-all delay-300 ${active ? 'opacity-100' : 'opacity-20'}`} />
            {active && (
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-champagne -translate-y-1/2 animate-scan-slow shadow-[0_0_10px_#C9A84C]" />
            )}
          </div>
        </div>

        <div className="space-y-4 w-full text-center">
          <div className={`text-xl font-bold tracking-tighter uppercase transition-opacity duration-500 ${active ? 'opacity-100' : 'opacity-10'}`}>
            {status}
          </div>
          <div className="h-1 bg-obsidian/5 rounded-full w-full overflow-hidden">
            <div className={`h-full bg-champagne transition-all duration-[2000ms] ${active ? 'w-full' : 'w-0'}`} />
          </div>
          <div className="text-[10px] font-mono font-bold tracking-widest opacity-30">
            SECURE_GATEWAY_V1
          </div>
        </div>
      </div>

      <div className="w-12 h-1.5 bg-obsidian/10 rounded-full mb-2" />
    </div>
  </div>
);

// --- SECTIONS ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-obsidian/95 backdrop-blur-xl py-4 border-b border-champagne/5' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-12 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer text-ivory">
          <div className="w-8 h-8 border border-champagne flex items-center justify-center rotate-45 group-hover:bg-champagne group-hover:text-obsidian transition-all">
            <Smartphone className="w-4 h-4 -rotate-45" />
          </div>
          <span className="font-bold text-lg tracking-widest uppercase transition-colors group-hover:text-champagne">TP.MOBILE</span>
        </div>

        <div className="hidden md:flex items-center gap-16 text-[10px] font-bold uppercase tracking-[0.3em] text-ivory/40">
          <a href="#identity" className="hover:text-champagne transition-colors">Identity</a>
          <a href="#automation" className="hover:text-champagne transition-colors">Logic</a>
          <a href="#compliance" className="hover:text-champagne transition-colors">Vault</a>
        </div>

        <button className="bg-champagne text-obsidian px-8 py-2.5 rounded-full font-bold uppercase text-[10px] tracking-widest hover:bg-ivory transition-all shadow-[0_10px_20px_rgba(201,168,76,0.1)]">
          Authorize
        </button>
      </div>
    </nav>
  );
};

const Hero = () => {
  const heroRef = useRef(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.hero-col', { y: 60, opacity: 0, duration: 1.5, stagger: 0.1, ease: 'power4.out' });
      gsap.from('.hero-phone', { scale: 0.9, opacity: 0, x: 40, duration: 2, delay: 0.3, ease: 'expo.out' });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen pt-40 pb-24 px-12 lg:px-24 bg-obsidian flex flex-col items-center lg:flex-row lg:justify-between gap-12 overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-champagne/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="hero-col relative z-20 max-w-3xl">
        <SectionTag>Clinical Precision // Luxe Aesthetic</SectionTag>
        <h1 className="flex flex-col mb-12">
          <span className="text-ivory text-5xl md:text-8xl font-sans font-bold leading-[0.9] tracking-tighter uppercase whitespace-nowrap">Staff Pay.</span>
          <span className="text-champagne text-7xl md:text-[8rem] font-drama italic -mt-4 leading-tight">
            Automated Solutions <br />
            <span className="text-ivory/20 font-sans not-italic font-bold tracking-tight">AI Managed.</span>
          </span>
        </h1>
        <div className="flex flex-col md:flex-row md:items-start gap-16">
          <p className="text-ivory/40 text-lg max-w-sm font-sans leading-relaxed border-l border-champagne/30 pl-8">
            The next generation of administrative intelligence. We've merged high-fidelity biometric security with automated payroll and tax logic into one simple, editorial interface.
          </p>
          <div className="flex flex-col gap-6">
            <button className="group relative bg-champagne text-obsidian px-12 py-5 rounded-full font-black uppercase text-xs tracking-widest hover:scale-105 active:scale-95 transition-all w-fit">
              Secure Access
              <div className="absolute inset-0 rounded-full animate-pulse-champagne -z-10" />
            </button>
            <div className="flex items-center gap-4 text-[10px] font-bold text-ivory/20 uppercase tracking-widest leading-none">
              <Zap className="w-4 h-4 text-champagne" />
              Processing 0.4s avg.
            </div>
          </div>
        </div>
      </div>

      <div className="hero-phone relative z-10 flex items-center justify-center p-12">
        <div className="relative group">
          <PhoneDiagram active={true} status="IDENTITY_LOCKED" />
          <div className="absolute -top-12 -right-12 bg-ivory/5 backdrop-blur-md p-6 rounded-3xl border border-champagne/10 shadow-2xl invisible lg:visible group-hover:-translate-y-2 transition-transform duration-500">
            <div className="text-[10px] font-mono text-champagne mb-2 uppercase font-bold tracking-widest">Biometric Check</div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-champagne/20 rounded-xl flex items-center justify-center">
                <ScanFace className="w-5 h-5 text-champagne" />
              </div>
              <div>
                <div className="text-ivory text-sm font-bold uppercase tracking-tighter">Authorized</div>
                <div className="text-ivory/30 text-[9px] font-mono">ID_982_SEC_L0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const EfficiencyGrid = () => {
  const sectionRef = useRef(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.eff-card', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        y: 40, opacity: 0, duration: 1, stagger: 0.1, ease: 'power3.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="identity" ref={sectionRef} className="py-48 px-12 lg:px-24 bg-ivory border-y border-obsidian/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-24 opacity-5 invisible lg:visible">
        <Smartphone className="w-96 h-96 text-obsidian" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-32">
          <SectionTag>The Mobile Advantage</SectionTag>
          <h2 className="text-obsidian text-6xl md:text-8xl font-sans font-bold uppercase tracking-tighter max-w-3xl leading-[0.85]">
            Redefining <span className="text-champagne italic font-drama lowercase">the</span> Workflow.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              label: 'SYS_01',
              title: 'Face Scan ID',
              desc: 'Identify staff with 99.9% accuracy on any mobile device. 0.5s match time.',
              icon: <ScanFace className="w-8 h-8" />
            },
            {
              label: 'SYS_02',
              title: 'Auto Payroll',
              desc: 'Verified scans trigger instant payroll calculations. No manual data entry.',
              icon: <Workflow className="w-8 h-8" />
            },
            {
              label: 'SYS_03',
              title: 'Tax Compliance',
              desc: 'Every payment is automatically adjusted for localized tax laws. AI Managed.',
              icon: <Scale className="w-8 h-8" />
            }
          ].map((item, i) => (
            <div key={i} className="eff-card bg-ivory p-12 rounded-[3.5rem] border border-obsidian/5 hover:border-champagne transition-all duration-500 group shadow-lg shadow-obsidian/5">
              <div className="w-16 h-16 bg-obsidian rounded-2xl flex items-center justify-center text-champagne mb-12 shadow-2xl group-hover:-translate-y-2 transition-transform">
                {item.icon}
              </div>
              <div className="text-[10px] font-mono font-bold text-champagne mb-4 uppercase tracking-[0.4em]">{item.label}</div>
              <h3 className="text-3xl font-bold uppercase tracking-tighter text-obsidian mb-6">{item.title}</h3>
              <p className="text-obsidian/40 text-sm font-medium leading-relaxed uppercase tracking-wider">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const AutomationDetail = () => {
  return (
    <section id="automation" className="py-48 px-12 lg:px-24 bg-obsidian overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
        <div className="relative order-2 lg:order-1 flex justify-center">
          <div className="relative">
            <PhoneDiagram active={true} status="AUTO_SYNC" />
            <div className="absolute inset-0 bg-champagne/10 blur-[100px] -z-10 rounded-full animate-pulse" />
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <SectionTag>Automated Engine</SectionTag>
          <h2 className="text-ivory text-6xl md:text-8xl font-sans font-bold uppercase tracking-tighter mb-12 leading-[0.85]">
            Accuracy <br />is <span className="text-champagne font-drama italic lowercase">the</span> Standard.
          </h2>
          <p className="text-ivory/40 text-xl font-sans max-w-xl font-medium leading-relaxed mb-16 border-l-2 border-champagne pl-10">
            Our AI handles tax compliance and payroll logic with molecular precision. We've eliminated human latency from the equation.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-4xl font-sans font-bold text-champagne tracking-tighter mb-2 italic uppercase font-drama">Zero</div>
              <div className="text-[10px] font-bold text-ivory/30 uppercase tracking-[0.2em]">Manual Overhang</div>
            </div>
            <div>
              <div className="text-4xl font-sans font-bold text-champagne tracking-tighter mb-2 italic uppercase font-drama">Unlimited</div>
              <div className="text-[10px] font-bold text-ivory/30 uppercase tracking-[0.2em]">Scale Capability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Pricing = () => {
  const tiers = [
    {
      label: 'TIER_01 // CORE PULSE',
      title: 'Core Pulse',
      staff: 'Up to 30 Staff',
      price: 'R1,900',
      features: [
        "Primary AI Face ID",
        "Automated Payroll Engine",
        "Localized Tax Compliance",
        "Mobile Signature Gateway"
      ]
    },
    {
      label: 'TIER_02 // STRATEGIC SCALE',
      title: 'Strategic Scale',
      staff: 'Up to 50 Staff',
      price: 'R2,500',
      features: [
        "Advanced Biometric Recognition",
        "Automated Compliance Vault",
        "Real-time Workforce Alerts",
        "Priority Administrative Logic"
      ],
      popular: true
    },
    {
      label: 'TIER_03 // APEX ENTERPRISE',
      title: 'Apex Enterprise',
      staff: 'Up to 100 Staff',
      price: 'R4,500',
      features: [
        "Full AI Managed Infrastructure",
        "High-Fidelity Data Vaulting",
        "Cross-Zone Load Balancing",
        "24/7 Strategic Override"
      ]
    }
  ];

  return (
    <section id="compliance" className="py-48 px-12 lg:px-24 bg-ivory">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <SectionTag>Pricing Architecture</SectionTag>
        <h2 className="text-obsidian text-6xl md:text-8xl font-sans font-bold uppercase tracking-tighter mb-24 leading-none italic font-drama">Scale Precision.</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {tiers.map((tier, i) => (
            <div key={i} className={`relative p-12 rounded-[3.5rem] flex flex-col justify-between transition-all duration-700 group border ${tier.popular ? 'bg-obsidian text-ivory border-champagne' : 'bg-white text-obsidian border-obsidian/5 hover:border-champagne'}`}>
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-champagne text-obsidian px-6 py-1 rounded-full text-[8px] font-black uppercase tracking-widest whitespace-nowrap">Highly Recommended</div>
              )}

              <div>
                <div className="text-[9px] font-mono text-champagne mb-8 uppercase font-bold tracking-[0.4em]">{tier.label}</div>
                <h3 className="text-4xl font-bold uppercase tracking-tighter mb-2">{tier.title}</h3>
                <div className="text-sm font-medium opacity-40 uppercase tracking-widest mb-12">{tier.staff}</div>

                <div className="space-y-4 mb-16">
                  {tier.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-4 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-champagne shrink-0" />
                      <span className={tier.popular ? 'text-ivory/60' : 'text-obsidian/40'}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-5xl font-sans font-black tracking-tighter leading-none">{tier.price}</span>
                  <span className="text-[10px] font-bold opacity-30 uppercase tracking-widest">/ Month</span>
                </div>
                <button className={`w-full py-5 rounded-full font-black uppercase text-[10px] tracking-[0.2em] transition-all ${tier.popular ? 'bg-champagne text-obsidian hover:bg-ivory' : 'bg-obsidian text-ivory hover:bg-champagne hover:text-obsidian'}`}>
                  Authorize Tier
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-obsidian text-ivory pt-40 pb-12 px-12 lg:px-24 rounded-t-[6rem] border-t-8 border-champagne">
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-32 mb-40">
      <div className="lg:col-span-2">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 border border-champagne flex items-center justify-center rotate-45"><Smartphone className="w-6 h-6 text-champagne -rotate-45" /></div>
          <span className="font-bold text-4xl italic tracking-tighter uppercase text-champagne">TIME & PAY.MOBILE</span>
        </div>
        <p className="text-ivory/20 max-w-sm text-3xl font-drama italic leading-tight tracking-tight">Eradicating administrative latency through high-fidelity biometric logic and automated machine precision.</p>
      </div>
      <div>
        <h4 className="font-mono uppercase tracking-[0.5em] text-[10px] mb-12 text-champagne font-bold">The Protocol</h4>
        <ul className="space-y-8 text-[11px] text-ivory/30 font-bold uppercase tracking-[0.3em]">
          <li><a href="#" className="hover:text-champagne transition-all decoration-champagne underline underline-offset-8 decoration-transparent hover:decoration-champagne">Identity</a></li>
          <li><a href="#" className="hover:text-champagne transition-all decoration-champagne underline underline-offset-8 decoration-transparent hover:decoration-champagne">Automation</a></li>
          <li><a href="#" className="hover:text-champagne transition-all decoration-champagne underline underline-offset-8 decoration-transparent hover:decoration-champagne">Compliance</a></li>
          <li><a href="#" className="hover:text-champagne transition-all decoration-champagne underline underline-offset-8 decoration-transparent hover:decoration-champagne">Access</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-mono uppercase tracking-[0.5em] text-[10px] mb-12 text-champagne font-bold">Vault Integrity</h4>
        <div className="bg-white/5 p-8 rounded-[3rem] border border-champagne/10">
          <div className="flex items-center gap-4 mb-4 text-champagne">
            <div className="w-2 h-2 bg-champagne rounded-full animate-pulse shadow-[0_0_15px_#C9A84C]" />
            <span className="font-mono text-[9px] font-bold uppercase tracking-widest">Protocol Sync: 100%</span>
          </div>
          <p className="font-mono text-[8px] opacity-10 leading-loose uppercase tracking-[0.3em]">Neural engine engaged.<br />Biometric lock: Active.</p>
        </div>
      </div>
    </div>
    <div className="flex flex-col md:flex-row justify-between pt-16 border-t border-white/5 font-mono text-[9px] font-bold uppercase tracking-[0.5em] opacity-10">
      <span>© 2026 TP.MOBILE // PRESTIGE EDITION.</span>
      <div className="flex gap-20"><span>/Policy</span><span>/Security</span><span>/Vault</span></div>
    </div>
  </footer>
);

// --- MAIN APP ---

function App() {
  return (
    <main className="relative selection:bg-champagne selection:text-obsidian bg-obsidian">
      <Navbar />
      <Hero />
      <EfficiencyGrid />
      <AutomationDetail />
      <Pricing />
      <Footer />

      <style>{`
        @keyframes scan-slow { 0%, 100% { top: 10%; opacity: 0; } 50% { top: 90%; opacity: 1; } }
        .animate-scan-slow { animation: scan-slow 3s ease-in-out infinite; }
        @keyframes pulse-champagne { 0% { box-shadow: 0 0 0 0 rgba(201, 168, 76, 0.4); } 70% { box-shadow: 0 0 0 20px rgba(201, 168, 76, 0); } 100% { box-shadow: 0 0 0 0 rgba(201, 168, 76, 0); } }
        .animate-pulse-champagne { animation: pulse-champagne 2s infinite; }
      `}</style>
    </main>
  );
}

export default App;
