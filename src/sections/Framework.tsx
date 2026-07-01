import { motion } from 'framer-motion';

const steps = [
  {
    n: '01',
    title: 'Sit in the problem',
    body: "Shadow the floor, run interviews, read the Slack threads nobody else reads. I don't write a single user story until I've seen the pain point happen live.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="6.5" stroke="var(--peach)" strokeWidth="1.4" />
        <path d="M20 20L15.8 15.8" stroke="var(--peach)" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    n: '02',
    title: 'Map it before you build it',
    body: "Journey maps, current-state process flows, RACI matrices. If I can't draw how work moves through a team, I'm not ready to design for it.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M3 5l5-2 6 2 7-2v15l-7 2-6-2-5 2V5z" stroke="var(--peach)" strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M8 3v15M14 5v15" stroke="var(--peach)" strokeWidth="1" opacity="0.6" />
      </svg>
    ),
  },
  {
    n: '03',
    title: "Bucket, don't boil the ocean",
    body: "Group pain points into clear feature areas with named owners. Scope creep dies the moment everyone agrees what's actually in v1.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="7.5" height="7.5" rx="1.4" stroke="var(--peach)" strokeWidth="1.3" />
        <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.4" stroke="var(--peach)" strokeWidth="1.3" opacity="0.7" />
        <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.4" stroke="var(--peach)" strokeWidth="1.3" opacity="0.7" />
        <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.4" stroke="var(--peach)" strokeWidth="1.3" opacity="0.45" />
      </svg>
    ),
  },
  {
    n: '04',
    title: 'Ship versions, gather signal',
    body: 'Small, dated releases beat one big launch. Every version closes with open questions — I treat unresolved questions as a feature, not a failure.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M3 12h11M14 12l-3.5-3.5M14 12l-3.5 3.5" stroke="var(--peach)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="19" cy="12" r="2" stroke="var(--peach)" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    n: '05',
    title: 'Own the change, not just the build',
    body: 'A platform nobody adopts is a demo. I run the rollout — training, feedback loops, and the unglamorous follow-up that makes adoption real.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6l-8-4z" stroke="var(--peach)" strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="var(--peach)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Framework() {
  return (
    <section id="framework" className="section" style={{ minHeight: '130vh', gap: '2rem' }}>
      <motion.span
        className="panel-label"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{ marginBottom: '-1rem' }}
      >
        process
      </motion.span>

      <motion.p className="eyebrow" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        how I think
      </motion.p>

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ maxWidth: 680 }}
      >
        My product thinking framework
      </motion.h2>

      <motion.p
        className="section-sub"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        style={{ marginBottom: '3.5rem' }}
      >
        This is the loop I ran while building VORTEX, and the one I default to on every
        new problem since.
      </motion.p>

      <div className="fw-track">
        {steps.map((s, i) => (
          <motion.div
            key={s.n}
            className="fw-step"
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-8%' }}
            transition={{ delay: i * 0.07, duration: 0.65 }}
          >
            <div className="fw-step-head">
              <span className="fw-num">{s.n}</span>
              {s.icon}
            </div>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </motion.div>
        ))}
      </div>

      <style>{`
        .fw-track {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.8rem;
          max-width: 960px;
          width: 100%;
        }
        .fw-track > *:last-child:nth-child(odd) {
          grid-column: 1 / -1;
          max-width: 480px;
          margin-inline: auto;
        }
        @media (max-width: 700px) { .fw-track { grid-template-columns: 1fr; } .fw-track > *:last-child { grid-column: auto; max-width: none; } }
        .fw-step {
          background: linear-gradient(160deg, rgba(58,79,158,0.16), rgba(255,185,143,0.05));
          border: 1px solid rgba(255,185,143,0.18);
          border-left: 3px solid var(--peach);
          border-radius: 18px;
          padding: 2.4rem 2.6rem;
          text-align: left;
        }
        .fw-step-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.2rem; }
        .fw-num { font-family: var(--font-display); font-size: 2.6rem; color: var(--peach); opacity: 0.55; }
        .fw-step h3 { font-size: 1.3rem; color: var(--peach-light); margin: 0 0 0.9rem; line-height: 1.2; }
        .fw-step p { font-size: 0.95rem; color: rgba(255,243,232,0.78); line-height: 1.7; }
        @media (max-width: 600px) { .fw-step { padding: 1.6rem 1.5rem; } }
      `}</style>
    </section>
  );
}
