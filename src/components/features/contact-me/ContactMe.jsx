import { usePortState } from "../../../hooks/PortfolioContext";
import BorderHider from "../../utils/BorderHider";
import Button from "../../utils/Button";
import Input from "../../utils/Input";

function ContactMe() {
  const { showPageNav } = usePortState();
  return (
    <div
      className={`w-full  ${
        showPageNav ? "h-screen" : "h-fit sm:pt-10 lg:pt-20"
      } text-white flex flex-col justify-center sm:pt-30 lg:pt-20  `}
    >
      <h1 className="capitalize text-2xl sm:text-3xl lg:text-5xl xl:text-5xl font-semibold lg:pt-10 pb-5 ">
        contact me
      </h1>
      <form className="flex flex-col gap-6 lg:gap-10">
        <Input type={"text"} placeholder={"name"} />
        <Input type={"email"} placeholder={"email"} />
        <BorderHider>
          <textarea
            type="text"
            className={`w-full h-40 sm:h-50 outline-0 placeholder:text-xl placeholder:text-white placeholder:capitalize pt-4 pl-4 `}
            placeholder="message"
          />
        </BorderHider>
        <Button
          label={"submit"}
          icon={""}
          btnClassName={"w-30 items-center text-xl"}
        />
      </form>
    </div>
  );
}

export default ContactMe;
