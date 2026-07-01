import { motion } from 'framer-motion';

const involvement = [
  {
    name: 'Alpha Kappa Psi',
    role: 'Professional Business Fraternity',
    body: 'A community built around professional development and brotherhood — where I learned as much about leadership from organizing events as I did from any classroom.',
  },
  {
    name: 'Dance 2XS Michigan',
    role: 'Competitive Dance Team',
    body: 'Years of late-night rehearsals and competitions taught me what it actually takes to get a group of people moving in sync toward one performance — a lesson that shows up in how I run teams today.',
  },
  {
    name: 'Eating Disorder Awareness Campaign',
    role: 'Founder & Organizer',
    body: 'Started a campus campaign to open up an honest conversation about eating disorders — because the topics people are least comfortable discussing are usually the ones that need the most light.',
  },
  {
    name: 'International Baccalaureate Program',
    role: 'Student Mentor',
    body: 'Mentored younger IB students through the same rigorous coursework I once found overwhelming, helping them see the workload as manageable instead of impossible.',
  },
  {
    name: 'Midland County Youth Leadership',
    role: 'Program Participant',
    body: 'A county-wide program that puts students in front of real local leaders and real local problems — my first introduction to thinking about community impact at a systems level.',
  },
];

export default function Community() {
  return (
    <section id="community" className="section" style={{ minHeight: '130vh', gap: '2rem' }}>
      <motion.span
        className="panel-label"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{ marginBottom: '-1rem' }}
      >
        beyond
      </motion.span>

      <motion.p className="eyebrow" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        beyond the work
      </motion.p>

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ maxWidth: 720 }}
      >
        Community is where I practiced all of this first.
      </motion.h2>

      <motion.p
        className="section-sub"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        style={{ marginBottom: '3rem' }}
      >
        Long before a roadmap, I was learning to lead, listen, and show up for people in
        rooms that had nothing to do with product.
      </motion.p>

      <div className="community-grid">
        {involvement.map((c, i) => (
          <motion.div
            key={c.name}
            className="community-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-8%' }}
            transition={{ delay: i * 0.09, duration: 0.6 }}
          >
            <span className="pill">{c.role}</span>
            <h3>{c.name}</h3>
            <p>{c.body}</p>
          </motion.div>
        ))}
      </div>

      <style>{`
        .community-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.8rem;
          max-width: 1100px;
          width: 100%;
        }
        @media (max-width: 1000px) { .community-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) { .community-grid { grid-template-columns: 1fr; } }
        .community-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(120,150,255,0.2);
          border-radius: 20px;
          padding: 2.4rem 2rem;
          text-align: left;
          transition: border-color 0.25s ease;
        }
        .community-card:hover { border-color: rgba(120,150,255,0.5); }
        .community-card h3 { font-size: 1.15rem; color: var(--peach-light); margin: 0.9rem 0 0.7rem; }
        .community-card p { font-size: 0.9rem; color: rgba(255,243,232,0.75); line-height: 1.75; }
      `}</style>
    </section>
  );
}
