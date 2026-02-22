import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    Zap, Cpu, RotateCcw, ShieldCheck, ChevronRight, Dna, Atom, Eye, Waves, Clock, Check
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const MagneticButton = ({ children, className = '', ...props }) => (
    <button className={`btn-magnetic group flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold uppercase tracking-wider transition-all ${className}`} {...props}>
        <span>{children}</span>
    </button>
);

const Navbar = () => (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl px-8 py-4 rounded-3xl border border-plasma/20 flex items-center justify-between bg-void/80 backdrop-blur-2xl shadow-[0_0_20px_rgba(123,97,255,0.2)]">
        <div className="flex items-center gap-3"><div className="w-10 h-10 bg-plasma rounded-xl flex items-center justify-center shadow-[0_0_15px_#7B61FF]"><Dna className="w-6 h-6 text-void" /></div><span className="font-bold text-2xl text-plasma uppercase italic">T+P.LAB</span></div>
        <div className="hidden md:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.4em] text-plasma/40">
            <a href="#features" className="hover:text-plasma transition-all">Nucleus</a>
            <a href="#protocol" className="hover:text-plasma transition-all">Sequence</a>
            <button className="bg-plasma/10 text-plasma px-8 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest border border-plasma/30 hover:bg-plasma hover:text-void transition-all">Sync Core</button>
        </div>
    </nav>
);

const Hero = () => (
    <section className="relative h-screen flex flex-col justify-end p-8 lg:p-24 bg-void overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-60"><img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=2600" alt="Bioluminescence" className="w-full h-full object-cover scale-110 saturate-[1.5]" /></div>
        <div className="hero-content relative z-10 max-w-5xl">
            <h1 className="flex flex-col mb-10"><span className="text-ghost text-5xl md:text-8xl font-sans font-bold leading-none">Staffing beyond</span><span className="text-plasma text-8xl md:text-[11rem] font-drama italic -mt-4 drop-shadow-[0_0_30px_#7B61FF]">Limits.</span></h1>
            <div className="flex flex-col md:flex-row md:items-center gap-12">
                <p className="text-ghost/40 text-lg md:text-xl max-w-xl border-l-2 border-plasma pl-10">AI-powered staff solutions engineered at the molecular level of performance.</p>
                <MagneticButton className="bg-plasma text-void w-fit shadow-[0_0_30px_#7B61FF]">Execute Sync</MagneticButton>
            </div>
        </div>
    </section>
);

const App = () => {
    const [shuffleItems, setShuffleItems] = useState([{ id: 1, label: 'G_01 // CORE_SYNAPSE', color: 'bg-void' }, { id: 2, label: 'G_02 // PAY_GENOME', color: 'bg-plasma' }, { id: 3, label: 'G_03 // FLOW_ENZYME', color: 'bg-graphite' }]);
    const [typeWriterText, setTypeWriterText] = useState('');
    const fullTypeWriter = ">> SEPARATING BIOLOGICAL OVERHEAD\n>> OPTIMIZING STAFF_GENOME_PATH\n>> SYSTEM_STATUS: VAPOR_OPTIMAL";

    useEffect(() => {
        const shuffle = setInterval(() => { setShuffleItems(prev => { const next = [...prev]; next.unshift(next.pop()); return next; }); }, 2500);
        let charIdx = 0;
        const type = setInterval(() => { if (charIdx < fullTypeWriter.length) { setTypeWriterText(prev => prev + fullTypeWriter[charIdx]); charIdx++; } else { setTimeout(() => { setTypeWriterText(''); charIdx = 0; }, 2000); } }, 40);
        return () => { clearInterval(shuffle); clearInterval(type); };
    }, []);

    return (
        <main className="relative selection:bg-plasma selection:text-void bg-ghost">
            <Navbar />
            <Hero />
            <section id="features" className="py-32 px-10 lg:px-24 bg-ghost border-y border-plasma/10 text-void">
                <h2 className="text-6xl md:text-8xl font-sans font-bold uppercase tracking-tighter italic mb-24">Vapor Clinic</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-ghost">
                    <div className="bg-void p-12 rounded-[3rem] border border-plasma/10 h-[600px] flex flex-col relative overflow-hidden">
                        <h3 className="text-3xl font-bold tracking-tighter mb-4">Shuffler Engine</h3>
                        <div className="relative flex-grow flex items-center justify-center font-mono text-[11px] uppercase tracking-widest">
                            {shuffleItems.map((item, idx) => (
                                <div key={item.id} className={`absolute w-full h-16 ${item.color} rounded-2xl flex items-center justify-center border border-plasma/10 transition-all duration-700 ${idx === 1 ? 'text-plasma shadow-[0_0_20px_rgba(123,97,255,0.3)]' : 'text-plasma/20 scale-90'}`} style={{ transform: `translateY(${(idx - 1) * 80}px)`, zIndex: idx === 1 ? 10 : 0 }}>{item.label}</div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-graphite p-12 rounded-[3rem] border border-plasma/10 h-[600px] font-mono text-plasma">
                        <h3 className="text-3xl text-ghost font-bold tracking-tighter mb-12">Neural Feedback</h3>
                        <div className="bg-void/60 p-10 rounded-[2rem] h-64 border border-plasma/20 shadow-inner whitespace-pre-wrap leading-[2.5]">{typeWriterText}<span className="inline-block w-2 h-4 bg-plasma ml-2 animate-pulse" /></div>
                    </div>
                    <div className="bg-plasma p-12 rounded-[3rem] h-[600px] text-void relative overflow-hidden group">
                        <h3 className="text-3xl font-bold tracking-tighter mb-4 italic">Sequence Core</h3>
                        <div className="grid grid-cols-7 gap-2 mt-auto">
                            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (<div key={i} className="flex flex-col items-center gap-4"><span className="text-[10px] text-void/30 uppercase font-bold">{day}</span><div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-[11px] font-bold border-2 ${i === 3 ? 'bg-void text-plasma border-void shadow-xl' : 'bg-void/5 text-void/20 border-transparent'}`}>{i + 1}</div></div>))}
                        </div>
                    </div>
                </div>
            </section>
            <footer className="bg-void text-ghost pt-48 pb-16 px-10 lg:px-24 rounded-t-[6rem] border-t border-plasma/30 relative">
                <div className="flex items-center gap-4 mb-12"><Dna className="w-12 h-12 text-plasma drop-shadow-[0_0_15px_#7B61FF]" /><span className="font-bold text-4xl italic uppercase">TIME & PAY LABS</span></div>
                <div className="border-t border-white/5 pt-16 flex justify-between font-mono text-[9px] font-bold uppercase tracking-[0.5em] opacity-20"><span>© 2026 T+P.LAB // CORTEX EDITION.</span><div className="flex gap-20"><span>Pathogen_Policy</span><span>Ethics_Grid</span></div></div>
            </footer>
            <style>{`@keyframes scan { from { transform: translateX(-100%); } to { transform: translateX(600%); } } .animate-scan { animation: scan 5s cubic-bezier(0.8, 0, 0.2, 1) infinite; } @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } } .animate-spin-slow { animation: spin 80s linear infinite; } @keyframes waveform { to { stroke-dashoffset: 0; } } .animate-waveform { animation: waveform 6s cubic-bezier(0.4, 0, 0.2, 1) forwards infinite; }`}</style>
        </main>
    );
};
export default App;
