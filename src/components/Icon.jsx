const icons = {
  arrow: '>',
  briefcase: '+',
  code: '</>',
  download: 'PDF',
  mail: '@',
  play: '>',
  pin: '+',
  spark: '*',
  trophy: '*',
  check: '+'
};

export function Icon({ name, className = '' }) {
  return <span className={`icon ${className}`} aria-hidden="true">{icons[name] || icons.spark}</span>;
}
