import React, { ChangeEventHandler, forwardRef, InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
}

export const InputField = forwardRef<HTMLInputElement, InputProps>(
  ({
    value, onChange,
    className = '',
    name
  }, ref) => {
    return (
      <input
        className={`${className} input`}
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        ref={ref}
      />
    )
  }
)
