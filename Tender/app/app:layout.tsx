{\rtf1\ansi\ansicpg1252\cocoartf2869
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;\f1\fmodern\fcharset0 Courier;}
{\colortbl;\red255\green255\blue255;\red70\green137\blue204;\red17\green19\blue21;\red140\green211\blue254;
\red202\green202\blue202;\red194\green126\blue101;\red212\green214\blue154;\red109\green109\blue109;\red67\green192\blue160;
}
{\*\expandedcolortbl;;\cssrgb\c33725\c61176\c83922;\cssrgb\c8627\c9412\c10980;\cssrgb\c61176\c86275\c99608;
\cssrgb\c83137\c83137\c83137;\cssrgb\c80784\c56863\c47059;\cssrgb\c86275\c86275\c66667;\cssrgb\c50196\c50196\c50196;\cssrgb\c30588\c78824\c69020;
}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 import\cf4 \strokec4  \cf2 \strokec2 type\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \strokec4  Metadata \cf5 \strokec5 \}\cf4 \strokec4  \cf2 \strokec2 from\cf4 \strokec4  \cf6 \strokec6 'next'\cf5 \strokec5 ;\cf4 \strokec4 \
\cf2 \strokec2 import\cf4 \strokec4  \cf6 \strokec6 './globals.css'\cf5 \strokec5 ;\cf4 \strokec4 \
\cf2 \strokec2 import\cf4 \strokec4  Navbar \cf2 \strokec2 from\cf4 \strokec4  \cf6 \strokec6 '@/components/Navbar'\cf5 \strokec5 ;\cf4 \strokec4 \
\cf2 \strokec2 import\cf4 \strokec4  Footer \cf2 \strokec2 from\cf4 \strokec4  \cf6 \strokec6 '@/components/Footer'\cf5 \strokec5 ;\cf4 \strokec4 \
\
\cf2 \strokec2 export\cf4 \strokec4  \cf2 \strokec2 const\cf4 \strokec4  metadata\cf5 \strokec5 :\cf4 \strokec4  Metadata \cf5 \strokec5 =\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \strokec4 \
  title\cf5 \strokec5 :\cf4 \strokec4  \cf6 \strokec6 'Tender \'97 Rare Diamonds'\cf5 \strokec5 ,\cf4 \strokec4 \
  description\cf5 \strokec5 :\cf4 \strokec4  \cf6 \strokec6 'Buy, sell & trade certified diamonds with transparency and trust.'\cf5 \strokec5 ,\cf4 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf5 \strokec5 \};\cf4 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \strokec2 export\cf4 \strokec4  \cf2 \strokec2 default\cf4 \strokec4  \cf2 \strokec2 function\cf4 \strokec4  \cf7 \strokec7 RootLayout\cf5 \strokec5 (\{\cf4 \strokec4 \
  children\cf5 \strokec5 ,\cf4 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf5 \strokec5 \}:\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \strokec4 \
  children\cf5 \strokec5 :\cf4 \strokec4  React\cf5 \strokec5 .\cf4 \strokec4 ReactNode\cf5 \strokec5 ;\cf4 \strokec4 \
\cf5 \strokec5 \})\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \strokec4 \
  \cf2 \strokec2 return\cf4 \strokec4  \cf5 \strokec5 (\cf4 \strokec4 \
    \cf8 \strokec8 <\cf2 \strokec2 html \cf4 \strokec4 lang\cf5 \strokec5 =\cf6 \strokec6 "en"\cf2 \strokec2  \cf4 \strokec4 className\cf5 \strokec5 =\cf6 \strokec6 "dark"\cf8 \strokec8 >\cf4 \strokec4 \
      \cf8 \strokec8 <\cf2 \strokec2 body \cf4 \strokec4 className\cf5 \strokec5 =\cf6 \strokec6 "bg-zinc-950 text-white antialiased"\cf8 \strokec8 >\cf4 \strokec4 \
        \cf8 \strokec8 <\cf9 \strokec9 Navbar\cf2 \strokec2  \cf8 \strokec8 />\cf4 \strokec4 \
        \cf5 \strokec5 \{\cf4 \strokec4 children\cf5 \strokec5 \}\cf4 \strokec4 \
        \cf8 \strokec8 <\cf9 \strokec9 Footer\cf2 \strokec2  \cf8 \strokec8 />\cf4 \strokec4 \
      \cf8 \strokec8 </\cf2 \strokec2 body\cf8 \strokec8 >\cf4 \strokec4 \
    \cf8 \strokec8 </\cf2 \strokec2 html\cf8 \strokec8 >\cf4 \strokec4 \
  \cf5 \strokec5 );\cf4 \strokec4 \
\cf5 \strokec5 \}
\f1 \
}