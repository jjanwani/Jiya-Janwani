import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import LogoBadge from '../components/LogoBadge';

const experiences = [
  {
    when: 'Jun 2024 — Dec 2024',
    role: 'Associate',
    org: 'Acosta Development',
    context:
      'Acosta Development works on real estate projects across Michigan, where every deal depends on getting zoning, deed, and environmental details right before a single shovel hits the ground.',
    walkedInto:
      'Developers across the state were re-doing the same regulatory research project after project, with no shared reference for the zoning and environmental review steps that came up again and again.',
    approach:
      'I synthesized zoning regulations, deed records, and environmental review data into a single plain-language reference guide, built for a developer reading it at 11pm before a permitting deadline. I also created intake forms within the guidebook so developers could submit the correct applications and receive guidance tailored to their specific project type.',
    delivered:
      "The Developer's Guidebook, now used by 100+ Michigan-based developers. The intake forms cut back-and-forth on application submissions and gave developers a clearer path from first question to final permit.",
    tag: 'Research',
  },
  {
    when: 'May 2025 — Aug 2025',
    role: 'Accounting and Finance Intern',
    org: 'Hemlock Semiconductor',
    context:
      'Hemlock Semiconductor manufactures the polysilicon that goes into semiconductors and solar panels, a business where operational precision matters because the cost of an error compounds across an entire production run.',
    walkedInto:
      'I was brought on to build an index system for journal entry management, but once I mapped the full workflow I found a second bottleneck: retrieving those entries later was just as manual and time-consuming as filing them. Nobody had flagged it yet because each step felt like someone else\'s problem.',
    approach:
      'I built the index system as assigned, then went further and wrote a VBA macro to automate the data retrieval process. I designed it around the actual steps the close team was repeating every cycle, so adoption was immediate.',
    delivered:
      'A process that saved 50+ hours a month for the close team. The index system gave entries a home; the macro made retrieving them effortless.',
    tag: 'Finance',
  },
  {
    when: 'Sep 2025 — Dec 2025',
    role: 'Project Manager',
    org: 'Ross Tech Plus Consulting',
    context:
      'Michigan Ross Tech Plus Consulting is a student-run consulting practice. I led a 4-person team on a paid engagement for BioFuran Materials, an early-stage specialty materials company that needed both a sharper go-to-market story and a cleaner back office.',
    walkedInto:
      'BioFuran had a strong technical product but a thin digital presence and a manual, error-prone invoicing process, the kind of operational gap that quietly costs a small company customer trust.',
    approach:
      'I split the engagement into two workstreams I ran in parallel: a market-entry strategy grounded in competitor and channel research, and a lightweight invoicing system designed around how their two-person ops team actually worked, not an idealized version of it.',
    delivered:
      'A go-to-market plan that expanded their online reach by 35%, and an invoicing system that cut customer-reported billing issues in half; plus a team of three analysts who left knowing how to run a client engagement themselves.',
    tag: 'Consulting',
  },
  {
    when: 'Dec 2025 — Apr 2026',
    role: 'Product Management Intern',
    org: 'Carbon Fiber Span',
    context:
      'Carbon Fiber Span manufactures custom carbon-fiber composite components for industrial clients. Like a lot of growing manufacturers, their sales, production, and operations teams had each built their own way of tracking performance, which meant nobody was looking at the same numbers in the same room.',
    walkedInto:
      'Sales had its own pipeline metrics, production tracked throughput separately, and operations measured something else entirely. Decisions got made on whichever number someone happened to have open, and a lot of manual re-entry stood between raw data and anything resembling a KPI.',
    approach:
      'I ran requirements-gathering sessions across all three teams to find the handful of metrics everyone actually needed to see, then designed a centralized KPI dashboard inside their Odoo ERP system so it lived where people already worked instead of becoming one more tool to check.',
    delivered:
      'One shared dashboard that cut manual reporting effort by 30% and gave leadership a single number to plan around instead of three conflicting ones.',
    tag: 'Operations + PM',
  },
  {
    when: 'May 2026 — Present',
    role: 'Product Management Intern',
    org: 'SkySpecs',
    context:
      "SkySpecs builds software that helps wind energy operators inspect, maintain, and extend the life of turbine blades using drones and AI-driven defect detection. I joined the team that keeps SkySpecs' own drone fleet flying: the engineers, technicians, and ops staff who build, repair, and redeploy hardware every week.",
    walkedInto:
      "The team had no single place to track a drone's status. Work orders lived in someone's head or a Slack thread, inventory counts were a guess until someone walked the shelf, and finding the right spec sheet meant digging through a shared drive that had outgrown its own folder structure. Every handoff between procurement, engineering, and production cost time nobody could get back.",
    approach:
      "I didn't start with a build doc. I started by sitting with the people doing the work. I shadowed floor engineers, ran structured interviews with production and ops leads, and mapped the full lifecycle of a drone from deployment to repair to redeploy. From there I grouped every pain point into four clear feature areas, each with a named owner, so scope stayed honest. I shipped in dated versions instead of one big launch, closing every version with the open questions it surfaced.",
    delivered:
      'A platform that gives every team one shared view of work orders, assets, and inventory, adopted across four teams, with me running the change-management rollout myself, not just handing off a finished build.',
    tag: 'Product Management',
  },
];

export default function Experience() {
  return (
    <>
      <header className="detail-header">
        <Link to="/" className="back-link">← back home</Link>

        <motion.p className="eyebrow" initial={{ opacity: 0, x: -200 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
          the journey so far
        </motion.p>
        <motion.h1
          className="section-title"
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ fontSize: 'clamp(2.4rem, 6vw, 4.4rem)' }}
        >
          What I walked into, and what I left behind.
        </motion.h1>
        <motion.p
          className="section-sub"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
        >
          Five roles, five very different problems. Here's the actual story behind each one; not just the bullet point.
        </motion.p>

        <div className="logo-strip">
          <LogoBadge name="SkySpecs" />
          <LogoBadge name="Carbon Fiber Span" />
          <LogoBadge name="Ross Tech Plus Consulting" />
          <LogoBadge name="Hemlock Semiconductor" />
        </div>
      </header>

      <section className="section" style={{ paddingTop: '1rem', alignItems: 'center' }}>
        <div className="exp-list" style={{ width: '100%' }}>
          {experiences.map((e, i) => (
            <motion.article
              key={e.org}
              className="exp-card"
              initial={{ opacity: 0, x: i % 2 === 0 ? -200 : 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.7 }}
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ marginTop: '4rem' }}
        >
          <Link to="/projects" className="back-link" style={{ marginBottom: 0 }}>
            see what I've built →
          </Link>
        </motion.div>
      </section>

      <style>{`
        .exp-list { display: flex; flex-direction: column; gap: 3.5rem; max-width: 880px; }
        .exp-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,185,143,0.18);
          border-radius: 22px;
          padding: 3rem 3.2rem;
          backdrop-filter: blur(6px);
          text-align: left;
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
    </>
  );
}
