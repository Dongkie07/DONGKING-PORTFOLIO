export function ProofPoint({ value, label, className = '' }) {
  return (
    <div className={`proof-point ${className}`}>
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}
