import { motion } from 'framer-motion';
import Avatar from '../components/Avatar';

const constellation = [
  {
    title: 'User-centered',
    body:
      'I don’t start with a feature, I start with a person. Before I touch a roadmap I want to have sat next to the people doing the work, watched where they get stuck, and asked "why" until it stops being polite.',
    top: '6%',
    left: '4%',
  },
  {
    title: 'Empathetic',
    body:
      'Behind every backlog item is someone’s Tuesday afternoon. I design for the engineer who’s tired, the ops lead who’s juggling three systems, the manager who just wants one source of truth.',
    top: '38%',
    left: '58%',
  },
  {
    title: 'Technical',
    body:
      'I can sit in the data model, read the API docs, and push back on scope with engineers as a peer — not just translate requirements. I’d rather prototype it myself than wait for a slide to explain it.',
    top: '70%',
    left: '8%',
  },
  {
    title: 'Impossible is a starting point',
    body:
      'I’ve watched a 4-person team rebuild a process nobody thought could change, just because they believed it could. I build for that moment — give people a reason to believe, and the impossible becomes a backlog.',
    top: '4%',
    left: '54%',
  },
];

export default function Brand() {
  return (
    <section id="brand" className="section" style={{ alignItems: 'center', minHeight: '140vh' }}>
      <motion.p
        className="eyebrow"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        personal brand
      </motion.p>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', maxWidth: 760 }}
      >
        Four ideas I orbit around.
      </motion.h2>
      <motion.p
        className="section-sub"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        style={{ textAlign: 'center', marginInline: 'auto', marginBottom: '3rem' }}
      >
        Not a mission statement — just the four things that show up in how I actually work.
      </motion.p>

      <div className="constellation">
        <svg className="constellation-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.line
            x1="14" y1="16" x2="66" y2="46"
            stroke="rgba(255,185,143,0.35)" strokeWidth="0.2"
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
          />
          <motion.line
            x1="66" y1="46" x2="18" y2="78"
            stroke="rgba(255,185,143,0.35)" strokeWidth="0.2"
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }}
          />
          <motion.line
            x1="18" y1="78" x2="62" y2="12"
            stroke="rgba(120,150,255,0.3)" strokeWidth="0.2"
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.4 }}
          />
          <motion.line
            x1="62" y1="12" x2="14" y2="16"
            stroke="rgba(120,150,255,0.3)" strokeWidth="0.2"
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.6 }}
          />
        </svg>

        {constellation.map((c, i) => (
          <motion.div
            key={c.title}
            className="star-card"
            style={{ top: c.top, left: c.left }}
            initial={{ opacity: 0, scale: 0.7, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            whileHover={{ scale: 1.04, borderColor: 'rgba(255,185,143,0.6)' }}
          >
            <span className="star-dot" />
            <h3>{c.title}</h3>
            <p>{c.body}</p>
          </motion.div>
        ))}

        <motion.div
          className="brand-avatar"
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          animate={{ y: [0, -12, 0] }}
          transition={{ y: { duration: 3.4, repeat: Infinity, ease: 'easeInOut' } }}
        >
          <Avatar pose="think" style={{ width: 130 }} />
        </motion.div>
      </div>

      <style>{`
        .constellation {
          position: relative;
          width: 100%;
          max-width: 1100px;
          height: 640px;
        }
        .constellation-lines {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }
        .star-card {
          position: absolute;
          width: clamp(220px, 28vw, 320px);
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,185,143,0.22);
          border-radius: 18px;
          padding: 1.4rem 1.3rem;
          backdrop-filter: blur(8px);
          transition: border-color 0.2s ease;
        }
        .star-dot {
          position: absolute;
          top: -5px;
          left: -5px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--peach);
          box-shadow: 0 0 12px 3px rgba(255,185,143,0.6);
        }
        .star-card h3 {
          color: var(--peach-light);
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
        }
        .star-card p {
          font-size: 0.88rem;
          color: rgba(255,243,232,0.78);
        }
        .brand-avatar {
          position: absolute;
          bottom: 4%;
          left: 50%;
          transform: translateX(-50%);
        }
        @media (max-width: 900px) {
          .constellation { height: auto; display: flex; flex-direction: column; gap: 1.4rem; }
          .constellation-lines { display: none; }
          .star-card { position: static; width: 100%; }
          .brand-avatar { position: static; transform: none; align-self: center; margin-top: 1rem; }
        }
      `}</style>
    </section>
  );
}
