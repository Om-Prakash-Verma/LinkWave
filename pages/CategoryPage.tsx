import React from 'react';
import { useParams } from 'react-router-dom';
import { categories } from '../data';
import { ExternalLink, Hash, Link as LinkIcon, AlertCircle } from 'lucide-react';
import { Category } from '../types';

export const CategoryPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [copied, setCopied] = React.useState<string | null>(null);
  
  const category = categories.find(c => c.id === id);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  if (!category) {
    return (
      <div className="flex flex-col items-center justify-center h-[50vh] text-center">
        <AlertCircle className="w-16 h-16 text-neutral-300 mb-4" />
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">Category Not Found</h2>
        <p className="text-neutral-500">The requested category could not be located in our index.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Breadcrumbs */}
      <nav className="flex text-sm text-neutral-500 mb-6">
        <span className="hover:text-neutral-900 dark:hover:text-white cursor-pointer">Home</span>
        <span className="mx-2">/</span>
        <span className="font-medium text-neutral-900 dark:text-white">{category.title}</span>
      </nav>

      {/* Header */}
      <header className="mb-12 border-b border-neutral-200 dark:border-neutral-800 pb-8">
        <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4 tracking-tight">
          {category.title}
        </h1>
        <p className="text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          {category.description}
        </p>
      </header>

      {/* Table of Contents (Mobile/Tablet only - hidden on large since we have sidebar) */}
      <div className="lg:hidden mb-10 p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800">
        <h3 className="font-semibold text-sm uppercase text-neutral-500 mb-3">On this page</h3>
        <div className="flex flex-wrap gap-2">
          {category.subCategories.map(sub => (
            <a 
              key={sub.id} 
              href={`#${sub.id}`}
              className="px-3 py-1 bg-white dark:bg-neutral-800 rounded-full text-sm text-blue-600 dark:text-blue-400 shadow-sm border border-neutral-200 dark:border-neutral-700"
            >
              {sub.title}
            </a>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-16">
        {category.subCategories.map((sub) => (
          <section key={sub.id} id={sub.id} className="scroll-mt-24">
            <div className="flex items-center gap-2 mb-6 group">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
                {sub.title}
              </h2>
              <a href={`#${sub.id}`} className="opacity-0 group-hover:opacity-100 transition-opacity text-neutral-400 hover:text-blue-500">
                <Hash className="w-5 h-5" />
              </a>
            </div>

            <div className="grid gap-4">
              {sub.links.map((link, idx) => (
                <div 
                  key={idx}
                  className={`
                    group relative p-4 rounded-xl border transition-all duration-200
                    ${link.isRecommended 
                      ? 'bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-900/10 dark:to-indigo-900/10 border-blue-200 dark:border-blue-800' 
                      : 'bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700'
                    }
                  `}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <a 
                          href={link.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="font-semibold text-lg text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1.5"
                        >
                          {link.title}
                          <ExternalLink className="w-4 h-4 opacity-50" />
                        </a>
                        {link.isRecommended && (
                          <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-100 dark:bg-blue-900/40 dark:text-blue-300 rounded-full">
                            Top Pick
                          </span>
                        )}
                      </div>
                      
                      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm mb-3">
                        {link.description}
                      </p>

                      {link.tags && (
                        <div className="flex flex-wrap gap-2">
                          {link.tags.map(tag => (
                            <span key={tag} className="px-2 py-0.5 text-xs rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <button
                      onClick={() => handleCopy(link.url)}
                      className="p-2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
                      title="Copy Link"
                    >
                      {copied === link.url ? (
                        <span className="text-green-500 text-xs font-bold">Copied!</span>
                      ) : (
                        <LinkIcon className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};