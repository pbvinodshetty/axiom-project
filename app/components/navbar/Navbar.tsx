'use client'

import { memo } from 'react'
import { NavLeft } from './NavLeft'
import { NavRight } from './NavRight'
import {
  
  Settings,
  Star,
  LineChart,
} from 'lucide-react'


export const Navbar = memo(function Navbar() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full">
        {/* background + blur */}
        <div className="h-16 w-full border-b border-white/5 bg-black/70 backdrop-blur-xl">
          <div className="mx-auto flex h-full max-w-[1600px] items-center justify-between px-6">
            <NavLeft />
            <NavRight />
          </div>
        </div>

        {/* subtle bottom glow line */}
        <div className="h-px w-full border-t border-white/5 bg-black/80 backdrop-blur-xl" />
      

      {/* UTILITIES — FIXED */}
    
      <div className=" sticky flex items-center gap-2 border-l border-white/10 pl-4" >
      
        <Util>
          <Settings size={14} />
        </Util>
        <Divider/>
        
        <Util>
          <Star size={14} />
        </Util>
        <Util>
          <LineChart size={14} />
        </Util>
        <Divider />
      </div>
      <div className="h-12 w-full border-t border-white/5 bg-black/80 backdrop-blur-xl" />
      
          </header>
    </>
    
  )
})


function Util({ children }: { children: React.ReactNode }) {
  return (
    <button className="flex h-8 w-8 items-center justify-center rounded-md text-white/60 hover:bg-white/10 hover:text-white">
      {children}
    </button>
    
  )

}

function Divider() {
  return <div className="h-4 w-px bg-white/10" />
}
