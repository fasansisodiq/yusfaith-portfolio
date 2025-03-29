import React from 'react'
import CustomerProfile from './CustomerProfile'
import CustomerQuote from './CustomerQuote'

function QuoteCard({name, position, quote,src}) {
  return (
    <div className={` shake-element  flex flex-col justify-center items-center perspective-origin-top-right`}>
      <img src={src} alt="quoter's picture" className='size-40 rounded-full rounded-bl-stone-500/65 translate-y-30 bg-blend-multiply'/>
        <div className=' flex flex-col justify-center items-center gap-4 w-[23rem] h-[25rem] px-1 border border-slate-300 bg-stone-500/65 rounded-3xl bg-gradient-to-r from-stone-500/65 from-10% via-stone-800 via-30% to-stone-500/65 to-70%'>
          <CustomerQuote quote={quote}/>
      <CustomerProfile name={name} position={position}/>
        </div>
    </div>
  )
}

export default QuoteCard
