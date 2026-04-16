import Image from "next/image";
import styles from "./Footer.module.css";
import { FaXTwitter, FaInstagram, FaTiktok, FaEnvelope } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.contentWrapper}>
        {/* Main Row: Brand Info and Links */}
        <div className={styles.mainContentRow}>
          {/* LEFT SECTION: Brand Info & Socials */}
          <div className={styles.leftSection}>
            <div className={styles.textSection}>
              <div className={styles.logoWrapper}>
                <Image
                  src="/logo.png"
                  alt="Charcoalite Logo"
                  width={60}
                  height={72}
                  className={styles.logo}
                />
              </div>
              <p className={styles.paragraph}>
                <span className={styles.paragraphHighlight}>
                  Charcoalite Bara Nusantara
                </span>{" "}
                consectetur adipiscing elit. Curabitur tempor dolor elit, id
                mattis purus semper quis. Phasellus malesuada, nisi cursus
                ultricies imperdiet, metus quam luctus ligula, at pulvinar urna
                lorem sed orci. Maecenas neque nunc, dictum at velit eu,
                sagittis dictum elit. In tempus arcu vitae ipsum porttitor.
              </p>
            </div>

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

          {/* RIGHT SECTION: Links Grid */}
          <div className={styles.rightSection}>
            <div className={styles.linksGrid}>
              <div className={styles.linksColumn}>
                <h4 className={styles.columnTitle}>EXPERTISE</h4>
                <ul className={styles.linksList}>
                  <li>MEDIA RELATIONS</li>
                  <li>STRATEGIC COMMS</li>
                  <li>THOUGHT LEADERSHIP</li>
                </ul>
              </div>
              <div className={styles.linksColumn}>
                <h4 className={styles.columnTitle}>INDUSTRIES</h4>
                <ul className={styles.linksList}>
                  <li>MALAS</li>
                  <li>CLIMATE TECH</li>
                  <li>ECO INNOVATION</li>
                </ul>
              </div>
              <div className={styles.linksColumn}>
                <h4 className={styles.columnTitle}>INFO</h4>
                <ul className={styles.linksList}>
                  <li>WORK</li>
                  <li>ABOUT</li>
                  <li>CAREERS</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* LEGAL LINES: Spread across the full width */}
        <div className={styles.legalLineWrapper}>
          <p className={styles.legalLine}>
            © 2026 Charcoalite Bara Nusantara. All Rights Reserved.
          </p>
          <p className={styles.legalLine}>Cookie Preferences</p>
          <p className={styles.legalLine}> Privacy Policy</p>
          <p className={styles.legalLine}>Site Credits</p>
        </div>
      </div>
    </footer>
  );
}
