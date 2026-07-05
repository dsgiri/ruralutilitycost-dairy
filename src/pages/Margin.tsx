import React, { useState } from 'react';

export const Margin: React.FC = () => {
  const [milkPrice, setMilkPrice] = useState<number>(19.50);
  const [cornPrice, setCornPrice] = useState<number>(4.50);
  const [soybeanMealPrice, setSoybeanMealPrice] = useState<number>(380);
  const [alfalfaPrice, setAlfalfaPrice] = useState<number>(220);

  // Simplified margin coverage formula based on USDA DMC concepts
  // Margin = All-Milk Price - Average Feed Cost
  // Feed Cost = (Corn Price * 1.0728) + (Soybean Meal Price * 0.00735) + (Alfalfa Price * 0.0137)
  const feedCost = (cornPrice * 1.0728) + (soybeanMealPrice * 0.00735) + (alfalfaPrice * 0.0137);
  const margin = milkPrice - feedCost;

  return (
    <div className="space-y-6">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Margin Coverage & Risk</h1>
        <p className="text-sm text-slate-500 mt-1">Estimate risk exposure and margin sensitivity based on national feed prices.</p>
        <p className="text-[10px] font-bold text-amber-600 mt-2 bg-amber-50 p-2 border border-amber-100 rounded inline-block uppercase tracking-wider">Note: For planning support only. Not an official USDA DMC enrollment tool.</p>
      </header>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-50 pb-2">Market Factors</h3>
            
             <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">Expected Milk Price ($/CWT)</label>
              <input 
                type="number" 
                step="0.1"
                value={milkPrice} 
                onChange={e => setMilkPrice(Number(e.target.value))}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">Corn Price ($/bu)</label>
              <input 
                type="number" 
                step="0.1"
                value={cornPrice} 
                onChange={e => setCornPrice(Number(e.target.value))}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">Soybean Meal ($/ton)</label>
              <input 
                type="number" 
                value={soybeanMealPrice} 
                onChange={e => setSoybeanMealPrice(Number(e.target.value))}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

             <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">Alfalfa Hay ($/ton)</label>
              <input 
                type="number" 
                value={alfalfaPrice} 
                onChange={e => setAlfalfaPrice(Number(e.target.value))}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-center items-center text-center h-full min-h-[300px]">
             <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-4">Estimated Margin Over Feed Cost</span>
             <span className={`text-6xl font-bold mb-2 ${margin < 9.50 ? 'text-amber-500' : 'text-emerald-600'}`}>
               ${margin.toFixed(2)} <span className="text-2xl font-bold text-slate-400 ml-1">/ CWT</span>
             </span>
             {margin < 9.50 && (
               <p className="text-xs font-medium text-red-500 mt-4 max-w-sm">Margin may trigger coverage payouts at typical protection tiers.</p>
             )}
          </div>
        </div>
      </div>

      <div className="mt-12 space-y-8">
        <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">Logic & Formulas</h2>
          <div className="space-y-3 text-sm text-slate-600">
            <p><strong>Corn Cost per CWT:</strong> (Corn Price / 56) × Corn Required</p>
            <p><strong>Soybean Meal Cost per CWT:</strong> (Soybean Meal Price / 2000) × SBM Required</p>
            <p><strong>Alfalfa Cost per CWT:</strong> (Alfalfa Price / 2000) × Alfalfa Required</p>
            <p><strong>Total Feed Cost per CWT:</strong> Corn Cost + SBM Cost + Alfalfa Cost</p>
            <p><strong>Margin per CWT:</strong> All-Milk Price - Total Feed Cost per CWT</p>
          </div>
        </section>

        <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-slate-700 text-sm">How is this margin calculated?</h3>
              <p className="text-sm text-slate-600 mt-1">This tool models margin logic similarly to the USDA Dairy Margin Coverage (DMC) program, using standard feed conversion ratios (corn, soybean meal, alfalfa hay) deducted from the All-Milk price.</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-700 text-sm">What does a low margin mean?</h3>
              <p className="text-sm text-slate-600 mt-1">If your calculated margin drops below standard DMC coverage tiers (e.g., $9.50/cwt), it signals higher financial risk and may indicate that enrolled producers could receive indemnity payments.</p>
            </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm"><h2 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">Related Tools</h2><div className="flex gap-4"><a href="/feed" className="text-emerald-600 hover:underline text-sm font-medium">Income Over Feed Cost</a><span className="text-slate-300">|</span><a href="/breakeven" className="text-emerald-600 hover:underline text-sm font-medium">Break-Even Calculator</a></div></section>

        <section className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center">
          <p className="text-xs text-slate-500"><strong>Disclaimer:</strong> Results provide estimates only. This tool is designed for conceptual modeling and theoretical forecasting. It does not replace veterinary, agronomy, financial, or legal advice.</p>
        </section>
      </div>
    </div>
  );
};
