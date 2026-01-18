import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 selection:bg-indigo-500 selection:text-white">
      {/* --- Advanced Sticky Navbar --- */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
              <span className="text-white font-bold text-xl font-mono">T</span>
            </div>
            <h1 className="text-2xl font-black tracking-tight text-slate-900 italic">Tailwind<span className="text-indigo-600">Blog</span></h1>
          </div>
          <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
            <a href="#how-it-works" className="hover:text-indigo-600 transition-colors">How it works</a>
            <a href="#tutorial-steps" className="hover:text-indigo-600 transition-colors">Steps</a>
            <a href="#examples" className="hover:text-indigo-600 transition-colors">Examples</a>
            <button className="bg-slate-900 text-white px-6 py-2 rounded-full hover:bg-indigo-600 transition-all shadow-md">Full Guide</button>
          </div>
        </div>
      </nav>

      {/* --- Tutorial Header --- */}
      <header className="relative pt-24 pb-32 overflow-hidden bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-indigo-700 uppercase bg-indigo-50 rounded-full ring-1 ring-indigo-100">
            Learn Tailwind CSS • 2026 Edition
          </div>
          <h1 className="text-6xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tighter">
            Build Faster with <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 underline decoration-indigo-200 decoration-8">Utility Classes</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
            A comprehensive guide on how to style modern web applications without leaving your HTML or writing a single line of custom CSS.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 pb-24 space-y-32">
        
        {/* --- Step 1: Explanation Section --- */}
        <section id="how-it-works" className="grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-6">
            <div className="bg-indigo-600 text-white w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg shadow-indigo-100">01</div>
            <h2 className="text-4xl font-bold text-slate-900">What is Tailwind?</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Tailwind CSS is a **utility-first** framework. Instead of creating a CSS class like <code className="bg-slate-100 p-1 rounded text-pink-600">.btn-blue</code>, you apply small, atomic classes like <code className="bg-slate-100 p-1 rounded text-indigo-600">bg-blue-500</code> and <code className="bg-slate-100 p-1 rounded text-indigo-600">px-4</code> directly to your elements.
            </p>
            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-2 underline decoration-indigo-400">Pro Explanation:</h4>
              <p className="text-sm text-slate-500 italic">"It allows you to build completely custom designs without ever inventing class names or switching back and forth between files."</p>
            </div>
          </div>
          {/* Visual Code Example */}
          <div className="bg-[#0f172a] rounded-[2.5rem] p-8 shadow-2xl border border-slate-800 ring-4 ring-slate-100">
             <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
             </div>
             <pre className="text-indigo-300 font-mono text-sm leading-loose">
                <code>{`<button className="
  bg-indigo-600 
  hover:bg-indigo-700 
  text-white 
  py-2 px-6 
  rounded-xl 
  transition-all
">
  Click Me
</button>`}</code>
             </pre>
          </div>
        </section>

        {/* --- Step 2: The Process (Tutorial Steps) --- */}
        <section id="tutorial-steps" className="bg-slate-900 text-white rounded-[3rem] p-12 md:p-20 shadow-2xl shadow-indigo-200">
          <h2 className="text-4xl font-bold mb-12 text-center underline decoration-indigo-500 decoration-4">How to Use it: 3 Basic Steps</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { num: "01", title: "Installation", body: "Install tailwindcss via npm and create your tailwind.config.js file to define your paths." },
              { num: "02", title: "Layout & Spacing", body: "Use 'Flex' and 'Grid' for structure. Add padding (p-) and margin (m-) using numeric scales." },
              { num: "03", title: "Apply Styles", body: "Add colors, shadows, and typography classes. Use prefixes like 'md:' for mobile responsiveness." }
            ].map((step, i) => (
              <div key={i} className="space-y-4">
                <div className="text-5xl font-black text-indigo-500 opacity-50 font-mono">{step.num}</div>
                <h3 className="text-xl font-bold text-white">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- Step 3: Creative Examples --- */}
        <section id="examples" className="space-y-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Examples of Utility Classes</h2>
            <p className="text-slate-500 font-medium italic underline decoration-indigo-200">Hover these components to see Tailwind in action.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Buttons */}
            <div className="group bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100">
              <h3 className="text-lg font-black text-slate-900 mb-6 uppercase tracking-widest">01. Buttons</h3>
              <div className="space-y-4">
                <button className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700 transition">Primary Style</button>
                <button className="w-full border-2 border-slate-200 text-slate-700 font-bold py-2 rounded-lg hover:bg-slate-50 transition">Outline Style</button>
              </div>
              <p className="mt-6 text-xs text-slate-400 font-mono">Classes: bg-blue-600 | rounded-lg</p>
            </div>

            {/* Card 2: Shadows & Borders */}
            <div className="group bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100">
              <h3 className="text-lg font-black text-slate-900 mb-6 uppercase tracking-widest">02. Shadows</h3>
              <div className="h-24 bg-white border border-slate-100 rounded-xl shadow-xl flex items-center justify-center font-bold text-indigo-600 group-hover:shadow-indigo-100 transition-all">
                Deep Shadow Box
              </div>
              <p className="mt-6 text-xs text-slate-400 font-mono">Classes: shadow-xl | rounded-xl</p>
            </div>

            {/* Card 3: Gradients */}
            <div className="group bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100">
              <h3 className="text-lg font-black text-slate-900 mb-6 uppercase tracking-widest">03. Gradients</h3>
              <div className="h-24 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-xs uppercase tracking-tighter shadow-lg group-hover:rotate-2 transition-transform">
                Vivid Background
              </div>
              <p className="mt-6 text-xs text-slate-400 font-mono">Classes: bg-gradient-to-br</p>
            </div>
          </div>
        </section>
      </main>

      {/* --- Footer with Submission Info --- */}
      <footer className="bg-white border-t border-slate-200 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tighter italic underline decoration-indigo-500 decoration-4">Pro Tutorial Blog Page</h2>
          <p className="text-slate-500 max-w-sm mx-auto mb-8 font-medium">Elevating web development standards through modern utility-first frameworks.</p>
          <div className="flex justify-center gap-12 text-sm font-bold text-slate-400 uppercase tracking-widest">
            <a href="#" className="hover:text-indigo-600">GitHub Repository</a>
            <a href="#" className="hover:text-indigo-600">Vercel Deployment</a>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-100">
            <p className="text-slate-400 text-xs font-black uppercase tracking-[0.3em]">&copy; 2026 IT103 LAB | By Eavan Joachim L. Doromal A221</p>
          </div>
        </div>
      </footer>
    </div>
  );
}