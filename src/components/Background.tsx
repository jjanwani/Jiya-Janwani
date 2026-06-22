import { motion, useScroll, useTransform } from 'framer-motion';

export default function Background() {
  const { scrollYProgress } = useScroll();

  const background = useTransform(
    scrollYProgress,
    [0, 0.18, 0.38, 0.58, 0.78, 1],
    [
      'radial-gradient(circle at 20% 10%, #0f1430 0%, #0a0a0d 55%, #050507 100%)',
      'radial-gradient(circle at 70% 20%, #1d2c63 0%, #131b3d 45%, #0a0a0d 100%)',
      'radial-gradient(circle at 30% 60%, #3a4f9e 0%, #1d2c63 40%, #0a0a0d 100%)',
      'radial-gradient(circle at 80% 70%, #6b4a6e 0%, #2a2050 40%, #0a0a0d 100%)',
      'radial-gradient(circle at 50% 30%, #ff8c5a 0%, #2a1f3d 45%, #0a0a0d 100%)',
      'radial-gradient(circle at 50% 50%, #131b3d 0%, #0a0a0d 60%, #050507 100%)',
    ]
  );

  const auroraX = useTransform(scrollYProgress, [0, 0.5, 1], ['10%', '85%', '30%']);
  const auroraY = useTransform(scrollYProgress, [0, 0.5, 1], ['15%', '60%', '85%']);

  return (
    <>
      <motion.div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          background,
          transition: 'background 0.2s linear',
        }}
      />
      <motion.div
        style={{
          position: 'fixed',
          top: auroraY,
          left: auroraX,
          width: '50vw',
          height: '50vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,140,90,0.16) 0%, rgba(58,79,158,0.12) 45%, transparent 75%)',
          filter: 'blur(60px)',
          zIndex: 0,
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
}
