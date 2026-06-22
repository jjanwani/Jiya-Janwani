import { motion } from 'framer-motion';
import Avatar from '../components/Avatar';

const steps = [
  {
    n: '01',
    title: 'Sit in the problem',
    body: 'Shadow the floor, run interviews, read the Slack threads nobody else reads. I don’t write a single user story until I’ve seen the pain point happen live.',
  },
  {
    n: '02',
    title: 'Map it before you build it',
    body: 'Journey maps, current-state process flows, RACI matrices. If I can’t draw how work moves through a team, I’m not ready to design for it.',
  },
  {
    n: '03',
    title: 'Bucket, don’t boil the ocean',
    body: 'Group pain points into clear feature areas with named owners. Scope creep dies the moment everyone agrees what’s actually in v1.',
  },
  {
    n: '04',
    title: 'Ship versions, gather signal',
    body: 'Small, dated releases beat one big launch. Every version closes with open questions — I treat unresolved questions as a feature, not a failure.',
  },
  {
    n: '05',
    title: 'Own the change, not just the build',
    body: 'A platform nobody adopts is a demo. I run the rollout — training, feedback loops, and the unglamorous follow-up that makes adoption real.',
  },
];

export default function Framework() {
  return (
    <section id="framework" className="section">
      <motion.p className="eyebrow" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        how I think
      </motion.p>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        My product thinking framework
      </motion.h2>
      <motion.p
        className="section-sub"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        style={{ marginBottom: '3rem' }}
      >
        This is the loop I ran while building VORTEX, and the one I default to on every
        new problem since.
      </motion.p>

      <div className="fw-track">
        {steps.map((s, i) => (
          <motion.div
            key={s.n}
            className="fw-step"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ delay: i * 0.08 }}
          >
            <span className="fw-num">{s.n}</span>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </motion.div>
        ))}
        <motion.div
          className="fw-avatar"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          animate={{ rotate: [0, 6, -6, 0] }}
          transition={{ rotate: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }}
        >
          <Avatar pose="point" style={{ width: 140 }} />
        </motion.div>
      </div>

      <style>{`
        .fw-track {
          position: relative;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1rem;
        }
        @media (max-width: 1000px) { .fw-track { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) { .fw-track { grid-template-columns: 1fr; } }
        .fw-step {
          background: linear-gradient(160deg, rgba(58,79,158,0.18), rgba(255,185,143,0.06));
          border: 1px solid rgba(255,185,143,0.18);
          border-radius: 16px;
          padding: 1.4rem 1.1rem;
        }
        .fw-num { font-family: var(--font-display); font-size: 1.6rem; color: var(--peach); opacity: 0.7; }
        .fw-step h3 { font-size: 1.02rem; color: var(--peach-light); margin: 0.5rem 0 0.5rem; }
        .fw-step p { font-size: 0.85rem; color: rgba(255,243,232,0.78); }
        .fw-avatar { display: flex; align-items: flex-end; justify-content: center; }
      `}</style>
    </section>
  );
}
