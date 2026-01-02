'use client'

import { Search, Info, Settings, LayoutGrid, Volume2, Target, Filter, ChevronDown } from 'lucide-react'

/* =========================
   COMPONENTS
========================= */

// Represents one token card (e.g., AnalWarts, SOLAMA)
function TokenCard({ name, mc, val, time, color = "blue" }: any) {
  const mcColor = color === "blue" ? "text-blue-400" : "text-yellow-500";
  
  return (
    <div className="group relative mb-2 rounded-md border border-white/5 bg-[#0b0e14] p-3 transition-all hover:border-white/20">
      <div className="flex justify-between items-start">
        <div className="flex gap-3">
          {/* Token Image Placeholder */}
          <div className="h-12 w-12 rounded bg-gray-900 border border-white/10 flex items-center justify-center text-[10px] text-white/20">
            IMG
          </div>
          <div>
            <div className="flex items-center gap-1 font-bold text-[13px]">
              {name} <span className="text-white/40 font-normal uppercase">{name}</span>
            </div>
            <div className="text-[11px] text-white/40 flex items-center gap-2">
              <span>{time}</span>
              <div className="flex gap-1 text-blue-400">
                <Search size={10} /> <Info size={10} /> <Target size={10} />
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-right">
          <div className="text-[10px] text-white/40">MC <span className={mcColor}>{mc}</span></div>
          <div className="text-[10px] text-white/40 text-glow">V <span className="text-white">${val}</span></div>
          <div className="text-[9px] text-white/30 uppercase mt-1">TX 2 —</div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="mt-3 flex items-center justify-between text-[10px]">
        <div className="flex gap-3 text-emerald-400/80">
          <span className="flex items-center gap-1">👤 10%</span>
          <span className="flex items-center gap-1">🌐 10% 5mo</span>
        </div>
        <div className="flex gap-2 text-rose-500/80">
          <span>🛑 10%</span>
          <span className="text-emerald-400">📦 0%</span>
        </div>
      </div>
    </div>
  )
}

// Represents one of the three main columns
function DashboardColumn({ title, count }: { title: string; count: string }) {
  return (
    <div className="flex flex-col border-r border-white/5 px-2 last:border-0">
      <div className="mb-3 flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <h2 className="text-[13px] font-bold text-white">{title}</h2>
          <span className="text-[11px] text-white/40">⚡ {count}</span>
        </div>
        <div className="flex items-center gap-3 text-white/30">
          <Filter size={12} className="hover:text-white cursor-pointer" />
          <div className="flex gap-1 text-[10px] font-bold">
            <span className="text-blue-500">P1</span>
            <span>P2</span>
            <span>P3</span>
          </div>
          <LayoutGrid size={12} className="hover:text-white cursor-pointer" />
        </div>
      </div>
      
      {/* Scrollable Content Area */}
      <div className="h-[calc(100vh-180px)] overflow-y-auto scrollbar-none pr-1">
        <TokenCard name="AnalWarts" mc="$3.59K" val="385" time="0s" />
        <TokenCard name="TikTok" mc="$614K" val="17K" time="17s" />
        <TokenCard name="SOLAMA" mc="$46.1K" val="12K" time="3m" color="yellow" />
        <TokenCard name="POOPCOIN" mc="$54.3K" val="13K" time="36s" color="yellow" />
        <TokenCard name="GAMBLE" mc="$7.06K" val="5K" time="17s" />
      </div>
    </div>
  )
}

/* =========================
   MAIN PAGE
========================= */

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Secondary Dashboard Header */}
      <div className="flex h-12 items-center justify-between border-b border-white/5 bg-[#0b0e14]/50 px-6">
        <div className="flex items-center gap-2">
          <h1 className="text-[15px] font-bold">Pulse</h1>
          <div className="flex items-center gap-1 rounded bg-purple-600/20 px-1.5 py-0.5 text-[10px] font-bold text-purple-400 ring-1 ring-purple-600/30">
             SOL
          </div>
          <div className="h-4 w-4 rounded-full bg-yellow-500/20 p-0.5">
             <div className="h-full w-full rounded-full bg-yellow-500" />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Info size={16} className="text-white/40 cursor-pointer" />
          <button className="flex items-center gap-2 rounded bg-white/5 border border-white/10 px-3 py-1 text-[12px] hover:bg-white/10 transition">
            <LayoutGrid size={14} />
            Display
            <ChevronDown size={12} />
          </button>
          <div className="flex gap-3 text-white/40">
            <Settings size={16} />
            <Volume2 size={16} />
            <Search size={16} />
          </div>
          <div className="flex items-center gap-1 text-[12px] bg-white/5 rounded px-2 py-1 border border-white/10">
            📑 1 🟢 0 <ChevronDown size={12} />
          </div>
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-3 gap-0 p-4 pt-2">
        <DashboardColumn title="New Pairs" count="0" />
        <DashboardColumn title="Final Stretch" count="0" />
        <DashboardColumn title="Migrated" count="0" />
      </div>
    </main>
  )
}