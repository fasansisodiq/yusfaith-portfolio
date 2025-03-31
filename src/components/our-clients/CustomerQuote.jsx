import React from 'react'

function CustomerQuote({quote}) {
  return (
    <div className='shake-container w-full text-slate-100 text-wrap lg:text-xl text-center normal-case'>
      &quot;{quote}&quot;
    </div>
  )
}

export default CustomerQuote
