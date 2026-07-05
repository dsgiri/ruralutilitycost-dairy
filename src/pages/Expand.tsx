import React, { useState } from 'react';

export const Expand: React.FC = () => {
  const [currentCows, setCurrentCows] = useState<number>(300);
  const [addedCows, setAddedCows] = useState<number>(100);
  const [costPerCow, setCostPerCow] = useState<number>(4500); // Housing, equipment, cow purchase
  const [projectedIofcPerCowYearly, setProjectedIofcPerCowYearly] = useState<number>(2500);

  const totalCapitalRequired = addedCows * costPerCow;
  const addedAnnualMargin = addedCows * projectedIofcPerCowYearly;
  const simplePaybackYears = totalCapitalRequired / addedAnnualMargin;

  return (
    <div className="space-y-6">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Dairy Expansion Planner</h1>
        <p className="text-sm text-slate-500 mt-1">Model herd expansion, added costs, added production, and expected payback.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-50 pb-2">Expansion Assumptions</h3>
            
             <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">Current Herd Size</label>
              <input 
                type="number" 
                value={currentCows} 
                onChange={e => setCurrentCows(Number(e.target.value))}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">Cows to Add</label>
              <input 
                type="number" 
                value={addedCows} 
                onChange={e => setAddedCows(Number(e.target.value))}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">Capital Cost per Added Cow ($)</label>
              <p className="text-[10px] text-slate-400 mb-1">Includes facilities and cow purchase</p>
              <input 
                type="number" 
                value={costPerCow} 
                onChange={e => setCostPerCow(Number(e.target.value))}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

             <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">Projected Annual IOFC / Cow ($)</label>
              <input 
                type="number" 
                value={projectedIofcPerCowYearly} 
                onChange={e => setProjectedIofcPerCowYearly(Number(e.target.value))}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Total Capital Required</span>
              <span className="text-4xl font-bold text-slate-800">${totalCapitalRequired.toLocaleString()}</span>
            </div>
             <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Added Annual Margin</span>
              <span className="text-4xl font-bold text-emerald-600">${addedAnnualMargin.toLocaleString()}</span>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-50 pb-2 block text-center w-full">Simple Payback Period</h3>
             <div className="flex items-end justify-center gap-2 mt-4">
               <span className={`text-6xl font-bold ${simplePaybackYears > 7 ? 'text-amber-500' : 'text-emerald-600'}`}>
                 {simplePaybackYears.toFixed(1)}
               </span>
               <span className="text-xl font-bold text-slate-400 pb-2">Years</span>
             </div>
             <p className="text-xs font-medium text-slate-500 mt-6 text-center max-w-md">
               This is a simplified payback calculation. It does not account for interest rates, inflation, or tax implications of depreciation. Consult a financial advisor for detailed planning.
             </p>
          </div>
        </div>
      </div>

      <div className="mt-12 space-y-8">
        <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">Logic & Formulas</h2>
          <div className="space-y-3 text-sm text-slate-600">
            <p><strong>Added Annual Milk (CWT):</strong> Added Cows × (Milk Yield per Cow / 100) × 305 Days</p>
            <p><strong>Added Gross Revenue:</strong> Added Annual Milk × Milk Price per CWT</p>
            <p><strong>Added Total Costs:</strong> Added Cows × Operating Cost per Cow × 305 Days</p>
            <p><strong>Added Net Profit:</strong> Added Gross Revenue - Added Total Costs</p>
            <p><strong>Simple Payback Period (Years):</strong> Total Capital Expenditure / Added Net Profit</p>
          </div>
        </section>

        <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-slate-700 text-sm">What does Simple Payback mean?</h3>
              <p className="text-sm text-slate-600 mt-1">Simple payback is the amount of time it takes to recover your initial capital expenditure (CapEx) from the net profit generated by the expansion, ignoring the time value of money.</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-700 text-sm">What is missing from this calculation?</h3>
              <p className="text-sm text-slate-600 mt-1">This basic model omits financing costs (interest on loans), depreciation tax shields, salvage values, and fluctuations in future milk and feed prices. It is a starting point for planning.</p>
            </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm"><h2 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">Related Tools</h2><div className="flex gap-4"><a href="/forecast" className="text-emerald-600 hover:underline text-sm font-medium">Milk Production Forecast</a><span className="text-slate-300">|</span><a href="/breakeven" className="text-emerald-600 hover:underline text-sm font-medium">Break-Even Calculator</a></div></section>

        <section className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center">
          <p className="text-xs text-slate-500"><strong>Disclaimer:</strong> Results provide estimates only. This tool is designed for conceptual modeling and theoretical forecasting. It does not replace veterinary, agronomy, financial, or legal advice.</p>
        </section>
      </div>
    </div>
  );
};
