import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { SearchModal } from './components/SearchModal';
import { HomePage } from './pages/HomePage';
import { CategoryPage } from './pages/CategoryPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppContent: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 font-sans selection:bg-blue-100 dark:selection:bg-blue-900">
      <ScrollToTop />
      
      <Header 
        onMenuClick={() => setSidebarOpen(true)} 
        onSearchClick={() => setSearchOpen(true)}
      />
      
      <Sidebar 
        isMobileOpen={isSidebarOpen} 
        closeMobile={() => setSidebarOpen(false)} 
      />
      
      <main className="lg:pl-64 pt-6 px-4 md:px-8 min-h-[calc(100vh-64px)] transition-all duration-200">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:id" element={<CategoryPage />} />
        </Routes>
      </main>

      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setSearchOpen(false)} 
      />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
};

export default App;