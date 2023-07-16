export default function BtnComponent({
  type,
  variant,
  id,
  onClick,
  children,
  size,
}) {
  const variantClass =
    variant === 'primary'
      ? 'btn--primary'
      : variant === 'secondary'
      ? 'btn--secondary'
      : variant === 'success'
      ? 'btn--success'
      : variant === 'warning'
      ? 'btn--warning'
      : '';

  const sizeClass =
    size === 'small' ? 'btn--small' : size === 'large' ? 'btn--large' : '';

  const iconClass =
    variant === 'primary'
      ? 'btn__icon btn__icon--primary'
      : variant === 'secondary'
      ? 'btn__icon btn__icon--secondary'
      : variant === 'success'
      ? 'btn__icon btn__icon--success'
      : variant === 'warning'
      ? 'btn__icon btn__icon--warning'
      : '';

  return (
    <>
      <button
        type={type ? type : 'button'}
        variant={variant}
        className={`btn ${variantClass} ${sizeClass}`}
        id={id}
        onClick={onClick}
        size={size}
      >
        <span className={iconClass} />
        {children}
      </button>
    </>
  );
}
