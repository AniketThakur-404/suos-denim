import React,{useState} from 'react'
import {ShoppingBag,Menu,Search} from 'lucide-react'
import {Link} from 'react-router-dom'
import MobileNav from './MobileNav.jsx'
export default function Header(){
  const [open,setOpen]=useState(false)
  return(<header className="sticky top-0 z-30">
    <div className="bg-slate-900 text-white text-center text-xs sm:text-sm py-2"><p className="px-4">AW25 Indigo Capsule just dropped • Free shipping on orders over ₹999</p></div>
    <div className="backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <button aria-label="Open menu" className="lg:hidden p-2 rounded-lg hover:bg-slate-100" onClick={()=>setOpen(true)}><Menu className="h-5 w-5"/></button>
            <Link to="/" className="text-xl sm:text-2xl font-black tracking-[0.2em]">SUOS</Link>
          </div>
          <nav className="hidden lg:flex items-center gap-6 text-sm">
            <Link to="/men" className="hover:text-slate-900 text-slate-700">Men</Link>
            <Link to="/women" className="hover:text-slate-900 text-slate-700">Women</Link>
            <Link to="/new" className="hover:text-slate-900 text-slate-700">New</Link>
            <Link to="/sale" className="hover:text-slate-900 text-slate-700">Sale</Link>
            <Link to="/lookbook" className="hover:text-slate-900 text-slate-700">Lookbook</Link>
          </nav>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 rounded-full border px-3 py-1.5">
              <Search className="h-4 w-4 text-slate-500"/><input aria-label="Search" placeholder="Search denim..." className="bg-transparent outline-none text-sm w-40"/>
            </div>
            <button aria-label="Cart" className="relative p-2 rounded-lg hover:bg-slate-100"><ShoppingBag className="h-5 w-5"/><span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-slate-900 text-white text-[10px] grid place-items-center">2</span></button>
          </div>
        </div>
      </div>
    </div>
    <MobileNav open={open} setOpen={setOpen}/>
  </header>)}
