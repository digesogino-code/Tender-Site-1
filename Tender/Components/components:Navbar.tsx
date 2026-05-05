{\rtf1\ansi\ansicpg1252\cocoartf2869
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fmodern\fcharset0 Courier;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26\fsmilli13333 \cf0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 import \{ Diamond \} from 'lucide-react';\
import Link from 'next/link';\
\
export default function Navbar() \{\
  return (\
    <nav className="border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-md sticky top-0 z-50">\
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">\
        <div className="flex items-center gap-3">\
          <Diamond className="w-9 h-9 text-cyan-400" />\
          <span className="text-3xl font-serif tracking-tight">Tender</span>\
        </div>\
        <div className="flex items-center gap-8 text-sm font-medium">\
          <Link href="/" className="hover:text-cyan-400 transition">Marketplace</Link>\
          <Link href="/sell" className="hover:text-cyan-400 transition">Sell Your Diamond</Link>\
          <Link href="/membership" className="hover:text-cyan-400 transition">Membership</Link>\
          <Link href="#" className="hover:text-cyan-400 transition">How It Works</Link>\
        </div>\
        <div className="flex items-center gap-4">\
          <button className="px-6 py-2.5 text-sm font-medium hover:bg-zinc-900 rounded-full">Log in</button>\
          <button className="bg-white text-black px-6 py-2.5 text-sm font-semibold rounded-full hover:bg-cyan-400">Start Selling</button>\
        </div>\
      </div>\
    </nav>\
  );\
\}\
}