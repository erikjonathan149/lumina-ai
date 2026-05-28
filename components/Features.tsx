import styles from './Features.module.css'

const features = [
  {
    icon: '◈',
    title: 'Deep context memory',
    desc: "Lumina maintains a persistent understanding of your organization's knowledge, goals, and language across every session.",
  },
  {
    icon: '⊕',
    title: 'Multimodal reasoning',
    desc: 'Process and synthesize documents, images, data, and voice simultaneously for richer, more accurate outputs.',
  },
  {
    icon: '⟳',
    title: 'Autonomous agents',
    desc: 'Deploy intelligent agents that act on your behalf — scheduling, researching, drafting, and executing complex multi-step tasks.',
  },
  {
    icon: '⌘',
    title: 'API-first architecture',
    desc: 'Integrate Lumina into your existing stack in minutes. SDKs for Python, Node, Go, and REST endpoints for everything else.',
  },
  {
    icon: '◎',
    title: 'Compliance & governance',
    desc: 'Full audit trail, role-based access, data residency controls. SOC 2 Type II, GDPR, and HIPAA compliant out of the box.',
  },
  {
    icon: '◇',
    title: 'Analytics dashboard',
    desc: 'Real-time visibility into usage, cost, performance, and quality metrics. Built for both technical and business stakeholders.',
  },
]

export default function Features() {
  return (
    <section className={styles.section} id="features">
      <p className={styles.tag}>Core capabilities</p>
      <h2 className={styles.title}>Built for the way your team actually works</h2>
      <div className={styles.grid}>
        {features.map((f) => (
          <div key={f.title} className={styles.card}>
            <div className={styles.icon}>{f.icon}</div>
            <h3 className={styles.cardTitle}>{f.title}</h3>
            <p className={styles.cardDesc}>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
