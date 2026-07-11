
// import React, { useEffect, useRef } from "react";
// import { TbNetwork } from "react-icons/tb";
// import {
//   FiTrendingUp,
//   FiLayers,
//   FiCode,
//   FiSearch,
//   FiGitBranch,
// } from "react-icons/fi";

// const FOCUS_AREAS = [
//   {
//     accent: "#6ee7c7",
//     icon: TbNetwork,
//     path: "ai/core",
//     title: "Artificial Intelligence",
//     desc: "Exploring intelligent systems and AI-powered solutions for real-world problems.",
//   },
//   {
//     accent: "#7c9eff",
//     icon: FiTrendingUp,
//     path: "ml/models",
//     title: "Machine Learning",
//     desc: "Designing predictive models and experimenting with modern machine learning techniques.",
//   },
//   {
//     accent: "#f0b429",
//     icon: FiLayers,
//     path: "web/stack",
//     title: "Full Stack Development",
//     desc: "Building responsive, scalable, and modern web applications using the MERN stack.",
//   },
//   {
//     accent: "#ff7a72",
//     icon: FiCode,
//     path: "cp/algo",
//     title: "Competitive Programming",
//     desc: "Strengthening algorithmic thinking and problem-solving through competitive coding.",
//   },
//   {
//     accent: "#c084fc",
//     icon: FiSearch,
//     path: "research/lab",
//     title: "Research & Innovation",
//     desc: "Conducting AI research and exploring innovative technologies with practical impact.",
//   },
//   {
//     accent: "#4ade80",
//     icon: FiGitBranch,
//     path: "oss/community",
//     title: "Open Source Learning",
//     desc: "Continuously learning from the developer community and contributing to collaborative projects.",
//   },
// ];

// export default function FocusArea() {
//   const cardRefs = useRef([]);

//   useEffect(() => {
//     const cards = cardRefs.current.filter(Boolean);

//     if ("IntersectionObserver" in window) {
//       const io = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//               const el = entry.target;
//               const idx = cards.indexOf(el);
//               setTimeout(() => el.classList.add("is-visible"), idx * 70);
//               io.unobserve(el);
//             }
//           });
//         },
//         { threshold: 0.15 },
//       );
//       cards.forEach((c) => io.observe(c));
//       return () => io.disconnect();
//     }

//     cards.forEach((c) => c.classList.add("is-visible"));
//   }, []);

//   return (
//     <section
//       className="bg-[#0a0d12] px-5 py-20 md:px-8 md:py-28"
//       aria-labelledby="fa-heading"
//     >
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

//         .fa-card {
//           opacity: 0;
//           transform: translateY(18px);
//           transition:
//             transform 0.55s cubic-bezier(0.2, 0.7, 0.2, 1),
//             opacity 0.55s ease,
//             border-color 0.35s ease,
//             background 0.35s ease;
//         }
//         .fa-card.is-visible {
//           opacity: 1;
//           transform: translateY(0);
//         }
//         .fa-card::before {
//           content: "";
//           position: absolute;
//           top: 0;
//           left: 0;
//           bottom: 0;
//           width: 3px;
//           background: var(--accent);
//           opacity: 0.55;
//           transition: opacity 0.35s ease, width 0.35s ease;
//         }
//         .fa-card::after {
//           content: "";
//           position: absolute;
//           top: 0;
//           left: -20%;
//           width: 40%;
//           height: 1px;
//           background: linear-gradient(90deg, transparent, var(--accent), transparent);
//           opacity: 0;
//           transition: opacity 0.4s ease;
//         }
//         .fa-card:hover {
//           border-color: color-mix(in srgb, var(--accent) 40%, #1e2530);
//           background: linear-gradient(180deg, #131826 0%, #0d1017 100%);
//           transform: translateY(-4px);
//         }
//         .fa-card:hover::before { opacity: 1; }
//         .fa-card:hover::after {
//           opacity: 1;
//           animation: fa-scan 1.6s ease-in-out infinite;
//         }
//         .fa-card:hover .fa-icon { transform: scale(1.06); }
//         .fa-card:hover .fa-path {
//           color: var(--accent);
//           border-color: color-mix(in srgb, var(--accent) 35%, #1e2530);
//         }
//         .fa-card:focus-within {
//           outline: 2px solid var(--accent);
//           outline-offset: 3px;
//         }
//         @keyframes fa-scan {
//           0% { left: -20%; }
//           100% { left: 100%; }
//         }
//         @media (prefers-reduced-motion: reduce) {
//           .fa-card, .fa-card::after, .fa-icon {
//             transition: none !important;
//             animation: none !important;
//           }
//           .fa-card { opacity: 1; transform: none; }
//         }
//       `}</style>

