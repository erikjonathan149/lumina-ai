import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        Lumina<span>AI</span>
      </div>
      <div className={styles.right}>
        © 2026 Lumina AI. All rights reserved.
      </div>
    </footer>
  )
}
