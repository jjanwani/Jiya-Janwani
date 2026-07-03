import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="section" style={{ alignItems: 'center', textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        animate={{ rotate: [0, 360] }}
        transition={{ rotate: { duration: 14, repeat: Infinity, ease: 'linear' } }}
        style={{ marginBottom: '1.8rem' }}
      >
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" stroke="var(--peach)" strokeWidth="1.2" strokeLinejoin="round" />
        </svg>
      </motion.div>

      <motion.p className="eyebrow" initial={{ opacity: 0, x: -300 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        let's talk
      </motion.p>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, x: 300 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ maxWidth: 760 }}
      >
        Got a problem worth mapping? I'd love to hear about it.
      </motion.h2>
      <motion.p
        className="section-sub"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.7 }}
        style={{ marginInline: 'auto', marginBottom: '3rem' }}
      >
        Internships, product chats, or just want to compare notes on user research —
        my inbox is open.
      </motion.p>

      <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
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
