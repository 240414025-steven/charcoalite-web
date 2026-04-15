import Image from "next/image";
import styles from "./Footer.module.css";
import { FaXTwitter, FaInstagram, FaTiktok, FaEnvelope } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.contentWrapper}>
        {/* Top Section: Logo & Wrapped Text */}
        <div className={styles.textSection}>
          <div className={styles.logoWrapper}>
            {/* Replace with your actual logo path */}
            <Image
              src="/logo.png"
              alt="Charcoalite Logo"
              width={100}
              height={120}
              className={styles.logo}
            />
          </div>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            tempor dolor elit, id mattis purus semper quis. Phasellus malesuada,
            nisi cursus ultricies imperdiet, metus quam luctus ligula, at
            pulvinar urna lorem sed orci. Maecenas neque nunc, dictum at velit
            eu, sagittis dictum elit. In tempus arcu vitae ipsum porttito
          </p>
        </div>

        {/* Bottom Section: Social Buttons */}
        <div className={styles.buttonGroup}>
          <button className={styles.socialBtn}>
            <FaXTwitter className={styles.icon} />
            <span className={styles.divider}></span>
            <span className={styles.btnText}>X/TWITTER</span>
          </button>

          <button className={styles.socialBtn}>
            <FaInstagram className={styles.icon} />
            <span className={styles.divider}></span>
            <span className={styles.btnText}>INSTAGRAM</span>
          </button>

          <button className={styles.socialBtn}>
            <FaTiktok className={styles.icon} />
            <span className={styles.divider}></span>
            <span className={styles.btnText}>TIKTOK</span>
          </button>

          <button className={styles.socialBtn}>
            <FaEnvelope className={styles.icon} />
            <span className={styles.divider}></span>
            <span className={styles.btnText}>MAIL</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
