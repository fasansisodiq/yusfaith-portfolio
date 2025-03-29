import React from 'react'
import QuoteCard from './QuoteCard'
const quotes = [{name : "dev qazeem",position:"data analyst", src:"./sodiq3.png", quote:"Their designs are not just appealing, but also incredibly user-friendly."},{name : "dev smith",position:"web developer", quote:"Their designs are not just appealing, but also incredibly user-friendly."},{name : "dev sodiq" ,position:"full-stack enginer", src:"", quote:"Their designs are not just appealing, but also incredibly user-friendly."}]
function QuotesContainer() {

  return (
    <div className={`flex justify-center items-center gap-4 h-screen
    `} >
     
      {quotes.map((quote, idx)=><QuoteCard src={quote.src}  name={quote.name} position={quote.position} quote={quote.quote} key={idx}/>)}
    </div>
  )
}

export default QuotesContainer
