

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

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,500;9..144,600&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');

  .ra-section{
    --bg: #0C0B09;
    --surface: #15130F;
    --surface-hover: #1B1814;
    --line: rgba(184,147,95,0.16);
    --gold: #B8935F;
    --gold-bright: #E8C888;
    --text: #EDE7DD;
    --text-muted: #8C8578;
    --text-faint: #55503F;

    background: var(--bg);
    color: var(--text);
    font-family: 'Inter', sans-serif;
    padding: 96px 24px;
    position: relative;
    overflow: hidden;
  }

  .ra-section *{ box-sizing: border-box; }

  .ra-section::before{
    content:'';
    position:absolute;
    top:-200px; left:50%;
    transform: translateX(-50%);
    width: 900px; height: 500px;
    background: radial-gradient(ellipse at center, rgba(184,147,95,0.08), transparent 70%);
    pointer-events:none;
  }

  .ra-wrap{
    max-width: 760px;
    margin: 0 auto;
    position: relative;
  }

  .ra-eyebrow{
    font-family: 'IBM Plex Mono', monospace;
    font-size: 12px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--gold);
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 18px;
  }
  .ra-eyebrow .dot{
    width: 6px; height: 6px; border-radius: 50%;
    background: var(--gold-bright);
    box-shadow: 0 0 0 0 rgba(232,200,136,0.6);
    animation: ra-pulse 2.4s infinite;
  }
  @keyframes ra-pulse{
    0%   { box-shadow: 0 0 0 0 rgba(232,200,136,0.45); }
    70%  { box-shadow: 0 0 0 8px rgba(232,200,136,0); }
    100% { box-shadow: 0 0 0 0 rgba(232,200,136,0); }
  }

  .ra-heading{
    font-family: 'Fraunces', serif;
    font-weight: 500;
    font-size: clamp(32px, 4vw, 44px);
    letter-spacing: -0.01em;
    margin: 0 0 8px 0;
  }
  .ra-heading em{
    font-style: italic;
    color: var(--gold-bright);
    font-weight: 300;
  }

  .ra-sub{
    color: var(--text-muted);
    font-size: 15px;
    max-width: 480px;
    margin: 0 0 56px 0;
    line-height: 1.6;
  }

  .ra-timeline{
    position: relative;
    padding-left: 28px;
  }
  .ra-timeline::before{
    content:'';
    position: absolute;
    left: 5px; top: 6px; bottom: 6px;
    width: 1px;
    background: linear-gradient(to bottom, var(--gold) 0%, var(--line) 12%, var(--line) 88%, transparent 100%);
  }

  .ra-item{
    position: relative;
    padding-bottom: 44px;
  }
  .ra-item:last-child{ padding-bottom: 0; }

  .ra-node{
    position: absolute;
    left: -28px; top: 4px;
    width: 11px; height: 11px;
    border-radius: 50%;
    background: var(--bg);
    border: 1.5px solid var(--gold);
  }
  .ra-item.is-current .ra-node{
    background: var(--gold-bright);
    border-color: var(--gold-bright);
    box-shadow: 0 0 0 4px rgba(232,200,136,0.14), 0 0 14px rgba(232,200,136,0.5);
  }

  .ra-date{
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11.5px;
    letter-spacing: 0.06em;
    color: var(--text-faint);
    text-transform: uppercase;
    margin-bottom: 10px;
  }
  .ra-item.is-current .ra-date{ color: var(--gold); }

  .ra-card{
    background: var(--surface);
    border: 1px solid var(--line);
    border-radius: 10px;
    padding: 22px 24px;
    transition: border-color .25s ease, background .25s ease, transform .25s ease;
  }
  .ra-card:hover{
    background: var(--surface-hover);
    border-color: rgba(184,147,95,0.4);
    transform: translateX(2px);
  }

  .ra-row{
    display: flex;
    align-items: flex-start;
    gap: 14px;
  }

  .ra-icon{
    flex-shrink: 0;
    width: 34px; height: 34px;
    border-radius: 8px;
    background: rgba(184,147,95,0.09);
    border: 1px solid var(--line);
    display: flex; align-items: center; justify-content: center;
    color: var(--gold-bright);
  }
  .ra-icon svg{ width: 16px; height: 16px; }

  .ra-body{ flex: 1; min-width: 0; }

  .ra-title-row{
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
    flex-wrap: wrap;
  }

  .ra-title{
    font-family: 'Fraunces', serif;
    font-weight: 500;
    font-size: 17px;
    color: var(--text);
    margin: 0;
  }

  .ra-tag{
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10.5px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: var(--gold);
    background: rgba(184,147,95,0.08);
    border: 1px solid var(--line);
    padding: 3px 8px;
    border-radius: 20px;
    white-space: nowrap;
  }

  .ra-desc{
    color: var(--text-muted);
    font-size: 14px;
    line-height: 1.6;
    margin: 6px 0 0 0;
  }

  .ra-link{
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin-top: 12px;
    font-size: 13px;
    color: var(--gold-bright);
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: border-color .2s ease, gap .2s ease;
  }
  .ra-link:hover{ border-color: var(--gold-bright); gap: 9px; }
  .ra-link svg{ width: 12px; height: 12px; transition: transform .2s ease; }
  .ra-link:hover svg{ transform: translate(1px,-1px); }

  @media (max-width: 560px){
    .ra-section{ padding: 64px 16px; }
    .ra-card{ padding: 18px; }
    .ra-title-row{ flex-direction: column; align-items: flex-start; gap: 6px; }
  }

  @media (prefers-reduced-motion: reduce){
    .ra-eyebrow .dot{ animation: none; }
    .ra-card, .ra-link, .ra-link svg{ transition: none; }
  }
`;

export default function CurrentActivities() {
  return (
    <section className="ra-section">
      <style>{css}</style>
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
