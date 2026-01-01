'use client'

import { memo, useState } from 'react'
import {
  Search,
  Bell,
  Star,
  ChevronDown,
  Layers,
  Box,
  User,
  Settings,
  Wallet,
  ArrowLeftRight,
} from 'lucide-react'
import clsx from 'clsx'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '../ui/dropdown-menu'
import { Button } from '../ui/button'

const baseItem =
  'flex items-center gap-3 rounded-md px-3 py-2 text-white/80 transition cursor-pointer'
const hoverItem = 'hover:bg-white/10 hover:text-white'
const selectedItem = 'bg-white/10 text-white'

export const NavRight = memo(function NavRight() {
  const [chain, setChain] = useState<'SOL' | 'BNB'>('SOL')

  return (
    <div className="flex items-center gap-6">
      {/* Search */}
      <Icon>
        <Search size={15} />
      </Icon>

      {/* Chain selector */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex h-7 items-center gap-1.5 rounded-full border border-emerald-500/30 px-3 text-sm text-white hover:bg-emerald-500/5 cursor-pointer">
            <Layers size={14} className="text-emerald-400" />
            {chain}
            <ChevronDown size={12} className="opacity-70" />
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="mt-2 w-44 rounded-lg bg-[#0b0e14] p-1 border border-white/10">
          <DropdownMenuItem
            onClick={() => setChain('SOL')}
            className={clsx(baseItem, hoverItem, chain === 'SOL' && selectedItem)}
          >
            <Layers size={14} className="text-emerald-400" />
            Solana
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => setChain('BNB')}
            className={clsx(baseItem, hoverItem, chain === 'BNB' && selectedItem)}
          >
            <Box size={14} className="text-yellow-400" />
            BNB
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Deposit */}
      <Button className="h-8 rounded-lg bg-blue-700 px-4 text-sm hover:bg-blue-600 cursor-pointer">
        Deposit
      </Button>

      {/* Star */}
      <Icon>
        <Star size={18} />
      </Icon>

      {/* Bell */}
      <Icon>
        <Bell size={15} />
      </Icon>

      {/* Wallet */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            aria-label="Wallet"
            className="flex h-8 items-center gap-2 rounded-full bg-white/10 px-3 text-white/80 shadow-md hover:bg-white/20 transition cursor-pointer"
          >
            <Wallet size={16} />
            <ChevronDown size={12} className="opacity-70" />
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="end"
          sideOffset={10}
          className="w-80 rounded-xl bg-[#0b0e14] p-4 shadow-2xl border border-white/10"
        >
          {/* Header */}
          <div className="mb-4 flex items-start justify-between">
            <div>
              <div className="text-sm text-white/60">Total Value</div>
              <div className="text-2xl font-semibold text-white">$0</div>
            </div>

            <div className="flex items-center gap-4 text-sm text-white/60">
              <span className="cursor-pointer hover:text-white">Solana</span>
              <span className="cursor-pointer hover:text-white">Perps</span>
            </div>
          </div>

          {/* Balance row */}
          <div className="mb-4 flex items-center justify-between rounded-lg bg-white/5 px-3 py-3">
            <div className="flex items-center gap-2 text-white">
              <Layers size={16} className="text-emerald-400" />
              <span>0</span>
            </div>

            <ArrowLeftRight size={16} className="text-white/40" />

            <div className="flex items-center gap-2 text-white">
              <Box size={16} className="text-blue-400" />
              <span>0</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <Button className="flex-1 rounded-lg bg-blue-600 hover:bg-blue-500 cursor-pointer">
              Deposit
            </Button>
            <Button
              variant="secondary"
              className="flex-1 rounded-lg bg-white/10 text-white hover:bg-white/20 cursor-pointer"
            >
              Withdraw
            </Button>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Avatar */}
      <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-xs font-semibold text-white cursor-pointer">
        C3
        <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-emerald-400 ring-2 ring-black" />
      </div>

      {/* Profile / Settings Button */}
      <button
        aria-label="Profile settings"
        className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/10 hover:text-white transition cursor-pointer"
      >
        <User size={14} />
        <span className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-black">
          <Settings size={13} className="text-white/70" />
        </span>
      </button>
    </div>
  )
})

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition cursor-pointer">
      {children}
    </button>
  )
}
