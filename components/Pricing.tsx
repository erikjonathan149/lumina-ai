import styles from './Pricing.module.css'

const plans = [
  {
    tier: 'Starter',
    price: '0',
    period: 'Free forever',
    featured: false,
    features: [
      '50 queries / day',
      '3 integrations',
      'Community support',
      'Standard response time',
    ],
    cta: 'Get started',
  },
  {
    tier: 'Pro',
    price: '49',
    period: 'per seat / month',
    featured: true,
    features: [
      'Unlimited queries',
      'All integrations',
      'Priority support',
      'Agent workflows',
      'Advanced analytics',
    ],
    cta: 'Start 14-day trial',
  },
  {
    tier: 'Enterprise',
    price: null,
    period: 'Tailored for your team',
    featured: false,
    features: [
      'Dedicated infrastructure',
      'Custom models & fine-tuning',
      'SLA guarantee',
      'SSO & compliance add-ons',
      'White-glove onboarding',
    ],
    cta: 'Talk to sales →',
  },
]

export default function Pricing() {
  return (
    <section className={styles.section} id="pricing">
      <div className={styles.header}>
        <p className={styles.tag}>Pricing</p>
        <h2 className={styles.title}>Simple, transparent pricing</h2>
      </div>

      <div className={styles.grid}>
        {plans.map((p) => (
          <div key={p.tier} className={`${styles.card} ${p.featured ? styles.featured : ''}`}>
            {p.featured && <div className={styles.badge}>Most popular</div>}
            <div className={styles.tier}>{p.tier}</div>
            <div className={styles.amount}>
              {p.price !== null ? (
                <><sup>$</sup>{p.price}</>
              ) : (
                <span className={styles.custom}>Custom</span>
              )}
            </div>
            <div className={styles.period}>{p.period}</div>
            <div className={styles.divider} />
            <ul className={styles.features}>
              {p.features.map((f) => (
                <li key={f}>
                  <span className={styles.check}>✦</span>
                  {f}
                </li>
              ))}
            </ul>
            <button className={`${styles.btn} ${p.featured ? styles.btnFilled : styles.btnOutline}`}>
              {p.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
