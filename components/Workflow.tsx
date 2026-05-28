'use client'

import { useState, useEffect } from 'react'
import styles from './Workflow.module.css'

const steps = [
  {
    num: '1',
    title: 'Connect your sources',
    desc: 'Link your databases, docs, APIs, and tools. Lumina indexes everything securely in minutes.',
    icon: '⊙',
    visTitle: 'Connect your sources',
    visDesc: 'One-click integrations with Notion, Salesforce, Slack, Google Workspace, and 80+ more.',
    pills: ['Notion', 'Slack', 'Drive', 'Salesforce', 'Postgres', '+80'],
  },
  {
    num: '2',
    title: 'Define your workflows',
    desc: 'Set up triggers, instructions, and approval flows using plain language — no code required.',
    icon: '◉',
    visTitle: 'Define your workflows',
    visDesc: 'Describe what you need in plain English. Lumina builds the automation for you.',
    pills: ['Trigger', 'Condition', 'Action', 'Approval', 'Schedule', 'Notify'],
  },
  {
    num: '3',
    title: 'Get intelligent outputs',
    desc: 'Receive structured reports, summaries, decisions, and actions — always with full transparency.',
    icon: '◈',
    visTitle: 'Get intelligent outputs',
    visDesc: 'Structured reports, clear decisions, and auto-executed actions — with full audit logs.',
    pills: ['Reports', 'Summaries', 'Decisions', 'Actions', 'Alerts', 'Logs'],
  },
]

export default function Workflow() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [])

  const current = steps[active]

  return (
    <section className={styles.section} id="workflow">
      <div className={styles.inner}>
        <div className={styles.left}>
          <p className={styles.tag}>How it works</p>
          <h2 className={styles.title}>From raw data to decisive action</h2>
          <div className={styles.steps}>
            {steps.map((s, i) => (
              <div
                key={s.num}
                className={`${styles.step} ${active === i ? styles.active : ''}`}
                onClick={() => setActive(i)}
              >
                <div className={styles.stepNum}>{s.num}</div>
                <div>
                  <div className={styles.stepTitle}>{s.title}</div>
                  <div className={styles.stepDesc}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.visContent}>
            <span className={styles.visIcon}>{current.icon}</span>
            <div className={styles.visTitle}>{current.visTitle}</div>
            <div className={styles.visDesc}>{current.visDesc}</div>
            <div className={styles.visGrid}>
              {current.pills.map((p) => (
                <div key={p} className={styles.pill}>{p}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
