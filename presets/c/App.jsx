import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    Zap, Cpu, RotateCcw, ShieldCheck, ChevronRight, Activity, Terminal, Grid
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const MagneticButton = ({ children, className = '', ...props }) => (
    <button className={`btn-magnetic group flex items-center justify-center gap-2 px-10 py-5 rounded-full font-bold uppercase tracking-widest transition-all ${className}`} {...props}>
        <span>{children}</span>
    </button>
);

const Navbar = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 py-8 px-12 flex items-center justify-between border-b border-black/10 bg-paper/90 backdrop-blur-md">
        <div className="flex items-center gap-3"><div className="w-10 h-10 bg-black flex items-center justify-center"><Activity className="w-6 h-6 text-signal" /></div><span className="font-bold text-2xl uppercase text-black">TP.SIGNAL</span></div>
        <div className="hidden md:flex items-center gap-12 text-[11px] font-bold uppercase tracking-[0.2em] text-black">
            <a href="#features" className="hover:text-signal transition-colors underline decoration-transparent hover:decoration-signal underline-offset-8">Output</a>
            <a href="#philosophy" className="hover:text-signal transition-colors underline decoration-transparent hover:decoration-signal underline-offset-8">Logic</a>
            <button className="bg-signal text-white px-8 py-3 font-bold uppercase text-[11px] tracking-widest hover:bg-black transition-colors">Initialize</button>
        </div>
    </nav>
);

const Hero = () => (
    <section className="relative h-screen flex flex-col justify-end p-12 lg:p-24 bg-paper overflow-hidden">
        <div className="absolute inset-0 z-0 grayscale opacity-40 mix-blend-multiply"><img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2600" alt="Brutalist" className="w-full h-full object-cover" /></div>
        <div className="relative z-10 max-w-5xl">
            <h1 className="flex flex-col mb-12"><span className="text-black text-5xl md:text-8xl font-sans font-bold leading-[0.9] tracking-tighter uppercase">Direct the</span><span className="text-signal text-8xl md:text-[12rem] font-drama italic -mt-6">System.</span></h1>
            <div className="flex flex-col md:flex-row md:items-end gap-12">
                <p className="text-black/60 text-xl max-w-xl font-sans leading-relaxed border-l-4 border-black pl-8">Raw precision AI management. Heavy lifting handled by autonomous logic. 24/7 industrial-grade protocols.</p>
                <MagneticButton className="bg-black text-paper hover:bg-signal group">Access Terminal<ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></MagneticButton>
            </div>
        </div>
    </section>
);

const App = () => {
    const [shuffleItems, setShuffleItems] = useState([
        { id: 1, label: 'L_01 // COMPUTE', color: 'bg-black' },
        { id: 2, label: 'L_02 // ALLOCATE', color: 'bg-signal' },
        { id: 3, label: 'L_03 // EXECUTE', color: 'bg-offwhite' }
    ]);
    const [typeWriterText, setTypeWriterText] = useState('');
    const fullTypeWriter = "> INITIALIZING STAFF_PROTOCOL_V4\n> CALIBRATING PAYROLL_GRID\n> SYSTEM_DRIVEN MANAGEMENT ACTIVE\n> STATUS: OPTIMAL";

    useEffect(() => {
        const shuffle = setInterval(() => { setShuffleItems(prev => { const next = [...prev]; next.unshift(next.pop()); return next; }); }, 2000);
        let charIdx = 0;
        const type = setInterval(() => {
            if (charIdx < fullTypeWriter.length) { setTypeWriterText(prev => prev + fullTypeWriter[charIdx]); charIdx++; }
            else { setTimeout(() => { setTypeWriterText(''); charIdx = 0; }, 3000); }
        }, 40);
        return () => { clearInterval(shuffle); clearInterval(type); };
    }, []);

    return (
        <main className="relative selection:bg-signal selection:text-white bg-paper">
            <Navbar />
            <Hero />
            <section id="features" className="py-32 px-12 lg:px-24 bg-offwhite border-t border-black/10">
                <h2 className="text-black text-6xl md:text-8xl font-sans font-bold uppercase tracking-tighter mb-24">Raw Precision</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-black/10 border border-black/10">
                    <div className="bg-offwhite p-12 flex flex-col h-[550px] relative overflow-hidden grayscale">
                        <h3 className="text-3xl font-bold uppercase mb-4">Diagnostic Shuffler</h3>
                        <div className="relative flex-grow flex items-center justify-center font-mono text-[11px] tracking-widest uppercase">
                            {shuffleItems.map((item, idx) => (
                                <div key={item.id} className={`absolute w-full h-16 ${item.color} flex items-center justify-center transition-all duration-500 ${idx === 1 ? 'text-white' : 'text-black/20'}`} style={{ transform: `translateY(${(idx - 1) * 64}px)`, zIndex: idx === 1 ? 10 : 0 }}>{item.label}</div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-black p-12 flex flex-col h-[550px] text-signal font-mono text-[10px]">
                        <h3 className="text-3xl text-white font-bold uppercase mb-12">System Telemetry</h3>
                        <div className="bg-black/80 p-8 border border-white/5 flex-grow whitespace-pre-wrap">{typeWriterText}<span className="inline-block w-2 h-4 bg-signal ml-1 animate-pulse" /></div>
                    </div>
                    <div className="bg-offwhite p-12 flex flex-col h-[550px] relative overflow-hidden group">
                        <h3 className="text-3xl font-bold uppercase mb-12">Protocol Sequence</h3>
                        <div className="grid grid-cols-7 gap-px bg-black/10 mt-auto border border-black/10">
                            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (<div key={i} className="flex flex-col items-center bg-offwhite py-4 border-r border-black/5 last:border-r-0 font-bold"><span className="text-[9px] text-black/30 mb-2">{day}</span><div className={`w-8 h-8 flex items-center justify-center text-[10px] ${i === 3 ? 'bg-signal text-white' : 'text-black/40'}`}>{i + 1}</div></div>))}
                        </div>
                    </div>
                </div>
            </section>
            <footer className="bg-black text-paper pt-48 pb-12 px-12 lg:px-24">
                <div className="flex items-center gap-4 mb-16"><div className="w-12 h-12 bg-signal flex items-center justify-center"><Activity className="w-8 h-8 text-black" /></div><span className="font-bold text-4xl uppercase font-sans">TIME & PAY.SYS</span></div>
                <div className="border-t border-white/10 pt-12 flex justify-between text-[10px] font-mono font-bold uppercase tracking-[0.4em] opacity-10"><span>© 2026 TP.SIGNAL // ALL LOGIC RESERVED.</span><div className="flex gap-16"><span>/Privacy</span><span>/Legal</span><span>/Secure</span></div></div>
            </footer>
            <style>{`@keyframes scan { from { transform: translateX(-100%); } to { transform: translateX(500%); } } .animate-scan { animation: scan 2s steps(20) infinite; } @keyframes waveform { to { stroke-dashoffset: 0; } } .animate-waveform { animation: waveform 2s linear forwards infinite; } @keyframes pulse { 0%, 100% { opacity: 0.2; } 50% { opacity: 1; } } .animate-pulse { animation: pulse 1.5s steps(3) infinite; }`}</style>
        </main>
    );
};
export default App;
