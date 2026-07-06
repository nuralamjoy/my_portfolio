import "./CurrentActivities.css";

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
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M7 17L17 7M7 7h10v10" />
  </svg>
);

export default function CurrentActivities() {
  return (
    <section className="ra-section">
      <div className="ra-wrap">
        <div className="ra-eyebrow">
          <span className="dot"></span>Currently in motion
        </div>
        <h2 className="ra-heading">
          Recent <em>Activity</em>
        </h2>
        <p className="ra-sub">
          A running log of what I've been building, writing, and learning lately
          — updated as it happens, not as an afterthought.
        </p>

        <div className="ra-timeline">
          {activities.map((item, i) => (
            <div
              key={i}
              className={`ra-item ${item.current ? "is-current" : ""}`}
            >
              <div className="ra-node"></div>
              <div className="ra-date">
                {item.date}
                {item.current ? " · Now" : ""}
              </div>
              <div className="ra-card">
                <div className="ra-row">
                  <div className="ra-icon">
                    {icons[item.type] || icons.project}
                  </div>
                  <div className="ra-body">
                    <div className="ra-title-row">
                      <h3 className="ra-title">{item.title}</h3>
                      <span className="ra-tag">{item.tag}</span>
                    </div>
                    <p className="ra-desc">{item.desc}</p>
                    {item.link && (
                      <a className="ra-link" href={item.link.href}>
                        {item.link.label} <LinkArrow />
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
