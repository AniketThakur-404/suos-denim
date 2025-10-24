import React from 'react'
import { ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* Optional: subtle dark fade for text legibility (remove if not needed) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 sm:py-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="inline-flex items-center rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white shadow ring-1 ring-white/10 backdrop-blur-sm">
            NEW • AW25 Indigo Capsule
          </p>

          <h1 className="mt-4 text-4xl sm:text-4xl font-black tracking-tight leading-[1.1] text-white drop-shadow">
            Denim engineered for{' '}
            <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              everyday movement
            </span>
          </h1>

          <p className="mt-4 text-white/70 text-base sm:text-sm leading-relaxed drop-shadow">
            SUOS crafts durable, comfortable denim built to last. Responsibly
            made. Effortlessly worn.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/men"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900/90 px-5 py-3 text-white font-semibold shadow hover:shadow-md ring-1 ring-white/10 backdrop-blur-sm"
            >
              Shop Men <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              to="/women"
              className="inline-flex items-center gap-2 rounded-xl bg-white/90 px-5 py-3 font-semibold ring-1 ring-white/40 hover:bg-white"
            >
              Shop Women <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
