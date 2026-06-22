import { motion } from 'framer-motion';

interface AvatarProps {
  pose?: 'wave' | 'jump' | 'dive' | 'think' | 'point';
  className?: string;
  spin?: boolean;
  style?: React.CSSProperties;
}

export default function Avatar({ pose = 'wave', className = '', spin = false, style }: AvatarProps) {
  const armRight =
    pose === 'wave'
      ? 'M150 150 C 175 130, 185 95, 175 70'
      : pose === 'point'
      ? 'M150 150 C 180 145, 200 140, 215 130'
      : pose === 'jump'
      ? 'M150 150 C 175 120, 178 90, 165 65'
      : pose === 'dive'
      ? 'M150 150 C 168 175, 185 185, 205 180'
      : 'M150 150 C 170 165, 178 150, 172 130';

  const armLeft =
    pose === 'jump'
      ? 'M95 150 C 70 120, 67 90, 80 65'
      : pose === 'dive'
      ? 'M95 150 C 77 175, 60 185, 40 180'
      : 'M95 150 C 75 160, 68 175, 72 195';

  return (
    <motion.svg
      viewBox="0 0 270 320"
      className={className}
      style={{ overflow: 'visible', ...style }}
      animate={spin ? { rotate: [0, 8, -8, 0] } : undefined}
      transition={spin ? { duration: 4, repeat: Infinity, ease: 'easeInOut' } : undefined}
    >
      {/* shadow */}
      <ellipse cx="123" cy="305" rx="58" ry="10" fill="#000" opacity="0.25" />

      {/* legs */}
      <path d="M105 230 C 100 260, 95 280, 90 300" stroke="#1d2c63" strokeWidth="16" fill="none" strokeLinecap="round" />
      <path d="M140 230 C 148 260, 155 280, 158 300" stroke="#10173a" strokeWidth="16" fill="none" strokeLinecap="round" />

      {/* torso - peach top */}
      <path d="M75 150 C 70 200, 80 235, 122 240 C 165 235, 175 200, 170 150 C 150 130, 95 130, 75 150 Z" fill="#ff8c5a" />

      {/* right arm (back) */}
      <path d={armRight} stroke="#ffb98f" strokeWidth="15" fill="none" strokeLinecap="round" />

      {/* left arm (front) */}
      <path d={armLeft} stroke="#ff8c5a" strokeWidth="15" fill="none" strokeLinecap="round" />

      {/* neck */}
      <rect x="110" y="118" width="26" height="24" fill="#c98a5e" />

      {/* head */}
      <circle cx="123" cy="92" r="52" fill="#dba374" />

      {/* hair back/wavy mass behind head */}
      <path
        d="M70 95 C 58 60, 75 15, 123 12 C 175 14, 192 58, 180 98
           C 184 120, 178 145, 168 150 C 172 120, 165 100, 160 96
           C 158 118, 150 132, 140 134 C 146 112, 140 98, 134 96
           C 132 116, 122 128, 112 128 C 118 110, 114 98, 108 96
           C 104 116, 92 128, 82 124 C 90 108, 86 96, 80 96
           C 76 112, 64 120, 60 116 C 66 105, 64 98, 70 95 Z"
        fill="#161616"
      />

      {/* hair top swoop */}
      <path
        d="M71 70 C 66 35, 95 10, 123 10 C 153 10, 182 33, 177 68
           C 165 50, 150 40, 123 40 C 96 40, 80 52, 71 70 Z"
        fill="#161616"
      />

      {/* face features */}
      <circle cx="103" cy="94" r="6.5" fill="#161616" />
      <circle cx="143" cy="94" r="6.5" fill="#161616" />
      <circle cx="101" cy="91" r="2" fill="#fff" />
      <circle cx="141" cy="91" r="2" fill="#fff" />
      <path d="M98 76 C 102 72, 108 72, 112 75" stroke="#161616" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M134 75 C 138 72, 144 72, 148 76" stroke="#161616" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M112 112 C 118 118, 128 118, 134 112" stroke="#8a4a30" strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="92" cy="106" r="6" fill="#ff8c5a" opacity="0.45" />
      <circle cx="154" cy="106" r="6" fill="#ff8c5a" opacity="0.45" />
    </motion.svg>
  );
}
