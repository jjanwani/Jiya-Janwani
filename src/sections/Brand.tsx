import { motion } from 'framer-motion';

const cards = [
  {
    title: 'User-centered',
    body: "I don't start with a feature, I start with a person. Before I touch a roadmap I want to have sat next to the people doing the work, watched where they get stuck, and asked “why” until it stops being polite.",
    icon: '◎',
  },
  {
    title: 'Empathetic',
    body: "Behind every backlog item is someone's Tuesday afternoon. I design for the engineer who's tired, the ops lead juggling three systems, the manager who just wants one source of truth.",
    icon: '❤︎',
  },
  {
    title: 'Technical',
    body: "I can sit in the data model, read the API docs, and push back on scope with engineers as a peer — not just translate requirements. I'd rather prototype it myself than wait for a slide to explain it.",
    icon: '⬡',
  },
  {
    title: 'Impossible is a starting point',
    body: "I've watched a 4-person team rebuild a process nobody thought could change, just because they believed it could. I build for that moment — give people a reason to believe, and the impossible becomes a backlog.",
    icon: '✦',
  },
];

export default function Brand() {
  return (
    <section id="brand" className="section" style={{ minHeight: '130vh', gap: '2rem' }}>
      <motion.span
        className="panel-label"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        style={{ marginBottom: '-1rem' }}
      >
        brand
      </motion.span>

      <motion.p
        className="eyebrow"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        personal brand
      </motion.p>

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ maxWidth: 680 }}
      >
        Four ideas I orbit around.
      </motion.h2>

      <motion.p
        className="section-sub"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.7 }}
        style={{ marginBottom: '3rem' }}
      >
        Not a mission statement — just the four things that show up in how I actually work.
      </motion.p>

      <div className="brand-grid">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            className="brand-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.65 }}
            whileHover={{ y: -6, borderColor: 'rgba(255,185,143,0.55)' }}
          >
            <span className="brand-icon">{c.icon}</span>
            <h3>{c.title}</h3>
            <p>{c.body}</p>
          </motion.div>
        ))}
      </div>

      <style>{`
        .brand-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.8rem;
          max-width: 960px;
          width: 100%;
        }
        @media (max-width: 700px) { .brand-grid { grid-template-columns: 1fr; } }
        .brand-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,185,143,0.2);
          border-radius: 22px;
          padding: 2.8rem 2.4rem;
          text-align: left;
          transition: border-color 0.25s ease, transform 0.25s ease;
          backdrop-filter: blur(8px);
        }
        .brand-icon {
          display: inline-block;
          font-size: 1.8rem;
          color: var(--peach);
          margin-bottom: 1.1rem;
          filter: drop-shadow(0 0 8px rgba(255,185,143,0.5));
        }
        .brand-card h3 {
          font-size: 1.25rem;
          color: var(--peach-light);
          margin-bottom: 0.7rem;
        }
        .brand-card p {
          font-size: 0.93rem;
          color: rgba(255,243,232,0.75);
          line-height: 1.75;
        }
      `}</style>
    </section>
  );
}
