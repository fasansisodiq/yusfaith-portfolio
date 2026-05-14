import React from "react";
import UseCard from "../../../components/use-card/UseCard";
import { SectionTitle } from "../../../components/ui/section-title";
import image from "../../../assests/images/iyepeui.png";

const UserInterface = () => {
  return (
    <section className="py-24">
      <SectionTitle
        title="For Administrators"
        subtitle="Users Interface"
        className="mb-12 [&>p]:max-w-4xl"
        color="hgreen"
      />
      <div className="w-full flex items-center justify-center">
        <img src={image} className={`w-full max-w-5xl h-auto`} />
      </div>
    </section>
  );
};

export default UserInterface;
