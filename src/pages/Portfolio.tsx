import React, { useMemo } from 'react';
import { PORTFOLIO_SITES } from '../data/portfolio-parser';
import { ExternalLink, LayoutGrid, Globe } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const categories = useMemo(() => {
    const map = new Map<string, typeof PORTFOLIO_SITES>();
    PORTFOLIO_SITES.forEach(site => {
      if (!map.has(site.category)) {
         map.set(site.category, []);
      }
      map.get(site.category)!.push(site);
    });
    // Ensure Core is first
    const sortedCategories = Array.from(map.keys()).sort((a, b) => {
        if (a === 'Core') return -1;
        if (b === 'Core') return 1;
        return a.localeCompare(b);
    });
    return sortedCategories.map(cat => ({
        category: cat,
        sites: map.get(cat)!
    }));
  }, []);

  return (
    <div className="space-y-8 flex-1">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight flex items-center gap-2">
          <LayoutGrid className="h-6 w-6 text-emerald-600" />
          Ecosystem Portfolio
        </h1>
        <p className="text-sm text-slate-500 mt-2 max-w-2xl">
          The Rural Ops Tools network comprises specialized applications for agricultural planning, utility economics, and operational decision support. Explore the connected ecosystem below.
        </p>
      </header>

      <div className="space-y-12">
        {categories.map(({ category, sites }) => (
          <section key={category}>
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">
              {category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sites.map(site => (
                <a 
                  key={site.url}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:border-emerald-300 hover:shadow transition-all duration-200 group relative flex flex-col h-full"
                >
                  <div className="flex justify-between items-start mb-2">
                     <h3 className="font-bold text-slate-800 text-base group-hover:text-emerald-700 transition-colors">
                        {site.name}
                     </h3>
                     <ExternalLink className="h-4 w-4 text-slate-300 group-hover:text-emerald-500 transition-colors flex-shrink-0" />
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed flex-grow">
                    {site.description}
                  </p>
                  
                  <div className="text-[10px] text-slate-400 mt-4 flex items-center gap-1 group-hover:text-emerald-600 transition-colors font-medium">
                    <Globe className="h-3 w-3" />
                    {site.url.replace('https://', '')}
                  </div>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
      
      <section className="bg-white border text-center border-slate-200 p-8 rounded-xl shadow-sm mt-8">
          <h2 className="text-sm font-bold text-slate-800 mb-2">Looking for the original application?</h2>
          <p className="text-xs text-slate-500">Return to the <a href="https://ruralopstools.com" className="text-emerald-600 font-medium hover:underline">Master Site</a> for the primary ecosystem hub.</p>
      </section>
    </div>
  );
};
