import React, { ChangeEventHandler, InputHTMLAttributes } from 'react'
import { FieldValues, RegisterOptions, useFormContext } from 'react-hook-form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  className?: string
  errorClassName?: string
  validation?: RegisterOptions<FieldValues, string> | undefined
  onChange?: ChangeEventHandler<HTMLInputElement>
}

export const InputField =
  ({
    name,
    className,
    errorClassName,
    validation,
    ...rest
  }: InputProps) => {
    const { register, formState: { errors } } = useFormContext()
    const isError = errors[name]

    let classNames = 'text-white bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 border-2 border-blue-600 rounded-lg p-4 '
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    classNames += isError
      ? `${className} ${errorClassName}`
      : className

    return (
      <input
        {...register(name, validation)}
        className={classNames}
        {...rest}
      />
    )
  }
