import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-8 flex-1">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Contact Us</h1>
        <p className="text-sm text-slate-500 mt-1">Get in touch with the RuralOpsTools.com team.</p>
      </header>

      <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-6">
        <p className="text-sm font-medium text-slate-700 leading-relaxed">
          We welcome feedback on our models, feature requests for new dairy economics tools, and bug reports.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
           <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 flex flex-col items-center justify-center text-center">
             <div className="bg-emerald-50 p-3 rounded-full mb-4 border border-emerald-100">
                <Mail className="h-5 w-5 text-emerald-600" />
             </div>
             <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">Email</h3>
             <a href="mailto:support@ruralopstools.com" className="text-sm text-emerald-600 font-medium hover:underline">support@ruralopstools.com</a>
           </div>

           <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 flex flex-col items-center justify-center text-center">
             <div className="bg-emerald-50 p-3 rounded-full mb-4 border border-emerald-100">
                <MessageSquare className="h-5 w-5 text-emerald-600" />
             </div>
             <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">GitHub Issues</h3>
             <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm text-emerald-600 font-medium hover:underline">Open an Issue</a>
           </div>
        </div>
      </div>
    </div>
  );
};
