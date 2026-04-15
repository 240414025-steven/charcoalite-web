import Image from "next/image";
import styles from "./Process.module.css";

const processSteps = [
  {
    id: 1,
    title: "LOREM IPSUM DOLOR SIT AMET.",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis fringilla massa. Phasellus lobortis molestie turpis, quis feugiat elit accumsan non.",
  },
  {
    id: 2,
    title: "LOREM IPSUM DOLOR SIT AMET.",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis fringilla massa. Phasellus lobortis molestie turpis, quis feugiat elit accumsan non.",
  },
  {
    id: 3,
    title: "LOREM IPSUM DOLOR SIT AMET.",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis fringilla massa. Phasellus lobortis molestie turpis, quis feugiat elit accumsan non.",
  },
  {
    id: 4,
    title: "LOREM IPSUM DOLOR SIT AMET.",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis fringilla massa. Phasellus lobortis molestie turpis, quis feugiat elit accumsan non.",
  },
  {
    id: 5,
    title: "LOREM IPSUM DOLOR SIT AMET.",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis fringilla massa. Phasellus lobortis molestie turpis, quis feugiat elit accumsan non.",
  },
  {
    id: 6,
    title: "LOREM IPSUM DOLOR SIT AMET.",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis fringilla massa. Phasellus lobortis molestie turpis, quis feugiat elit accumsan non.",
  },
  {
    id: 7,
    title: "LOREM IPSUM DOLOR SIT AMET.",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis fringilla massa. Phasellus lobortis molestie turpis, quis feugiat elit accumsan non.",
  },
];

export default function Process() {
  return (
    <section className={styles.container}>
      <div className={styles.grid}>
        {/* Grid Item 1: The Title Block (Top Left) */}
        <div className={styles.titleBlock}>
          <h2 className={styles.mainTitle}>
            <span className={styles.word1}>THE</span>
            <span className={styles.word2}>PRO</span>
            <span className={styles.word3}>CESS</span>
          </h2>
        </div>

        {/* Grid Items 2-8: The Cards */}
        {processSteps.map((step) => (
          <div key={step.id} className={styles.cardContainer}>
            <div className={styles.imageWrapper}>
              <Image
                src="/placeholder.png"
                alt={step.title}
                fill
                className={styles.image}
              />
            </div>

            <div className={styles.contentOverlay}>
              <div className={styles.titleAndNumber}>
                <h3 className={styles.processTitle}>{step.title}</h3>
                <span className={styles.processNumber}>{step.id}</span>
              </div>
              <p className={styles.processParagraph}>{step.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
