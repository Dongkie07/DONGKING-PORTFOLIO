const icons = {
  arrow: '↗',
  code: '</>',
  mail: '✉',
  play: '▶',
  pin: '⌖',
  spark: '✦',
  trophy: '◆',
  check: '✓'
};

export function Icon({ name, className = '' }) {
  return <span className={`icon ${className}`}>{icons[name] || icons.spark}</span>;
}
