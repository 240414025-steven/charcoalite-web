import Image from "next/image";
import styles from "./Footerv2.module.css";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.contentWrapper}>
        {/* TOP SECTION: Links Grid & Feedback Form */}
        <div className={styles.topSection}>
          <div className={styles.linksGrid}>
            <div className={styles.linksColumn}>
              <h4 className={styles.columnTitle}>EXPERTISE</h4>
              <ul className={styles.linksList}>
                <li>MEDIA RELATIONS</li>
                <li>STRATEGIC COMMS</li>
                <li>THOUGHT LEADERSHIP</li>
                <li>CONTENT DEV</li>
              </ul>
            </div>
            <div className={styles.linksColumn}>
              <h4 className={styles.columnTitle}>INDUSTRIES</h4>
              <ul className={styles.linksList}>
                <li>Renewable Energy / Alternative Energy</li>
                <li>Waste Management & Circular Economy</li>
                <li>Manufacturing / Processing</li>
                <li>CLEAN ENERGY</li>
                <li>Food & Cooking Fuel</li>
                <li>Commercial & SME Support</li>
              </ul>
            </div>
            <div className={styles.linksColumn}>
              <h4 className={styles.columnTitle}>INFO</h4>
              <ul className={styles.linksList}>
                <li>WORK</li>
                <li>ABOUT</li>
                <li>CAREERS</li>
                <li>GET IN TOUCH</li>
              </ul>
            </div>
            <div className={styles.linksColumn}>
              <h4 className={styles.columnTitle}>CONNECT</h4>
              <ul className={styles.linksList}>
                <li>TIK TOK</li>
                <li>X/TWITTER</li>
                <li>INSTAGRAM</li>
                <li>LINKEDIN</li>
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
            {/* Left Side: Massive Title */}
            <div className={styles.massiveTitleWrapper}>
              <h1 className={styles.massiveTitle}>CHARCOALITE</h1>
            </div>

            {/* Right Side: Logo + Wrapped Text */}
            <div className={styles.logoAndTextWrap}>
              <div className={styles.logoAndTextWrap}>
                <div className={styles.imageWrapper}>
                  <Image
                    src="/logo.png"
                    alt="Charcoalite Logo"
                    width={100} // Increased size to make the wrap more visible
                    height={100}
                    className={styles.logoImage}
                  />
                </div>
                <p className={styles.wrappedTextParagraph}>
                  LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. NISI
                  CURSUS ULTRICIES IMPERDIET, METUS QUAM LUCTUS LIGULA.
                </p>
              </div>
            </div>
          </div>

          {/* Legal Line: Anchored to the bottom-left inside gradient */}
          <div className={styles.legalLineWrapper}>
            <p className={styles.legalLine}>
              © 2026 Charcoalite. All Rights Reserved. &nbsp;&nbsp; Cookie
              Preferences &nbsp;&nbsp; Privacy Policy &nbsp;&nbsp; Site Credits
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
