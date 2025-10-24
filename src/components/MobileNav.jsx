import React from 'react'
import {X} from 'lucide-react'
import {motion,AnimatePresence} from 'framer-motion'
import {Link} from 'react-router-dom'
export default function MobileNav({open,setOpen}){
  return(<AnimatePresence>{open&&(<motion.div key="mobile" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-40 bg-black/40 lg:hidden" onClick={()=>setOpen(false)}>
    <motion.div initial={{x:-280}} animate={{x:0}} exit={{x:-280}} transition={{type:'spring',stiffness:260,damping:30}} className="absolute left-0 top-0 h-full w-72 bg-white p-6 shadow-2xl" onClick={(e)=>e.stopPropagation()}>
      <div className="flex items-center justify-between"><span className="text-xl font-black tracking-wider">SUOS</span><button aria-label="Close menu" onClick={()=>setOpen(false)} className="p-2 rounded-lg hover:bg-slate-100"><X className="h-5 w-5"/></button></div>
      <nav className="mt-6 space-y-2">{[['Men','/men'],['Women','/women'],['New','/new'],['Sale','/sale'],['Lookbook','/lookbook']].map(([label,to])=> (<Link key={label} to={to} className="block rounded-xl px-3 py-2 text-slate-700 hover:bg-slate-100" onClick={()=>setOpen(false)}>{label}</Link>))}</nav>
      <div className="mt-8 grid grid-cols-3 gap-3"><Link to="/orders" className="rounded-xl border p-3 text-center text-xs hover:bg-slate-50">Orders</Link><Link to="/account" className="rounded-xl border p-3 text-center text-xs hover:bg-slate-50">Account</Link><Link to="/help" className="rounded-xl border p-3 text-center text-xs hover:bg-slate-50">Help</Link></div>
    </motion.div></motion.div>)}</AnimatePresence>)}
