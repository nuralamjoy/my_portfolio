
import "./CurrentActivities.css";

// Edit this array to update the section. Newest entry first.
// type controls the icon: "project" | "article" | "talk" | "oss" | "award"
const activities = [
  {
    type: "project",
    current: true,
    date: "July 2026",
    title: "Launched Pathway — a habit tracker for teams",
    desc: "Shipped v1 to production: onboarding flow, shared streaks, and a Slack integration.",
    tag: "Live",
    link: { label: "View project", href: "#" },
  },
  {
    type: "article",
    date: "June 2026",
    title: "Wrote on debugging async race conditions in React",
    desc: "A deep dive into stale closures and how to catch them before they ship.",
    tag: "Article",
    link: { label: "Read post", href: "#" },
  },
  {
    type: "oss",
    date: "May 2026",
    title: "Merged 3 PRs into an open source design-system library",
    desc: "Improved accessibility on the Dialog and Combobox components.",
    tag: "Open Source",
    link: { label: "See contribution", href: "#" },
  },
  {
    type: "talk",
    date: "April 2026",
    title: "Spoke at a local meetup on API rate limiting",
    desc: "Walked through token-bucket vs sliding-window strategies with live demos.",
    tag: "Talk",
    link: null,
  },
  {
    type: "award",
    date: "March 2026",
    title: "Earned an advanced certification in cloud architecture",
    desc: "Completed a hands-on exam covering distributed systems design.",
    tag: "Certification",
    link: null,
  },
];

const icons = {
  project: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18" />
    </svg>
  ),
  article: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path d="M4 4h13l3 3v13H4z" />
      <path d="M8 9h9M8 13h9M8 17h6" />
    </svg>
  ),
  talk: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path d="M12 3a4 4 0 0 1 4 4v3a4 4 0 0 1-8 0V7a4 4 0 0 1 4-4z" />
      <path d="M6 11a6 6 0 0 0 12 0M12 17v3" />
    </svg>
  ),
  oss: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M9 8l-3 4 3 4M15 8l3 4-3 4" />
    </svg>
  ),
  award: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <circle cx="12" cy="8" r="5" />
      <path d="M8 13l-2 8 6-3 6 3-2-8" />
    </svg>
  ),
};

const LinkArrow = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-3 h-3 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
  >
    <path d="M7 17L17 7M7 7h10v10" />
  </svg>
);

export default function CurrentActivities() {
  return (
    <section
      className="ra-ambient relative overflow-hidden px-6 py-24 bg-gradient-to-b from-[var(--bg)] to-[var(--bg2)]"
      style={{ color: "var(--txt)" }}
    >
      <div className="relative mx-auto max-w-3xl">
        {/* eyebrow */}
        <div
          className="ra-font-m mb-4 flex items-center gap-2.5 text-xs uppercase tracking-widest"
          style={{ color: "var(--p3)" }}
        >
          <span
            className="ra-pulse inline-block h-1.5 w-1.5 rounded-full"
            style={{ background: "var(--p3)" }}
          />
          Currently in motion
        </div>

        {/* heading */}
        <h2 className="ra-font-d mb-2 text-3xl font-semibold tracking-tight sm:text-4xl md:text-[44px]">
          Recent{" "}
          <em
            className="not-italic font-light italic"
            style={{ color: "var(--p4)" }}
          >
            Activity
          </em>
        </h2>

        <p
          className="ra-font-b mb-14 max-w-md text-[15px] leading-relaxed sm:mb-16"
          style={{ color: "var(--txt2)" }}
        >
          A running log of what I've been building, writing, and learning lately
          — updated as it happens, not as an afterthought.
        </p>

        {/* timeline */}
        <div className="relative pl-7 sm:pl-8">
          {/* vertical line */}
          <div
            className="absolute left-[5px] top-1.5 bottom-1.5 w-px bg-gradient-to-b from-[var(--p2)] via-[var(--border)] to-transparent"
            aria-hidden="true"
          />

          {activities.map((item, i) => (
            <div key={i} className="relative pb-9 last:pb-0 sm:pb-11">
              {/* node */}
              <div
                className={`absolute -left-7 top-1 h-2.5 w-2.5 rounded-full border-[1.5px] sm:-left-8 ${
                  item.current ? "ra-node-glow" : ""
                }`}
                style={{
                  background: item.current ? "var(--p3)" : "var(--bg)",
                  borderColor: item.current ? "var(--p3)" : "var(--p2)",
                }}
              />

              {/* date */}
              <div
                className="ra-font-m mb-2.5 text-[11px] uppercase tracking-wide"
                style={{ color: item.current ? "var(--p3)" : "var(--txt3)" }}
              >
                {item.date}
                {item.current ? " · Now" : ""}
              </div>

              {/* card */}
              <div
                className="ra-card rounded-2xl border p-5 sm:p-6"
                style={{
                  background: "var(--card)",
                  borderColor: "var(--border)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--card-h)";
                  e.currentTarget.style.borderColor = "var(--border2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--card)";
                  e.currentTarget.style.borderColor = "var(--border)";
                }}
              >
                <div className="flex items-start gap-3.5">
                  {/* icon */}
                  <div
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border sm:h-9 sm:w-9"
                    style={{
                      background: "var(--glow2)",
                      borderColor: "var(--border)",
                      color: "var(--p3)",
                    }}
                  >
                    <span className="h-4 w-4 block">{icons[item.type]}</span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <h3 className="ra-font-d text-[16px] font-medium sm:text-[17px]">
                        {item.title}
                      </h3>
                      <span
                        className="ra-font-m whitespace-nowrap rounded-full border px-2 py-0.5 text-[10.5px] uppercase tracking-wide"
                        style={{
                          color: "var(--p3)",
                          background: "var(--glow2)",
                          borderColor: "var(--border)",
                        }}
                      >
                        {item.tag}
                      </span>
                    </div>

                    <p
                      className="ra-font-b mt-1.5 text-[14px] leading-relaxed"
                      style={{ color: "var(--txt2)" }}
                    >
                      {item.desc}
                    </p>

                    {item.link && (
                      <a
                        href={item.link.href}
                        className="group/link mt-3 inline-flex items-center gap-1.5 text-[13px] no-underline"
                        style={{ color: "var(--p4)" }}
                      >
                        {item.link.label}
                        <LinkArrow />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
