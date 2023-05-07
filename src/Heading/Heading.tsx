import React, { HTMLAttributes, ReactNode } from 'react'

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  level: 1 | 2 | 3 | 4 | 5 | 6
  children: ReactNode
  className?: string
}

export const Heading: React.FC<HeadingProps> = ({ level, className, children, ...rest }) => {
  const baseClassName = `
    ${level === 1 ? 'text-4xl font-extrabold' : ''}
    ${level === 2 ? 'text-3xl font-bold' : ''}
    ${level === 3 ? 'text-2xl font-semibold' : ''}
    ${level === 4 ? 'text-xl font-medium' : ''}
    ${level === 5 ? 'text-lg font-medium' : ''}
    ${level === 6 ? 'text-base font-medium' : ''}
  `

  return (
    <div
      className={`dark:text-white mb-2 ${baseClassName} ${className ?? ''}`}
      {...rest}>
      {children}
    </div>
  )
}
