import React, { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  className = '',
  ...props
}) => {
  let classNames = `${className} btn `
  if (variant === 'primary') {
    classNames += 'btn-primary'
  } else if (variant === 'secondary') {
    classNames += 'btn-secondary'
  }

  return (
    <button
      className={classNames}
      {...props}>
      {children}
    </button>
  )
}
