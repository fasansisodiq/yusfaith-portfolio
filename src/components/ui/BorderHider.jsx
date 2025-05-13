import React from "react";

const BorderHider = ({ children }) => {
  const [hideBorder, setHideBorder] = React.useState(true);
  return (
    <div
      onClick={() => setHideBorder(false)}
      onMouseEnter={() => setHideBorder(false)}
      onMouseLeave={() => setHideBorder(true)}
      className={`${
        hideBorder
          ? "rounded-bl-2xl rounded-br-2xl border-b-2 border-b-slate-300/40"
          : "rounded-2xl border-2 border-slate-300/40"
      }`}
    >
      {children}
    </div>
  );
};

export default BorderHider;
