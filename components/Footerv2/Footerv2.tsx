import Image from "next/image";
import styles from "./Footerv2.module.css";

export default function Footer() {
  return (
    <footer id="footer" className={styles.footerContainer}>
      <div className={styles.contentWrapper}>
        {/* TOP SECTION: Links Grid & Feedback Form */}
        <div className={styles.topSection}>
          <div className={styles.linksGrid}>
            <div className={styles.linksColumn}>
              <h4 className={styles.columnTitle}>NAVIGATE</h4>
              <ul className={styles.linksList}>
                <a href="/Pricelist">PRICELIST</a>
                <a href="">ABOUT</a>
                <a href="">CERTIFICATE</a>
                <a href="">CONTENT DEV</a>
              </ul>
            </div>
            <div className={styles.linksColumn}>
              <h4 className={styles.columnTitle}>INDUSTRIES</h4>
              <ul className={styles.linksList}>
                <a href="">Renewable Energy / Alternative Energy</a>
                <a href="">Waste Management & Circular Economy</a>
                <a href="">Manufacturing / Processing</a>
                <a href="">CLEAN ENERGY</a>
                <a href="">Food & Cooking Fuel</a>
                <a href="">Commercial & SME Support</a>
              </ul>
            </div>
            <div className={styles.linksColumn}>
              <h4 className={styles.columnTitle}>OFFICIAL ONLINE STORE</h4>
              <ul className={styles.linksList}>
                <a href="">Shopee</a>
                <a href="">Tokopedia</a>
                <a href="">Careers</a>
                <a href="">Certificate</a>
              </ul>
            </div>
            <div className={styles.linksColumn}>
              <h4 className={styles.columnTitle}>CONNECT</h4>
              <ul className={styles.linksList}>
                <a href="">TIK TOK</a>
                <a href="">X/TWITTER</a>
                <a href="">INSTAGRAM</a>
                <a href="">LINKEDIN</a>
                <a href="">GMAIL</a>
              </ul>
            </div>
          </div>

          <div className={styles.feedbackBox}>
            <h3 className={styles.feedbackHeader}>FEEDBACK</h3>
            <p className={styles.feedbackText}>
              Share your thoughts to help us improve.
            </p>
            <form className={styles.feedbackForm}>
              <input
                type="text"
                placeholder="Your Name"
                className={styles.formInput}
              />
              <input
                type="email"
                placeholder="Your Email"
                className={styles.formInput}
              />
              <textarea
                placeholder="Comments..."
                className={styles.formTextarea}
              ></textarea>
              <button type="submit" className={styles.submitBtn}>
                SEND
              </button>
            </form>
          </div>
        </div>

        {/* BOTTOM SECTION: All items inside the gradient block */}
        <div className={styles.bottomGradientSection}>
          <div className={styles.bottomFlexContainer}>
            {/* Left Side: Massive Title remains, right side is now empty */}
            <div className={styles.massiveTitleWrapper}>
              <h1 className={styles.massiveTitle}>CHARCOALITE</h1>
            </div>
          </div>

          {/* Legal Line: Anchored to the bottom-left inside gradient */}
          <div className={styles.legalLineWrapper}>
            <p className={styles.legalLine}>
              © 2026 Charcoalite Bara Nusantara. All Rights Reserved.
            </p>
            <p className={styles.legalLine}>Cookie Preferences</p>
            <p className={styles.legalLine}> Privacy Policy</p>
            <p className={styles.legalLine}>Site Credits</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
