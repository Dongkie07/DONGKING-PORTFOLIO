export function CardShell({ children, className = '' }) {
  return <article className={`card ${className}`}>{children}</article>;
}
