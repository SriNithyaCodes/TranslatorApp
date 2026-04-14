import React, { useState, useEffect, useRef } from 'react';
import { 
  Languages, 
  Mic, 
  Camera, 
  Copy, 
  Volume2, 
  History, 
  Star, 
  ArrowLeftRight, 
  Search,
  Trash2,
  X,
  Check,
  Moon,
  Sun,
  ChevronRight,
  Globe,
  Zap,
  Shield,
  MessageSquare
} from 'lucide-react';
import Tesseract from 'tesseract.js';

const AnimatedBot = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      // Normalize position to -1 to +1 range
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  // Limit eye movement distance dynamically
  const eyeStyle = {
    transform: `translate(${mousePos.x * 12}px, ${mousePos.y * 8}px)`
  };

  return (
    <div className="relative flex flex-col items-center justify-center animate-float float-heavy z-20 mt-10 mb-8 cursor-default">
      
      {/* The Sign that the robot presents! Restored to "Next Gen" */}
      <div className="mb-4 relative animate-bounce" style={{ animationDuration: '3s' }}>
        <div className="inline-flex items-center gap-2 px-6 py-2 bg-primary/10 rounded-full text-primary font-black text-sm border border-primary/20 backdrop-blur-xl shadow-lg">
          <Zap className="w-4 h-4 fill-current" />
          <span>Next Generation AI Translation</span>
        </div>
      </div>

      {/* Holographic Glowing Eye Beams */}
      <div 
        className="absolute left-1/2 w-[400px] h-[600px] origin-top pointer-events-none transition-all duration-75 ease-out z-20"
        style={{ 
          top: `${50 + mousePos.y * 8}px`,
          background: 'linear-gradient(to bottom, rgba(34, 211, 238, 0.5) 0%, rgba(34, 211, 238, 0.05) 50%, transparent 100%)',
          clipPath: 'polygon(48% 0, 52% 0, 100% 100%, 0 100%)',
          opacity: mousePos.y > -0.1 ? Math.min((mousePos.y + 0.1) * 1.5, 1) : 0,
          transform: `translateX(calc(-50% - 20px + ${mousePos.x * 12}px)) rotate(${mousePos.x * 40}deg)`,
          mixBlendMode: 'screen',
          filter: 'blur(8px)'
        }}
      />
      <div 
        className="absolute left-1/2 w-[400px] h-[600px] origin-top pointer-events-none transition-all duration-75 ease-out z-20"
        style={{ 
          top: `${50 + mousePos.y * 8}px`,
          background: 'linear-gradient(to bottom, rgba(34, 211, 238, 0.5) 0%, rgba(34, 211, 238, 0.05) 50%, transparent 100%)',
          clipPath: 'polygon(48% 0, 52% 0, 100% 100%, 0 100%)',
          opacity: mousePos.y > -0.1 ? Math.min((mousePos.y + 0.1) * 1.5, 1) : 0,
          transform: `translateX(calc(-50% + 20px + ${mousePos.x * 12}px)) rotate(${mousePos.x * 40}deg)`,
          mixBlendMode: 'screen',
          filter: 'blur(8px)'
        }}
      />

      {/* Robot Character */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Floating Antenna Glow */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex flex-col items-center z-0">
          <div className="w-4 h-4 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_20px_rgba(34,211,238,1)] border-2 border-white/50" />
          <div className="w-1 h-5 bg-gradient-to-b from-cyan-400 to-slate-700 rounded-full mt-1" />
        </div>

        {/* Robot Head */}
        <div className="w-40 h-28 bg-gradient-to-br from-slate-600 via-slate-800 to-slate-900 rounded-[2.5rem] p-2 shadow-[0_30px_50px_rgba(0,0,0,0.5),inset_0_5px_10px_rgba(255,255,255,0.2)] relative flex items-center justify-center z-10">
          
          {/* Internal Screenglass */}
          <div className="w-[85%] h-[80%] bg-slate-950 rounded-[1.5rem] border-4 border-black/50 shadow-[inset_0_0_30px_rgba(34,211,238,0.15)] relative overflow-hidden flex justify-center items-center">
            
            {/* Tracking Eyes wrapper */}
            <div className="flex items-center justify-center gap-5 absolute transition-transform duration-75 ease-out z-10" style={eyeStyle}>
              <div className="w-5 h-8 bg-white rounded-full shadow-[0_0_20px_#22d3ee] animate-blink" />
              <div className="w-5 h-8 bg-white rounded-full shadow-[0_0_20px_#22d3ee] animate-blink" />
            </div>

            {/* Reflection Overlay on top of eyes */}
            <div className="absolute top-0 left-0 w-full h-[45%] bg-gradient-to-b from-white/10 to-transparent rounded-t-[1.5rem] z-20 pointer-events-none" />
            
            {/* Scanline */}
            <div className="absolute inset-x-0 h-[5px] bg-cyan-400/20 shadow-[0_0_15px_#22d3ee] animate-scan z-30 pointer-events-none" />
          </div>

          {/* Earpieces */}
          <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-4 h-12 bg-slate-700 rounded-l-xl border-y-2 border-l-2 border-slate-500 shadow-lg" />
          <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-4 h-12 bg-slate-700 rounded-r-xl border-y-2 border-r-2 border-slate-500 shadow-lg" />
        </div>

        {/* Robot Body */}
        <div className="flex flex-col items-center relative z-0 -mt-3">
          <div className="w-14 h-8 bg-gradient-to-b from-slate-900 to-slate-800 rounded-b-xl border-x-2 border-b-2 border-slate-700" />
          <div className="w-28 h-20 bg-gradient-to-br from-slate-700 to-slate-900 rounded-t-[2rem] rounded-b-[2rem] shadow-[-10px_0_20px_rgba(0,0,0,0.4)] mt-1 border border-white/10 relative overflow-hidden">
             <div className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-cyan-500/30 flex items-center justify-center bg-slate-900/50 shadow-inner">
               <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_15px_#22d3ee]" />
             </div>
          </div>
          {/* Hover thruster */}
          <div className="w-16 h-6 bg-gradient-to-b from-slate-900 to-black rounded-b-full border-b-2 border-cyan-400/50 mt-1 relative z-10">
             <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-cyan-400 blur-xl animate-pulse-glow opacity-60" style={{ animationDuration: '1.5s' }} />
             <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white blur-md animate-pulse opacity-80" />
          </div>
        </div>

        {/* Arms stretching up to the badge */}
        <div className="absolute top-[80px] -left-6 w-8 h-20 border-l-8 border-t-8 border-slate-700 rounded-tl-[2rem] origin-bottom-right rotate-[15deg] drop-shadow-2xl z-0" />
        <div className="absolute top-[80px] -right-6 w-8 h-20 border-r-8 border-t-8 border-slate-700 rounded-tr-[2rem] origin-bottom-left -rotate-[15deg] drop-shadow-2xl z-0" />
      </div>
    </div>
  );
};

