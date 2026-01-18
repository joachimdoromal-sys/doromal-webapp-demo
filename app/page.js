import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation Menu */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-indigo-600 underline decoration-wavy">TailwindMastery</h1>
            </div>
            <div className="hidden md:flex space-x-8 text-sm font-medium">
              <a href="#intro" className="text-gray-700 hover:text-indigo-600 transition">Introduction</a>
              <a href="#steps" className="text-gray-700 hover:text-indigo-600 transition">3 Easy Steps</a>
              <a href="#concepts" className="text-gray-700 hover:text-indigo-600 transition">Core Concepts</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-bold tracking-wide uppercase">Student Tutorial</span>
          <h1 className="text-5xl font-extrabold text-gray-900 mt-4 mb-4">
            How to Use Tailwind CSS
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Stop writing custom CSS files. Learn how to build modern websites using only utility classes.
          </p>
        </div>

        {/* Introduction Section */}
        <section id="intro" className="mb-16 bg-white rounded-2xl p-8 shadow-sm border border-indigo-50">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What is it?</h2>
          <p className="text-gray-700 leading-relaxed italic">
            "Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file."
          </p>
        </section>

        {/* Steps Section */}
        <section id="steps" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">3 Steps to Get Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-500">
              <div className="text-3xl mb-2">📦</div>
              <h3 className="font-bold text-xl mb-2">1. Install</h3>
              <p className="text-gray-600 text-sm">Install via npm: <br/><code className="bg-gray-100 p-1 block mt-2 text-xs">npm install -D tailwindcss</code></p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-purple-500">
              <div className="text-3xl mb-2">⚙️</div>
              <h3 className="font-bold text-xl mb-2">2. Configure</h3>
              <p className="text-gray-600 text-sm">Add your template paths to the <code className="bg-gray-100 p-1">tailwind.config.js</code> file.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-pink-500">
              <div className="text-3xl mb-2">🎨</div>
              <h3 className="font-bold text-xl mb-2">3. Apply</h3>
              <p className="text-gray-600 text-sm">Start using classes like <code className="bg-gray-100 p-1">flex</code> or <code className="bg-gray-100 p-1">pt-4</code> in your HTML.</p>
            </div>
          </div>
        </section>

        {/* Core Concepts Showcase */}
        <section id="concepts" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Core Concept Examples</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Typography Explanation */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold mb-4 text-indigo-600">1. Typography Classes</h3>
              <p className="text-sm text-gray-500 mb-4">Instead of font-size: 20px, use:</p>
              <div className="space-y-2">
                <p className="text-sm">Small: <span className="text-sm bg-gray-100 px-2 font-mono">text-sm</span></p>
                <p className="text-base">Base: <span className="text-sm bg-gray-100 px-2 font-mono">text-base</span></p>
                <p className="text-2xl font-bold">Extra Large Bold: <span className="text-sm bg-gray-100 px-2 font-mono">text-2xl font-bold</span></p>
              </div>
            </div>

            {/* Layout Explanation */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold mb-4 text-indigo-600">2. Layout (Flex & Grid)</h3>
              <p className="text-sm text-gray-500 mb-4">Create columns instantly using the Grid system:</p>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-blue-500 h-12 rounded text-white flex items-center justify-center text-xs">col-1</div>
                <div className="bg-indigo-500 h-12 rounded text-white flex items-center justify-center text-xs">col-2</div>
                <div className="bg-purple-500 h-12 rounded text-white flex items-center justify-center text-xs">col-3</div>
              </div>
              <p className="mt-4 text-xs font-mono bg-gray-50 p-2">class="grid grid-cols-3 gap-2"</p>
            </div>
          </div>
        </section>

        {/* Interactive Conclusion */}
        <section className="bg-indigo-600 text-white rounded-3xl p-10 text-center shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">Ready to build?</h2>
          <p className="mb-8 opacity-90">Tailwind CSS is the most popular way to style modern Next.js apps.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition shadow-lg">
              Official Documentation
            </button>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg font-semibold italic">"Utility-first is the future."</p>
          <p className="text-sm text-gray-400 mt-2 font-mono">Completed for IT103 Lab • 2026</p>
        </div>
      </footer>
    </div>
  );
}