export function EmptyState({ title = 'Nothing to show yet', message = 'Add new items in the data file and this section will update automatically.' }) {
  return (
    <div className="empty-state" data-reveal>
      <span>✦</span>
      <h3>{title}</h3>
      <p>{message}</p>
    </div>
  );
}
