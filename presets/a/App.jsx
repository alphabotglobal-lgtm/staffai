import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    Zap, Cpu, RotateCcw, ShieldCheck, ChevronRight, Check, X, Menu, Clock, ExternalLink, ChevronDown
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const MagneticButton = ({ children, className = '', ...props }) => (
    <button className={`btn-magnetic group flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold uppercase tracking-wider transition-all ${className}`} {...props}>
        <span>{children}</span>
    </button>
);

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <nav className={`fixed top-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[90%] max-w-5xl px-6 py-3 rounded-full border border-charcoal/10 flex items-center justify-between ${isScrolled ? 'bg-cream/70 backdrop-blur-xl border-charcoal/20' : 'bg-transparent'}`}>
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-moss rounded-lg flex items-center justify-center"><Clock className="w-5 h-5 text-cream" /></div>
                <span className="font-bold text-xl tracking-tighter text-moss">Time & Pay</span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-charcoal/60">
                <a href="#features" className="hover:text-moss transition-colors">Features</a>
                <a href="#philosophy" className="hover:text-moss transition-colors">Philosophy</a>
                <a href="#protocol" className="hover:text-moss transition-colors">Protocol</a>
            </div>
            <button className="bg-moss text-cream px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-clay transition-colors">Get Started</button>
        </nav>
    );
};

const Hero = () => {
    const heroRef = useRef(null);
    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.hero-content > *', { y: 40, opacity: 0, duration: 1.2, stagger: 0.1, ease: 'power3.out' });
        }, heroRef);
        return () => ctx.revert();
    }, []);
    return (
        <section ref={heroRef} className="relative h-screen flex flex-col justify-end p-8 lg:p-24 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2626" alt="Organic" className="w-full h-full object-cover scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent" />
            </div>
            <div className="hero-content relative z-10 max-w-4xl">
                <h1 className="flex flex-col mb-8">
                    <span className="text-cream text-4xl md:text-6xl font-sans font-bold leading-tight">Efficiency is the</span>
                    <span className="text-clay text-7xl md:text-9xl font-drama italic -mt-2">Revolution.</span>
                </h1>
                <p className="text-cream/80 text-lg md:text-xl max-w-xl mb-12 font-sans">AI-powered staff time and pay solutions designed for precision and operational excellence.</p>
                <MagneticButton className="bg-clay text-cream w-fit">Get Started</MagneticButton>
            </div>
        </section>
    );
};

