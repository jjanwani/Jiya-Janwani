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
      ? 'M148 178 C 172 158, 182 120, 172 92'
      : pose === 'point'
      ? 'M148 178 C 178 172, 198 165, 213 152'
      : pose === 'jump'
      ? 'M148 178 C 170 148, 173 115, 160 88'
      : pose === 'dive'
      ? 'M148 178 C 166 200, 183 210, 203 205'
      : 'M148 178 C 168 192, 176 178, 170 158';

  const armLeft =
    pose === 'jump'
      ? 'M92 178 C 68 148, 65 115, 78 88'
      : pose === 'dive'
      ? 'M92 178 C 75 200, 58 210, 38 205'
      : 'M92 178 C 73 188, 66 202, 70 222';

  return (
    <motion.svg
      viewBox="0 0 270 340"
      className={className}
      style={{ overflow: 'visible', ...style }}
      animate={spin ? { rotate: [0, 6, -6, 0] } : undefined}
      transition={spin ? { duration: 4, repeat: Infinity, ease: 'easeInOut' } : undefined}
    >
      {/* shadow */}
      <ellipse cx="120" cy="325" rx="56" ry="9" fill="#000" opacity="0.22" />

      {/* legs */}
      <path d="M103 255 C 99 280, 95 300, 90 318" stroke="#1d2c63" strokeWidth="15" fill="none" strokeLinecap="round" />
      <path d="M137 255 C 144 280, 150 300, 154 318" stroke="#10173a" strokeWidth="15" fill="none" strokeLinecap="round" />

      {/* torso - black tee */}
      <path d="M73 175 C 68 220, 78 252, 119 257 C 161 252, 170 220, 165 175 C 146 157, 92 157, 73 175 Z" fill="#161616" />
      <path d="M82 168 L 92 184 L 119 172 L 146 184 L 156 168" stroke="#161616" strokeWidth="6" fill="none" strokeLinecap="round" />

      {/* right arm (back) */}
      <path d={armRight} stroke="#161616" strokeWidth="14" fill="none" strokeLinecap="round" />
      <circle cx={pose === 'wave' ? 172 : pose === 'jump' ? 160 : pose === 'point' ? 213 : pose === 'dive' ? 203 : 170} cy={pose === 'wave' ? 92 : pose === 'jump' ? 88 : pose === 'point' ? 152 : pose === 'dive' ? 205 : 158} r="9" fill="#dba374" />

      {/* left arm (front) */}
      <path d={armLeft} stroke="#0d0d0d" strokeWidth="14" fill="none" strokeLinecap="round" />
      <circle cx={pose === 'jump' ? 78 : pose === 'dive' ? 38 : 70} cy={pose === 'jump' ? 88 : pose === 'dive' ? 205 : 222} r="9" fill="#dba374" />

      {/* neck */}
      <rect x="106" y="138" width="28" height="26" fill="#c98a5e" />

      {/* head */}
      <circle cx="120" cy="108" r="54" fill="#dba374" />

      {/* big wavy hair mass behind/around head */}
      <path
        d="M48 110
           C 30 75, 38 25, 90 8
           C 92 30, 100 38, 112 36
           C 108 22, 116 10, 130 8
           C 178 16, 196 60, 182 108
           C 198 130, 196 175, 178 210
           C 184 178, 174 150, 162 138
           C 168 168, 158 198, 142 212
           C 150 180, 142 152, 130 142
           C 136 172, 124 202, 108 212
           C 116 180, 108 152, 96 144
           C 100 174, 88 204, 70 210
           C 80 178, 74 148, 62 140
           C 64 170, 50 196, 34 198
           C 46 172, 42 144, 48 110 Z"
        fill="#14110f"
      />
      <path
        d="M52 95 C 44 58, 68 22, 120 18 C 168 22, 190 56, 184 96
           C 168 68, 146 52, 120 52 C 94 52, 68 66, 52 95 Z"
        fill="#14110f"
      />

      {/* face features */}
      <ellipse cx="100" cy="112" rx="13" ry="15" fill="#fff" />
      <ellipse cx="146" cy="112" rx="13" ry="15" fill="#fff" />
      <circle cx="101" cy="114" r="8.5" fill="#3a2415" />
      <circle cx="147" cy="114" r="8.5" fill="#3a2415" />
      <circle cx="98" cy="110" r="2.6" fill="#fff" />
      <circle cx="144" cy="110" r="2.6" fill="#fff" />
      <path d="M89 93 C 95 87, 104 87, 109 92" stroke="#14110f" strokeWidth="3.4" fill="none" strokeLinecap="round" />
      <path d="M133 92 C 138 87, 147 87, 153 93" stroke="#14110f" strokeWidth="3.4" fill="none" strokeLinecap="round" />
      <path d="M114 134 C 120 142, 130 142, 137 134" stroke="#8a4a30" strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="86" cy="126" r="7" fill="#ff8c5a" opacity="0.4" />
      <circle cx="158" cy="126" r="7" fill="#ff8c5a" opacity="0.4" />
    </motion.svg>
  );
}
