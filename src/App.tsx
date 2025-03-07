import React from 'react';
import { Github, Linkedin, Mail, Sparkles } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635830625698-3b9bd74671ca?auto=format&fit=crop&q=80')] 
           bg-cover bg-center opacity-10 mix-blend-overlay"></div>

      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 w-full max-w-3xl shadow-2xl border border-white/20">
          {/* Portfolio Coming Soon Banner */}
          <div className="mb-8 bg-white/20 rounded-lg p-4 backdrop-blur-sm text-center">
            <div className="flex items-center justify-center space-x-3 text-white"
                onClick={() => window.open('https://www.waamo.tech', '_blank')}>
              <Sparkles className="w-6 h-6 animate-pulse" />
              <span className="font-medium text-xl">Portfolio Link 👉</span>
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Image Section */}
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
                alt="Developer Workspace"
                className="rounded-lg shadow-lg w-full object-cover aspect-square"
              />
            </div>

            {/* Content Section */}
            <div className="order-1 md:order-2">
              <h1 className="text-4xl font-shadow-hand text-white mb-2">OUAAMMOU Mohamed</h1>
              <h2 className="text-xl text-amber-200 mb-6">Frontend Developer</h2>
              
              <p className="text-white/90 mb-6">
                Passionate about creating elegant solutions through code. Dedicated to crafting beautiful, user-friendly web experiences that make a difference.
              </p>

              <div className="space-y-4">
                <a href="mailto:medjan581@gmail.com" 
                   className="flex items-center space-x-3 text-white hover:text-amber-200 transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>medjan581@gmail.com</span>
                </a>

                <div className="flex space-x-4 pt-4">
                  <a href="https://github.com/MedWA3MO" 
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-white hover:text-amber-200 transition-transform hover:scale-110">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="https://www.linkedin.com/in/mohamed-ouaammou-82a816220/" 
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-white hover:text-amber-200 transition-transform hover:scale-110">
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;