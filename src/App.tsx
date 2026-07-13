
import Navbar from './components/Navbar';
import {DashboardBody} from './components/DashboardBody';

export default function App() {
   
   return (
    /* 2. Direct Class Injection: 
      We control the 'dark' scope directly on this wrapper. When 'dark' is present, 
      all nested components will safely trigger their 'dark:' utility variations.
    */
    <div className="min-h-screen transition-colors duration-300 bg-zinc-50 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-50">
      {/* Navigation Component */}
      <Navbar/>
      
      {/* Main Dashboard Content Component */}
      <main className="max-w-7xl mx-auto p-6">
        <DashboardBody />
      </main>
    </div>
  );
}