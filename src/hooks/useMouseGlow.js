import { useEffect } from 'react';

export function useMouseGlow() {
  useEffect(() => {
    const updatePosition = event => {
      document.documentElement.style.setProperty('--cursor-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${event.clientY}px`);
    };

    window.addEventListener('pointermove', updatePosition);
    return () => window.removeEventListener('pointermove', updatePosition);
  }, []);
}
