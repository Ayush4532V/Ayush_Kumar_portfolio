import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on non-touch desktop devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering interactive elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactiveEl = target.closest('a, button, [data-cursor]');
        if (interactiveEl) {
          setIsHovered(true);
          const customText = interactiveEl.getAttribute('data-cursor');
          setCursorText(customText || '');
        } else {
          setIsHovered(false);
          setCursorText('');
        }
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Primary Dot / Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border-2 border-ink flex items-center justify-center font-mono text-[10px] font-bold uppercase tracking-wider text-ink bg-brand-yellow/80 backdrop-blur-xs"
        animate={{
          x: mousePosition.x - (isHovered ? (cursorText ? 36 : 20) : 6),
          y: mousePosition.y - (isHovered ? (cursorText ? 36 : 20) : 6),
          width: isHovered ? (cursorText ? 72 : 40) : 12,
          height: isHovered ? (cursorText ? 72 : 40) : 12,
          opacity: 1,
          scale: isHovered ? 1.1 : 1
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 28,
          mass: 0.5
        }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[9px] leading-tight text-center px-1 font-bold text-ink"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </div>
  );
};
