import React from 'react'
import { FieldValues, RegisterOptions, useFormContext } from 'react-hook-form'

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string
  className?: string
  errorClassName?: string
  validation?: RegisterOptions<FieldValues, string> | undefined
}

export const TextAreaField = ({
  name,
  className,
  errorClassName,
  validation,
  ...rest
}: Props) => {
  const { register, formState: { errors } } = useFormContext()
  const isError = errors[name]

  let classNames = 'w-full p-3 rounded border bg-gray-900 border-2 border-blue-500 rounded-md text-gray-200 focus:outline-none focus:border-blue-600 hover:border-blue-600 transition-colors duration-300'
  // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
  classNames += isError
    ? `${className} ${errorClassName}`
    : className

  return (
    <textarea
      {...register(name, validation)}
      className={classNames}
      {...rest}
    ></textarea>
  )
}
