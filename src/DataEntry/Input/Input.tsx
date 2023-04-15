import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

export const Input =
  ({
    className,
    ...rest
  }: InputProps) => {
    const classNames = `shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:bg-gray-800 dark:border-gray-600 dark:text-white leading-tight focus:outline-none focus:shadow-outline ${className ?? ''}`

    return (
      <input
        className={classNames}
        {...rest}
      />
    )
  }
