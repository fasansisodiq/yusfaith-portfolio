import React from "react";
import heroImg from "../../assests/images/yusuf.jpg";

export const HeroImg = () => {
  return (
    <div className="image relative group aspect-[5/6] max-w-[500px] w-full order-1 md:order-2">
      <div className="relative w-full h-full rounded-4xl border border-white/40 shadow-md overflow-hidden">
        <img
          loading="lazy"
          decoding="async"
          className="relative w-full h-full object-cover object-bottom z-10 hover:scale-105 transition-transform ease-in-out duration-300"
          src={heroImg}
          alt="Adulraheem Yusuf - UI/UX Designer"
        />
      </div>

      <div className="absolute inset-0 rounded-4xl bg-white/20 rotate-3 group-hover:rotate-6 transition-transform duration-300" />
    </div>
  );
};

//  <div className="image relative group aspect-[5/6] max-w-[500px] w-full order-1 md:order-2">
//       <div className="relative w-[25.313rem] h-full rounded-[8.75rem] border border-white/30 overflow-hidden">
//         <img
//           loading="lazy"
//           decoding="async"
//           className="relative w-full h-full object-cover z-10 hover:scale-105 transition-transform ease-in-out duration-300"
//           src={heroImg}
//           alt="Adulraheem Yusuf - UI/UX Designer"
//         />
//       </div>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="506"
//         height="590"
//         viewBox="0 0 506 590"
//         className="absolute -top-14 -left-14 mix-blend-screen"
//       >
//         <defs>
//           <style>{`.cls-1 { fill: none; stroke: #ffffff; stroke-opacity: 0.2; stroke-width: 4px; fill-rule: evenodd; }`}</style>
//         </defs>
//         <path
//           className="cls-1 "
//           d="M120,69l85.092-41.123A140.124,140.124,0,0,1,394.033,87.291L448,209c55.126,150.929,19.323,257.664-101.653,320.7L312,547c-68.569,35.729-156.22,29.543-192-39L41.843,335.081C-8.5,238.631,23.513,119.276,120,69Z"
//         />
//       </svg>

//       {/* <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="506"
//         height="590"
//         viewBox="0 0 506 590"
//         className="absolute -top-12 -left-13  mix-blend-screen"
//       >
//         <defs>
//           <style>
//             .cls-1{" "}
//             {`fill: none; stroke: #ffffff; stroke-opacity: 0.2; stroke-width: 4px; fill-rule: evenodd;`}
//           </style>
//         </defs>
//         <path
//           class="cls-1"
//           d="M253,38h80c86.29-2,149,66.71,149,149V386c0,89.47-91.53,169-181,169l-107-7c-76.768,0-158-85.232-149-162L61,179C93,79.648,135.648,50,253,38Z"
//         />
//       </svg> */}
//       {/*
//       <div className="absolute inset-0 rounded-[8.75rem] bg-white/20 rotate-3 group-hover:rotate-6 transition-transform duration-300" /> */}
//     </div>
