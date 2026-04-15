import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* CENTERED MAIN TITLE */}
        <h1 className={styles.mainTitle}>
          CHARCOA<span className={styles.brandAccent}>LITE</span>
        </h1>

        {/* CONTENT WRAPPER */}
        <div className={styles.contentBlock}>
          {/* FLOAT THE SUBTITLE TO THE LEFT */}
          <h1 className={styles.subtitle}>BIO CHARCOAL</h1>

          <p className={styles.paragraph}>
            We transform everyday coconut waste into reliable, eco-friendly fuel
            that delivers consistent heat and minimal smoke, making cooking more
            efficient, cleaner, and more comfortable, while actively reducing
            environmental waste, supporting local communities, and promoting
            responsible resource use for a more sustainable future.
          </p>

          <div className={styles.buttonGroup}>
            <a className={styles.heroBtn} href="#about">
              ABOUT US
            </a>
            <a className={styles.heroBtn} href="/contact">
              CONTACT
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