const Features = () => {
    const [shuffleItems, setShuffleItems] = useState([
        { id: 1, label: 'Optimization Engine', color: 'bg-moss' },
        { id: 2, label: 'Live Calibration', color: 'bg-clay' },
        { id: 3, label: 'Structural Analytics', color: 'bg-charcoal' }
    ]);
    const [typeWriterText, setTypeWriterText] = useState('');
    const fullTypeWriter = "AI management is now active. Heavy lifting in progress. 24/7 Support standing by.";

    useEffect(() => {
        const shuffle = setInterval(() => { setShuffleItems(prev => { const next = [...prev]; next.push(next.shift()); return next; }); }, 2500);
        let charIdx = 0;
        const type = setInterval(() => {
            if (charIdx < fullTypeWriter.length) { setTypeWriterText(prev => prev + fullTypeWriter[charIdx]); charIdx++; }
            else { setTimeout(() => { setTypeWriterText(''); charIdx = 0; }, 2000); }
        }, 50);
        return () => { clearInterval(shuffle); clearInterval(type); };
    }, []);

    return (
        <section id="features" className="py-24 px-8 lg:px-24 bg-cream">
            <div className="mb-24"><h2 className="text-charcoal text-5xl font-sans font-bold flex items-center gap-4">Capabilities <span className="text-clay text-xl font-mono uppercase tracking-[0.5em] mt-2 border-l border-charcoal/20 pl-4">Functional Artifacts</span></h2></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="bg-white p-12 rounded-premium shadow-sm border border-charcoal/5 flex flex-col h-[500px] relative overflow-hidden">
                    <div className="mb-auto font-bold text-2xl">Diagnostic Shuffler</div>
                    <div className="relative h-64 overflow-hidden flex items-center justify-center">
                        {shuffleItems.map((item, idx) => (
                            <div key={item.id} className={`absolute w-48 h-12 ${item.color} rounded-lg flex items-center justify-center text-cream text-[10px] font-mono transition-all duration-700`} style={{ transform: `translateY(${(idx - 1) * 60}px) scale(${idx === 1 ? 1 : 0.85})`, opacity: idx === 1 ? 1 : 0.3 }}>{item.label}</div>
                        ))}
                    </div>
                </div>
                <div className="bg-charcoal p-12 rounded-premium shadow-sm flex flex-col h-[500px] text-cream">
                    <div className="mb-auto text-2xl font-bold">Telemetry Feed</div>
                    <div className="bg-black/40 p-6 rounded-xl flex-grow font-mono text-[10px] text-clay/80">{typeWriterText}<span className="inline-block w-1.5 h-3 bg-clay ml-1 animate-pulse" /></div>
                </div>
                <div className="bg-moss p-12 rounded-premium shadow-sm flex flex-col h-[500px] text-cream relative">
                    <div className="mb-auto text-2xl font-bold">Protocol Scheduler</div>
                    <div className="grid grid-cols-7 gap-1 mt-auto">{['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (<div key={i} className="flex flex-col items-center gap-2"><span className="text-[10px] font-mono text-cream/30">{day}</span><div className={`w-8 h-8 rounded-md flex items-center justify-center text-[10px] ${i === 3 ? 'bg-clay text-cream' : 'bg-cream/10'}`}>{i + 1}</div></div>))}</div>
                </div>
            </div>
        </section>
    );
};

const ProtocolStep = ({ number, title, desc, children }) => (
    <div className="protocol-card min-h-screen sticky top-0 flex items-center justify-center bg-cream border-t border-charcoal/10 px-8 py-24 overflow-hidden">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div><span className="text-moss font-mono text-xl mb-8 block">{number}</span><h3 className="text-charcoal text-5xl md:text-7xl font-bold mb-8">{title}</h3><p className="text-charcoal/60 text-xl">{desc}</p></div>
            <div className="flex items-center justify-center p-12 bg-charcoal/5 rounded-premium aspect-square">{children}</div>
        </div>
    </div>
);

const App = () => {
    const containerRef = useRef(null);
    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.utils.toArray('.protocol-card').forEach((card, i) => {
                if (i !== 2) ScrollTrigger.create({ trigger: card, start: 'top top', pin: true, pinSpacing: false, scrub: true, onUpdate: (self) => gsap.to(card, { scale: 0.95 - (self.progress * 0.1), opacity: 1 - self.progress, filter: `blur(${self.progress * 20}px)`, duration: 0.1 }) });
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);
    return (
        <main className="relative selection:bg-clay selection:text-cream bg-cream">
            <Navbar />
            <Hero />
            <Features />
            <section ref={containerRef} className="bg-cream">
                <ProtocolStep number="01" title="Structural Analysis" desc="Indexing organizational nodes to identify administrative leak points."><div className="w-64 h-64 border border-moss rounded-full flex items-center justify-center animate-spin-slow"><RotateCcw className="w-16 h-16 text-moss" /></div></ProtocolStep>
                <ProtocolStep number="02" title="Logic Sync" desc="Molecular integration with legacy HR stacks for frictionless command flow."><div className="w-64 h-2 bg-charcoal/10 relative overflow-hidden"><div className="absolute top-0 left-0 h-full w-24 bg-clay animate-scan" /></div></ProtocolStep>
                <ProtocolStep number="03" title="Apex Command" desc="24/7 autonomous monitoring with automatic error resolution protocols."><svg viewBox="0 0 200 100" className="w-full text-moss"><path className="animate-waveform" d="M 10,50 L 40,50 L 50,20 L 60,80 L 70,50 L 100,50 L 110,10 L 130,90 L 150,50 L 190,50" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="400" strokeDashoffset="400" /></svg></ProtocolStep>
            </section>
            <footer className="bg-charcoal text-cream pt-32 pb-12 px-8 lg:px-24 rounded-t-[4rem]">
                <div className="flex justify-between items-center mb-16"><div className="flex items-center gap-2 font-bold text-2xl italic"><Clock className="w-8 h-8 text-clay" />Time & Pay</div><div className="flex gap-8 text-sm opacity-50 uppercase tracking-widest font-bold"><span>Platform</span><span>Manifesto</span><span>Connect</span></div></div>
                <div className="border-t border-white/10 pt-12 text-[10px] text-cream/20 uppercase tracking-[0.2em] flex justify-between"><span>© 2026 Time & Pay Protocol.</span><div className="flex gap-12"><span>Privacy</span><span>Legal</span><span>Security</span></div></div>
            </footer>
            <style>{`@keyframes scan { from { transform: translateX(-100%); } to { transform: translateX(500%); } } .animate-scan { animation: scan 3s cubic-bezier(0.4, 0, 0.2, 1) infinite; } .animate-spin-slow { animation: spin 30s linear infinite; } @keyframes waveform { to { stroke-dashoffset: 0; } } .animate-waveform { animation: waveform 4s ease-in-out forwards infinite; } @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
        </main>
    );
};
export default App;
