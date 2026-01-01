'use client'

import { memo } from 'react'
import {
  Wallet,
  Bell,
  HelpCircle,
  BookOpen,
  LayoutGrid,
} from 'lucide-react'

export const FooterBar = memo(function FooterBar() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50">
      <div className="h-12 w-full border-t border-white/5 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex h-full max-w-[1600px] items-center justify-between px-4 text-sm text-white/70">
          
          {/* LEFT SECTION */}
          <div className="flex items-center gap-3">
            {/* Preset */}
            <button className="flex cursor-pointer items-center gap-2 rounded-md bg-blue-600/10 px-3 py-1 text-sm font-medium text-blue-400 hover:bg-blue-600/20">
              ☰ PRESET 1
            </button>

            <Divider />

            {/* Counters */}
            <div className="flex items-center gap-3">
              <Counter label="1" />
              <Counter label="0" />
            </div>

            <Divider />

            {/* Quick links */}
            <FooterLink>Wallet</FooterLink>
            <FooterLink>X Twitter</FooterLink>
            <FooterLink>Discover</FooterLink>
            <FooterLink className="text-blue-400">Pulse</FooterLink>
            <FooterLink>PnL</FooterLink>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex items-center gap-4">
            {/* Balance */}
            <div className="cursor-pointer font-semibold text-emerald-400 hover:text-emerald-300">
              $124.77
            </div>

            <Divider />

            {/* Region */}
            <button className="flex cursor-pointer items-center gap-2 hover:text-white">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              GLOBAL
            </button>

            <Divider />

            {/* Icons */}
            <IconButton>
              <LayoutGrid size={16} />
            </IconButton>
            <IconButton>
              <Bell size={16} />
            </IconButton>
            <IconButton>
              <HelpCircle size={16} />
            </IconButton>
            <IconButton>
              <BookOpen size={16} />
            </IconButton>
            <IconButton>X</IconButton>
            <IconButton>Docs</IconButton>
          </div>
        </div>
      </div>
    </footer>
  )
})

/* =========================
   SUB COMPONENTS
========================= */

function FooterLink({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <button
      className={`cursor-pointer transition-colors hover:text-white ${className}`}
    >
      {children}
    </button>
  )
}

function IconButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-md hover:bg-white/10 hover:text-white transition">
      {children}
    </button>
  )
}

function Divider() {
  return <div className="h-4 w-px bg-white/10" />
}

function Counter({ label }: { label: string }) {
  return (
    <button className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-md bg-white/5 text-xs font-medium text-white/80 hover:bg-white/10 transition">
      {label}
    </button>
  )
}
