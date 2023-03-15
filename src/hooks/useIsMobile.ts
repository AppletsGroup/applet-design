import { useEffect, useState } from 'react'

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const windowWidth = window.innerWidth
    setIsMobile(windowWidth < 620)
  }, [])

  return isMobile
}
