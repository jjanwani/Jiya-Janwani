import { motion } from 'framer-motion';
import Globe from '../components/Globe';
import Avatar from '../components/Avatar';

const values = [
  {
    title: 'Curious by default',
    body: 'I ask "why" until it stops being annoying — user interviews, RACI maps, root-cause analyses. I want to know what is actually happening before I propose what should.',
  },
  {
    title: 'Build to learn',
    body: 'Prototypes over decks. I would rather ship a rough version 1 and watch real people use it than debate hypotheticals in a meeting.',
  },
  {
    title: 'Bridge builder',
    body: 'Half business, half code — I translate between engineers, ops, and leadership so nothing gets lost crossing the table.',
  },
];

export default function Brand() {
  return (
    <section id="brand" className="section" style={{ alignItems: 'center' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: '3rem',
          alignItems: 'center',
          width: '100%',
          maxWidth: 1180,
        }}
      >
        <div>
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            personal brand
          </motion.p>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Spin the globe. <br /> That's kind of how I work.
          </motion.h2>
          <motion.p
            className="section-sub"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ marginBottom: '2.4rem' }}
          >
            I look at problems from every angle before I commit to one. Drag the globe —
            that restlessness is the same instinct I bring to product work: rotate the
            problem until the real one shows up.
          </motion.p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                style={{
                  borderLeft: '2px solid var(--peach)',
                  paddingLeft: '1.1rem',
                }}
              >
                <h3 style={{ fontSize: '1.15rem', color: 'var(--peach-light)', marginBottom: '0.3rem' }}>
                  {v.title}
                </h3>
                <p style={{ color: 'rgba(255,243,232,0.75)', fontSize: '0.95rem' }}>{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
        >
          <Globe />
          <motion.div
            style={{ position: 'absolute', bottom: -30, right: 10 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Avatar pose="think" style={{ width: 110 }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
