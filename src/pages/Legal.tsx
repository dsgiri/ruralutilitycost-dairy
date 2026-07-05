import React from 'react';
import { ShieldAlert } from 'lucide-react';

export const Legal: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <header className="mb-10 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Legal & Disclaimer</h1>
          <p className="text-slate-600 mt-2 text-lg">Terms of Use and Privacy Information</p>
        </div>
        <ShieldAlert className="h-12 w-12 text-slate-300" />
      </header>

      <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-8">
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">Estimates & Forward-Looking Statements</h2>
          <p className="text-slate-700 leading-relaxed">
            All outcomes presented by the tools within Dairy (RuralOpsTools.com) provide estimates only. Calculated projections regarding milk production, revenue, feed costs, margins, and expansion paybacks rely strictly on the assumptions you input.
          </p>
        </section>

        <section>
           <h2 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">Variables in Actual Outcomes</h2>
          <p className="text-slate-700 leading-relaxed">
            Actual on-farm outcomes are subject to significant volatility. Milk prices, feed costs, crop yields, weather impacts, and herd performance can change actual outcomes drastically. The data presented here does not account for localized basis levels, cooperative-specific hauling deductions, or unmodeled overhead expenses.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">No Professional Advice</h2>
           <p className="text-slate-700 leading-relaxed font-medium">
            This application does not replace professional veterinary, agronomy, financial, legal, or business advice.
          </p>
          <p className="text-slate-700 leading-relaxed mt-2">
            Always verify critical operational and capital investment decisions independently with certified accountants, lenders, and agricultural extension professionals. The "Margin & Risk" tool is an educational planning application only and does not reflect official enrollment or guaranteed eligibility for USDA Dairy Margin Coverage programs.
          </p>
        </section>

        <section>
           <h2 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">Privacy & Local Storage</h2>
          <p className="text-slate-700 leading-relaxed">
            This tool processes your inputs natively in your browser. "Favorite" tools are stored securely in your browser's local storage to persist across sessions without sending data to an external server.
          </p>
        </section>
      </div>
    </div>
  );
};
