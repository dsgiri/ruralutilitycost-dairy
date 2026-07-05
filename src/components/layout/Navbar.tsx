import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Milk, Menu, X, Heart } from 'lucide-react';
import { useFavorites } from '../../hooks/useFavorites';

const NAV_LINKS = [
  { name: 'Dashboard', path: '/' },
  { name: 'Forecast', path: '/forecast' },
  { name: 'Pricing', path: '/price' },
  { name: 'Feed & IOFC', path: '/feed' },
  { name: 'Risk', path: '/breakeven' },
  { name: 'Margin', path: '/margin' },
  { name: 'Expansion', path: '/expand' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { favorites } = useFavorites();

  return (
    <nav className="sticky top-0 z-50 flex flex-col">
      {/* Header: Ecosystem Navigation */}
      <div className="bg-[#1E293B] text-white px-4 sm:px-6 h-14 flex items-center justify-between border-b border-slate-700">
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-emerald-500 w-8 h-8 rounded flex items-center justify-center font-bold text-slate-900 text-xs shadow-sm">RUC</div>
            <div className="flex items-baseline space-x-1">
              <span className="font-bold tracking-tight text-lg group-hover:text-emerald-400 transition-colors">Rural Ops Tools</span>
              <span className="text-slate-400 font-normal hidden sm:inline">|</span>
              <span className="text-emerald-400 font-semibold hidden sm:inline">Dairy</span>
            </div>
          </Link>
        </div>
        
        <div className="hidden sm:flex space-x-6 text-sm font-medium text-slate-300">
          <a href="https://ruralopstools.com" className="hover:text-white transition-colors">Master Site</a>
          <a href="https://ruralopstools.com/portfolio" className="hover:text-white transition-colors">Network</a>
          <a href="https://ruralopstools.com/disclaimer" className="hover:text-white transition-colors">Legal</a>
          <Link to="/" className={`transition-colors ${location.pathname === '/' ? 'text-white border-b-2 border-emerald-500 pb-4 mt-4' : 'hover:text-white'}`}>Dashboard</Link>
          <a href="https://ruralopstools.com/contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <div className="-mr-2 flex items-center sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Sub-Navigation Bar */}
      <div className="bg-white border-b border-slate-200 h-12 px-4 sm:px-6 flex items-center justify-between shadow-sm overflow-x-auto">
        <div className="hidden sm:flex space-x-8 text-sm font-semibold h-full">
          {NAV_LINKS.map(link => {
             // For exact matching and allowing dashboard vs others
             if (link.path === '/' && location.pathname !== '/') return null; // Only show other links usually, or keep Dashboard. The design had Overview. We'll rename Dashboard to Overview here.
             
             const isActive = location.pathname === link.path || (link.path === '/' && location.pathname === '/');
             const name = link.name === 'Dashboard' ? 'Overview' : link.name;
             
             return (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors flex items-center h-full whitespace-nowrap border-b-2 ${
                  isActive 
                    ? 'text-emerald-600 border-emerald-600' 
                    : 'text-slate-500 hover:text-slate-900 border-transparent'
                }`}
              >
                {name}
              </Link>
            );
          })}
        </div>
        <div className="flex space-x-2 ml-auto">
          <Link 
            to="/favorites"
            className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs rounded border border-slate-300 transition-colors flex items-center gap-1 font-medium"
          >
             <Heart className="h-3 w-3" />
             Saved Tools <span className="hidden sm:inline">({favorites.length})</span>
          </Link>
          <Link 
            to="/"
            className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs rounded font-medium transition-colors flex items-center"
          >
            New Calculation
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden border-b border-slate-200 bg-white absolute top-[104px] w-full shadow-lg">
          <div className="pt-2 pb-3 space-y-1">
            {NAV_LINKS.map(link => {
               const isActive = location.pathname === link.path;
               return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 text-base font-medium border-l-4 ${
                    isActive
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-500'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 border-transparent'
                  }`}
                >
                  {link.name}
                </Link>
               );
            })}
             <Link
                to="/favorites"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 border-l-4 border-transparent flex items-center gap-2"
              >
                <Heart className="h-5 w-5 text-slate-400" /> Favorites ({favorites.length})
              </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
