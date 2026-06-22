import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CinematicScenes() {
  useEffect(() => {
    const sections = gsap.utils.toArray<HTMLElement>('.section');
    const triggers: ScrollTrigger[] = [];

    sections.forEach((section, i) => {
      const tween = gsap.fromTo(
        section,
        { autoAlpha: 0, y: 70, scale: 0.96, filter: 'brightness(0.65) saturate(0.7)' },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          filter: 'brightness(1) saturate(1)',
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 35%',
            scrub: i === 0 ? false : 0.4,
            toggleActions: 'play none none reverse',
          },
        }
      );
      if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
    });

    return () => {
      triggers.forEach((t) => t.kill());
      gsap.killTweensOf('.section');
    };
  }, []);

  return null;
}
