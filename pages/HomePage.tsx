import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Shield, Layers, Star } from 'lucide-react';
import { categories } from '../data';

export const HomePage: React.FC = () => {
  const featuredCategories = categories.slice(0, 3);

  return (
    <div className="max-w-5xl mx-auto space-y-16 pb-20 animate-in fade-in duration-700">
      
      {/* Hero Section */}
      <section className="text-center pt-10 md:pt-20 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-sm font-medium mb-4">
          <Star className="w-4 h-4 fill-current" />
          <span>The Free Resource Wiki</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          Curated Links for <br className="hidden md:block" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Modern Creators</span>
        </h1>
        <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          LinkWave is a community-driven directory of the best free tools, resources, and privacy-focused software on the internet. No ads, no tracking.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link 
            to="/category/dev-tools"
            className="px-6 py-3 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold hover:opacity-90 transition-opacity"
          >
            Browse Directory
          </Link>
          <a 
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white font-semibold hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
          >
            Contribute on GitHub
          </a>
        </div>
      </section>

      {/* Featured Grid */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Top Categories</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredCategories.map(cat => (
            <Link 
              key={cat.id} 
              to={`/category/${cat.id}`}
              className="group p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {/* Simple icon logic based on index or ID for demo */}
                {cat.id === 'dev-tools' ? <Code className="w-6 h-6" /> : 
                 cat.id === 'privacy' ? <Shield className="w-6 h-6" /> : 
                 <Layers className="w-6 h-6" />}
              </div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">{cat.title}</h3>
              <p className="text-neutral-500 dark:text-neutral-400 mb-4 line-clamp-2">
                {cat.description}
              </p>
              <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm group-hover:gap-2 transition-all">
                Explore {cat.subCategories.length} sections <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats / Info */}
      <section className="rounded-2xl bg-neutral-900 dark:bg-neutral-800 p-8 md:p-12 text-center md:text-left relative overflow-hidden">
        <div className="relative z-10 md:flex items-center justify-between gap-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Always Free. Always Open Source.
            </h2>
            <p className="text-neutral-400 max-w-lg">
              We verify every link to ensure it meets our quality standards. Join our community to suggest new additions.
            </p>
          </div>
          <div className="flex gap-8 justify-center md:justify-end">
             <div className="text-center">
               <div className="text-3xl font-bold text-white">500+</div>
               <div className="text-sm text-neutral-500 uppercase tracking-wide">Resources</div>
             </div>
             <div className="text-center">
               <div className="text-3xl font-bold text-white">12</div>
               <div className="text-sm text-neutral-500 uppercase tracking-wide">Categories</div>
             </div>
          </div>
        </div>
        
        {/* Abstract decoration */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
      </section>

    </div>
  );
};