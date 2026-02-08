export default function Home() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Welcome to ACHETELA</h1>
      <p>Your trusted marketplace application is live! 🚀</p>
      <p>
        This site is deployed on{" "}
        <strong>Vercel</strong> and automatically updated on every push to{" "}
        <strong>main</strong>.
      </p>
      <section style={{ marginTop: "2rem" }}>
        <h2>Quick Links</h2>
        <ul>
          <li>
            <a href="https://nextjs.org/docs" target="_blank" rel="noreferrer">
              Next.js Documentation
            </a>
          </li>
          <li>
            <a href="https://vercel.com/docs" target="_blank" rel="noreferrer">
              Vercel Documentation
            </a>
          </li>
          <li>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
        </ul>
      </section>
      <section style={{ marginTop: "2rem", paddingTop: "2rem", borderTop: "1px solid #ccc" }}>
        <p style={{ fontSize: "0.9rem", color: "#666" }}>
          Deployment ID: {new Date().toISOString()}
        </p>
      </section>
    </main>
  );
}
