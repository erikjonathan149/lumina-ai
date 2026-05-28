import styles from './CTA.module.css'

export default function CTA() {
  return (
    <section className={styles.section}>
      <div className={styles.glow} aria-hidden="true" />
      <h2 className={styles.title}>
        Ready to see what<br />
        <em>clarity</em> feels like?
      </h2>
      <p className={styles.sub}>
        Join 14,000+ teams already using Lumina AI to make smarter, faster decisions.
      </p>
      <button className={styles.btn}>Start for free — no card needed</button>
    </section>
  )
}
