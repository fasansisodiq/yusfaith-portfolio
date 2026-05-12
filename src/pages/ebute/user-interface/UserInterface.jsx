import React from "react";
import { SectionTitle } from "../../../components/ui/section-title";
import { IconCheck } from "@tabler/icons-react";
import uiImg from "../../../assests/images/userinterface.png";

const UserInterface = () => {
  return (
    <section className="pt-24">
      <SectionTitle
        title="For Administrators"
        subtitle="USERS INTERFACE"
        className="mb-12"
      />
      <div className="w-full">
        <img loading="lazy" decoding="async" src={uiImg} alt="User Interface" />
      </div>
    </section>
  );
};

export default UserInterface;
