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
import \{ Upload, X, Image as ImageIcon, Video, Camera \} from 'lucide-react';\
\
export default function SellPage() \{\
  const [images, setImages] = useState<File[]>([]);\
  const [videos, setVideos] = useState<File[]>([]);\
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);\
  const [videoPreviews, setVideoPreviews] = useState<string[]>([]);\
  const [uploading, setUploading] = useState(false);\
\
  // ... (same upload handlers as previous version - I can expand if needed)\
\
  return (\
    <div className="max-w-4xl mx-auto px-6 py-16">\
      <h1 className="text-5xl font-serif mb-2">Sell Your Diamond</h1>\
      <p className="text-zinc-400 mb-12">The more detailed your media, the faster it sells</p>\
\
      \{/* Photos Section */\}\
      <div className="mb-12">\
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-3"><ImageIcon /> High-Resolution Photos</h3>\
        <div className="border-2 border-dashed border-zinc-700 rounded-3xl p-12 text-center hover:border-cyan-500 transition">\
          <input type="file" multiple accept="image/*" className="hidden" id="img-upload" />\
          <label htmlFor="img-upload" className="cursor-pointer">\
            <Upload className="w-12 h-12 mx-auto mb-4 text-zinc-500" />\
            <p className="text-lg">Drop photos here or click to upload</p>\
          </label>\
        </div>\
      </div>\
\
      \{/* Videos Section */\}\
      <div className="mb-12">\
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-3"><Video /> Videos (360\'b0 recommended)</h3>\
        <div className="border-2 border-dashed border-zinc-700 rounded-3xl p-12 text-center hover:border-cyan-500 transition">\
          <input type="file" accept="video/mp4" className="hidden" id="vid-upload" />\
          <label htmlFor="vid-upload" className="cursor-pointer">\
            <Upload className="w-12 h-12 mx-auto mb-4 text-zinc-500" />\
            <p className="text-lg">Drop video here</p>\
          </label>\
        </div>\
      </div>\
\
      <button className="w-full bg-cyan-400 text-black py-6 rounded-3xl text-xl font-semibold">\
        Submit for Expert Review\
      </button>\
    </div>\
  );\
\}\
}