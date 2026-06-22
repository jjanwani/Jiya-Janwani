import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Avatar from '../components/Avatar';

const timeline = [
  {
    when: 'May 2026 — Present',
    title: 'Product Management Intern, SkySpecs',
    body:
      'Designed and launched VORTEX, a work order, asset, and inventory platform integrating Salesforce, Slack, and Google Drive — eliminating 150 hours/month across procurement, engineering, and production.',
    tag: 'PM',
  },
  {
    when: 'Dec 2025 — Apr 2026',
    title: 'Product Management Intern, Carbon Fiber Span',
    body:
      'Aligned sales, production, and operations around a centralized KPI dashboard in Odoo; gathered and prioritized cross-team requirements, cutting manual effort 30%.',
    tag: 'PM',
  },
  {
    when: 'Sep 2025 — Dec 2025',
    title: 'Project Manager, Ross Tech Plus Consulting',
    body:
      'Led a 4-person team for BioFuran Materials — built a market entry strategy that expanded online reach 35%, and shipped an invoicing system that cut customer issue reports 50%.',
    tag: 'Consulting',
  },
  {
    when: 'May 2025 — Aug 2025',
    title: 'Accounting & Finance Intern, Hemlock Semiconductor',
    body:
      'Replaced a manual journal-entry process with a centralized VBA-powered retrieval system, saving 50+ hours/month, and audited six months of SAP time-tracking data.',
    tag: 'Finance',
  },
  {
    when: 'Jun 2024 — Dec 2024',
    title: 'Associate, Acosta Development',
    body:
      'Synthesized zoning, deed, and environmental data into a Developer’s Guidebook used by 100+ Michigan-based developers.',
    tag: 'Research',
  },
];

export default function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [0, 360, 0]);
  const x = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 60, -40, 50, 0]);

  return (
    <section id="journey" className="section" ref={ref} style={{ minHeight: '180vh' }}>
      <motion.p
        className="eyebrow"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        the journey so far
      </motion.p>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        From spreadsheets to shipping a platform.
      </motion.h2>

      <div style={{ position: 'relative', marginTop: '2rem' }}>
        <motion.div
          style={{
            position: 'sticky',
            top: '18%',
            float: 'right',
            marginRight: '2vw',
            width: 130,
            x,
            rotate,
            zIndex: 3,
            pointerEvents: 'none',
          }}
        >
          <Avatar pose="dive" style={{ width: '100%' }} />
        </motion.div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2.6rem',
            maxWidth: 680,
            borderLeft: '2px dashed rgba(255,185,143,0.3)',
            paddingLeft: '2rem',
          }}
        >
          {timeline.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-15%' }}
              transition={{ duration: 0.6, delay: 0.05 * i }}
              style={{ position: 'relative' }}
            >
              <span
                style={{
                  position: 'absolute',
                  left: '-2.45rem',
                  top: '0.3rem',
                  width: 14,
                  height: 14,
                  borderRadius: '50%',
                  background: 'var(--peach)',
                  boxShadow: '0 0 0 4px rgba(255,185,143,0.18)',
                }}
              />
              <span className="pill" style={{ marginBottom: '0.6rem' }}>{item.tag}</span>
              <p style={{ fontSize: '0.82rem', color: 'rgba(255,243,232,0.55)', marginTop: '0.4rem' }}>
                {item.when}
              </p>
              <h3 style={{ fontSize: '1.3rem', margin: '0.3rem 0 0.5rem', color: 'var(--peach-light)' }}>
                {item.title}
              </h3>
              <p style={{ color: 'rgba(255,243,232,0.8)' }}>{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
