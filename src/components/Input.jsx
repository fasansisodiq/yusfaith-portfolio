import BorderHider from "./BorderHider"

function Input({type, placeholder}) {
    
  return (
    
    <BorderHider>
        <input 
       className={`text-xl placeholder:text-xl placeholder:text-white placeholder:capitalize w-full h-10 lg:h-20  outline-0   pl-4 `} type={type} placeholder={placeholder}/>
    </BorderHider>
  )
}

export default Input