const LANGUAGES = [
  { code: 'auto', name: 'Auto Detect', bcp47: 'en-US' },
  { code: 'en', name: 'English', bcp47: 'en-US' },
  { code: 'es', name: 'Spanish', bcp47: 'es-ES' },
  { code: 'fr', name: 'French', bcp47: 'fr-FR' },
  { code: 'de', name: 'German', bcp47: 'de-DE' },
  { code: 'it', name: 'Italian', bcp47: 'it-IT' },
  { code: 'pt', name: 'Portuguese', bcp47: 'pt-PT' },
  { code: 'hi', name: 'Hindi', bcp47: 'hi-IN' },
  { code: 'zh-CN', name: 'Chinese', bcp47: 'zh-CN' },
  { code: 'ja', name: 'Japanese', bcp47: 'ja-JP' },
  { code: 'ko', name: 'Korean', bcp47: 'ko-KR' },
  { code: 'ru', name: 'Russian', bcp47: 'ru-RU' },
  { code: 'ar', name: 'Arabic', bcp47: 'ar-SA' },
  { code: 'tr', name: 'Turkish', bcp47: 'tr-TR' },
  { code: 'vi', name: 'Vietnamese', bcp47: 'vi-VN' },
  { code: 'th', name: 'Thai', bcp47: 'th-TH' },
  { code: 'nl', name: 'Dutch', bcp47: 'nl-NL' },
  { code: 'pl', name: 'Polish', bcp47: 'pl-PL' },
];

