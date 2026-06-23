import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Avatar from '../components/Avatar';
import LogoBadge from '../components/LogoBadge';

const timeline = [
  {
    when: 'May 2026 — Present',
    title: 'Product Management Intern',
    org: 'SkySpecs',
    body: 'Designed and launched VORTEX, a work order, asset, and inventory platform integrating Salesforce, Slack, and Google Drive — eliminating 150 hours/month across procurement, engineering, and production.',
    tag: 'PM',
  },
  {
    when: 'Dec 2025 — Apr 2026',
    title: 'Product Management Intern',
    org: 'Span Carbon Fiber',
    body: 'Aligned sales, production, and operations around a centralized KPI dashboard in Odoo; gathered and prioritized cross-team requirements, cutting manual effort 30%.',
    tag: 'PM',
  },
  {
    when: 'Sep 2025 — Dec 2025',
    title: 'Project Manager',
    org: 'Ross Tech Plus',
    body: 'Led a 4-person team for BioFuran Materials — built a market entry strategy that expanded online reach 35%, and shipped an invoicing system that cut customer issue reports 50%.',
    tag: 'Consulting',
  },
  {
    when: 'May 2025 — Aug 2025',
    title: 'Accounting & Finance Intern',
    org: 'Hemlock Semiconductor',
    body: 'Replaced a manual journal-entry process with a centralized VBA-powered retrieval system, saving 50+ hours/month, and audited six months of SAP time-tracking data.',
    tag: 'Finance',
  },
  {
    when: 'Jun 2024 — Dec 2024',
    title: 'Associate',
    org: 'Acosta Development',
    body: 'Synthesized zoning, deed, and environmental data into a Developer’s Guidebook used by 100+ Michigan-based developers.',
    tag: 'Research',
  },
];

const knownLogos = new Set(['SkySpecs', 'Span Carbon Fiber', 'Ross Tech Plus', 'Hemlock Semiconductor']);

export default function Experience() {
  return (
    <>
      <header className="detail-header">
        <Link to="/" className="back-link">← back home</Link>
        <motion.p className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          the journey so far
        </motion.p>
        <motion.h1
          className="huge-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{ maxWidth: 900 }}
        >
          From spreadsheets to shipping a platform.
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ marginTop: '1.6rem' }}
        >
          <Avatar pose="dive" style={{ width: 130 }} />
        </motion.div>
      </header>

      <section className="panel-tight" style={{ paddingTop: '1rem' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '3.2rem',
            maxWidth: 760,
            margin: '0 auto',
            borderLeft: '2px dashed rgba(255,185,143,0.3)',
            paddingLeft: '2.2rem',
          }}
        >
          {timeline.map((item, i) => (
            <motion.div
              key={item.title + item.org}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6, delay: 0.05 * i }}
              style={{ position: 'relative' }}
            >
              <span
                style={{
                  position: 'absolute',
                  left: '-2.65rem',
                  top: '0.3rem',
                  width: 14,
                  height: 14,
                  borderRadius: '50%',
                  background: 'var(--peach)',
                  boxShadow: '0 0 0 4px rgba(255,185,143,0.18)',
                }}
              />
              <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '0.7rem' }}>
                <span className="pill">{item.tag}</span>
                {knownLogos.has(item.org) && <LogoBadge name={item.org} />}
              </div>
              <p style={{ fontSize: '0.82rem', color: 'rgba(255,243,232,0.55)' }}>{item.when}</p>
              <h3 style={{ fontSize: '1.5rem', margin: '0.3rem 0 0.2rem', color: 'var(--peach-light)' }}>{item.title}</h3>
              <p style={{ fontSize: '1rem', color: 'rgba(255,243,232,0.6)', marginBottom: '0.6rem' }}>{item.org}</p>
              <p style={{ color: 'rgba(255,243,232,0.82)', fontSize: '1.02rem' }}>{item.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="panel-tight" style={{ alignItems: 'center', textAlign: 'center' }}>
        <Link to="/projects" className="contact-btn primary" style={{ marginInline: 'auto' }}>
          see what I built next →
        </Link>
      </section>
    </>
  );
}
