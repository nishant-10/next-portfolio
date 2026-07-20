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

      <h2>Thank You ❤️</h2>

      <p className="description">
        I truly appreciate that some of you wanted to buy me a coffee. That's
        incredibly kind.
        <br />
        <br />
        Instead, if you'd like to support Scroll Helper, leaving a ⭐ on GitHub
        or rating the extension would mean a lot. It helps more people discover
        the extension and motivates me to keep improving it.
      </p>

      <a
        className="rate-button"
        href="https://github.com/nishant-10/scroll-helper"
        target="_blank"
        rel="noopener noreferrer"
      >
        ⭐ Star Scroll Helper on GitHub
      </a>
      <a
        className="rate-button rate-ext-button"
        href="https://chromewebstore.google.com/detail/scroll-helper-smart-scrol/hfogflammgfacegejkncmcmpjljpahde"
        target="_blank"
        rel="noopener noreferrer"
      >
        ⭐ Rate Scroll Helper on Chrome Web Store
      </a>

      <p className="footer-text">
        Thank you for being part of the Scroll Helper community! 🚀
      </p>
    </section>
  );
}
