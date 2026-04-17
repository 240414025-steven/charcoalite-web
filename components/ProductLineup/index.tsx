import Image from "next/image";
import Link from "next/link";
import styles from "./ProductLineup.module.css";

export default function ProductLineup() {
  return (
    <section className={styles.lineupSection}>
      {/* Absolute Title */}
      <h2 className={styles.sectionTitle}>What's New?</h2>

      <div className={styles.container}>
        {/* LEFT: Lineup (Scaled Up) */}
        <div className={styles.lineupWrapper}>
          <div className={styles.productItem}>
            <Image
              src="/product-clean.png"
              alt="1KG"
              width={150}
              height={200}
              className={styles.bagSmall}
            />
            <span className={styles.label}>1KG</span>
          </div>

          <div className={styles.productItem}>
            <Image
              src="/product-clean.png"
              alt="2KG"
              width={180}
              height={240}
              className={styles.bagMed}
            />
            <span className={styles.label}>2KG</span>
          </div>

          <div className={styles.productItem}>
            <Image
              src="/product-clean.png"
              alt="5KG"
              width={220}
              height={290}
              className={styles.bagLarge}
            />
            <span className={styles.label}>5KG</span>
          </div>

          <div className={styles.productItem}>
            <Image
              src="/custom-product.png"
              alt="Custom"
              width={240}
              height={320}
              className={styles.bagCustom}
            />
            <span className={styles.label}>CUSTOM</span>
          </div>
        </div>

        {/* RIGHT: CTAs (Tightened) */}
        <div className={styles.ctaColumn}>
          <div className={styles.ctaGroup}>
            <p className={styles.ctaText}>
              Check out our
              <br />
              new custom weight!
            </p>
            <Link href="/pricelist" className={styles.outlineBtn}>
              HERE
            </Link>
          </div>

          <span className={styles.divider}>Or</span>

          <div className={styles.ctaGroup}>
            <p className={styles.ctaText}>All our product pricelist</p>
            <Link href="/pricelist" className={styles.outlineBtn}>
              HERE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
