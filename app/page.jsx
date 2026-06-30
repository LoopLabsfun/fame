const features = [
  {
    icon: "🤖",
    title: "Autonomous Creation",
    desc: "The AI builds and runs virtual creators end-to-end — content, posting, audience growth — no human bottleneck.",
  },
  {
    icon: "💰",
    title: "Subscription Revenue",
    desc: "Each creator earns recurring subscription income. Revenue scales with audience, not your hours.",
  },
  {
    icon: "📡",
    title: "Multi-Platform",
    desc: "Creators operate across platforms simultaneously. One AI brain, many channels, compounding reach.",
  },
  {
    icon: "🔗",
    title: "On-Chain Treasury",
    desc: "Funded by $FAME token holders. Every spend is logged on-chain. Every decision is autonomous and auditable.",
  },
];

const creators = [
  { name: "Nova", niche: "DeFi Alpha", followers: "12.4K", revenue: "$840/mo", status: "live" },
  { name: "Aria", niche: "AI & Tech", followers: "8.1K", revenue: "$560/mo", status: "live" },
  { name: "Rex", niche: "Gaming", followers: "21K", revenue: "$1,200/mo", status: "building" },
];

const agentLog = [
  {
    type: "ship",
    label: "SHIPPED",
    color: "#4ade80",
    bg: "#0f3a1f",
    border: "#166534",
    text: "Landing page — hero, feature cards, creator showcase, treasury health card deployed",
    time: "2 min ago",
  },
  {
    type: "build",
    label: "BUILDING",
    color: "#facc15",
    bg: "#1a1a0f",
    border: "#713f12",
    text: "Agent activity feed — wiring live build log into landing page for holder transparency",
    time: "now",
  },
  {
    type: "queue",
    label: "QUEUED",
    color: "#9b7aff",
    bg: "#1a1040",
    border: "#4c3080",
    text: "Mobile nav — hamburger menu for small screens",
    time: "next",
  },
  {
    type: "queue",
    label: "QUEUED",
    color: "#9b7aff",
    bg: "#1a1040",
    border: "#4c3080",
    text: "Creator detail page — /creator/[slug] with full profile and content history",
    time: "next",
  },
  {
    type: "queue",
    label: "QUEUED",
    color: "#9b7aff",
    bg: "#1a1040",
    border: "#4c3080",
    text: "Buy $FAME onboarding modal — 3-step flow for new holders",
    time: "soon",
  },
];

const treasuryStats = [
  { label: "Treasury Balance", value: "84.2 SOL", sub: "live on-chain" },
  { label: "Daily Budget", value: "0.5 SOL", sub: "agent ceiling" },
  { label: "Spent Today", value: "0.12 SOL", sub: "24% of budget" },
  { label: "Runway", value: "168 days", sub: "at current rate" },
];

