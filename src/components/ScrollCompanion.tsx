import { motion, useScroll, useSpring, useTransform, useVelocity, useMotionValue, useAnimationFrame } from 'framer-motion';
import Avatar from './Avatar';

export default function ScrollCompanion() {
  const { scrollYProgress, scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const bounce = useSpring(useTransform(velocity, [-2500, 0, 2500], [22, 0, 22]), {
    stiffness: 320,
    damping: 14,
  });

  const xRaw = useTransform(
    scrollYProgress,
    [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1],
    ['6vw', '70vw', '14vw', '62vw', '20vw', '68vw', '10vw', '50vw']
  );
  const x = useSpring(xRaw, { stiffness: 60, damping: 18 });

  const tilt = useSpring(useTransform(velocity, [-2500, 0, 2500], [-14, 0, 14]), {
    stiffness: 200,
    damping: 12,
  });

  const floatY = useMotionValue(0);
  useAnimationFrame((t) => {
    floatY.set(Math.sin(t / 600) * 6);
  });

  const opacity = useTransform(scrollYProgress, [0, 0.03, 0.97, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      style={{
        position: 'fixed',
        bottom: '6vh',
        left: 0,
        x,
        y: bounce,
        rotate: tilt,
        opacity,
        zIndex: 40,
        pointerEvents: 'none',
        width: 86,
      }}
    >
      <motion.div style={{ y: floatY }}>
        <Avatar pose="jump" style={{ width: '100%' }} />
      </motion.div>
    </motion.div>
  );
}
