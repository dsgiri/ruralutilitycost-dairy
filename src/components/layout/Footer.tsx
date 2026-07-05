import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, Scale, FileText, Info, Code, Mail, LayoutGrid } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
             <div className="flex flex-col">
                <span className="text-xl font-bold leading-tight text-slate-800 tracking-tight">Dairy Hub</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-4">Part of RuralOpsTools.com</span>
              </div>
            <p className="text-sm text-slate-500 max-w-sm mb-6 leading-relaxed">
              A dairy economics and decision-support hub for milk production, dairy herd planning, feed efficiency, milk pricing, and margin analysis.
            </p>
            <div className="flex bg-white border border-slate-200 shadow-sm rounded-lg p-3 max-w-md items-start">
              <ShieldAlert className="h-4 w-4 text-emerald-600 mt-0.5 mr-2 flex-shrink-0" />
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                Results provide estimates only. Milk prices, feed costs, yields, and herd performance vary. Information here does not replace veterinary, agronomy, financial, or legal advice.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-[10px] font-bold text-slate-400 tracking-wider uppercase mb-4">Calculators & Tools</h3>
            <ul className="space-y-3">
              <li><Link to="/forecast" className="text-sm text-slate-500 hover:text-emerald-600 transition-colors">Production Forecast</Link></li>
              <li><Link to="/price" className="text-sm text-slate-500 hover:text-emerald-600 transition-colors">Milk Price</Link></li>
              <li><Link to="/feed" className="text-sm text-slate-500 hover:text-emerald-600 transition-colors">Feed & IOFC</Link></li>
              <li><Link to="/breakeven" className="text-sm text-slate-500 hover:text-emerald-600 transition-colors">Risk & Break-even</Link></li>
              <li><Link to="/expand" className="text-sm text-slate-500 hover:text-emerald-600 transition-colors">Expansion Planner</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-[10px] font-bold text-slate-400 tracking-wider uppercase mb-4">Ecosystem</h3>
            <ul className="space-y-3">
              <li><a href="https://ruralopstools.com/portfolio" className="text-sm text-slate-500 hover:text-emerald-600 transition-colors flex items-center gap-2"><LayoutGrid className="h-4 w-4 text-slate-400" /> Network / Apps</a></li>
              <li><a href="https://ruralopstools.com/about" className="text-sm text-slate-500 hover:text-emerald-600 transition-colors flex items-center gap-2"><Info className="h-4 w-4 text-slate-400" /> About Us</a></li>
              <li><a href="https://ruralopstools.com/contact" className="text-sm text-slate-500 hover:text-emerald-600 transition-colors flex items-center gap-2"><Mail className="h-4 w-4 text-slate-400" /> Contact Us</a></li>
              <li><a href="https://ruralopstools.com/terms-of-use" className="text-sm text-slate-500 hover:text-emerald-600 transition-colors flex items-center gap-2"><Scale className="h-4 w-4 text-slate-400" /> Terms of Use</a></li>
              <li><a href="https://ruralopstools.com/privacy-policy" className="text-sm text-slate-500 hover:text-emerald-600 transition-colors flex items-center gap-2"><FileText className="h-4 w-4 text-slate-400" /> Privacy Policy</a></li>
              <li><a href="https://ruralopstools.com/disclaimer" className="text-sm text-slate-500 hover:text-emerald-600 transition-colors flex items-center gap-2"><ShieldAlert className="h-4 w-4 text-slate-400" /> Disclaimer</a></li>
            </ul>
          </div>
        </div>
        
        {/* Shared Ecosystem Signature line matching design */}
        <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-medium text-slate-500">
          <div className="flex items-center space-x-4">
            <p>&copy; {new Date().getFullYear()} Rural Ops Tools Ecosystem</p>
            <a href="https://ruralopstools.com/disclaimer" className="hover:text-emerald-600 transition-colors">Legal Disclaimer</a>
             <span className="text-slate-300">|</span>
            <p className="italic">Results are estimates only based on user inputs.</p>
          </div>
          
          <div className="flex items-center space-x-3">
             <span className="flex items-center space-x-1">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
              <span>System Status: Optimal</span>
            </span>
             <span className="text-slate-300">|</span>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold hover:text-blue-800 transition-colors flex items-center gap-1">
                <Code className="h-3 w-3" /> GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
