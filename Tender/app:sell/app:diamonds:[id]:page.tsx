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
import \{ useParams \} from 'next/navigation';\
import \{ Award, Shield, Truck \} from 'lucide-react';\
\
const mockListings: any = \{\
  '1': \{\
    id: '1',\
    carat: 1.52,\
    color: 'D',\
    clarity: 'VVS1',\
    cut: 'Excellent',\
    price: 12450,\
    shape: 'Round',\
    certification: 'GIA',\
    image: 'https://picsum.photos/id/1015/800/600',\
    provenance: "Mine-to-Market \'95 Conflict Free \'95 Ethical Sourcing",\
    fluorescence: "None",\
    polish: "Excellent",\
    symmetry: "Excellent",\
    measurements: "7.35 - 7.38 x 4.52 mm",\
    depth: "62.1%",\
    table: "56%",\
    girdle: "Medium to Slightly Thick",\
    culet: "None"\
  \}\
\};\
\
export default function DiamondDetail() \{\
  const params = useParams();\
  const diamond = mockListings[params.id as string];\
\
  if (!diamond) return <p className="text-center py-32 text-3xl">Diamond not found</p>;\
\
  return (\
    <div className="max-w-7xl mx-auto px-6 py-12">\
      <div className="grid lg:grid-cols-2 gap-12">\
        \{/* Media Section */\}\
        <div>\
          <img src=\{diamond.image\} alt=\{diamond.shape\} className="rounded-3xl w-full" />\
          <div className="mt-6 grid grid-cols-3 gap-4">\
            <div className="bg-zinc-900 rounded-2xl aspect-video flex items-center justify-center border border-zinc-800">\
              Photo 2\
            </div>\
            <div className="bg-zinc-900 rounded-2xl aspect-video flex items-center justify-center border border-zinc-800">\
              Photo 3\
            </div>\
            <div className="bg-zinc-900 rounded-2xl aspect-video flex items-center justify-center border border-zinc-800">\
              360\'b0 Video\
            </div>\
          </div>\
        </div>\
\
        \{/* Details Section */\}\
        <div>\
          <div className="flex justify-between items-start">\
            <div>\
              <h1 className="text-5xl font-serif">\{diamond.shape\} \{diamond.carat\}ct</h1>\
              <p className="text-2xl text-zinc-400">\{diamond.color\}\{diamond.clarity\} \'95 \{diamond.cut\}</p>\
            </div>\
            <p className="text-5xl font-semibold text-cyan-400">$\{diamond.price.toLocaleString()\}</p>\
          </div>\
\
          <div className="flex gap-6 mt-8">\
            <div className="flex items-center gap-2 text-emerald-400">\
              <Award className="w-6 h-6" /> \{diamond.certification\} Certified\
            </div>\
            <div className="flex items-center gap-2 text-amber-400">\
              <Shield className="w-6 h-6" /> Conflict Free\
            </div>\
            <div className="flex items-center gap-2 text-cyan-400">\
              <Truck className="w-6 h-6" /> Brinks Insured\
            </div>\
          </div>\
\
          <div className="mt-10 border border-zinc-800 rounded-3xl p-8">\
            <h3 className="text-xl font-semibold mb-6">Diamond Specifications</h3>\
            <div className="grid grid-cols-2 gap-y-6 text-sm">\
              <div><span className="text-zinc-400">Shape:</span> \{diamond.shape\}</div>\
              <div><span className="text-zinc-400">Measurements:</span> \{diamond.measurements\}</div>\
              <div><span className="text-zinc-400">Color:</span> \{diamond.color\}</div>\
              <div><span className="text-zinc-400">Clarity:</span> \{diamond.clarity\}</div>\
              <div><span className="text-zinc-400">Cut:</span> \{diamond.cut\}</div>\
              <div><span className="text-zinc-400">Polish:</span> \{diamond.polish\}</div>\
              <div><span className="text-zinc-400">Symmetry:</span> \{diamond.symmetry\}</div>\
              <div><span className="text-zinc-400">Depth %:</span> \{diamond.depth\}</div>\
              <div><span className="text-zinc-400">Table %:</span> \{diamond.table\}</div>\
              <div><span className="text-zinc-400">Fluorescence:</span> \{diamond.fluorescence\}</div>\
            </div>\
          </div>\
\
          <div className="mt-8 text-sm text-zinc-400 leading-relaxed">\
            \{diamond.provenance\}\
          </div>\
\
          <button className="mt-12 w-full bg-white text-black py-6 rounded-3xl text-xl font-semibold hover:bg-cyan-400 transition">\
            Buy Now \'95 Secure Escrow\
          </button>\
       ...\
}