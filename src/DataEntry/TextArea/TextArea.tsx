interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string
}

export const TextArea =
  ({
    className,
    ...rest
  }: Props) => {
    const classNames = `shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:bg-gray-800 dark:border-gray-600 dark:text-white leading-tight focus:outline-none focus:shadow-outline ${className ?? ''}`

    return (
      <textarea
        className={classNames}
        {...rest}
      />
    )
  }
