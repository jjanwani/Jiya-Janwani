import { motion } from 'framer-motion';

const personas = [
  { name: 'Field Engineer', need: 'Lost 30–60 minutes per unit just retrieving the right info, with no clear way to prioritize open work orders.' },
  { name: 'Production Manager', need: 'Needed inventory and KPIs to stay current in real time; approvals kept slipping through the cracks.' },
  { name: 'Ops & Logistics Lead', need: 'Was manually re-entering the same repair-materials data into a spreadsheet, with too many clicks to update or reorder inventory.' },
];

const buckets = [
  { name: 'Dashboard', who: 'PMs, production managers', what: 'KPI tracking, deployment status, asset health' },
  { name: 'Work Orders', who: 'Engineers, ops, production', what: 'Prioritization flags, maintenance vs. build, assigned owner, time to complete' },
  { name: 'Inventory', who: 'Ops/logistics, procurement', what: 'Component revisions, approval steps, flagged reorders' },
  { name: 'Info Hub', who: 'Engineers, PMs', what: 'Streamlined retrieval of reference docs, regulatory + recovery data' },
];

const otherProjects = [
  {
    name: 'BYTE+ (Business + Technology Execution)',
    org: 'Michigan Ross Tech Plus Consulting',
    body: 'Full-stack project management platform for 20 consulting teams and 80+ student analysts — centralized workflows, templates, and internal ops.',
    link: 'https://github.com/jjanwani',
  },
  {
    name: 'Ross Reddit',
    org: 'Zell Lurie Center for Entrepreneurship',
    body: '50+ user interviews uncovered gaps in student networking — prototyped a peer Q&A, mentorship-matching, and resource hub.',
    link: 'https://github.com/jjanwani',
  },
  {
    name: 'Governance for Ethical AI',
    org: 'Independent research',
    body: 'Benchmarked AI governance frameworks across 10 universities into a tailored policy framework + site for a California public university.',
    link: 'https://github.com/jjanwani',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <motion.p className="eyebrow" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        flagship project
      </motion.p>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        VORTEX: a work order, asset &amp; inventory platform
      </motion.h2>
      <motion.p
        className="section-sub"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        style={{ marginBottom: '3rem' }}
      >
        Built at SkySpecs for the team that builds and repairs their drone fleet. VORTEX
        brought work orders, assets, and inventory into one shared platform across
        procurement, engineering, and production. Here's the discovery process behind it.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ marginBottom: '5rem', display: 'flex', alignItems: 'baseline', gap: '1.4rem', flexWrap: 'wrap' }}
      >
        <span className="panel-label">150hrs</span>
        <span style={{ fontSize: '1.05rem', color: 'rgba(255,243,232,0.7)', maxWidth: 280 }}>
          saved every month across procurement, engineering, and production
        </span>
      </motion.div>

      <div className="vortex-grid">
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="card-title">01 · Who I talked to</h3>
          <p className="card-copy">
            Before writing a single requirement, I mapped personas across every team
            touching a drone's lifecycle — pulled straight from real interviews on the floor.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginTop: '1rem' }}>
            {personas.map((p) => (
              <div key={p.name} style={{ borderLeft: '2px solid var(--blue-light)', paddingLeft: '0.8rem' }}>
                <strong style={{ color: 'var(--peach-light)', fontSize: '0.92rem' }}>{p.name}</strong>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,243,232,0.75)', marginTop: '0.2rem' }}>{p.need}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="card-title">02 · Mapping the current process</h3>
          <p className="card-copy">
            I diagrammed the drone's actual journey — deployed → issue in field → delivered
            → RCA / redress → EOL testing → packed → shipped — then built a RACI matrix
            across 12 stakeholders to see exactly where ownership broke down.
          </p>
          <div className="flow-row">
            {['Deployed', 'Issue in field', 'Delivered', 'RCA / redress', 'EOL test', 'Shipped'].map((s, i) => (
              <span key={s} className="flow-step">
                {s}
                {i < 5 && <span className="flow-arrow">→</span>}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="card-title">03 · Defining the four buckets</h3>
          <p className="card-copy">
            Every pain point sorted cleanly into four feature areas — each with its own
            owners and concerns, so scope never crept past what each team actually needed.
          </p>
          <div className="bucket-grid">
            {buckets.map((b) => (
              <div key={b.name} className="bucket">
                <h4>{b.name}</h4>
                <p className="bucket-who">{b.who}</p>
                <p className="bucket-what">{b.what}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="card-title">04 · Shipping in versions, not one big launch</h3>
          <ul className="version-list">
            <li><strong>v1:</strong> stood up the Dashboard, Assets, Work Orders, Inventory, and Info Hub with secure sign-on; flagged open questions on data ownership for the next round.</li>
            <li><strong>v2:</strong> added per-unit time KPIs (MTTR, cycle time), a drag-and-drop process view, and role-based add/edit flows.</li>
            <li><strong>v3:</strong> migrated to the team's internal dev tooling, wired in automated document retrieval, and added subtask tracking with full change history.</li>
          </ul>
          <p className="card-copy" style={{ marginTop: '0.8rem' }}>
            Adopted across <strong style={{ color: 'var(--peach)' }}>four teams</strong>,
            with me leading the change-management rollout.
          </p>
        </motion.div>
      </div>

      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{ marginTop: '4rem', fontSize: '1.6rem', color: 'var(--peach-light)' }}
      >
        Other things I've built
      </motion.h3>
      <div className="other-grid">
        {otherProjects.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="other-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -6 }}
          >
            <span className="pill">{p.org}</span>
            <h4>{p.name}</h4>
            <p>{p.body}</p>
            <span className="other-link">view on GitHub →</span>
          </motion.a>
        ))}
      </div>

      <style>{`
        .vortex-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2.4rem;
        }
        @media (max-width: 900px) { .vortex-grid { grid-template-columns: 1fr; } }
        .card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,185,143,0.18);
          border-radius: 18px;
          padding: 2.4rem;
          backdrop-filter: blur(6px);
        }
        .card-title { font-size: 1.1rem; color: var(--peach); margin-bottom: 0.7rem; }
        .card-copy { font-size: 0.96rem; color: rgba(255,243,232,0.78); line-height: 1.75; }
        .flow-row { display: flex; flex-wrap: wrap; gap: 0.3rem; margin-top: 1rem; align-items: center; }
        .flow-step { font-size: 0.78rem; background: rgba(58,79,158,0.25); border: 1px solid rgba(58,79,158,0.5); padding: 0.3rem 0.6rem; border-radius: 8px; display: flex; align-items: center; gap: 0.4rem; color: var(--peach-light); }
        .flow-arrow { color: rgba(255,243,232,0.4); }
        .bucket-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.8rem; margin-top: 1rem; }
        .bucket { background: rgba(255,185,143,0.06); border-radius: 12px; padding: 0.8rem; }
        .bucket h4 { font-size: 0.92rem; color: var(--peach-light); margin-bottom: 0.3rem; }
        .bucket-who { font-size: 0.72rem; color: rgba(255,243,232,0.55); margin-bottom: 0.2rem; }
        .bucket-what { font-size: 0.8rem; color: rgba(255,243,232,0.8); }
        .version-list { padding-left: 1.1rem; display: flex; flex-direction: column; gap: 0.6rem; font-size: 0.88rem; color: rgba(255,243,232,0.8); }
        .other-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; margin-top: 2.4rem; }
        @media (max-width: 900px) { .other-grid { grid-template-columns: 1fr; } }
        .other-card { display: block; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,185,143,0.16); border-radius: 16px; padding: 1.4rem; text-decoration: none; transition: border-color 0.2s ease; }
        .other-card:hover { border-color: rgba(255,185,143,0.5); }
        .other-card h4 { color: var(--peach-light); margin: 0.7rem 0 0.5rem; font-size: 1.05rem; }
        .other-card p { font-size: 0.85rem; color: rgba(255,243,232,0.75); }
        .other-link { display: inline-block; margin-top: 0.8rem; font-size: 0.78rem; color: var(--peach); }
      `}</style>
    </section>
  );
}
