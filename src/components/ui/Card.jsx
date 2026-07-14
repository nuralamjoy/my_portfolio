import React from "react";

const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`
        group
        relative
        overflow-hidden
        rounded-[20px]
        p-[1.5px]

        bg-[radial-gradient(140%_140%_at_0%_0%,#22d3ee_0%,#7c3aed_28%,#a855f7_48%,rgba(76,29,149,.25)_68%,rgba(76,29,149,0)_85%)]

        shadow-[0_10px_30px_rgba(76,29,149,.18)]

        transition-all
        duration-500
        ease-out

        hover:-translate-y-2
        hover:scale-[1.015]

        hover:bg-[radial-gradient(160%_160%_at_0%_0%,#22d3ee_0%,#7c3aed_35%,#a855f7_58%,rgba(76,29,149,.40)_78%,rgba(76,29,149,0)_92%)]

        hover:shadow-[0_20px_45px_rgba(124,58,237,.32),0_0_30px_rgba(34,211,238,.18),0_0_0_1px_rgba(34,211,238,.15)]

        ${className}
      `}
    >
      <div
        className="
          relative
          h-full
          overflow-hidden
          rounded-[18.5px]

          bg-[linear-gradient(160deg,#16121f_0%,#100e19_55%,#0c1018_100%)]

          dark:bg-[linear-gradient(160deg,#16121f_0%,#100e19_55%,#0c1018_100%)]
          light:bg-[linear-gradient(160deg,#ffffff_0%,#f6f3fe_55%,#f1fbfd_100%)]

          before:absolute
          before:inset-0
          before:content-['']
          before:pointer-events-none
          before:bg-[linear-gradient(115deg,transparent_20%,rgba(180,150,255,.18)_35%,transparent_50%)]
          before:bg-[length:250%_250%]
          before:bg-[-150%_-150%]
          before:transition-all
          before:duration-700
          group-hover:before:bg-[position:0%_0%]

          after:absolute
          after:inset-0
          after:content-['']
          after:pointer-events-none
          after:bg-[radial-gradient(circle_at_85%_12%,rgba(34,211,238,.25),transparent_40%),radial-gradient(circle_at_8%_90%,rgba(168,85,247,.22),transparent_45%)]
        "
      >
        <div className="relative z-10 h-full">{children}</div>
      </div>
    </div>
  );
};

export default Card;
