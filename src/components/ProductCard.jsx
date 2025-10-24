import React from 'react'
import { ShoppingBag } from 'lucide-react'
import { motion } from 'framer-motion'
import StarRating from './StarRating.jsx'

export default function ProductCard({ p }) {
  return (
    <div className="group">
      {/* local keyframes for the shine sweep */}
      <style>{`
        @keyframes shine {
          0%   { transform: translateX(-160%) skewX(-20deg); }
          100% { transform: translateX(260%)  skewX(-20deg); }
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative rounded-2xl overflow-hidden bg-white ring-1 ring-slate-200/70 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
      >
        {/* Media */}
        <div className="relative aspect-[4/5] overflow-hidden">
          {/* Image zoom on hover */}
          <img
            src={p.img}
            alt={p.name}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Soft dark gradient for legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {/* Glossy shine sweep (runs on hover) */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div
              className="
                absolute top-0 -left-1/3 h-full w-1/3
                bg-white/18
                opacity-0
                group-hover:opacity-100
                group-hover:[animation:shine_1.1s_ease]
                will-change-transform
              "
              style={{ mixBlendMode: 'screen' }}
            />
          </div>

          {/* CTA: slides up on hover */}
          <button
            className="
              absolute bottom-3 left-3 right-3 inline-flex items-center justify-center gap-2
              rounded-xl bg-slate-900/90 text-white py-2 text-sm
              opacity-0 translate-y-3
              transition-all duration-300
              group-hover:opacity-100 group-hover:translate-y-0
              ring-1 ring-white/10 backdrop-blur-[2px]
            "
          >
            <ShoppingBag className="h-4 w-4" />
            Add to cart
          </button>
        </div>

        {/* Info */}
        <div className="p-4">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-sm font-medium tracking-tight">{p.name}</h3>
            <span className="text-sm font-semibold">₹{p.price.toLocaleString('en-IN')}</span>
          </div>
          <div className="mt-2">
            <StarRating value={p.rating} />
          </div>
        </div>
      </motion.div>
    </div>
  )
}
