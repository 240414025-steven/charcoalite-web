import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header}>
      {/* LEFT SIDE: The Logo */}
      <Link href="/" className={styles.logo}>
        <Image
          src="/logo.png"
          alt="logo image"
          width="200"
          height="200"
          className={styles.logoStyle}
        />
      </Link>

      {/* RIGHT SIDE: The Navigation Links */}
      <nav className={styles.nav}>
        <Link href="#features" className={styles.navLink}>
          Features
        </Link>
        <Link href="#specs" className={styles.navLink}>
          Specifications
        </Link>
        <Link href="#contact" className={styles.quoteButton}>
          Get a Quote
        </Link>
      </nav>
    </header>
  );
}
