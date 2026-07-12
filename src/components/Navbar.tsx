import DarkModeToggle from "./DarkModeToggle";


export default function Navbar() {
  return (
    <nav className="w-full bg-white dark:bg-gray-800 border-b border-slate-200 dark:border-slate-700 px-6 py-4 flex items-center justify-between transition-colors duration-300">
      {/* Left side: Logo */}
      <div className="flex items-center space-x-2">
        <span className="text-xl font-bold tracking-wider text-indigo-600 dark:text-indigo-400">
          Logo
        </span>
      </div>

      {/* Right side: Dark / Light Mode Toggle Button */}
      <DarkModeToggle />
    </nav>
  );
}