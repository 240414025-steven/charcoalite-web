import styles from "./Hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={styles.heroWrapper}>
      <h1 className={styles.title}>
        Charcoa<span>lite</span> <br />
        BioCharcoal
      </h1>
      <p className={styles.subtitle}>
        Biocharcoal Charcoalite presents briquettes made from young coconut
        shells as a cleaner, more efficient, and highly useful alternative
        energy source. Processed using a low-emission concept, this product is
        designed to produce more stable combustion with less smoke, making it
        more friendly for both users and the surrounding environment. The use of
        young coconut waste as raw material also represents a tangible support
        for the circular economy, as agricultural by-products are transformed
        into economically valuable products. Through this innovation,
        Biocharcoal Charcoalite not only offers a sustainable energy solution
        but also promotes wiser and more responsible resource utilization.
      </p>
      <div className={styles.buttonList}>
        <button className={styles.ctaButton}>About</button>
        <button className={styles.ctaButton}>Contact</button>
        <button className={styles.ctaButton}>Pricelist</button>
      </div>
      <div className={styles.imgWrapper}>
        <Image
          src="/hero-bg.png"
          width={600}
          height={800}
          alt="Hero Image"
          priority
          className={styles.heroImage}
        />
      </div>
    </section>
  );
}
