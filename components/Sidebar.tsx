import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight, Home, Code, Shield, Image, BookOpen, Layers } from 'lucide-react';
import { categories } from '../data';
import { Category } from '../types';

interface SidebarProps {
  isMobileOpen: boolean;
  closeMobile: () => void;
}

const IconMap: Record<string, React.ElementType> = {
  Code,
  Shield,
  Image,
  BookOpen,
};

export const Sidebar: React.FC<SidebarProps> = ({ isMobileOpen, closeMobile }) => {
  const location = useLocation();
  const [expanded, setExpanded] = React.useState<Record<string, boolean>>({});

  // Initialize expanded state based on categories
  React.useEffect(() => {
    const initialExpanded: Record<string, boolean> = {};
    categories.forEach(cat => {
      initialExpanded[cat.id] = true; // Default all open for easy browsing
    });
    setExpanded(initialExpanded);
  }, []);

  const toggleCategory = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const isActive = (path: string) => location.pathname === path;

  const NavItem = ({ to, label, icon: Icon, isHeader = false, onToggle, isExpanded }: any) => (
    <div className="mb-1">
      <NavLink
        to={to}
        onClick={(e) => {
          if (onToggle) onToggle(e);
          if (!isHeader) closeMobile();
        }}
        className={({ isActive: active }) => `
          flex items-center justify-between px-3 py-2 rounded-md text-sm transition-colors duration-200
          ${active && !isHeader ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300 font-medium' : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-neutral-200'}
        `}
      >
        <div className="flex items-center gap-3">
          {Icon && <Icon className="w-4 h-4 opacity-70" />}
          <span>{label}</span>
        </div>
        {onToggle && (
          <div className="p-1 rounded hover:bg-neutral-200 dark:hover:bg-neutral-700">
            {isExpanded ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
          </div>
        )}
      </NavLink>
    </div>
  );

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black/50 lg:hidden backdrop-blur-sm"
          onClick={closeMobile}
        />
      )}

      <aside className={`
        fixed top-[64px] bottom-0 left-0 z-30 w-64 bg-white dark:bg-neutral-950 border-r border-neutral-200 dark:border-neutral-800 
        transform transition-transform duration-200 ease-in-out lg:translate-x-0 overflow-y-auto scrollbar-thin pb-8
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-4">
          <div className="mb-6">
            <h3 className="px-3 text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
              Menu
            </h3>
            <NavItem to="/" label="Home" icon={Home} />
          </div>

          <div>
            <h3 className="px-3 text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
              Categories
            </h3>
            {categories.map((category) => {
              const Icon = IconMap[category.iconName] || Layers;
              const isCatExpanded = expanded[category.id];
              
              return (
                <div key={category.id} className="mb-2">
                  <div 
                    onClick={(e) => toggleCategory(category.id, e)}
                    className="cursor-pointer"
                  >
                     <NavItem 
                        to={`/category/${category.id}`} 
                        label={category.title} 
                        icon={Icon}
                        onToggle={(e: React.MouseEvent) => toggleCategory(category.id, e)}
                        isExpanded={isCatExpanded}
                        isHeader={true}
                     />
                  </div>
                  
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isCatExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="ml-4 pl-3 border-l border-neutral-200 dark:border-neutral-800 space-y-1 mt-1">
                      {category.subCategories.map(sub => (
                        <a
                          key={sub.id}
                          href={`#/category/${category.id}#${sub.id}`}
                          onClick={closeMobile}
                          className="block px-3 py-1.5 text-sm text-neutral-500 dark:text-neutral-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-neutral-50 dark:hover:bg-white/5 rounded-md transition-colors"
                        >
                          {sub.title}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
};