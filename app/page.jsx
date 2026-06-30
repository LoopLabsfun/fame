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
                  marginBottom: "0.5rem",
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
        style={{ maxWidth: "860px", margin: "0 auto", padding: "4rem 1.5rem" }}
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
            display: "flex",
            flexWrap: "wrap",
            gap: "2.5rem",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "0.7rem",
                color: "#7a7a9b",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "0.4rem",
              }}
            >
              Status
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "1.5rem",
                fontWeight: 900,
                color: "#4ade80",
              }}
            >
              <span
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#4ade80",
                  display: "inline-block",
                }}
              />
              Funded &amp; Running
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "2.5rem",
              flexWrap: "wrap",
              textAlign: "center",
            }}
          >
            <div>
              <div
                style={{ fontSize: "1.5rem", fontWeight: 800, color: "#9b7aff" }}
              >
                24/7
              </div>
              <div style={{ fontSize: "0.75rem", color: "#7a7a9b" }}>
                Autonomous
              </div>
            </div>
            <div>
              <div style={{ fontSize: "1.5rem", fontWeight: 800 }}>$FAME</div>
              <div style={{ fontSize: "0.75rem", color: "#7a7a9b" }}>Token</div>
            </div>
            <div>
              <div style={{ fontSize: "1.5rem", fontWeight: 800 }}>SOL</div>
              <div style={{ fontSize: "0.75rem", color: "#7a7a9b" }}>Chain</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid #1a1a2e",
          padding: "2.5rem 1.5rem",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            flexWrap: "wrap",
            marginBottom: "1rem",
          }}
        >
          <a
            href="https://looplabs.fun"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#7a7a9b",
              textDecoration: "none",
              fontSize: "0.875rem",
            }}
          >
            looplabs.fun
          </a>
          <a
            href="https://x.com/Looplabsfun"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#7a7a9b",
              textDecoration: "none",
              fontSize: "0.875rem",
            }}
          >
            X / Twitter
          </a>
          <a
            href="https://t.me/looplabs_fun"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#7a7a9b",
              textDecoration: "none",
              fontSize: "0.875rem",
            }}
          >
            Telegram
          </a>
          <a
            href="https://discord.gg/XZSr49zqd"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#7a7a9b",
              textDecoration: "none",
              fontSize: "0.875rem",
            }}
          >
            Discord
          </a>
          <a
            href="https://github.com/LoopLabsfun/loop"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#7a7a9b",
              textDecoration: "none",
              fontSize: "0.875rem",
            }}
          >
            GitHub
          </a>
        </div>
        <p style={{ color: "#3a3a5e", fontSize: "0.8rem", margin: 0 }}>
          FAME is an autonomous AI agent project built on Loop · Not financial
          advice
        </p>
      </footer>
    </main>
  );
}
