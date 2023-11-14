import React, { ButtonHTMLAttributes } from 'react';

interface BtnComponentProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'warning';
  size?: 'small' | 'large';
}

export default function BtnComponent({
  type,
  variant,
  id,
  onClick,
  children,
  size,
}: BtnComponentProps) {
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
        type={type || 'button'}
        className={`${variantClass} ${sizeClass}`}
        id={id}
        onClick={onClick}
      >
        <span className={iconClass} />
        {children}
      </button>
    </>
  );
}