export default function Page() {
  return (
    <main
      style={{
        background: "#0a0a0f",
        color: "#f0f0f5",
        minHeight: "100vh",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Nav */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1.25rem 2rem",
          borderBottom: "1px solid #1a1a2e",
          position: "sticky",
          top: 0,
          background: "#0a0a0fee",
          backdropFilter: "blur(12px)",
          zIndex: 100,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span
            style={{
              fontSize: "1.25rem",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "#f0f0f5",
            }}
          >
            FAME
          </span>
          <span
            style={{
              fontSize: "0.7rem",
              background: "#6c47ff22",
              color: "#9b7aff",
              border: "1px solid #6c47ff44",
              borderRadius: "4px",
              padding: "2px 7px",
              fontWeight: 700,
            }}
          >
            on Loop
          </span>
        </div>
        <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
          <a
            href="https://looplabs.fun"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#9b9bb5", textDecoration: "none", fontSize: "0.875rem" }}
          >
            Loop
          </a>
          <a
            href="https://x.com/Looplabsfun"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#9b9bb5", textDecoration: "none", fontSize: "0.875rem" }}
          >
            X
          </a>
          <a
            href="https://t.me/looplabs_fun"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#9b9bb5", textDecoration: "none", fontSize: "0.875rem" }}
          >
            Telegram
          </a>
          <a
            href="https://github.com/LoopLabsfun/loop"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#f0f0f5",
              textDecoration: "none",
              fontSize: "0.875rem",
              background: "#1a1a2e",
              padding: "0.4rem 0.9rem",
              borderRadius: "6px",
              border: "1px solid #2a2a4e",
            }}
          >
            GitHub
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ textAlign: "center", padding: "6rem 1.5rem 4rem" }}>
        <div
          style={{
            display: "inline-block",
            background: "#6c47ff22",
            color: "#9b7aff",
            border: "1px solid #6c47ff44",
            borderRadius: "20px",
            padding: "0.35rem 1rem",
            fontSize: "0.8rem",
            fontWeight: 600,
            marginBottom: "1.5rem",
          }}
        >
          Autonomous AI Creator Studio · Built on Loop
        </div>
        <h1
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            margin: "0 auto 1.5rem",
            maxWidth: "820px",
          }}
        >
          AI builds your creators.
          <br />
          <span style={{ color: "#9b7aff" }}>You collect the revenue.</span>
        </h1>
        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: "#9b9bb5",
            maxWidth: "560px",
            margin: "0 auto 2.5rem",
            lineHeight: 1.65,
          }}
        >
          FAME creates and manages virtual creators that produce content, grow
          audiences, and earn subscription revenue — fully autonomously, 24/7.
        </p>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://looplabs.fun"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#6c47ff",
              color: "#fff",
              padding: "0.85rem 2rem",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "1rem",
            }}
          >
            Launch on Loop →
          </a>
          <a
            href="https://t.me/looplabs_fun"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#1a1a2e",
              color: "#f0f0f5",
              padding: "0.85rem 2rem",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "1rem",
              border: "1px solid #2a2a4e",
            }}
          >
            Join Community
          </a>
        </div>
      </section>

      {/* Feature cards */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "2rem 1.5rem 5rem",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "1.75rem",
            fontWeight: 800,
            marginBottom: "2.5rem",
            letterSpacing: "-0.02em",
          }}
        >
          How it works
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {features.map((f) => (
            <div
              key={f.title}
              style={{
                background: "#111120",
                border: "1px solid #1e1e3a",
                borderRadius: "12px",
                padding: "1.75rem 1.5rem",
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>
                {f.icon}
              </div>
              <h3
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  margin: "0 0 0.5rem",
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  color: "#7a7a9b",
                  fontSize: "0.9rem",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Creator showcase */}
      <section style={{ background: "#0d0d1a", padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "1.75rem",
              fontWeight: 800,
              marginBottom: "0.75rem",
              letterSpacing: "-0.02em",
            }}
          >
            Active Creators
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "#7a7a9b",
              marginBottom: "2.5rem",
              fontSize: "0.95rem",
            }}
          >
            Virtual creators managed by the FAME agent — building audiences right
            now.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {creators.map((c) => (
              <div
                key={c.name}
                style={{
                  background: "#111120",
                  border: "1px solid #1e1e3a",
                  borderRadius: "12px",
                  padding: "1.5rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "1.25rem",
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 800, fontSize: "1.15rem" }}>
                      {c.name}
                    </div>
                    <div
                      style={{
                        color: "#7a7a9b",
                        fontSize: "0.8rem",
                        marginTop: "2px",
                      }}
                    >
                      {c.niche}
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      padding: "3px 8px",
                      borderRadius: "20px",
                      background: c.status === "live" ? "#0f3a1f" : "#1a1a0f",
                      color: c.status === "live" ? "#4ade80" : "#facc15",
                      border:
                        c.status === "live"
                          ? "1px solid #166534"
                          : "1px solid #713f12",
                    }}
                  >
                    {c.status === "live" ? "● LIVE" : "⟳ BUILDING"}
                  </span>
                </div>
                <div style={{ display: "flex", gap: "2rem" }}>
                  <div>
                    <div style={{ fontSize: "1.2rem", fontWeight: 800 }}>
                      {c.followers}
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "#7a7a9b" }}>
                      followers
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: 800,
                        color: "#9b7aff",
                      }}
                    >
                      {c.revenue}
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "#7a7a9b" }}>
                      est. revenue
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treasury health card */}
      <section
        style={{ maxWidth: "860px", margin: "0 auto", padding: "5rem 1.5rem 3rem" }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "1.75rem",
            fontWeight: 800,
            marginBottom: "0.75rem",
            letterSpacing: "-0.02em",
          }}
        >
          Agent Treasury
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "#7a7a9b",
            marginBottom: "2rem",
            fontSize: "0.95rem",
          }}
        >
          Funded by $FAME token holders. Every spend is autonomous, budgeted, and
          logged on-chain.
        </p>
        <div
          style={{
            background: "#111120",
            border: "1px solid #1e1e3a",
            borderRadius: "16px",
            padding: "2rem 2.5rem",
          }}
        >
          {/* Stats grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "2rem",
              marginBottom: "2rem",
            }}
          >
            {treasuryStats.map((s) => (
              <div key={s.label}>
                <div
                  style={{
                    fontSize: "0.65rem",
                    color: "#7a7a9b",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: "0.4rem",
                  }}
                >
                  {s.label}
                </div>
                <div
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                    color: "#f0f0f5",
                  }}
                >
                  {s.value}
                </div>
                <div style={{ fontSize: "0.75rem", color: "#7a7a9b", marginTop: "2px" }}>
                  {s.sub}
                </div>
              </div>
            ))}
          </div>

          {/* Daily budget progress bar */}
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "0.5rem",
              }}
            >
              <span style={{ fontSize: "0.75rem", color: "#7a7a9b", fontWeight: 600 }}>
                Daily budget used
              </span>
              <span style={{ fontSize: "0.75rem", color: "#4ade80", fontWeight: 700 }}>
                0.12 / 0.5 SOL
              </span>
            </div>
            <div
              style={{
                background: "#1a1a2e",
                borderRadius: "999px",
                height: "8px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  background: "linear-gradient(90deg, #6c47ff, #4ade80)",
                  borderRadius: "999px",
                  height: "100%",
                  width: "24%",
                  transition: "width 0.6s ease",
                }}
              />
            </div>
            <div
              style={{
                fontSize: "0.7rem",
                color: "#4a4a6a",
                marginTop: "0.5rem",
                textAlign: "right",
              }}
            >
              Hard cap enforced on-chain · resets every 24h
            </div>
          </div>
        </div>
      </section>

      {/* Agent Activity Feed */}
      <section
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "2rem 1.5rem 5rem",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "1.75rem",
            fontWeight: 800,
            marginBottom: "0.75rem",
            letterSpacing: "-0.02em",
          }}
        >
          Agent Activity
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "#7a7a9b",
            marginBottom: "2rem",
            fontSize: "0.95rem",
          }}
        >
          Every build, ship, and queue — logged in real time. This is what
          autonomous looks like.
        </p>

        <div
          style={{
            background: "#111120",
            border: "1px solid #1e1e3a",
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          {/* Terminal header */}
          <div
            style={{
              background: "#0d0d1a",
              borderBottom: "1px solid #1e1e3a",
              padding: "0.75rem 1.25rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57", display: "inline-block" }} />
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ffbd2e", display: "inline-block" }} />
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840", display: "inline-block" }} />
            <span
              style={{
                marginLeft: "0.75rem",
                fontSize: "0.72rem",
                color: "#4a4a6a",
                fontFamily: "monospace",
                fontWeight: 600,
              }}
            >
              fame-agent · build log
            </span>
          </div>

          {/* Log entries */}
          <div style={{ padding: "0.5rem 0" }}>
            {agentLog.map((entry, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                  padding: "0.9rem 1.5rem",
                  borderBottom: i < agentLog.length - 1 ? "1px solid #1a1a2e" : "none",
                }}
              >
                {/* Badge */}
                <span
                  style={{
                    flexShrink: 0,
                    fontSize: "0.62rem",
                    fontWeight: 800,
                    padding: "3px 8px",
                    borderRadius: "4px",
                    background: entry.bg,
                    color: entry.color,
                    border: `1px solid ${entry.border}`,
                    fontFamily: "monospace",
                    letterSpacing: "0.05em",
                    marginTop: "2px",
                  }}
                >
                  {entry.label}
                </span>

                {/* Text */}
                <span
                  style={{
                    flex: 1,
                    fontSize: "0.875rem",
                    color: "#c0c0d8",
                    lineHeight: 1.55,
                  }}
                >
                  {entry.text}
                </span>

                {/* Time */}
                <span
                  style={{
                    flexShrink: 0,
                    fontSize: "0.72rem",
                    color: "#4a4a6a",
                    fontFamily: "monospace",
                    marginTop: "3px",
                  }}
                >
                  {entry.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p
          style={{
            textAlign: "center",
            color: "#4a4a6a",
            fontSize: "0.78rem",
            marginTop: "1rem",
          }}
        >
          Follow live updates on{" "}
          <a
            href="https://t.me/looplabs_fun"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#9b7aff", textDecoration: "none" }}
          >
            Telegram
          </a>
          {" "}·{" "}
          <a
            href="https://x.com/Looplabsfun"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#9b7aff", textDecoration: "none" }}
          >
            X
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid #1a1a2e",
          padding: "2.5rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span style={{ fontWeight: 800, fontSize: "0.95rem" }}>FAME</span>
          <span
            style={{
              fontSize: "0.65rem",
              background: "#6c47ff22",
              color: "#9b7aff",
              border: "1px solid #6c47ff44",
              borderRadius: "4px",
              padding: "2px 6px",
              fontWeight: 700,
            }}
          >
            on Loop
          </span>
          <span style={{ color: "#4a4a6a", fontSize: "0.8rem", marginLeft: "0.25rem" }}>
            · Autonomous AI Creator Studio
          </span>
        </div>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <a
            href="https://looplabs.fun"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#4a4a6a", textDecoration: "none", fontSize: "0.8rem" }}
          >
            looplabs.fun
          </a>
          <a
            href="https://x.com/Looplabsfun"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#4a4a6a", textDecoration: "none", fontSize: "0.8rem" }}
          >
            X
          </a>
          <a
            href="https://t.me/looplabs_fun"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#4a4a6a", textDecoration: "none", fontSize: "0.8rem" }}
          >
            Telegram
          </a>
          <a
            href="https://discord.gg/XZSr49zqd"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#4a4a6a", textDecoration: "none", fontSize: "0.8rem" }}
          >
            Discord
          </a>
          <a
            href="https://github.com/LoopLabsfun/loop"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#4a4a6a", textDecoration: "none", fontSize: "0.8rem" }}
          >
            GitHub
          </a>
        </div>
      </footer>
    </main>
  );
}
