
import { useFormContext } from 'react-hook-form'

interface SelectFieldProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  name: string
  validation?: Record<string, any>
}

export const SelectField = ({
  name, validation, placeholder, children,
  ...rest
}: SelectFieldProps) => {
  const { register } = useFormContext()

  return (
    <div className="relative inline-block w-full text-gray-700">
      <select
        {...register(name, validation)}
        className="select w-full"
        {...rest}
      >
        {placeholder && (
          <option
            value="">
            {placeholder}
          </option>
        )}
        {children}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <svg
          className="h-5 w-5 text-gray-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  )
}
