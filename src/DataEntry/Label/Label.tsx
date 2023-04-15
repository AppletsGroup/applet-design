import React from 'react'

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  className?: string
}

export const Label: React.FC<LabelProps> = ({ children, className, ...rest }) => {
  return (
    <label
      className={`block text-gray-700 dark:text-gray-400 font-bold mb-2 ${className}`}
      {...rest}
    >
      {children}
    </label>
  )
}
