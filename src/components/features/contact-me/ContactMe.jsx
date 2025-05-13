import { usePortState } from "../../../hooks/PortfolioContext";
import BorderHider from "../../ui/BorderHider";
import Button from "../../ui/Button";
import { LuSend } from "react-icons/lu";

import Input from "../../utils/Input";

function ContactMe() {
  const { showPageNav } = usePortState();
  return (
    <section
      id="contactMe"
      className={`w-full  ${
        showPageNav ? "h-screen" : "pt-10 lg:pt-20 mb-24"
      } text-white flex flex-col justify-center sm:pt-30 lg:pt-20 `}
    >
      <h3 className="capitalize text-2xl sm:text-3xl lg:text-5xl xl:text-5xl font-semibold lg:pt-10 pb-5 ">
        contact me
      </h3>
      <form className="flex flex-col gap-6 lg:gap-10">
        <Input type="text" placeholder="name" />
        <Input type="email" placeholder="email" />
        <BorderHider>
          <textarea
            type="text"
            className={`w-full h-40 sm:h-50 outline-0 placeholder:text-xl placeholder:text-white placeholder:capitalize pt-4 pl-4 `}
            placeholder="message"
          />
        </BorderHider>
        <Button
          type="Submit"
          label="Submit"
          className="w-fit"
          right_icon={
            <LuSend className="group-hover:rotate-45 transition ease-in-out duration-300" />
          }
        />
      </form>
    </section>
  );
}

export default ContactMe;