function App() {
  const [view, setView] = useState('landing'); // 'landing' or 'translator'
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLang, setSourceLang] = useState('auto');
  const [targetLang, setTargetLang] = useState('es');
  const [isTranslating, setIsTranslating] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showHistory, setShowHistory] = useState(false);
  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem('translation_history');
    return saved ? JSON.parse(saved) : [];
  });
  const [copyStatus, setCopyStatus] = useState(false);
  const [isOcrProcessing, setIsOcrProcessing] = useState(false);

  const fileInputRef = useRef(null);
  const textAreaRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('translation_history', JSON.stringify(history));
  }, [history]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleTranslate = async () => {
    if (!inputText.trim()) return;
    setIsTranslating(true);
    try {
      const response = await fetch('http://localhost:5000/api/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: inputText,
          from: sourceLang === 'auto' ? undefined : sourceLang,
          to: targetLang
        })
      });
      const data = await response.json();
      if (data.translatedText) {
        setTranslatedText(data.translatedText);
        const newEntry = {
          id: Date.now(),
          original: inputText,
          translated: data.translatedText,
          from: data.from || sourceLang,
          to: targetLang,
          timestamp: new Date().toLocaleString(),
          isFavorite: false
        };
        setHistory(prev => [newEntry, ...prev].slice(0, 50));
      }
    } catch (error) {
      console.error('Translation error:', error);
    } finally {
      // Small artificial delay to keep skeleton visible for smoothness
      setTimeout(() => setIsTranslating(false), 300);
    }
  };

  // Debounced translation Effect
  useEffect(() => {
    if (!inputText.trim()) {
      setTranslatedText('');
      return;
    }

    const timer = setTimeout(() => {
      handleTranslate();
    }, 800);

    return () => clearTimeout(timer);
  }, [inputText, sourceLang, targetLang]);

  const handleVoiceInput = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Your browser does not support Speech Recognition.');
      return;
    }

    const recognition = new SpeechRecognition();
    const selectedLang = LANGUAGES.find(l => l.code === sourceLang);
    recognition.lang = selectedLang ? selectedLang.bcp47 : 'en-US';
    recognition.interimResults = false;

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInputText(transcript);
    };

    recognition.start();
  };

  // Pre-load voices on mount to ensure array is populated before first click
  useEffect(() => {
    window.speechSynthesis.getVoices();
  }, []);

  const handleTextToSpeech = (text, lang) => {
    window.speechSynthesis.cancel(); // Stop any ongoing speech before starting new one
    
    const utterance = new SpeechSynthesisUtterance(text);
    const selectedLang = LANGUAGES.find(l => l.code === lang);
    const bcp47 = selectedLang ? selectedLang.bcp47 : 'en-US';
    utterance.lang = bcp47;
    
    // Specifically assign the correct regional voice object to prevent silence
    const voices = window.speechSynthesis.getVoices();
    const langPrefix = bcp47.split('-')[0].toLowerCase();
    
    const matchedVoice = voices.find(v => v.lang.replace('_', '-').toLowerCase() === bcp47.toLowerCase()) 
                      || voices.find(v => v.lang.toLowerCase().startsWith(langPrefix));
                      
    if (matchedVoice) {
      utterance.voice = matchedVoice;
    }

    window.speechSynthesis.speak(utterance);
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsOcrProcessing(true);
    try {
      const { data: { text } } = await Tesseract.recognize(file, 'eng+hin+fra+spa+deu', {
        logger: m => console.log(m)
      });
      setInputText(text);
    } catch (error) {
      console.error('OCR Error:', error);
      alert('Failed to extract text from image.');
    } finally {
      setIsOcrProcessing(false);
    }
  };

  const swapLanguages = () => {
    if (sourceLang === 'auto') return;
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setInputText(translatedText);
    setTranslatedText(inputText);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopyStatus(true);
    setTimeout(() => setCopyStatus(false), 2000);
  };

  const toggleFavorite = (id) => {
    setHistory(prev => prev.map(item =>
      item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
    ));
  };

  const deleteHistoryItem = (id) => {
    setHistory(prev => prev.filter(item => item.id !== id));
  };

  if (view === 'landing') {
    return (
      <div className={`min-h-screen flex flex-col overflow-x-hidden relative transition-colors duration-500 bg-world-premium text-white ${isDarkMode ? 'dark' : ''}`}>
        {/* Immersive Background Layer */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          {/* Animated Mesh Blobs - Subtler for minimal look */}
          <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-primary/10 dark:bg-primary/5 rounded-full blur-[120px] animate-pulse-glow" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-secondary/10 dark:bg-purple-500/5 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '-7s' }} />
          
          {/* Techno Grid Overlay */}
          <div className="absolute inset-0 bg-grid opacity-[0.03] dark:opacity-[0.07] text-slate-900 dark:text-white" />
          
          {/* Noise Overlay */}
          <div className="absolute inset-0 bg-noise opacity-[0.03] dark:opacity-[0.05]" />
        </div>

        {/* Global Filter Overlay */}
        <div className="fixed inset-0 z-0 pointer-events-none backdrop-blur-[2px] opacity-30" />
        
        {/* Navigation */}
        <nav className="max-w-7xl mx-auto w-full px-8 py-8 flex justify-between items-center z-50">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="bg-primary p-2.5 rounded-2xl shadow-xl shadow-primary/30 group-hover:rotate-12 transition-transform">
              <Languages className="text-white w-6 h-6" />
            </div>
            <span className="text-3xl font-black tracking-tighter dark:text-white">LINGUIST</span>
          </div>
          <div className="flex items-center gap-8 font-bold text-slate-300 dark:text-slate-400">
            <button className="hover:text-primary transition-colors">Pricing</button>
            <button className="hover:text-primary transition-colors">Resources</button>
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-3 bg-white dark:bg-white/10 shadow-lg rounded-2xl hover:scale-110 transition-all border border-black/5"
            >
              {isDarkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5" />}
            </button>
            <button 
              onClick={() => setView('translator')}
              className="px-8 py-3 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-2xl font-black hover:shadow-2xl hover:-translate-y-1 transition-all shadow-xl"
            >
              Open App
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <main className="flex-1 flex flex-col relative px-8">
          <div className="flex flex-col items-center justify-center min-h-[80vh] text-center max-w-7xl mx-auto z-10 pt-10">
            <AnimatedBot />
            
            <h1 className="text-[6rem] md:text-[11rem] font-black tracking-tighter mb-12 leading-[0.8] text-white uppercase flex flex-col items-center mt-4">
              <span className="text-white transform -skew-x-6">BREAK BARRIERS.</span>
              <span className="text-gradient-aurora drop-shadow-[0_20px_50px_rgba(108,99,255,0.4)] transform skew-x-6">TRANSLATE INSTANTLY.</span>
            </h1>

            <p className="text-2xl md:text-3xl text-slate-500 dark:text-slate-400 mb-[4.5rem] max-w-4xl mx-auto font-bold leading-relaxed opacity-80">
              Experience the world's most intuitive translator. Real-time voice, <br className="hidden md:block" /> image, and text translation powered by advanced AI.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 w-full mt-4">
              <button 
                onClick={() => setView('translator')}
                className="group w-full sm:w-auto px-16 py-8 bg-[#6C63FF] text-white rounded-[2.5rem] font-black text-2xl shadow-[0_30px_60px_-15px_rgba(108,99,255,0.5)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-4 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                Start Translating
                <ChevronRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
              </button>
              <button 
                onClick={scrollToFeatures}
                className="glass-premium w-full sm:w-auto px-16 py-8 rounded-[2.5rem] font-black text-2xl text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-white/10 hover:shadow-2xl transition-all"
              >
                Explore Features
              </button>
            </div>
          </div>


          {/* Feature Section - Clean Minimal Cards (matching reference style) */}
          <section ref={featuresRef} className="w-full bg-transparent py-24 px-6 relative z-10 mt-24">
            <div className="max-w-6xl mx-auto">

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Mic,
                    iconColor: 'text-primary',
                    iconBg: 'bg-primary/10',
                    title: 'Voice Sync',
                    desc: 'Speak naturally and get instant translations. Real-time audio processing in 50+ languages with high fidelity.'
                  },
                  {
                    icon: Camera,
                    iconColor: 'text-pink-500',
                    iconBg: 'bg-pink-500/10',
                    title: 'Vision OCR',
                    desc: 'Point your camera at any text. Our AI instantly extracts and translates both printed and handwritten words.'
                  },
                  {
                    icon: Globe,
                    iconColor: 'text-blue-500',
                    iconBg: 'bg-blue-500/10',
                    title: 'Multi-Language',
                    desc: 'Access 100+ global languages with industry-leading accuracy. Perfect for travel, business, and education.'
                  }
                ].map((f, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center p-10 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-default"
                  >
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl ${f.iconBg} flex items-center justify-center mb-6`}>
                      <f.icon className={`w-8 h-8 ${f.iconColor}`} />
                    </div>
                    {/* Title */}
                    <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3">{f.title}</h3>
                    {/* Description */}
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>

            </div>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-500 bg-world-premium text-white ${isDarkMode ? 'dark' : ''} relative overflow-hidden`}>
      {/* Immersive Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Animated Mesh Blobs - Subtler for minimal look */}
        <div className="absolute top-[10%] left-[-10%] w-[60vw] h-[60vw] bg-primary/5 dark:bg-primary/3 rounded-full blur-[120px] animate-pulse-glow opacity-40" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-secondary/5 dark:bg-purple-500/3 rounded-full blur-[100px] animate-pulse-glow opacity-30" style={{ animationDelay: '-8s' }} />
        
        {/* Techno Grid Overlay */}
        <div className="absolute inset-0 bg-grid opacity-[0.02] dark:opacity-[0.05] text-slate-900 dark:text-white" />
        
        {/* Noise Overlay */}
        <div className="absolute inset-0 bg-noise opacity-[0.02] dark:opacity-[0.04]" />
      </div>
      <nav className="px-6 py-4 flex justify-between items-center bg-white/5 dark:bg-black/20 backdrop-blur-xl sticky top-0 z-[60] border-b border-white/10 dark:border-white/5">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setView('landing')}>
          <div className="bg-primary p-2 rounded-xl shadow-lg">
            <Languages className="text-white w-5 h-5" />
          </div>
          <h1 className="text-xl font-black tracking-tighter">LINGUIST</h1>
        </div>
        <div className="flex items-center gap-6">
          <button 
            onClick={() => setShowHistory(!showHistory)}
            className="p-3 hover:bg-primary/10 rounded-2xl transition-all"
            title="History"
          >
            <History className="w-6 h-6" />
          </button>
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-3 hover:bg-slate-100 dark:hover:bg-white/10 rounded-2xl transition-all"
            title="Toggle Theme"
          >
            {isDarkMode ? <Sun className="w-6 h-6 text-yellow-500" /> : <Moon className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12 md:py-20 flex flex-col items-center">
        {/* Language Selectors */}
        <div className="w-full max-w-4xl flex items-center justify-between gap-4 mb-10 bg-white/60 dark:bg-white/5 p-4 rounded-[2rem] border border-white/20 shadow-xl backdrop-blur-sm">
          <select 
            value={sourceLang}
            onChange={(e) => setSourceLang(e.target.value)}
            className="flex-1 bg-transparent text-xl font-black outline-none cursor-pointer p-2 text-slate-900 dark:text-white"
            style={{ color: isDarkMode ? 'white' : '#0f172a' }}
          >
            {LANGUAGES.map(lang => (
              <option key={lang.code} value={lang.code} className="bg-white dark:bg-slate-900 font-medium text-slate-900 dark:text-white">
                {lang.name}
              </option>
            ))}
          </select>

          <button 
            onClick={swapLanguages}
            disabled={sourceLang === 'auto'}
            className="p-4 bg-primary text-white rounded-2xl shadow-xl hover:rotate-180 transition-all duration-500 disabled:opacity-30 disabled:hover:rotate-0"
          >
            <ArrowLeftRight className="w-6 h-6" />
          </button>

          <select 
            value={targetLang}
            onChange={(e) => setTargetLang(e.target.value)}
            className="flex-1 bg-transparent text-xl font-black outline-none cursor-pointer p-2 text-right text-slate-900 dark:text-white"
            style={{ color: isDarkMode ? 'white' : '#0f172a' }}
          >
            {LANGUAGES.filter(l => l.code !== 'auto').map(lang => (
              <option key={lang.code} value={lang.code} className="bg-white dark:bg-slate-900 font-medium text-slate-900 dark:text-white">
                {lang.name}
              </option>
            ))}
          </select>
        </div>

        {/* Big Translation Area */}
        <div className="w-full flex flex-col lg:flex-row gap-10 items-stretch mb-24 relative z-10">
          {/* Input Box */}
          <div 
            className={`flex-1 group relative bg-white dark:bg-slate-900/60 backdrop-blur-3xl rounded-[3.5rem] p-12 transition-all border-4 shadow-[0_0_80px_rgba(0,0,0,0.08)] dark:shadow-[0_0_80px_rgba(0,0,0,0.3)] min-h-[600px] flex flex-col ${isListening ? 'border-primary ring-8 ring-primary/10' : 'border-transparent hover:border-primary/20'}`}
            onClick={() => textAreaRef.current?.focus()}
          >
            <textarea
              ref={textAreaRef}
              placeholder="Start typing to translate..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="w-full flex-1 bg-transparent resize-none text-4xl font-black leading-tight outline-none placeholder:text-slate-200 dark:placeholder:text-slate-800 text-slate-900 dark:text-white relative z-20"
            />
            
            <div className="flex justify-between items-center mt-8 relative z-20">
              <button 
                onClick={(e) => { e.stopPropagation(); handleTextToSpeech(inputText, sourceLang === 'auto' ? 'en-US' : sourceLang); }}
                className="p-5 bg-slate-100 dark:bg-white/5 rounded-2xl hover:bg-primary hover:text-white transition-all shadow-lg"
                title="Listen"
              >
                <Volume2 className="w-8 h-8" />
              </button>
              <div className="flex items-center gap-6">
                <span className="text-sm font-black text-slate-400 dark:text-slate-600 uppercase tracking-[0.2em]">{inputText.length} CHARS</span>
                {inputText && (
                  <button onClick={(e) => { e.stopPropagation(); setInputText(''); }} className="p-5 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-2xl transition-all shadow-sm">
                    <X className="w-8 h-8" />
                  </button>
                )}
              </div>
            </div>

            {isOcrProcessing && (
              <div className="absolute inset-0 bg-white/90 dark:bg-slate-900/95 rounded-[3.5rem] flex flex-col items-center justify-center backdrop-blur-md z-30">
                <div className="w-20 h-20 border-8 border-primary border-t-transparent rounded-full animate-spin mb-6" />
                <p className="text-2xl font-black text-primary animate-pulse">EXTRACTING TEXT...</p>
              </div>
            )}
          </div>

          {/* Output Box */}
          <div className="flex-1 bg-primary text-white rounded-[3.5rem] p-12 shadow-[0_0_80px_rgba(108,99,255,0.3)] min-h-[600px] flex flex-col relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
              <Globe className="w-64 h-64 scale-150" />
            </div>
            
            <div className="flex-1 text-4xl font-black overflow-y-auto whitespace-pre-wrap relative z-10 leading-tight scroll-smooth pr-4">
              {isTranslating ? (
                <div className="space-y-10 mt-4">
                  <div className="h-12 bg-white/20 rounded-[2rem] animate-pulse w-3/4" />
                  <div className="h-12 bg-white/20 rounded-[2rem] animate-pulse" />
                  <div className="h-12 bg-white/20 rounded-[2rem] animate-pulse w-1/2" />
                </div>
              ) : (
                translatedText || <span className="opacity-40 italic">Translation results will appear here...</span>
              )}
            </div>

            <div className="flex justify-between items-center mt-8 relative z-10">
              <div className="flex gap-4">
                <button 
                  onClick={() => handleTextToSpeech(translatedText, targetLang)}
                  className="p-6 bg-white/10 hover:bg-white/20 rounded-2xl transition-all disabled:opacity-20 shadow-xl"
                  disabled={!translatedText}
                >
                  <Volume2 className="w-8 h-8" />
                </button>
                <button 
                  onClick={() => copyToClipboard(translatedText)}
                  className="p-6 bg-white/10 hover:bg-white/20 rounded-2xl transition-all relative disabled:opacity-20 shadow-xl"
                  disabled={!translatedText}
                >
                  {copyStatus ? <Check className="w-8 h-8 text-green-300" /> : <Copy className="w-8 h-8" />}
                </button>
              </div>
              <p className="text-sm font-black uppercase tracking-[0.4em] text-white/50">Output</p>
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-slate-900 dark:bg-white p-4 rounded-[3rem] shadow-2xl z-50">
          <input type="file" ref={fileInputRef} onChange={handleImageUpload} accept="image/*" className="hidden" />
          
          <button 
            onClick={() => fileInputRef.current?.click()}
            className="p-6 text-white dark:text-slate-900 hover:bg-white/10 dark:hover:bg-slate-100 rounded-[2rem] transition-all group"
          >
            <Camera className="w-9 h-9 group-hover:scale-110 transition-transform" />
          </button>

          <button 
            onClick={handleVoiceInput}
            className={`p-6 rounded-[2rem] transition-all group ${isListening ? 'bg-red-500 text-white animate-pulse' : 'text-white dark:text-slate-900 hover:bg-white/10 dark:hover:bg-slate-100'}`}
          >
            <Mic className="w-9 h-9 group-hover:scale-110 transition-transform" />
          </button>

          <div className="w-px h-12 bg-white/20 dark:bg-slate-200 mx-4" />

          <button 
            onClick={handleTranslate}
            disabled={!inputText.trim() || isTranslating}
            className="px-16 py-6 bg-primary text-white rounded-[2.5rem] font-black text-2xl hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary/40 disabled:grayscale disabled:opacity-50"
          >
            {isTranslating ? <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin" /> : 'TRANSLATE'}
          </button>
        </div>

        {/* History Drawer */}
        {showHistory && (
          <div className="fixed inset-0 z-[100] flex justify-end">
            <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-md" onClick={() => setShowHistory(false)} />
            <div className="relative w-full max-w-2xl bg-white dark:bg-slate-950 shadow-2xl animate-slide-left p-12 flex flex-col h-full overflow-hidden">
              <div className="flex justify-between items-center mb-12">
                <h2 className="text-4xl font-black flex items-center gap-6">
                  <History className="w-10 h-10 text-primary" />
                  HISTORY
                </h2>
                <button onClick={() => setShowHistory(false)} className="p-4 hover:bg-slate-100 dark:hover:bg-white/10 rounded-full transition-all">
                  <X className="w-10 h-10" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto pr-4 space-y-8 scroll-smooth">
                {history.length === 0 ? (
                  <div className="text-center py-40 opacity-20">
                    <History className="w-32 h-32 mx-auto mb-8" />
                    <p className="text-2xl font-black tracking-widest">ZERO ACTIVITY</p>
                  </div>
                ) : (
                  history.map(item => (
                    <div key={item.id} className="p-10 bg-slate-50 dark:bg-white/5 rounded-[3rem] border border-transparent hover:border-primary/30 transition-all group relative">
                      <div className="flex justify-between items-start mb-6">
                        <span className="text-sm font-black uppercase tracking-widest text-slate-400">{item.from} → {item.to}</span>
                        <div className="flex gap-4">
                          <button onClick={() => toggleFavorite(item.id)} className={`p-3 rounded-2xl transition-all ${item.isFavorite ? 'text-yellow-500 bg-yellow-500/10' : 'text-slate-300 bg-slate-100 dark:bg-white/5'}`}>
                            <Star className={`w-6 h-6 ${item.isFavorite ? 'fill-current' : ''}`} />
                          </button>
                          <button onClick={() => deleteHistoryItem(item.id)} className="p-3 text-red-500 bg-red-500/10 rounded-2xl transition-all">
                            <Trash2 className="w-6 h-6" />
                          </button>
                        </div>
                      </div>
                      <p className="font-bold text-2xl mb-4 line-clamp-3 leading-tight">{item.original}</p>
                      <p className="text-primary font-bold text-2xl line-clamp-3 leading-tight">{item.translated}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}
      </main>

    </div>
  );
}

export default App;
;
