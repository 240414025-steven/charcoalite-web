import Image from "next/image";
import styles from "./Pricelist.module.css";

const products = [
  {
    id: 1,
    label: "Custom Weight",
    price: "Contact Us",
    img: "/product1.png",
    gallery: [
      "/product1.png",
      "/product1.png",
      "/product1.png",
      "/product1.png",
    ],
  },
  {
    id: 2,
    label: "1 Kilogram",
    price: "$10.00",
    img: "/product1.png",
    gallery: [
      "/product1.png",
      "/product1.png",
      "/product1.png",
      "/product1.png",
    ],
  },
  {
    id: 3,
    label: "2 Kilogram",
    price: "$18.00",
    img: "/product1.png",
    gallery: [
      "/product1.png",
      "/product1.png",
      "/product1.png",
      "/product1.png",
    ],
  },
  {
    id: 4,
    label: "5 Kilogram",
    price: "$40.00",
    img: "/product1.png",
    gallery: [
      "/product1.png",
      "/product1.png",
      "/product1.png",
      "/product1.png",
    ],
  },
  {
    id: 5,
    label: "10 Kilogram",
    price: "$75.00",
    img: "/product1.png",
    gallery: [
      "/product1.png",
      "/product1.png",
      "/product1.png",
      "/product1.png",
    ],
  },
];

export default function PricelistPage() {
  return (
    <div className={styles.pageContainer}>
      {/* HERO SECTION - Now touches all edges */}
      <section className={styles.heroSection}>
        <div className={styles.heroImageWrapper}>
          <Image
            src="/background4.webp"
            alt="Hero Background"
            fill
            className={styles.heroImage}
            priority
          />
          <div className={styles.fadeOverlay}></div>
        </div>

        {/* The text stays within the 1300px max-width boundary */}
        <div className={styles.heroContent}>
          <h1 className={styles.pageTitle}>BRIQUETTES PRICELIST</h1>
        </div>
      </section>

      {/* PRODUCT GRID SECTION */}
      <section className={styles.productSection}>
        <div className={styles.container}>
          <div className={styles.productGrid}>
            {products.map((product) => (
              <div key={product.id} className={styles.productCard}>
                {/* Image Section */}
                <div className={styles.cardTop}>
                  <div className={styles.portraitImageContainer}>
                    <Image
                      src={product.img}
                      alt={product.label}
                      fill
                      className={styles.productImg}
                    />
                  </div>

                  {/* GALLERY ROW: Unique to this product */}
                  <div className={styles.imageGallery}>
                    {product.gallery.map((thumb, index) => (
                      <div key={index} className={styles.galleryItem}>
                        <Image
                          src={thumb}
                          alt={`${product.label} view ${index + 1}`}
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Info Section (Dark Grey) */}
                <div className={styles.cardBottom}>
                  <h3 className={styles.cardLabel}>{product.label}</h3>
                  <p className={styles.cardDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum in augue a sem feugiat ultrices.
                  </p>
                  <h3 className={styles.cardPrice}>{product.price}</h3>
                  <button className={styles.buyButton}>BUY</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
