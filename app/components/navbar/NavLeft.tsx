'use client'

import { memo, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  ChevronLeft,
  ChevronRight,
  Settings,
  Star,
  LineChart,
} from 'lucide-react'
import clsx from 'clsx'
import Image from 'next/image'


/* =========================
   CONFIG
========================= */

const NAV_ITEMS = [
  'Discover',
  'Pulse',
  'Trackers',
  'Perpetuals',
  'Yield',
  'Vision',
  'Portfolio',
  'Rewards'
]

const ITEM_WIDTH = 75
const VISIBLE_ITEMS = 6.7
const SCROLL_SPEED = 2

/* =========================
   COMPONENT
========================= */

export const NavLeft = memo(function NavLeft() {
  // 🚨 ONLY THIS ELEMENT WILL EVER SCROLL
  const railRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)
  const pathname = usePathname()

  const startScroll = (dir: 'left' | 'right') => {
    stopScroll()

    const step = () => {
      if (!railRef.current) return
      railRef.current.scrollLeft +=
        dir === 'left' ? -SCROLL_SPEED : SCROLL_SPEED
      rafRef.current = requestAnimationFrame(step)
    }

    rafRef.current = requestAnimationFrame(step)
  }

  const stopScroll = () => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }
  }

  return (
    <div className="flex items-center gap-10">
      {/* LOGO — FIXED */}
      <div className="flex items-center gap-3">
        <Image
           src="/logo.png"
               alt="Your Brand"
                width={45}
                height={28}
                  priority
                  
                   />
      </div>

      {/* NAV ITEMS ZONE */}
      <div className="relative group flex items-center">
        {/* LEFT ARROW — FIXED */}
        <Arrow
          side="left"
          onEnter={() => startScroll('left')}
          onLeave={stopScroll}
        >
          <ChevronLeft size={16} />
        </Arrow>

        {/* VIEWPORT — FIXED WIDTH, NEVER SCROLLS */}
        <div
          className="overflow-hidden"
          style={{ width: ITEM_WIDTH * VISIBLE_ITEMS }}
        >
          {/* SCROLL RAIL — THE ONLY SCROLLABLE ELEMENT */}
          <div
            ref={railRef}
            className="overflow-x-scroll scrollbar-none"
          >
            <ul className="flex">
              {NAV_ITEMS.map((label) => {
                const href = `/${label.toLowerCase()}`
                const active = pathname === href

                return (
                  <li
                    key={label}
                    className="flex shrink-0 justify-center"
                    style={{ width: ITEM_WIDTH }}
                  >
                    <Link
                      href={href}
                      className={clsx(
                        'flex h-8 items-center justify-center rounded-md px-2 text-sm font-medium',
                        'cursor-pointer transition-all duration-150',
                         active
                        ? 'text-blue-500  '
                        : 'text-white/70 hover:text-blue-500 hover:bg-blue-500/10'
                      )}
                    >
                      {label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        {/* RIGHT ARROW — FIXED */}
        <Arrow
          side="right"
          onEnter={() => startScroll('right')}
          onLeave={stopScroll}
        >
          <ChevronRight size={16} />
        </Arrow>
      </div>

     
    </div>
  )
})

/* =========================
   HELPERS
========================= */

function Arrow({
  children,
  side,
  onEnter,
  onLeave,
}: {
  children: React.ReactNode
  side: 'left' | 'right'
  onEnter: () => void
  onLeave: () => void
}) {
  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className={clsx(
        'absolute z-10 flex h-8 w-8 items-center justify-center rounded-md',
        'bg-black/70 text-white/70 backdrop-blur',
        'opacity-0 pointer-events-none transition-opacity duration-150',
        'group-hover:opacity-100 group-hover:pointer-events-auto',
        side === 'left' && '-left-10',
        side === 'right' && '-right-10'
      )}
    >
      {children}
    </div>
  )
}


