import React from 'react'
import { useFormContext } from 'react-hook-form'

interface CheckboxFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
}

export const CheckboxField: React.FC<CheckboxFieldProps> = ({ label, name, ...rest }) => {
  const { register } = useFormContext()

  return (
    <div className="flex items-center">
      <input
        {...register(name)}
        type="checkbox"
        className="h-5 w-5 text-white focus:ring-indigo-500 border-gray-300 rounded"
        {...rest}
      />
      <label
        htmlFor={name}
        className="ml-3 block text-sm font-medium text-white">
        {label}
      </label>
    </div>
  )
}
