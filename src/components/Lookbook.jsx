import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { products } from './data.js'

// Map fits to any product images you already have in data.js.
// If you want specific images, swap the img paths below.
const FITS = [
  { key: 'slim',    title: 'Slim',    desc: 'Lean through thigh with a tapered leg.',    img: products[0]?.img || '/assets/fit-slim.jpg' },
  { key: 'straight',title: 'Straight',desc: 'Classic rise with a straight knee to hem.', img: products[1]?.img || '/assets/fit-straight.jpg' },
  { key: 'relaxed', title: 'Relaxed', desc: 'Extra room through seat and thigh.',        img: products[2]?.img || '/assets/fit-relaxed.jpg' },
]

export default function Lookbook() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Denim Fit Guide</h2>
        <Link to="/men" className="text-sm font-semibold">Shop all fits</Link>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {FITS.map((fit, i) => (
          <motion.div
            key={fit.key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group relative overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-white"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={fit.img}
                alt={`${fit.title} fit`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-xl font-bold">{fit.title}</h3>
                <p className="mt-1 text-sm text-white/85">{fit.desc}</p>
              </div>
            </div>

            <div className="p-4 flex items-center justify-between">
              <Link
                to={`/men?fit=${fit.key}`}
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-white text-sm font-semibold hover:shadow"
              >
                Explore {fit.title}
              </Link>
              <Link
                to="/sizing"
                className="text-sm text-slate-600 hover:text-slate-900"
              >
                Size guide
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
