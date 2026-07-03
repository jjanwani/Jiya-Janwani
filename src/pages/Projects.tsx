import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const personas = [
  { name: 'Field Engineer', need: 'Lost 30–60 minutes per unit retrieving info, with no clear way to prioritize open work orders.' },
  { name: 'Production Manager', need: 'Needed inventory and KPIs in real time; approvals kept slipping through the cracks.' },
  { name: 'Ops and Logistics Lead', need: 'Was manually re-entering repair-materials data into a spreadsheet, with too many clicks to update or reorder inventory.' },
];

const buckets = [
  { name: 'Dashboard', who: 'PMs, production managers', what: 'KPI tracking, deployment status, asset health' },
  { name: 'Work Orders', who: 'Engineers, ops, production', what: 'Prioritization flags, maintenance vs. build, assigned owner, time to complete' },
  { name: 'Inventory', who: 'Ops/logistics, procurement', what: 'Component revisions, approval steps, flagged reorders' },
  { name: 'Info Hub', who: 'Engineers, PMs', what: 'Streamlined retrieval of reference docs, regulatory and recovery data' },
];

const otherProjects = [
  {
    name: 'BYTE+ (Business + Technology Execution)',
    org: 'Michigan Ross Tech Plus Consulting',
    body: 'Project management platform for 20 consulting teams and 80+ student analysts, centralizing workflows, templates, and internal ops.',
    link: 'https://github.com/jjanwani',
  },
  {
    name: 'Governance for Ethical AI',
    org: 'Independent research',
    body: 'Benchmarked AI governance frameworks across 10 universities into a tailored policy framework and site for a California public university.',
    link: 'https://github.com/jjanwani',
  },
  {
    name: 'ML Text Classifier',
    org: 'Personal project',
    body: 'Built a machine learning text classifier to categorize unstructured data, applying NLP techniques and iterating on model accuracy.',
    link: 'https://github.com/jjanwani',
  },
  {
    name: 'Euchre Game',
    org: 'Personal project',
    body: 'Developed a fully playable Euchre card game with AI opponents, game state management, and a clean UI from scratch.',
    link: 'https://github.com/jjanwani',
  },
];


