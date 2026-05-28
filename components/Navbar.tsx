'use client'

import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        Lumina<span>AI</span>
      </div>
      <div className={styles.links}>
        <a href="#features">Platform</a>
        <a href="#workflow">Use Cases</a>
        <a href="#pricing">Pricing</a>
        <a href="#">Docs</a>
      </div>
      <button className={styles.cta}>Get early access →</button>
    </nav>
  )
}
