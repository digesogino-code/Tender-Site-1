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
export default function MembershipPage() \{\
  const tiers = [\
    \{\
      name: "Tier C",\
      price: 0,\
      period: "/month",\
      description: "Basic browsing & limited details",\
      features: [\
        "View basic diamond info",\
        "Search marketplace",\
        "Public listings only"\
      ],\
      color: "zinc"\
    \},\
    \{\
      name: "Tier B",\
      price: 29,\
      period: "/month",\
      description: "Serious buyers & sellers",\
      features: [\
        "Full specifications",\
        "Seller contact info",\
        "10 trades per month",\
        "Basic provenance reports"\
      ],\
      color: "emerald",\
      popular: true\
    \},\
    \{\
      name: "Tier A",\
      price: 99,\
      period: "/month",\
      description: "Professional traders & investors",\
      features: [\
        "Unlimited trading",\
        "Escrow protection",\
        "Priority support",\
        "Malca Amit & Brinks priority shipping",\
        "Full GIA report access",\
        "Private sales network"\
      ],\
      color: "cyan"\
    \}\
  ];\
\
  return (\
    <div className="max-w-6xl mx-auto px-6 py-20">\
      <div className="text-center mb-16">\
        <h1 className="text-6xl font-serif tracking-tight mb-4">Tender Membership</h1>\
        <p className="text-2xl text-zinc-400">Choose the level that matches your diamond journey</p>\
      </div>\
\
      <div className="grid md:grid-cols-3 gap-8">\
        \{tiers.map((tier) => (\
          <div \
            key=\{tier.name\} \
            className=\{`border $\{tier.popular ? 'border-cyan-400 scale-105' : 'border-zinc-700'\} rounded-3xl p-10 relative bg-zinc-900`\}\
          >\
            \{tier.popular && (\
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-400 text-black text-sm font-semibold px-6 py-1 rounded-full">\
                MOST POPULAR\
              </div>\
            )\}\
            \
            <h3 className="text-3xl font-semibold mb-2">\{tier.name\}</h3>\
            <p className="text-6xl font-bold mb-1">\
              $\{tier.price\}\
              <span className="text-xl font-normal text-zinc-400">\{tier.period\}</span>\
            </p>\
            <p className="text-zinc-400 mb-8">\{tier.description\}</p>\
\
            <ul className="space-y-4 mb-10">\
              \{tier.features.map((feature, i) => (\
                <li key=\{i\} className="flex items-start gap-3">\
                  <span className="text-emerald-400 mt-1">\uc0\u10003 </span>\
                  <span>\{feature\}</span>\
                </li>\
              ))\}\
            </ul>\
\
            <button className=\{`w-full py-5 rounded-2xl font-semibold text-lg $\{tier.price === 0 ? 'bg-zinc-700' : 'bg-white text-black hover:bg-cyan-400'\}`\}>\
              \{tier.price === 0 ? 'Current Plan' : 'Upgrade Now'\}\
            </button>\
          </div>\
        ))\}\
      </div>\
    </div>\
  );\
\}\
}