export default function Projects() {
  return (
    <>
      <header className="detail-header">
        <Link to="/" className="back-link">← back home</Link>

        <motion.p className="eyebrow" initial={{ opacity: 0, x: -200 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
          flagship project
        </motion.p>
        <motion.h1
          className="section-title"
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ fontSize: 'clamp(2.4rem, 6vw, 4.4rem)' }}
        >
          VORTEX: a work order, asset &amp; inventory platform
        </motion.h1>
        <motion.p
          className="section-sub"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
        >
          Built at SkySpecs for the team that builds and repairs their drone fleet. VORTEX brought work orders, assets, and inventory into one shared platform across procurement, engineering, and production. Here is the discovery process behind it.
        </motion.p>
      </header>

      <section className="section" style={{ paddingTop: '1rem', alignItems: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '5rem', display: 'flex', alignItems: 'baseline', gap: '1.4rem', flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <span className="panel-label">150hrs</span>
          <span style={{ fontSize: '1.05rem', color: 'rgba(255,243,232,0.7)', maxWidth: 280 }}>
            saved every month across procurement, engineering, and production
          </span>
        </motion.div>

        <div className="vortex-grid">
          <motion.div
            className="card"
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="card-title">01 · Who I talked to</h3>
            <p className="card-copy">
              Before writing a single requirement, I mapped personas across every team
              touching a drone's lifecycle, pulled straight from real interviews on the floor.
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
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="card-title">02 · Mapping the current process</h3>
            <p className="card-copy" style={{ marginBottom: '1.4rem' }}>
              I diagrammed the drone's actual lifecycle and built a RACI matrix across 12 stakeholders to find exactly where ownership broke down.
            </p>
            {/* Visual flow diagram */}
            <div className="process-diagram">
              <div className="proc-row">
                <div className="proc-spacer" />
                <div className="proc-node"><span className="proc-label">Ready to RCA</span><span className="proc-owner">RCA Shelf</span></div>
                <div className="proc-arrow">→</div>
                <div className="proc-node"><span className="proc-label">Root Cause Analysis</span><span className="proc-owner">Engineering</span></div>
                <div className="proc-arrow">→</div>
                <div className="proc-node"><span className="proc-label">Ready to Redress</span><span className="proc-owner">RCA Shelf</span></div>
              </div>
              <div className="proc-connectors" aria-hidden="true">
                <span className="proc-up-arrow" style={{ marginLeft: '19%' }}>↑</span>
                <span className="proc-down-arrow" style={{ marginLeft: '58%' }}>↓</span>
              </div>
              <div className="proc-row">
                <div className="proc-node"><span className="proc-label">Delivered</span><span className="proc-owner">Logistics Shelf</span></div>
                <div className="proc-arrow">→</div>
                <div className="proc-node"><span className="proc-label">Drone Kit Ingestion</span><span className="proc-owner">Logistics</span></div>
                <div className="proc-arrow">→</div>
                <div className="proc-node"><span className="proc-label">Ready to Redress</span><span className="proc-owner">Tech Shelf</span></div>
                <div className="proc-arrow">→</div>
                <div className="proc-node"><span className="proc-label">Drone Redress</span><span className="proc-owner">Techs</span></div>
                <div className="proc-arrow">→</div>
                <div className="proc-node"><span className="proc-label">Ready to Test</span><span className="proc-owner">Tech Shelf</span></div>
              </div>
              <div className="proc-connectors" aria-hidden="true">
                <span className="proc-up-arrow" style={{ marginLeft: '2%' }}>↑</span>
                <span className="proc-down-arrow" style={{ marginLeft: '88%' }}>↓</span>
              </div>
              <div className="proc-row">
                <div className="proc-node"><span className="proc-label">Issue in Field</span><span className="proc-owner">Jared</span></div>
                <div className="proc-spacer proc-spacer-grow" />
                <div className="proc-node"><span className="proc-label">EOL Testing</span><span className="proc-owner">RC/GP</span></div>
              </div>
              <div className="proc-connectors" aria-hidden="true">
                <span className="proc-up-arrow" style={{ marginLeft: '2%' }}>↑</span>
                <span className="proc-down-arrow" style={{ marginLeft: '88%' }}>↓</span>
              </div>
              <div className="proc-row">
                <div className="proc-node"><span className="proc-label">Deployed</span><span className="proc-owner">Pilots</span></div>
                <div className="proc-arrow proc-arrow-left">←</div>
                <div className="proc-node"><span className="proc-label">Shipped</span><span className="proc-owner" style={{ opacity: 0.3 }}>–</span></div>
                <div className="proc-arrow proc-arrow-left">←</div>
                <div className="proc-node"><span className="proc-label">Packup Kits</span><span className="proc-owner">Logistics</span></div>
                <div className="proc-arrow proc-arrow-left">←</div>
                <div className="proc-node"><span className="proc-label">Ready to Pack</span><span className="proc-owner">Logistics Shelf</span></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="card"
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="card-title">03 · Defining the four buckets</h3>
            <p className="card-copy">
              Every pain point sorted cleanly into four feature areas, each with its own
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
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
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
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginTop: '5rem', fontSize: '1.6rem', color: 'var(--peach-light)' }}
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
              initial={{ opacity: 0, y: 30 }}
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ marginTop: '4rem' }}
        >
          <Link to="/experience" className="back-link" style={{ marginBottom: 0 }}>
            ← see where I've worked
          </Link>
        </motion.div>
      </section>

      <style>{`
        .vortex-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2.4rem;
          max-width: 1100px;
          width: 100%;
        }
        @media (max-width: 900px) { .vortex-grid { grid-template-columns: 1fr; } }
        .card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,185,143,0.18);
          border-radius: 18px;
          padding: 2.4rem;
          backdrop-filter: blur(6px);
          text-align: left;
        }
        .card-title { font-size: 1.1rem; color: var(--peach); margin-bottom: 0.7rem; }
        .card-copy { font-size: 0.96rem; color: rgba(255,243,232,0.78); line-height: 1.75; }

        /* Process diagram */
        .process-diagram { display: flex; flex-direction: column; gap: 0; font-size: 0.7rem; }
        .proc-row { display: flex; align-items: center; gap: 0.25rem; flex-wrap: nowrap; overflow-x: auto; }
        .proc-node {
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          background: rgba(29,44,99,0.7); border: 1px solid rgba(58,79,158,0.6);
          border-radius: 7px; padding: 0.35rem 0.45rem; min-width: 68px; flex-shrink: 0; text-align: center;
        }
        .proc-label { font-size: 0.65rem; color: var(--cream); font-weight: 600; line-height: 1.2; }
        .proc-owner { font-size: 0.58rem; color: var(--peach-light); margin-top: 0.2rem; opacity: 0.85; }
        .proc-arrow { color: rgba(255,243,232,0.5); font-size: 0.9rem; flex-shrink: 0; padding: 0 0.1rem; }
        .proc-arrow-left { color: rgba(255,243,232,0.5); }
        .proc-spacer { width: 76px; flex-shrink: 0; }
        .proc-spacer-grow { flex: 1; }
        .proc-connectors { display: flex; align-items: center; position: relative; height: 1rem; }
        .proc-up-arrow, .proc-down-arrow { position: absolute; color: rgba(255,243,232,0.5); font-size: 0.85rem; }

        .bucket-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.8rem; margin-top: 1rem; }
        .bucket { background: rgba(255,185,143,0.06); border-radius: 12px; padding: 0.8rem; }
        .bucket h4 { font-size: 0.92rem; color: var(--peach-light); margin-bottom: 0.3rem; }
        .bucket-who { font-size: 0.72rem; color: rgba(255,243,232,0.55); margin-bottom: 0.2rem; }
        .bucket-what { font-size: 0.8rem; color: rgba(255,243,232,0.8); }
        .version-list { padding-left: 1.1rem; display: flex; flex-direction: column; gap: 0.6rem; font-size: 0.88rem; color: rgba(255,243,232,0.8); }
        .other-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.8rem; margin-top: 2.4rem; max-width: 1100px; width: 100%; }
        @media (max-width: 700px) { .other-grid { grid-template-columns: 1fr; } }
        .other-card { display: block; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,185,143,0.16); border-radius: 16px; padding: 1.6rem; text-decoration: none; transition: border-color 0.2s ease; text-align: left; }
        .other-card:hover { border-color: rgba(255,185,143,0.5); }
        .other-card h4 { color: var(--peach-light); margin: 0.7rem 0 0.5rem; font-size: 1.05rem; }
        .other-card p { font-size: 0.85rem; color: rgba(255,243,232,0.75); }
        .other-link { display: inline-block; margin-top: 0.8rem; font-size: 0.78rem; color: var(--peach); }
      `}</style>
    </>
  );
}
