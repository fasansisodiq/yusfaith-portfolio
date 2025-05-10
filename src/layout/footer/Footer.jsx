import React from "react";

const Footer = ({ isHidden }) => {
  return (
    <div className={`"h-20 bg-amber-300" ${isHidden ? "hidden" : "block"}`}>
      Footer
    </div>
  );
};

export default Footer;
