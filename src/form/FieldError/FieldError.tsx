/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import { useFormContext, FieldError as ErrorField } from 'react-hook-form'

interface FieldErrorProps {
  name: string
  className?: string
}

export const FieldError = ({ name, className }: FieldErrorProps) => {
  const { formState: { errors } } = useFormContext()

  let error: ErrorField | undefined
  const fieldNames = name.split('.')

  for (const fieldName of fieldNames) {
    if (error) {
      error = error[fieldName]
    } else if (!error && errors[fieldName]) {
      error = errors[fieldName] as ErrorField
    } else {
      break
    }
  }

  if (error) {
    let message = error.message

    switch (error.type) {
      case 'required':
        message = message || 'This field is required'
        break
      case 'minLength':
        message = message || 'The value is too short'
        break
      case 'maxLength':
        message = message || 'The value is too long'
        break
      case 'pattern':
        message = message || 'Invalid input'
        break
      case 'min':
        message = message || 'The value is too low'
        break
      case 'max':
        message = message || 'The value is too high'
        break
      case 'validate':
        message = message || 'Invalid input'
        break
      default:
        break
    }

    return (
      <div className={`text-red-500 ${className}`}>
        {message}
      </div>
    )
  }

  return null
}
