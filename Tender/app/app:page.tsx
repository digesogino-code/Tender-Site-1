{\rtf1\ansi\ansicpg1252\cocoartf2869
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fmodern\fcharset0 Courier;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26\fsmilli13333 \cf0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 'use client';\
\
import \{ useState \} from 'react';\
import Link from 'next/link';\
import \{ Search, Plus, Crown \} from 'lucide-react';\
\
export default function Home() \{\
  const [searchTerm, setSearchTerm] = useState('');\
\
  return (\
    <main className="min-h-screen bg-zinc-950 text-white">\
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">\
        <h1 className="text-7xl font-serif mb-6">Tender</h1>\
        <p className="text-3xl text-zinc-400 mb-12">Rare Diamonds. Real Value.</p>\
        \
        <div className="max-w-md mx-auto">\
          <input\
            type="text"\
            placeholder="Search diamonds..."\
            className="w-full bg-zinc-900 border border-zinc-700 px-6 py-4 rounded-3xl text-lg"\
            value=\{searchTerm\}\
            onChange=\{(e) => setSearchTerm(e.target.value)\}\
          />\
        </div>\
\
        <p className="mt-12 text-emerald-400">\uc0\u9989  Deployment Test Page</p>\
        <p className="text-zinc-500 mt-2">If you can see this, your site is working!</p>\
      </div>\
    </main>\
  );\
\}\
}