//       <div className="max-w-[1200px] mx-auto">
//         <div className="max-w-[640px] mx-auto mb-14 md:mb-[72px] text-center">
//           <span
//             className="relative inline-flex items-center gap-2.5 text-[12.5px] tracking-[0.14em] uppercase text-[#8b93a3] mb-[22px] pl-4"
//             style={{ fontFamily: "'JetBrains Mono', monospace" }}
//           >
//             <span className="absolute left-0 w-[7px] h-[7px] rounded-full bg-[#6ee7c7] shadow-[0_0_10px_1px_rgba(110,231,199,0.7)]" />
//             Currently tuning in
//           </span>
//           <h2
//             id="fa-heading"
//             className="text-[#f4f6f9] font-semibold text-[clamp(2.4rem,4.6vw,3.4rem)] tracking-[-0.02em] leading-[1.08] mb-[18px]"
//             style={{ fontFamily: "'Space Grotesk', sans-serif" }}
//           >
//             Focus Areas
//           </h2>
//           <p
//             className="text-[16.5px] leading-[1.6] text-[#8b93a3] font-normal m-0"
//             style={{ fontFamily: "'Inter', sans-serif" }}
//           >
//             The technologies and domains I'm continuously exploring, building,
//             and growing in.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
//           {FOCUS_AREAS.map((area, i) => {
//             const Icon = area.icon;
//             return (
//               <article
//                 key={area.title}
//                 ref={(el) => (cardRefs.current[i] = el)}
//                 tabIndex={0}
//                 data-accent={area.accent}
//                 className="fa-card relative rounded-[14px] border border-[#1e2530] p-[26px_22px] md:p-[30px_28px_28px] overflow-hidden bg-gradient-to-b from-[#10141c] to-[#0d1017] outline-none"
//                 style={{ "--accent": area.accent }}
//               >
//                 <div className="flex items-start justify-between mb-[22px]">
//                   <div
//                     className="fa-icon w-11 h-11 rounded-[10px] flex items-center justify-center flex-shrink-0 transition-transform duration-300"
//                     style={{
//                       background:
//                         "color-mix(in srgb, var(--accent) 12%, transparent)",
//                       border:
//                         "1px solid color-mix(in srgb, var(--accent) 28%, transparent)",
//                       color: "var(--accent)",
//                     }}
//                     aria-hidden="true"
//                   >
//                     <Icon size={22} />
//                   </div>
//                   <span
//                     className="fa-path text-[11.5px] tracking-[0.02em] text-[#5b6270] px-[9px] py-[5px] border border-[#1e2530] rounded-md whitespace-nowrap mt-[3px] transition-colors duration-300"
//                     style={{ fontFamily: "'JetBrains Mono', monospace" }}
//                   >
//                     {area.path}
//                   </span>
//                 </div>
//                 <h3
//                   className="text-[#f2f4f8] font-semibold text-[19px] tracking-[-0.01em] mb-[10px] mt-0"
//                   style={{ fontFamily: "'Space Grotesk', sans-serif" }}
//                 >
//                   {area.title}
//                 </h3>
//                 <p
//                   className="text-[14.5px] leading-[1.62] text-[#8b93a3] m-0"
//                   style={{ fontFamily: "'Inter', sans-serif" }}
//                 >
//                   {area.desc}
//                 </p>
//               </article>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }