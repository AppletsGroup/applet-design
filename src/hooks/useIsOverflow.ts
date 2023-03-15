import { useLayoutEffect, useState } from 'react'

export const useIsOverflow = ({ ref, callback }: {
  ref: React.RefObject<HTMLDivElement>
  callback?: (result) => void
}, deps): boolean => {
  const [isOverflow, setIsOverflow] = useState<boolean>(false)

  useLayoutEffect(() => {
    const { current } = ref

    if (current != null) {
      const hasOverflow = current.scrollWidth > current.clientWidth

      setIsOverflow(hasOverflow)

      if (callback != null) callback(hasOverflow)
    }
  }, [deps, ref])

  return isOverflow
}
