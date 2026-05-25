import { useMouseGlow } from '../hooks/useMouseGlow.js';

export function CursorGlow() {
  useMouseGlow();
  return <div className="cursor-glow" aria-hidden="true" />;
}
