import DarkModeToggle from "./DarkModeToggle";


export default function Navbar() {
  return (
    <nav className="w-full bg-zinc-100 dark:bg-zinc-900 dark:border-zinc-400 shadow-sm shadow-zinc-600 dark:shadow-zinc-400 px-6 py-4 flex items-center justify-between transition-colors duration-300">
      {/* Left side: Logo */}
      <div className="flex items-center space-x-2">
        <span className="text-xl font-bold tracking-wider text-indigo-600 dark:text-indigo-400 transition-colors duration-300">
          Logo
        </span>
      </div>

      {/* Right side: Dark / Light Mode Toggle Button */}
      <DarkModeToggle />
    </nav>
  );
}