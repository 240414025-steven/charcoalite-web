import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroWrapper}>
      <h1 className={styles.title}>Powering the Perfect Burn</h1>
      <p className={styles.subtitle}>
        Premium Charcoalite Briquettes. 100% Organic, High-Heat, and
        Sustainable.
      </p>
      <button className={styles.ctaButton}>Get a Quote</button>
    </section>
  );
}
