import { useState } from 'react';
import Navbar from './components/Navbar';
import DashboardBody from './components/DashboardBody';

export default function App() {
  // 1. Light mode by default (false)
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    /* 2. Direct Class Injection: 
      We control the 'dark' scope directly on this wrapper. When 'dark' is present, 
      all nested components will safely trigger their 'dark:' utility variations.
    */
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode 
        ? 'dark bg-slate-900 text-slate-100' 
        : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Navigation Component */}
      <Navbar isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />
      
      {/* Main Dashboard Content Component */}
      <main className="max-w-7xl mx-auto p-6">
        <DashboardBody />
      </main>
    </div>
  );
}