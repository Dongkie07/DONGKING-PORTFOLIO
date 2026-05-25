import { CardShell } from './CardShell.jsx';

export function StatCard({ value, label }) {
  return (
    <CardShell className="stat-card">
      <strong>{value}</strong>
      <span>{label}</span>
    </CardShell>
  );
}
