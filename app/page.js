import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 selection:bg-indigo-500 selection:text-white">
      {/* Advanced Animated Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <h1 className="text-2xl font-black tracking-tight text-slate-900">Tailwind<span className="text-indigo-600">Pro</span></h1>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-slate-600">
            <a href="#intro" className="hover:text-indigo-600 transition-colors">Intro</a>
            <a href="#pro-tips" className="hover:text-indigo-600 transition-colors">Pro Tips</a>
            <a href="#components" className="hover:text-indigo-600 transition-colors">Components</a>
            <button className="bg-slate-900 text-white px-6 py-2 rounded-full hover:bg-indigo-600 transition-all shadow-md">Get Started</button>
          </div>
        </div>
      </nav>

      {/* Hero Section with High Contrast Text */}
      <header className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-100/40 via-transparent to-transparent -z-10"></div>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-indigo-700 uppercase bg-indigo-100 rounded-full">
            Advanced Tutorial 2026
          </div>
          <h1 className="text-6xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-8">
            Mastering Tailwind CSS <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">for Modern Web Apps</span>
          </h1>
          <p className="text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed mb-10">
            Dive deep into utility-first architecture. Learn how to build production-ready interfaces with zero custom CSS files.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 pb-24 space-y-32">
        
        {/* Section: The Concept (Advanced Visual) */}
        <section id="intro" className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Why Utility-First?</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Traditional CSS requires you to invent class names like <code className="text-pink-600 font-bold">.card-header-inner-v2</code>. Tailwind removes this cognitive load.
            </p>
            <ul className="space-y-4">
              {[
                { title: "No Class Name Fatigue", desc: "Focus on logic, not naming." },
                { title: "Deterministic Cache", desc: "Your CSS bundle stops growing as your project scales." },
                { title: "Safe Refactoring", desc: "Styles are local to the component." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-xs">✓</div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-800 transform hover:-rotate-2 transition-transform duration-500">
             <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
             </div>
             <pre className="text-indigo-300 font-mono text-sm overflow-x-auto">
                <code>{`<div className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-lg">
  <img className="h-12 w-12 rounded-full" src="..." />
  <div>
    <h4 className="text-xl font-medium text-black">ChitChat</h4>
    <p className="text-slate-500">You have a new message!</p>
  </div>
</div>`}</code>
             </pre>
          </div>
        </section>

        {/* Pro Component Showcase */}
        <section id="components" className="space-y-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Pro Components</h2>
            <p className="text-slate-600">Hover over these cards to see advanced Tailwind transitions.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Lightning Fast</h3>
              <p className="text-slate-600 leading-relaxed">Tailwind generates only the CSS you actually use, keeping your site light.</p>
            </div>

            <div className="group relative bg-slate-900 p-8 rounded-[2rem] shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-indigo-500 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Fully Responsive</h3>
              <p className="text-indigo-200/70 leading-relaxed">Built-in mobile-first modifiers make complex layouts a breeze.</p>
            </div>

            <div className="group relative bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100">
              <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Design Systems</h3>
              <p className="text-slate-600 leading-relaxed">Constraint-based styling ensures your spacing and colors stay consistent.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tighter italic underline decoration-indigo-500">Pro Tutorial Blog</h2>
            <p className="text-slate-600 max-w-sm">Elevating web development standards through modern utility-first frameworks.</p>
          </div>
          <div className="flex gap-16 md:justify-end">
            <div>
              <h4 className="font-bold text-slate-900 mb-4 uppercase text-xs tracking-widest">Links</h4>
              <ul className="text-slate-600 space-y-2 text-sm font-medium">
                <li><a href="#" className="hover:text-indigo-600 transition">GitHub</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition">Vercel</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-100 text-center">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-tighter italic underline decoration-indigo-500 tracking-widest">&copy; 2026 IT103 LAB | Advanced Web Design Project</p>
        </div>
      </footer>
    </div>
  );
}