import React, { memo } from "react";

function FocusAreaCard({ area, index, cardRefs }) {
  const { accent, icon: Icon, path, title, desc } = area;

  const iconStyle = {
    background: "color-mix(in srgb, var(--accent) 12%, transparent)",
    border: "1px solid color-mix(in srgb, var(--accent) 28%, transparent)",
    color: "var(--accent)",
  };

  return (
    <article
      ref={(el) => (cardRefs.current[index] = el)}
      tabIndex={0}
      data-accent={accent}
      className="fa-card relative overflow-hidden rounded-[14px] border border-[#1e2530] bg-gradient-to-b from-[#10141c] to-[#0d1017] p-[26px_22px] outline-none md:p-[30px_28px_28px]"
      style={{ "--accent": accent }}
    >
      {/* Top Section */}
      <div className="mb-[22px] flex items-start justify-between">
        <div
          className="fa-icon flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-[10px] transition-transform duration-300"
          style={iconStyle}
          aria-hidden="true"
        >
          <Icon size={22} />
        </div>

        <span
          className="fa-path mt-[3px] whitespace-nowrap rounded-md border border-[#1e2530] px-[9px] py-[5px] text-[11.5px] tracking-[0.02em] text-[#5b6270] transition-colors duration-300"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {path}
        </span>
      </div>

      {/* Title */}
      <h3
        className="mb-[10px] mt-0 text-[19px] font-semibold tracking-[-0.01em] text-[#f2f4f8]"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="m-0 text-[14.5px] leading-[1.62] text-[#8b93a3]"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {desc}
      </p>
    </article>
  );
}

export default memo(FocusAreaCard);
