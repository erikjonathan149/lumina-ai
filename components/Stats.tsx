import styles from './Stats.module.css'

const stats = [
  { num: '2.4B+', label: 'Queries processed' },
  { num: '14k+',  label: 'Teams onboarded' },
  { num: '99.98%', label: 'Uptime SLA' },
  { num: '340ms', label: 'Avg. response time' },
]

export default function Stats() {
  return (
    <div className={styles.strip}>
      {stats.map((s) => (
        <div key={s.label} className={styles.item}>
          <span className={styles.num}>{s.num}</span>
          <span className={styles.label}>{s.label}</span>
        </div>
      ))}
    </div>
  )
}
