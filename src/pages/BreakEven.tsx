import React, { useState } from 'react';

export const BreakEven: React.FC = () => {
  const [milkPerCow, setMilkPerCow] = useState<number>(75);
  const [feedCostPerCow, setFeedCostPerCow] = useState<number>(7.50);
  const [operatingCostPerCow, setOperatingCostPerCow] = useState<number>(5.50);
  const [fixedCostPerCow, setFixedCostPerCow] = useState<number>(3.00);

  const totalCostPerCowPerDay = feedCostPerCow + operatingCostPerCow + fixedCostPerCow;
  // Breakeven price per CWT = (Total Cost per Cow per Day / Milk per Cow per Day) * 100
  const breakEvenPrice = (totalCostPerCowPerDay / milkPerCow) * 100;

  return (
    <div className="space-y-6">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Break-Even Milk Price</h1>
        <p className="text-sm text-slate-500 mt-1">Determine the break-even milk price to cover all operating and fixed costs.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-50 pb-2">Daily Costs Per Cow</h3>
            
             <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">Avg Milk per Cow/Day (lbs)</label>
              <input 
                type="number" 
                value={milkPerCow} 
                onChange={e => setMilkPerCow(Number(e.target.value))}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">Feed Cost ($/day)</label>
              <input 
                type="number" 
                step="0.1"
                value={feedCostPerCow} 
                onChange={e => setFeedCostPerCow(Number(e.target.value))}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">Other Operating Costs ($/day)</label>
              <p className="text-[10px] text-slate-400 mb-1">Labor, vet, supplies, fuel</p>
              <input 
                type="number" 
                step="0.1"
                value={operatingCostPerCow} 
                onChange={e => setOperatingCostPerCow(Number(e.target.value))}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

             <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">Fixed Costs ($/day)</label>
              <p className="text-[10px] text-slate-400 mb-1">Depreciation, interest, taxes, insurance</p>
              <input 
                type="number" 
                step="0.1"
                value={fixedCostPerCow} 
                onChange={e => setFixedCostPerCow(Number(e.target.value))}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-center items-center text-center">
             <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-4">Break-Even Price</span>
             <span className="text-6xl font-bold text-slate-800 mb-2">${breakEvenPrice.toFixed(2)} <span className="text-2xl font-bold text-slate-400 ml-1">/ CWT</span></span>
             <p className="text-xs font-medium text-slate-500 mt-2">Minimum milk price needed to cover all expenses.</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-50 pb-2">Cost Breakdown Contribution ($/CWT)</h3>
            <div className="space-y-3 mt-4">
              <div className="flex justify-between items-center py-2 border-b border-slate-50">
                <span className="text-xs font-bold text-slate-500">Feed Cost</span>
                <span className="text-sm font-bold text-slate-800">${((feedCostPerCow / milkPerCow) * 100).toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-50">
                <span className="text-xs font-bold text-slate-500">Operating Cost</span>
                <span className="text-sm font-bold text-slate-800">${((operatingCostPerCow / milkPerCow) * 100).toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-xs font-bold text-slate-500">Fixed Cost</span>
                <span className="text-sm font-bold text-slate-800">${((fixedCostPerCow / milkPerCow) * 100).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 space-y-8">
        <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">Logic & Formulas</h2>
          <div className="space-y-3 text-sm text-slate-600">
            <p><strong>Total Cost per Cow:</strong> Feed Cost + Operating Cost + Fixed Cost (all per cow, per day)</p>
            <p><strong>CWT per Cow:</strong> Milk Yield per Cow / 100</p>
            <p><strong>Break-Even Price per CWT:</strong> Total Cost per Cow / CWT per Cow</p>
            <p><strong>Component Costs per CWT:</strong> Component Cost per Cow / CWT per Cow</p>
          </div>
        </section>

        <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-slate-700 text-sm">What is the break-even milk price?</h3>
              <p className="text-sm text-slate-600 mt-1">It's the minimum price per hundredweight (CWT) you must receive for your milk to cover all direct and indirect expenses, resulting in zero net profit or loss.</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-700 text-sm">How do fixed vs. operating costs differ?</h3>
              <p className="text-sm text-slate-600 mt-1">Operating costs vary with herd size and production (e.g., vet, supplies, fuel). Fixed costs remain relatively stable regardless of production levels (e.g., insurance, property taxes, depreciation).</p>
            </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm"><h2 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">Related Tools</h2><div className="flex gap-4"><a href="/margin" className="text-emerald-600 hover:underline text-sm font-medium">Margin Coverage & Risk</a><span className="text-slate-300">|</span><a href="/price" className="text-emerald-600 hover:underline text-sm font-medium">Milk Price Calculator</a></div></section>

        <section className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center">
          <p className="text-xs text-slate-500"><strong>Disclaimer:</strong> Results provide estimates only. This tool is designed for conceptual modeling and theoretical forecasting. It does not replace veterinary, agronomy, financial, or legal advice.</p>
        </section>
      </div>
    </div>
  );
};
