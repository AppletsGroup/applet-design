
import { useEffect } from 'react'
import { Toast } from './Toast'
import clsx from 'clsx'

const VARIANTS = {
  Info: {
    base: 'bg-white border-blue-500',
    name: 'Info'
  },

  Error: {
    base: 'bg-white border-red-500 ',
    name: 'Error'
  },

  Warning: {
    base: 'bg-white border-yellow-500',
    name: 'Warning'
  },

  Success: {
    base: 'bg-white border-green-500',
    name: 'Success'
  }
}

export type Truncate =
  | 'truncate-1-lines'
  | 'truncate-2-lines'
  | 'truncate-3-lines'

export type ToastMessageProps = {
  id: string
  lifetime?: number
  variant?: keyof typeof VARIANTS | undefined
  onRemove?: (id: string) => void
  truncate?: Truncate
} & Toast

export default function ToastMessage({
  id,
  header,
  message,
  lifetime,
  onRemove,
  truncate = 'truncate-1-lines',
  type
}: ToastMessageProps) {
  const Var = type
    ? VARIANTS[type]
    : {
        base: 'bg-white border-gray-600 ',
        name: header
      }

  useEffect(() => {
    if (lifetime && onRemove) {
      setTimeout(() => {
        onRemove(id)
      }, lifetime)
    }
  }, [lifetime])

  return (
    <div
      className={clsx(
        'flex w-full visible flex-row shadow-lg',
        'border-l-4 rounded-md duration-100 cursor-pointer',
        'transform transition-all hover:scale-102',
        Var.base,
        type && 'max-h-40'
      )}
    >
      <div className="flex flex-row p-2 flex-no-wrap w-full">
        <div className="flex flex-col flex-no-wrap px-1 w-full">
          <div className="flex my-auto font-bold select-none">{Var.name}</div>
          <p
            className={clsx(
              '-mt-0.5 my-auto break-all flex',
              'text-gray-600 text-sm',
              typeof message === 'string' && truncate
            )}
          >
            {message}
          </p>
        </div>
        <div
          onClick={() => onRemove?.(id)}
          className={clsx(
            'w-10 h-12 mr-2 items-center mx-auto',
            'text-center leading-none text-lg'
          )}
        >
          X
        </div>
      </div>
    </div>
  )
}
