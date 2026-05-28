import styles from './Ticker.module.css'

const items = [
  'Real-time intelligence',
  'Enterprise-grade security',
  'Multimodal reasoning',
  'Seamless integration',
  '99.98% uptime SLA',
  'SOC 2 Type II certified',
]

export default function Ticker() {
  // Duplicate for seamless loop
  const doubled = [...items, ...items]

  return (
    <div className={styles.ticker}>
      <div className={styles.inner}>
        {doubled.map((item, i) => (
          <span key={i} className={styles.item}>
            <span className={styles.dot}>·</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
