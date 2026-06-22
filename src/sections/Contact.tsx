import { motion } from 'framer-motion';
import Avatar from '../components/Avatar';

export default function Contact() {
  return (
    <section id="contact" className="section" style={{ alignItems: 'center', textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        animate={{ y: [0, -14, 0] }}
        transition={{ y: { duration: 3, repeat: Infinity, ease: 'easeInOut' } }}
      >
        <Avatar pose="jump" style={{ width: 170 }} />
      </motion.div>

      <motion.p className="eyebrow" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        let's talk
      </motion.p>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ maxWidth: 760 }}
      >
        Got a problem worth mapping? I'd love to hear about it.
      </motion.h2>
      <motion.p
        className="section-sub"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        style={{ marginInline: 'auto', marginBottom: '2.2rem' }}
      >
        Internships, product chats, or just want to compare notes on user research —
        my inbox is open.
      </motion.p>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <a className="contact-btn primary" href="mailto:jjanwani@umich.edu">
          ✉️ jjanwani@umich.edu
        </a>
        <a className="contact-btn" href="https://www.linkedin.com/in/jiya-janwani" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a className="contact-btn" href="https://github.com/jjanwani" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>

      <p style={{ marginTop: '3.5rem', fontSize: '0.78rem', color: 'rgba(255,243,232,0.4)' }}>
        Built by Jiya, scrolled by you · {new Date().getFullYear()}
      </p>

      <style>{`
        .contact-btn {
          padding: 0.8rem 1.6rem;
          border-radius: 999px;
          border: 1px solid rgba(255,185,143,0.4);
          color: var(--peach-light);
          text-decoration: none;
          font-size: 0.92rem;
          transition: all 0.2s ease;
          background: rgba(255,185,143,0.06);
        }
        .contact-btn:hover { background: rgba(255,185,143,0.18); transform: translateY(-2px); }
        .contact-btn.primary { background: var(--peach); color: var(--black); font-weight: 600; border-color: var(--peach); }
        .contact-btn.primary:hover { background: var(--peach-light); }
      `}</style>
    </section>
  );
}
