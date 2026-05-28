import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg} aria-hidden="true" />
      <div className={styles.orb1} aria-hidden="true" />
      <div className={styles.orb2} aria-hidden="true" />

      <div className={styles.eyebrow}>Now in open beta</div>

      <h1 className={styles.title}>
        Intelligence that<br />
        <em>thinks ahead</em> of you
      </h1>

      <p className={styles.sub}>
        Lumina AI transforms how your team makes decisions —
        surfacing insights before you know you need them.
      </p>

      <div className={styles.actions}>
        <button className={styles.btnPrimary}>Start free trial</button>
        <button className={styles.btnGhost}>Watch demo →</button>
      </div>
    </section>
  )
}
