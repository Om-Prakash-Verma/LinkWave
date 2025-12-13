import React, { useEffect, useState, useMemo, useRef } from 'react';
import Fuse from 'fuse.js';
import { Search, X, Command, ExternalLink, CornerDownLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { categories } from '../data';
import { LinkItem, SearchResult } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Flatten data for Fuse
  const searchableData = useMemo(() => {
    const flat: SearchResult[] = [];
    categories.forEach(cat => {
      cat.subCategories.forEach(sub => {
        sub.links.forEach(link => {
          flat.push({
            item: link,
            categoryTitle: cat.title,
            subCategoryTitle: sub.title,
            categoryId: cat.id
          });
        });
      });
    });
    return flat;
  }, []);

  const fuse = useMemo(() => {
    return new Fuse(searchableData, {
      keys: ['item.title', 'item.description', 'item.tags', 'categoryTitle', 'subCategoryTitle'],
      threshold: 0.4,
    });
  }, [searchableData]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }
    const fuseResults = fuse.search(query);
    setResults(fuseResults.slice(0, 10).map(r => r.item));
    setSelectedIndex(0);
  }, [query, fuse]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % results.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + results.length) % results.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (results[selectedIndex]) {
        handleSelect(results[selectedIndex]);
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  const handleSelect = (result: SearchResult) => {
    // Navigate to category page and scroll to section (if implemented)
    // For now, open link directly if it's an external resource, or navigate to category
    // Implementation: Go to category page
    navigate(`/category/${result.categoryId}`);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl bg-white dark:bg-neutral-900 rounded-xl shadow-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden flex flex-col max-h-[60vh]"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center px-4 py-3 border-b border-neutral-200 dark:border-neutral-800">
          <Search className="w-5 h-5 text-neutral-400 mr-3" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search resources..."
            className="flex-1 bg-transparent border-none outline-none text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 text-lg"
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button 
            onClick={onClose}
            className="p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded text-neutral-500"
          >
            <span className="sr-only">Close</span>
            <kbd className="hidden sm:inline-block px-2 py-0.5 text-xs font-mono bg-neutral-100 dark:bg-neutral-800 rounded border border-neutral-300 dark:border-neutral-700">ESC</kbd>
          </button>
        </div>

        <div className="overflow-y-auto flex-1 p-2">
          {results.length === 0 && query && (
             <div className="text-center py-8 text-neutral-500 dark:text-neutral-400">
               <p>No results found for "{query}"</p>
             </div>
          )}
          {results.length === 0 && !query && (
            <div className="py-8 px-4 text-center">
              <p className="text-sm text-neutral-500 mb-2">Try searching for:</p>
              <div className="flex flex-wrap justify-center gap-2">
                 <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-xs text-neutral-600 dark:text-neutral-300">"VPN"</span>
                 <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-xs text-neutral-600 dark:text-neutral-300">"Editors"</span>
                 <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-xs text-neutral-600 dark:text-neutral-300">"Learning"</span>
              </div>
            </div>
          )}
          {results.map((result, index) => (
            <div
              key={`${result.item.url}-${index}`}
              onClick={() => handleSelect(result)}
              className={`group flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                index === selectedIndex 
                  ? 'bg-blue-50 dark:bg-blue-900/20' 
                  : 'hover:bg-neutral-50 dark:hover:bg-neutral-800'
              }`}
            >
              <div className="flex-1 min-w-0 pr-4">
                <div className="flex items-baseline gap-2 mb-0.5">
                  <h4 className={`text-sm font-medium truncate ${
                    index === selectedIndex ? 'text-blue-700 dark:text-blue-300' : 'text-neutral-900 dark:text-neutral-100'
                  }`}>
                    {result.item.title}
                  </h4>
                  <span className="text-xs text-neutral-400 shrink-0">
                    {result.categoryTitle} / {result.subCategoryTitle}
                  </span>
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 truncate">
                  {result.item.description}
                </p>
              </div>
              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {index === selectedIndex && <CornerDownLeft className="w-4 h-4 text-blue-500" />}
              </div>
            </div>
          ))}
        </div>
        
        <div className="px-4 py-2 bg-neutral-50 dark:bg-neutral-800/50 border-t border-neutral-200 dark:border-neutral-800 flex justify-between items-center text-xs text-neutral-500">
           <span>
             <strong>↑↓</strong> to navigate
           </span>
           <span>
             <strong>Enter</strong> to select
           </span>
        </div>
      </div>
    </div>
  );
};