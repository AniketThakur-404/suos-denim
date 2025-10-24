import React from 'react'
import {Star} from 'lucide-react'
export default function StarRating({value=0}){const stars=Array.from({length:5},(_,i)=>i+1);return(<div className="flex items-center gap-1" aria-label={`Rated ${value} out of 5`}>{stars.map(s=>(<Star key={s} className={`h-4 w-4 ${value>=s-0.2?'fill-current':'opacity-30'}`}/>))}<span className="ml-1 text-xs text-slate-500">{value.toFixed(1)}</span></div>)}
