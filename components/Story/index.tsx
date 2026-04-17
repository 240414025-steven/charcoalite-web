import Image from "next/image";
import Link from "next/link";
import styles from "./Story.module.css";

export default function Story() {
  return (
    <section id="about" className={styles.sectionWrapper}>
      {/* WHY SECTION(Light Background) */}
      <div className={styles.splitBlock}>
        <div className={styles.imageContent}>
          <Image
            src="/why-img.png"
            alt="Product packaging"
            fill
            className={styles.image}
          />
        </div>
        <div className={`${styles.textContent} ${styles.lightBg}`}>
          <h2 className={styles.title}>Why Charcoalite?</h2>
          <p className={styles.paragraph}>
            Charcoalite is a cleaner, low-smoke, and stable fuel that provides
            consistent heat and is easy to use for both households and small
            businesses. Made from abundant waste materials, it remains
            cost-effective without sacrificing quality, while also helping
            reduce environmental waste and supporting local communities, making
            it a practical and sustainable fuel choice.
          </p>
          <div className={styles.buttonGroup}>
            <Link href="#" className={styles.btnOutlineDark}>
              Learn more
            </Link>
            <Link href="/Pricelist" className={styles.btnSolidDark}>
              Buy our product
            </Link>
          </div>
        </div>
      </div>

      {/* ORIGIN STORY (Dark Background) */}
      <div className={`${styles.splitBlock} ${styles.reverseBlock}`}>
        <div className={`${styles.textContent} ${styles.darkBg}`}>
          <h2 className={styles.title}>Origin Story</h2>
          <p className={styles.paragraph}>
            Charcoalite originated from the issue of accumulating young coconut
            shell waste in selling areas, which is often left unmanaged and
            contributes to environmental pollution. Despite being abundant, this
            type of waste is rarely utilized due to its higher moisture content
            and thinner structure compared to mature coconut shells.
          </p>
          <div className={styles.illustrationWrapper}>
            <Image
              src="/grill-man.png"
              alt="Illustration"
              width={80}
              height={80}
            />
            <p className={styles.paragraph}>
              Seeing this opportunity, Charcoalite was developed as an
              innovation to convert this waste into charcoal briquettes through
              drying and controlled carbonization. This process increases the
              economic value of the waste while also meeting market demand for a
              cleaner, more stable, and affordable fuel, based on a circular
              economy concept.
            </p>
          </div>
        </div>
        <div className={styles.imageContent}>
          <Image
            src="/origin-img.png"
            alt="Burning coals"
            fill
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
