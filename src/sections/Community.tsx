import { motion } from 'framer-motion';

const featured = {
  name: 'Dance 2XS Michigan',
  role: 'One of Three National Chapters',
  body: "Dance 2XS is one of three chapters that travel across the Midwest performing and showcasing different styles of hip-hop and dance culture. Being part of this team taught me what it takes to build something you believe in, show up fully for a community, and make an impact that's visible and felt. The discipline, the collaboration, and the performance mindset directly shaped how I lead teams and ship work today.",
};

const involvement = [
  {
    name: 'Alpha Kappa Psi',
    role: 'Professional Business Fraternity',
    body: "A community built around professional development and brotherhood. I learned as much about leadership from organizing events as I did from any classroom, and I saw firsthand how technology could streamline operations that used to run on spreadsheets and group chats.",
  },
  {
    name: 'Eating Disorder Awareness Campaign',
    role: 'Founder and Organizer',
    body: "I started this campaign because I believe technology and platform can amplify voices that need to be heard. Seeing even one person reach out after an event and say it changed how they thought about themselves reminded me why I care about building things that reach people.",
  },
  {
    name: 'International Baccalaureate Program',
    role: 'Student Mentor',
    body: "Mentored younger IB students through the same rigorous coursework I once found overwhelming. Watching someone go from \"I can't do this\" to submitting their final project is the kind of impact that stays with you. It's what draws me to tech for good: the measurable change in someone's life.",
  },
  {
    name: 'Midland County Youth Leadership',
    role: 'Program Participant',
    body: "A county-wide program that puts students in front of real local leaders and real local problems. My first introduction to thinking about community impact at a systems level, and the moment I realized the most meaningful uses of technology are the ones that serve people who need it most.",
  },
];

export default function Community() {
  return (
    <section id="community" className="section" style={{ minHeight: '130vh', gap: '2rem' }}>
      <motion.span
        className="panel-label"
        initial={{ opacity: 0, x: -300 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        style={{ marginBottom: '-1rem' }}
      >
        beyond
      </motion.span>

      <motion.p className="eyebrow" initial={{ opacity: 0, x: -300 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        beyond the work
      </motion.p>

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, x: 300 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ maxWidth: 760 }}
      >
        Community is where I learned to care about impact.
      </motion.h2>

      <motion.p
        className="section-sub"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.7 }}
        style={{ marginBottom: '3rem' }}
      >
        I want to use technology to do good. The fulfillment I find in seeing my work affect real people is what drives me. These are the rooms where that started.
      </motion.p>

      {/* Featured wide card */}
      <motion.div
        className="community-featured"
        initial={{ opacity: 0, x: -300 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="pill">{featured.role}</span>
        <h3>{featured.name}</h3>
        <p>{featured.body}</p>
      </motion.div>

      <div className="community-grid">
        {involvement.map((c, i) => (
          <motion.div
            key={c.name}
            className="community-card"
            initial={{ opacity: 0, y: 40 }}
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
        .community-featured {
          background: linear-gradient(140deg, rgba(58,79,158,0.22), rgba(255,185,143,0.06));
          border: 1px solid rgba(255,185,143,0.3);
          border-radius: 22px;
          padding: 2.8rem 3rem;
          text-align: left;
          max-width: 1100px;
          width: 100%;
          margin-bottom: 1.8rem;
        }
        .community-featured h3 { font-size: 1.5rem; color: var(--peach-light); margin: 0.9rem 0 0.7rem; }
        .community-featured p { font-size: 1rem; color: rgba(255,243,232,0.8); line-height: 1.8; max-width: 800px; }
        .community-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.8rem;
          max-width: 1100px;
          width: 100%;
        }
        @media (max-width: 700px) { .community-grid { grid-template-columns: 1fr; } .community-featured { padding: 2rem 1.6rem; } }
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
