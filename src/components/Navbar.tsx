interface NavbarProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export default function Navbar({ isDarkMode, onToggleTheme }: NavbarProps) {
  return (
    <nav className="w-full bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-6 py-4 flex items-center justify-between transition-colors duration-300">
      {/* Left side: Logo */}
      <div className="flex items-center space-x-2">
        <span className="text-xl font-bold tracking-wider text-indigo-600 dark:text-indigo-400">
          Logo
        </span>
      </div>

      {/* Right side: Dark / Light Mode Toggle Button */}
      <button
        onClick={onToggleTheme}
        type="button"
        className="px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
        aria-label="Toggle Theme Mode"
      >
        {isDarkMode ? (
          <span className="flex items-center gap-2">☀️ Light Mode</span>
        ) : (
          <span className="flex items-center gap-2">🌙 Dark Mode</span>
        )}
      </button>
    </nav>
  );
}