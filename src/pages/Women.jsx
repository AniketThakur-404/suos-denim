import React from 'react'
import {products} from '../components/data.js'
import ProductCard from '../components/ProductCard.jsx'
export default function Women(){return(<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12"><h1 className="text-3xl font-bold tracking-tight">Women's Denim</h1><p className="mt-2 text-slate-600">New shapes, timeless washes.</p><div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">{products.map(p=>(<ProductCard key={p.id} p={p}/>))}</div></section>)}
