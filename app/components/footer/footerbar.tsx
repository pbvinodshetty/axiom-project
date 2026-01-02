'use client'

import { memo } from 'react'
import {
  Wallet,
  Settings,
  Compass,
  Activity,
  BarChart3,
  Flame,
  Waves,
  ChevronDown,
  LayoutGrid,
  Bell,
  Palette,
  FileText,
} from 'lucide-react'

export const Footerbar = memo(function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/5 bg-black/80 backdrop-blur whitespace-nowrap">
      <div className="mx-auto flex h-12 max-w-[1440px] items-center px-3 py-3 text-sm text-white/80">
        {/* SHRINK-SAFE WRAPPER */}
        <div className="flex min-w-0 h-10 flex-1 items-center overflow-hidden">

          {/* ================= SECTION 1 ================= */}
          <div className="flex shrink-0 items-center gap-2">
            <button className="flex items-center gap-2 rounded-full bg-blue-600/15 px-3 py-1 text-blue-400 hover:bg-blue-600/25 cursor-pointer">
              ⚙ PRESET 1
            </button>

            <button className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 hover:bg-white/10 cursor-pointer">
              <Wallet size={14} />
              <span>1</span>
              <span className="opacity-60">◎</span>
              <span>0</span>
              <ChevronDown size={12} className="opacity-60" />
            </button>
          </div>

          <Divider />

          {/* ================= SECTION 2 ================= */}
          <div className="flex shrink-0 items-center gap-1">
            <FooterItem icon={<Settings size={14} />} />
            <FooterItem icon={<Wallet size={14} />} label="Wallet" />
            <FooterItem icon={<span className="font-bold">X</span>} label="Twitter" />
            <FooterItem icon={<Compass size={14} />} label="Discover" />
            <FooterItem icon={<Activity size={14} />} label="Pulse" />
            <FooterItem icon={<BarChart3 size={14} />} label="PnL" />
          </div>

          <Divider />

          {/* ================= SECTION 3 ================= */}
          <div className="flex shrink-0 items-center">
            <button className="flex items-center gap-2 rounded-full border border-transparent bg-gradient-to-r from-emerald-500/40 via-orange-500/40 to-pink-500/40 p-[1px] cursor-pointer">
              <div className="flex items-center gap-2 rounded-full bg-black px-3 py-1">
                <Waves size={14} className="text-emerald-400" />
                <Flame size={14} className="text-orange-400" />
                <Activity size={14} className="text-pink-400" />
              </div>
            </button>
          </div>

          <Divider />

          {/* ================= SECTION 4 ================= */}
          <div className="flex shrink-0 items-center gap-3">
            <div className="flex items-center gap-1 font-semibold text-emerald-400 cursor-pointer">
              ◎ $125.12
            </div>

            <div className="flex items-center gap-2 rounded-full bg-emerald-500/15 px-3 py-1 text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.4)] cursor-pointer">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Connection is stable
            </div>

            <button className="flex items-center gap-1 rounded-md px-2 py-1 hover:bg-white/10 cursor-pointer">
              GLOBAL
              <ChevronDown size={12} />
            </button>
          </div>

          <Divider />

          {/* ================= SECTION 5 ================= */}
          <div className="flex shrink-0 items-center gap-1">
            <SquareIcon><LayoutGrid size={16} /></SquareIcon>
            <SquareIcon><Bell size={16} /></SquareIcon>
            <SquareIcon><Palette size={16} /></SquareIcon>
          </div>

          <Divider />

          {/* ================= SECTION 6 ================= */}
          <div className="flex shrink-0 items-center gap-3">
            <button className="cursor-pointer text-white/80 hover:text-white/50 transition">
              🟣
            </button>

            <button className="cursor-pointer text-white/80 hover:text-white/50 transition">
              X
            </button>

            <button className="flex items-center gap-1 rounded-md px-2 py-1 hover:bg-white/10 cursor-pointer">
              <FileText size={14} />
              Docs
            </button>
          </div>

        </div>
      </div>
    </footer>
  )
})

/* ================= SUB COMPONENTS ================= */

function FooterItem({
  icon,
  label,
}: {
  icon: React.ReactNode
  label?: string
}) {
  return (
    <button className="relative flex items-center gap-2 rounded-md px-3 py-1 hover:bg-white/10 cursor-pointer">
      {icon}
      {label && <span>{label}</span>}
      <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-pink-500" />
    </button>
  )
}

function SquareIcon({ children }: { children: React.ReactNode }) {
  return (
    <button className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-white/10 cursor-pointer transition">
      {children}
    </button>
  )
}

function Divider() {
  return <div className="mx-3 h-5 w-px bg-white/10 shrink-0" />
}
