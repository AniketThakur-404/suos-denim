import React from 'react'
import ProductCard from './ProductCard.jsx'
import {products} from './data.js'
import {ChevronRight} from 'lucide-react'
import {Link} from 'react-router-dom'
export default function Bestsellers(){return(<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12"><div className="flex items-end justify-between"><h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Bestsellers</h2><Link to="/sale" className="text-sm font-semibold flex items-center gap-1">Shop all <ChevronRight className="h-4 w-4"/></Link></div><div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">{products.map(p=>(<ProductCard key={p.id} p={p}/>))}</div></section>)}
