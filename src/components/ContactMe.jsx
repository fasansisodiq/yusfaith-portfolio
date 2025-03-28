
import Input from "./Input"
import Button from "./Button"
import BorderHider from "./BorderHider"


function ContactMe() {
  return (
    <div className="text-white flex flex-col lg:pt-30  h-screen">
      <h1 className="capitalize lg:text-5xl font-semibold lg:pt-10 pb-5 ">contact me</h1>
      <form className="flex flex-col gap-6 lg:gap-10">
        <Input type={'text'} placeholder={'name'} />
        <Input  type={"email"} placeholder={"email"}/>
        <BorderHider>
        <textarea className={`w-full h-50 outline-0 placeholder:text-xl placeholder:text-white placeholder:capitalize pt-4 pl-4 `} placeholder="message"/>
        </BorderHider>
        <Button label={"submit"} icon={""} btnClassName={"w-30 items-center text-xl"}/>
      </form>
    </div>
  )
}

export default ContactMe
