export function ButtonLink({ href, children, variant = 'primary', disabled = false }) {
  const className = `button-link button-${variant}${disabled ? ' is-disabled' : ''}`;

  if (disabled) {
    return <span className={className}>{children}</span>;
  }

  return (
    <a className={className} href={href} target={href?.startsWith('#') ? '_self' : '_blank'} rel="noreferrer">
      {children}
    </a>
  );
}
