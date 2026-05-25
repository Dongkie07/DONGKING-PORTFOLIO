export function Button({ children, href, variant = 'primary', isDisabled = false }) {
  if (isDisabled) {
    return <span className={`button button--${variant} button--disabled`}>{children}</span>;
  }

  return (
    <a className={`button button--${variant}`} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}
