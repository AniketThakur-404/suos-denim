import React from 'react'
import {categories} from './data.js'
import {ChevronRight} from 'lucide-react'
import {Link} from 'react-router-dom'
export default function Categories(){
  return(<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
    <div className="flex items-end justify-between"><h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Shop Categories</h2><Link to="/new" className="text-sm font-semibold flex items-center gap-1">View all <ChevronRight className="h-4 w-4"/></Link></div>
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">{categories.map(c=>(<Link key={c.key} to={`/${c.key}`} className="group relative overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-200"><img src={c.img} alt={`${c.label} category`} className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent"/><div className="absolute bottom-4 left-4"><span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold shadow">{c.label}</span><p className="mt-2 text-white/90 text-sm max-w-[18rem] hidden sm:block">Hand‑finished denim made to move with you.</p></div></Link>))}</div>
  </section>)}
