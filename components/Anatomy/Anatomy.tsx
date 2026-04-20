import Image from "next/image";
import styles from "./Anatomy.module.css";

export default function CharcoalAnatomy() {
  return (
    <section className={styles.anatomySection}>
      {/* LEFT SIDE: The Product Showcase */}
      <div className={styles.imageSide}>
        <div className={styles.productWrapper}>
          <Image
            src="/single-cube.png"
            alt="Premium Charcoalite Cube"
            fill
            className={styles.cubeImg}
            priority
          />
        </div>
      </div>

      {/* RIGHT SIDE: Why Better? Content */}
      <div className={styles.contentSide}>
        <h2 className={styles.mainTitle}>WHY BETTER?</h2>

        <div className={styles.featuresList}>
          <div className={styles.feature}>
            <h3>Cleaner & Low Smoke</h3>
            <p>
              Charcoalite is produced through controlled carbonization, which
              reduces volatile compounds that typically cause heavy smoke. As a
              result, it produces significantly less smoke during ignition and
              burning, creating a cleaner and more comfortable cooking
              experience, especially for indoor or semi-outdoor use.
            </p>
          </div>

          <div className={styles.feature}>
            <h3>Stable & Consistent Heat</h3>
            <p>
              The briquettes are made with a uniform composition and density,
              allowing them to burn evenly and maintain a steady heat output.
              This consistency is crucial for cooking processes like grilling or
              BBQ, where uneven heat can affect food quality.
            </p>
          </div>

          <div className={styles.feature}>
            <h3>Longer Burning & More Efficient</h3>
            <p>
              Thanks to its compact structure and optimized formulation,
              Charcoalite briquettes burn longer compared to many conventional
              briquettes. This reduces the need for frequent refueling, making
              it more efficient and cost-effective over time.
            </p>
          </div>

          <div className={styles.feature}>
            <h3>Eco-Friendly & Sustainable</h3>
            <p>
              Charcoalite is made from coconut shell waste, transforming unused
              organic materials into valuable fuel. This not only reduces
              environmental waste but also supports sustainable resource use and
              aligns with circular economy principles.
            </p>
          </div>

          <div className={styles.feature}>
            <h3>Durable & Easy To Use</h3>
            <p>
              With a controlled amount of binder, the briquettes are strong and
              less prone to breaking during handling, storage, and
              transportation. This durability, combined with its stable burning
              and low smoke, makes it practical, reliable, and user-friendly for
              everyday use.
            </p>
          </div>
        </div>

        {/* The horizontal tagline at the bottom */}
        <div className={styles.footerTags}>
          <span>Cleaner</span> • <span>Longer burning</span> •{" "}
          <span>More stable</span> • <span>Eco-friendly</span> •{" "}
          <span>Cost-efficient</span>
        </div>
      </div>
    </section>
  );
}
