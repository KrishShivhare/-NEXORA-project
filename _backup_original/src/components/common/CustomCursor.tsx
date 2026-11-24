import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isTextSelected, setIsTextSelected] = useState(false);

  // Mouse coordinates (immediate target)
  const mousePos = useRef({ x: -100, y: -100 });
  // Trailing ring coordinates (interpolated lerp)
  const ringPos = useRef({ x: -100, y: -100 });
  
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const animFrameId = useRef<number | null>(null);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    // 1. Detect if touch / mobile device or no hover capability
    const hasCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
    const hasHover = window.matchMedia('(hover: hover)').matches;
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (hasCoarsePointer || !hasHover || isTouchDevice) {
      setIsEnabled(false);
      return;
    }

    setIsEnabled(true);

    // 2. Check prefers-reduced-motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    prefersReducedMotion.current = motionQuery.matches;

    const handleMotionChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion.current = e.matches;
    };
    motionQuery.addEventListener('change', handleMotionChange);

    // 3. Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      if (!isVisible) {
        setIsVisible(true);
        // Initialize position without jumping from 0,0
        if (ringPos.current.x === -100) {
          ringPos.current = { x: e.clientX, y: e.clientY };
        }
      }

      // Detect hover on interactive elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest('a, button, input, select, textarea, [role="button"], label, summary, .cursor-pointer, [data-cursor="pointer"]')
        );
        setIsHovered(isInteractive);

        const isInput = Boolean(target.closest('input[type="text"], input[type="email"], input[type="password"], input[type="search"], textarea'));
        setIsTextSelected(isInput);
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // 4. Animation loop for smooth trailing ring
    const render = () => {
      const targetX = mousePos.current.x;
      const targetY = mousePos.current.y;

      // Trailing interpolation factor (lerp)
      // If prefers-reduced-motion, follow instantly without lag
      const ease = prefersReducedMotion.current ? 1 : 0.18;

      ringPos.current.x += (targetX - ringPos.current.x) * ease;
      ringPos.current.y += (targetY - ringPos.current.y) * ease;

      // Update inner dot (exact cursor point)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      }

      // Update trailing ring (smooth delayed follow)
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      motionQuery.removeEventListener('change', handleMotionChange);

      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
    };
  }, [isVisible]);

  // If disabled on touch/mobile, render nothing
  if (!isEnabled) {
    return null;
  }

  // Calculate dynamic dimensions & styling based on state
  // Normal ring: 32px diameter
  // Hovering clickable: 52px diameter with soft blue wash
  // Clicked: 26px
  // Text input: narrow pill indicator
  const ringSize = isClicked ? 28 : isHovered ? 52 : isTextSelected ? 36 : 32;

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-[99999] transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* 1. Trailing Outer Follower Ring */}
      <div
        ref={ringRef}
        style={{
          width: `${ringSize}px`,
          height: `${ringSize}px`,
          marginTop: `-${ringSize / 2}px`,
          marginLeft: `-${ringSize / 2}px`,
          willChange: 'transform, width, height',
        }}
        className={`fixed top-0 left-0 rounded-full pointer-events-none transition-[width,height,margin,border-color,background-color,box-shadow] duration-200 ease-out border ${
          isHovered
            ? 'border-blue-500 bg-blue-500/10 shadow-[0_0_20px_rgba(37,99,235,0.45)]'
            : isTextSelected
            ? 'border-blue-400/80 bg-blue-400/5 shadow-[0_0_12px_rgba(37,99,235,0.25)]'
            : 'border-blue-500/70 bg-transparent shadow-[0_0_14px_rgba(37,99,235,0.3)]'
        }`}
      />

      {/* 2. Inner Precision Dot (Locks to exact mouse tip) */}
      <div
        ref={dotRef}
        style={{
          width: isHovered ? '4px' : '6px',
          height: isHovered ? '4px' : '6px',
          marginTop: isHovered ? '-2px' : '-3px',
          marginLeft: isHovered ? '-2px' : '-3px',
          willChange: 'transform',
        }}
        className={`fixed top-0 left-0 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.9)] pointer-events-none transition-[width,height,margin,opacity] duration-150 ${
          isTextSelected ? 'opacity-40' : 'opacity-100'
        }`}
      />
    </div>
  );
};
