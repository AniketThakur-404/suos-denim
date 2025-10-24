import React from 'react'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CollectionBanner() {
  // optional still frame if you have one (else it just shows the video)
  const poster = '/assets/banner.png' // swap or remove if you don’t have this

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 text-white ring-1 ring-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* LEFT: SUOS copy */}
          <div className="p-8 sm:p-12">
            <p className="text-[11px] uppercase tracking-[0.35em] text-white/70">
              Limited Release
            </p>
            <h3 className="mt-2 text-3xl sm:text-4xl font-black tracking-tight">
              AW25 Indigo Capsule
            </h3>
            <p className="mt-3 text-sm sm:text-base text-white/85">
              Crafted with organic cotton and a low-water indigo dye for a deep, lasting SUOS blue.
              Reinforced seams. Selvedge options. Built to move and age beautifully.
            </p>

            {/* quick highlights to add substance */}
            <dl className="mt-6 grid grid-cols-2 gap-3 text-xs text-white/85">
              <div className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                <dt className="font-semibold">Fabric</dt>
                <dd className="mt-1">12–14oz organic denim</dd>
              </div>
              <div className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                <dt className="font-semibold">Dye</dt>
                <dd className="mt-1">Low-water indigo</dd>
              </div>
              <div className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                <dt className="font-semibold">Details</dt>
                <dd className="mt-1">Chain-stitch hems</dd>
              </div>
              <div className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                <dt className="font-semibold">Options</dt>
                <dd className="mt-1">Selvedge / Stretch</dd>
              </div>
            </dl>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/new"
                className="inline-flex items-center gap-2 rounded-2xl bg-white text-slate-900 px-5 py-3 font-semibold shadow-sm hover:shadow"
              >
                Explore capsule <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                to="/sustainability"
                className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-semibold ring-1 ring-white/25 hover:bg-white/5"
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* RIGHT: brand-relevant video (uses existing /hero.mp4) */}
          <div className="relative min-h-72">
            {/* play video when motion is allowed */}
            <video
              autoPlay
              muted
              loop
              playsInline
              poster={poster}
              className="absolute inset-0 h-full w-full object-cover hidden motion-safe:block"
            >
              <source src="/hero1.mp4" type="video/mp4" />
            </video>

            {/* fallback image for reduced-motion / old browsers */}
            <img
              src={poster || '/assets/model1.png'}
              alt="SUOS indigo capsule"
              className="absolute inset-0 h-full w-full object-cover block motion-safe:hidden"
            />

            {/* gentle blend to the left copy panel */}
            <div className="absolute inset-0 bg-gradient-to-l from-slate-900/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
