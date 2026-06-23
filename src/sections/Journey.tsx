import { motion } from 'framer-motion';

const experiences = [
  {
    when: 'May 2026 — Present',
    role: 'Product Management Intern',
    org: 'SkySpecs',
    context:
      'SkySpecs builds software that helps wind energy operators inspect, maintain, and extend the life of turbine blades using drones and AI-driven defect detection. I joined the team that keeps SkySpecs’ own drone fleet flying — the engineers, technicians, and ops staff who build, repair, and redeploy hardware every week.',
    walkedInto:
      'The team I supported had no single place to track a drone’s status. Work orders lived in someone’s head or a Slack thread, inventory counts were a guess until someone walked the shelf, and finding the right spec sheet meant digging through a shared drive that had outgrown its own folder structure. Every handoff between procurement, engineering, and production cost time nobody could get back.',
    approach:
      'I didn’t start with a build doc — I started by sitting with the people doing the work. I shadowed floor engineers, ran structured interviews with production and ops leads, and mapped the full lifecycle of a drone from deployment to repair to redeploy. From there I grouped every pain point into four clear feature areas, each with a named owner, so scope stayed honest. I shipped in dated versions instead of one big launch, closing every version with the open questions it surfaced.',
    delivered:
      'A platform that gives every team one shared view of work orders, assets, and inventory — adopted across four teams, with me running the change-management rollout myself, not just handing off a finished build.',
    tag: 'Product Management',
  },
  {
    when: 'Dec 2025 — Apr 2026',
    role: 'Product Management Intern',
    org: 'Carbon Fiber Span',
    context:
      'Carbon Fiber Span manufactures custom carbon-fiber composite components for industrial clients. Like a lot of growing manufacturers, their sales, production, and operations teams had each built their own way of tracking performance — which meant nobody was looking at the same numbers in the same room.',
    walkedInto:
      'Sales had its own pipeline metrics, production tracked throughput separately, and operations measured something else entirely. Decisions got made on whichever number someone happened to have open, and a lot of manual re-entry stood between raw data and anything resembling a KPI.',
    approach:
      'I ran requirements-gathering sessions across all three teams to find the handful of metrics everyone actually needed to see, then designed a centralized KPI dashboard inside their Odoo ERP system so it lived where people already worked instead of becoming one more tool to check.',
    delivered:
      'One shared dashboard that cut manual reporting effort by 30% and gave leadership a single number to plan around instead of three conflicting ones.',
    tag: 'Operations + PM',
  },
  {
    when: 'Sep 2025 — Dec 2025',
    role: 'Project Manager',
    org: 'Ross Tech Plus Consulting',
    context:
      'BYTE+ is Michigan Ross’s student-run technology consulting practice. I led a 4-person team on a paid engagement for BioFuran Materials, an early-stage specialty materials company that needed both a sharper go-to-market story and a cleaner back office.',
    walkedInto:
      'BioFuran had a strong technical product but a thin digital presence and a manual, error-prone invoicing process — the kind of operational gap that quietly costs a small company customer trust.',
    approach:
      'I split the engagement into two workstreams I ran in parallel: a market-entry strategy grounded in competitor and channel research, and a lightweight invoicing system designed around how their two-person ops team actually worked, not an idealized version of it.',
    delivered:
      'A go-to-market plan that expanded their online reach by 35%, and an invoicing system that cut customer-reported billing issues in half — plus a team of three other analysts who left the project knowing how to run a client engagement themselves.',
    tag: 'Consulting',
  },
  {
    when: 'May 2025 — Aug 2025',
    role: 'Accounting & Finance Intern',
    org: 'Hemlock Semiconductor',
    context:
      'Hemlock Semiconductor manufactures the polysilicon that goes into semiconductors and solar panels — a business where operational precision matters because the cost of an error compounds across an entire production run. I worked inside the finance team that keeps that precision honest.',
    walkedInto:
      'A recurring journal-entry process that ate hours every close cycle because it depended on manually pulling and reconciling data that lived in separate systems.',
    approach:
      'I learned the existing process well enough to see where it broke, then built a VBA-powered retrieval system that automated the data pull and reconciliation steps. I also audited six months of SAP time-tracking data by hand to catch discrepancies before they reached the books.',
    delivered:
      'A process that saved 50+ hours a month for the close team, and a cleaner six months of time-tracking data that gave finance leadership more confidence in their numbers.',
    tag: 'Finance',
  },
  {
    when: 'Jun 2024 — Dec 2024',
    role: 'Associate',
    org: 'Acosta Development',
    context:
      'Acosta Development works on real estate projects across Michigan, where every deal depends on getting zoning, deed, and environmental details right before a single shovel hits the ground.',
    walkedInto:
      'Developers across the state were re-doing the same regulatory research project after project, with no shared reference for the zoning and environmental review steps that came up again and again.',
    approach:
      'I synthesized zoning regulations, deed records, and environmental review data into a single, plain-language reference guide — built for a developer reading it at 11pm before a permitting deadline, not for a regulator.',
    delivered:
      'The Developer’s Guidebook, now used by 100+ Michigan-based developers as a starting point for projects that used to start from a blank page.',
    tag: 'Research',
  },
];

export default function Journey() {
  return (
    <section id="journey" className="section">
      <motion.p className="eyebrow" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        the journey so far
      </motion.p>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        What I walked into, and what I left behind.
      </motion.h2>
      <motion.p
        className="section-sub"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        style={{ marginBottom: '3rem' }}
      >
        Five roles, five very different problems. Here's the actual story behind each one —
        not just the bullet point.
      </motion.p>

      <div className="exp-list">
        {experiences.map((e, i) => (
          <motion.article
            key={e.org}
            className="exp-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.6, delay: 0.05 * i }}
          >
            <div className="exp-head">
              <div>
                <span className="pill">{e.tag}</span>
                <p className="exp-when">{e.when}</p>
                <h3>{e.role} · {e.org}</h3>
              </div>
            </div>

            <p className="exp-context">{e.context}</p>

            <div className="exp-grid">
              <div>
                <h4>What I walked into</h4>
                <p>{e.walkedInto}</p>
              </div>
              <div>
                <h4>How I approached it</h4>
                <p>{e.approach}</p>
              </div>
              <div>
                <h4>What I delivered</h4>
                <p>{e.delivered}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <style>{`
        .exp-list { display: flex; flex-direction: column; gap: 3.5rem; max-width: 880px; }
        .exp-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,185,143,0.18);
          border-radius: 22px;
          padding: 3rem 3.2rem;
          backdrop-filter: blur(6px);
        }
        .exp-when { font-size: 0.78rem; color: rgba(255,243,232,0.5); margin: 0.7rem 0 0.3rem; letter-spacing: 0.05em; }
        .exp-head h3 { font-size: 1.6rem; color: var(--peach-light); line-height: 1.3; }
        .exp-context { color: rgba(255,243,232,0.82); margin: 1.4rem 0 2rem; font-size: 1rem; line-height: 1.75; }
        .exp-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          border-top: 1px solid rgba(255,185,143,0.14);
          padding-top: 1.8rem;
        }
        @media (max-width: 760px) { .exp-grid { grid-template-columns: 1fr; } .exp-card { padding: 2rem 1.6rem; } }
        .exp-grid h4 { font-size: 0.82rem; color: var(--peach); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.6rem; }
        .exp-grid p { font-size: 0.9rem; color: rgba(255,243,232,0.75); line-height: 1.7; }
      `}</style>
    </section>
  );
}
