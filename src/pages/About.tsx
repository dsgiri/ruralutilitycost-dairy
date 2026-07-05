import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-8 flex-1">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">About Dairy Hub</h1>
        <p className="text-sm text-slate-500 mt-1">Part of the RuralOpsTools.com Ecosystem</p>
      </header>

      <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm max-w-none space-y-6">
        <p className="text-sm font-medium text-slate-700 leading-relaxed">
          Dairy helps producers estimate milk production, milk pricing, feed efficiency, break-even economics, income over feed cost, and expansion decisions for dairy operations.
        </p>
        
        <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-50 pb-2">Our Mission</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          The goal of Dairy is to help users make practical planning and budgeting decisions with clear, easy-to-use tools. Whether you're a herd manager modeling seasonal production changes, or an owner evaluating the simple payback on a 100-cow expansion, these tools are designed to provide rapid directional estimates.
        </p>

        <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-50 pb-2">Who This Is For</h2>
        <ul className="list-disc pl-5 space-y-2 mt-4 marker:text-emerald-500 text-sm text-slate-600">
          <li>Dairy farmers and herd managers</li>
          <li>Milk producers and cooperatives</li>
          <li>Dairy consultants and ag lenders</li>
          <li>Farm managers looking at milk and feed economics</li>
        </ul>

        <hr className="my-8 border-slate-100" />
        
        <p className="text-xs font-medium text-slate-500 bg-slate-50 p-4 rounded-lg border border-slate-100">
          This application is a specialized module within the larger Rural Ops Tools ecosystem, sharing its commitment to practical, data-driven agricultural and rural utility planning.
        </p>
      </div>
    </div>
  );
};
