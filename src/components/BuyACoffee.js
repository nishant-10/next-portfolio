import "../css/buyacoffee.css";

export default function BuyACoffee() {
  return (
    <section className="buy-coffee">
      <video
        className="cat-video"
        src="/catto.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <h2>Thank you for using Scroll Helper! ❤️</h2>

      <p className="description">
        If Scroll Helper has made browsing a little easier, the best way to
        support the project is by giving it a ⭐ on GitHub. Every star helps
        more people discover the extension and keeps me motivated to add new
        features.
      </p>

      <a
        className="github-button"
        href="https://github.com/nishant-10/scroll-helper"
        target="_blank"
        rel="noopener noreferrer"
      >
        ⭐ Star on GitHub
      </a>

      <p className="footer-text">
        Thank you for your support! 🚀
      </p>
    </section>
  );
}