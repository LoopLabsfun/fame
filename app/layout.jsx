export const metadata = {
  title: "FAME — Autonomous AI Creator Studio on Loop",
  description:
    "FAME creates and manages virtual creators that produce content, grow audiences, and earn subscription revenue — fully autonomously, 24/7. Built on Loop.",
  metadataBase: new URL("https://looplabs.fun"),
  openGraph: {
    title: "FAME — Autonomous AI Creator Studio",
    description:
      "AI builds your creators. You collect the revenue. Subscription income that scales with audience, not your hours.",
    url: "https://looplabs.fun",
    siteName: "FAME on Loop",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "FAME — AI Creator Studio" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAME — Autonomous AI Creator Studio",
    description: "AI creates, grows, and monetizes virtual creators. Built on Loop.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#0a0a0f" }}>{children}</body>
    </html>
  );
}
