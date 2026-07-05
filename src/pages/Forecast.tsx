import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export const Forecast: React.FC = () => {
  const [herdSize, setHerdSize] = useState<number>(500);
  const [milkPerCow, setMilkPerCow] = useState<number>(75);
  const [months, setMonths] = useState<number>(12);
  const [growthRate, setGrowthRate] = useState<number>(0);

  // Generates simple seasonality index starting from January
  const getSeasonality = (monthIndex: number) => {
    const m = monthIndex % 12;
    // Spring flush (Mar-May), Summer slump (Jul-Aug)
    const adjustments = [1.0, 1.0, 1.05, 1.08, 1.05, 1.0, 0.95, 0.92, 0.95, 1.0, 1.0, 1.0];
    return adjustments[m];
  };

  const data = Array.from({ length: months }).map((_, i) => {
    const currentHerd = Math.round(herdSize * Math.pow(1 + growthRate / 100 / 12, i));
    const dailyMilk = milkPerCow * getSeasonality(i);
    const daysInMonth = 30.4; // avg days
    const totalMilkLbs = currentHerd * dailyMilk * daysInMonth;
    return {
      month: `Month ${i + 1}`,
      herdSize: currentHerd,
      totalMilk: Math.round(totalMilkLbs),
      totalCWT: Math.round(totalMilkLbs / 100)
    };
  });

  const totalForecastLbs = data.reduce((acc, curr) => acc + curr.totalMilk, 0);

  return (
    <div className="space-y-6">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Milk Production Forecast</h1>
        <p className="text-sm text-slate-500 mt-1">Estimate potential milk production volume and capacity.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-50 pb-2">Assumptions</h3>
            
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">Starting Herd Size (Milking Cows)</label>
              <input 
                type="number" 
                value={herdSize} 
                onChange={e => setHerdSize(Number(e.target.value))}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

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
              <label className="block text-xs font-bold text-slate-600 mb-1">Annual Herd Growth Rate (%)</label>
              <input 
                type="number" 
                value={growthRate} 
                onChange={e => setGrowthRate(Number(e.target.value))}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

             <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">Forecast Horizon (Months)</label>
              <input 
                type="number" 
                value={months} 
                max={60}
                onChange={e => setMonths(Number(e.target.value))}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
            
            <p className="text-xs text-slate-500 italic mt-4">
              Note: Model applies standard spring/summer seasonal yield adjustments automatically.
            </p>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Total Forecasted Milk (lbs)</span>
              <span className="text-2xl font-bold text-slate-800">{totalForecastLbs.toLocaleString()}</span>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Total Forecasted (CWT)</span>
              <span className="text-2xl font-bold text-emerald-600">{(totalForecastLbs / 100).toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-6">Production Trend (CWT per Month)</h3>
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                  <XAxis dataKey="month" tick={{ fontSize: 10, fill: '#94a3b8', fontWeight: 'bold' }} tickLine={false} axisLine={false} />
                  <YAxis tick={{ fontSize: 10, fill: '#94a3b8', fontWeight: 'bold' }} tickLine={false} axisLine={false} tickFormatter={(val) => val.toLocaleString()} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    formatter={(value: number) => [value.toLocaleString(), 'CWT']}
                  />
                  <Line type="monotone" dataKey="totalCWT" name="Monthly Volume" stroke="#10b981" strokeWidth={3} dot={{ r: 4, fill: '#10b981' }} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 space-y-8">
        <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">Logic & Formulas</h2>
          <div className="space-y-3 text-sm text-slate-600">
            <p><strong>Total Milk Output:</strong> Current Herd Size × Daily Milk per Cow × Days in Month × Seasonality Index</p>
            <p><strong>Herd Growth:</strong> Herd Size × (1 + Annual Growth Rate / 12)<sup>month</sup></p>
            <p><strong>CWT Conversion:</strong> Total Pounds / 100</p>
          </div>
        </section>

        <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-slate-700 text-sm">How is seasonality factored in?</h3>
              <p className="text-sm text-slate-600 mt-1">The model applies standard spring flush (Mar-May) and summer slump (Jul-Aug) yield adjustments to the baseline daily average.</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-700 text-sm">How is herd growth applied?</h3>
              <p className="text-sm text-slate-600 mt-1">The annual growth rate is converted into a compounded monthly rate, automatically increasing the total milking cows for each projected month.</p>
            </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm"><h2 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">Related Tools</h2><div className="flex gap-4"><a href="/breakeven" className="text-emerald-600 hover:underline text-sm font-medium">Break-Even Calculator</a><span className="text-slate-300">|</span><a href="/margin" className="text-emerald-600 hover:underline text-sm font-medium">Margin Coverage & Risk</a></div></section>
        <section className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center">
          <p className="text-xs text-slate-500"><strong>Disclaimer:</strong> Results provide estimates only. This tool is designed for conceptual modeling and theoretical forecasting. It does not replace veterinary, agronomy, financial, or legal advice.</p>
        </section>
      </div>
    </div>
  );
};
