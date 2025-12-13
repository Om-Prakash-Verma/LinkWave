import React from 'react';
import { Search, Moon, Sun, Menu, Github } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

interface HeaderProps {
  onMenuClick: () => void;
  onSearchClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick, onSearchClick }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/80 dark:bg-neutral-950/80 border-b border-neutral-200 dark:border-neutral-800 h-16">
      <div className="flex h-full items-center justify-between px-4 lg:px-8">
        
        <div className="flex items-center gap-4">
          <button 
            onClick={onMenuClick}
            className="lg:hidden p-2 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md"
          >
            <Menu className="w-5 h-5" />
          </button>
          
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-md group-hover:shadow-lg transition-all">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                 <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                 <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
               </svg>
            </div>
            <span className="font-bold text-xl tracking-tight text-neutral-900 dark:text-white">
              LinkWave
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          {/* Search Trigger */}
          <button 
            onClick={onSearchClick}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-sm text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800/50 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-md border border-neutral-200 dark:border-neutral-700 transition-colors w-48 md:w-64"
          >
            <Search className="w-4 h-4" />
            <span>Search...</span>
            <span className="ml-auto text-xs font-mono border border-neutral-300 dark:border-neutral-600 rounded px-1.5 py-0.5">⌘K</span>
          </button>

          <button 
            onClick={onSearchClick}
            className="sm:hidden p-2 text-neutral-600 dark:text-neutral-400"
          >
            <Search className="w-5 h-5" />
          </button>

          <div className="h-6 w-px bg-neutral-200 dark:bg-neutral-800 mx-1" />

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>

          {/* GitHub Link */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block p-2 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  );
};