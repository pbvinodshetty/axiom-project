'use client'

import { useEffect, useState } from 'react'
import {
  Search,
  Info,
  Settings,
  LayoutGrid,
  Volume2,
  Filter,
  ChevronDown,
  ExternalLink,
  Users,
  Eye,
  Crown
} from 'lucide-react'

/* =========================
   DEFAULT IMAGE (INLINE)
========================= */
const DEFAULT_IMAGE =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80">
    <rect width="100%" height="100%" rx="12" ry="12" fill="#111827"/>
    <text x="50%" y="55%" font-size="18" fill="#34d399" text-anchor="middle" font-family="Arial">SOL</text>
  </svg>
`)

/* =========================
   MOCK DATA POOL
========================= */
const TOKEN_POOL = Array.from({ length: 60 }).map((_, i) => ({
  id: i,
  title: 'CAPTURED',
  subtitle: `Token ${i + 1}`,
  address: `${Math.random().toString(36).slice(2, 6)}...pump`,
  mc: `$${(Math.random() * 5 + 3).toFixed(2)}K`,
  volume: Math.floor(Math.random() * 900 + 100),
  tx: Math.floor(Math.random() * 30),
  holders: Math.floor(Math.random() * 200),
  risk: Math.floor(Math.random() * 100),
  time: `${Math.floor(Math.random() * 10) + 1}s`,
}))

/* =========================
   TOKEN ROW
========================= */
function TokenRow({ token }: any) {
  return (
    <div
      className="
      grid grid-cols-[56px_1.6fr_1fr_auto]
      gap-3 px-2 py-3
      border-b border-white/5 last:border-b-0
      hover:bg-white/[0.03] transition
    "
    >
      {/* IMAGE */}
      <div className="relative">
        <div className="h-12 w-12 rounded-md overflow-hidden ring-2 ring-emerald-500/60">
          <img src={DEFAULT_IMAGE} className="h-full w-full object-cover" />
        </div>
        <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-emerald-500 border-2 border-[#0b0e14]" />
      </div>

      {/* NAME */}
      <div className="min-w-0">
        <div className="flex items-center gap-1 text-[14px] font-semibold leading-none">
          {token.title}
          <span className="text-white/40 font-normal">
            {token.subtitle}
          </span>
          <ExternalLink size={12} className="text-white/30" />
        </div>

        <div className="text-[11px] text-white/40 mt-0.5">
          {token.address}
        </div>

        <div className="mt-1.5 flex gap-4 text-[11px] text-white/50">
          <span className="flex items-center gap-1">
            <Users size={12} /> {token.holders}
          </span>
          <span className="flex items-center gap-1">
            <Eye size={12} /> 0
          </span>
          <span className="flex items-center gap-1">
            <Crown size={12} /> 0
          </span>
        </div>
      </div>

      {/* STATUS */}
      <div className="flex items-center gap-3 text-[11px]">
        <span className="text-emerald-400">🟢 0%</span>
        <span className="text-emerald-400">👤 3%</span>
        <span className="text-emerald-400">🌐 2mo</span>
        <span className="text-rose-500">⛔ {token.risk}%</span>
      </div>

      {/* RIGHT */}
      <div className="text-right text-[12px] leading-tight">
        <div className="text-white/50">
          MC <span className="text-sky-400 font-semibold">{token.mc}</span>
        </div>
        <div className="text-white/50">
          V <span className="text-white">${token.volume}</span>
        </div>
        <div className="text-white/30 text-[11px] mt-0.5">
          TX {token.tx}
        </div>
      </div>
    </div>
  )
}

/* =========================
   COLUMN
========================= */
function DashboardColumn({ title }: { title: string }) {
  const [tokens, setTokens] = useState<any[]>([])

  useEffect(() => {
    const update = () => {
      const shuffled = [...TOKEN_POOL].sort(() => 0.5 - Math.random())
      setTokens(shuffled.slice(0, 10)) // ✅ 10 CARDS
    }

    update()
    const interval = setInterval(update, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col border-r border-white/5 last:border-0">
      {/* HEADER */}
      <div className="sticky top-0 z-10 flex items-center justify-between bg-[#0b0e14] px-3 py-2 border-b border-white/5">
        <div className="flex items-center gap-2">
          <h2 className="text-[15px] font-semibold">{title}</h2>
          <span className="text-[11px] text-white/40">⚡ {tokens.length}</span>
        </div>

        <div className="flex items-center gap-3 text-white/40 text-[11px]">
          <Filter size={14} />
          <span className="text-blue-500 font-semibold">P1</span>
          <span>P2</span>
          <span>P3</span>
          <LayoutGrid size={14} />
        </div>
      </div>

      {/* LIST */}
      <div className="h-[calc(100vh-112px)] overflow-y-auto pulse-scroll">
        {tokens.map((t) => (
          <TokenRow key={`${t.id}-${Math.random()}`} token={t} />
        ))}
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
      {/* TOP BAR */}
      <div className="flex h-12 items-center justify-between border-b border-white/5 bg-[#0b0e14] px-6">
        <div className="flex items-center gap-2">
          <h1 className="text-[15px] font-bold">Pulse</h1>
          <span className="rounded bg-purple-600/20 px-2 py-0.5 text-[10px] font-bold text-purple-400">
            SOL
          </span>
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
        </div>

        <div className="flex items-center gap-4 text-white/60">
          <Info size={16} />
          <button className="flex items-center gap-2 rounded bg-white/5 px-3 py-1 text-[12px]">
            <LayoutGrid size={14} /> Display <ChevronDown size={12} />
          </button>
          <Settings size={16} />
          <Volume2 size={16} />
          <Search size={16} />
          <div className="rounded bg-white/5 px-2 py-1 text-[12px]">
            📑 1 🟢 0 <ChevronDown size={12} />
          </div>
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-3 px-3 pt-2">
        <DashboardColumn title="New Pairs" />
        <DashboardColumn title="Final Stretch" />
        <DashboardColumn title="Migrated" />
      </div>
    </main>
  )
}
