import { useEffect, useState } from 'react'

export const useScrollTop = () => {
  const [scrollTop, setScrollTop] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = scrollDom?.scrollTop ?? 0
      setScrollTop(scrollTop)
    }
    const scrollDom = document.querySelector('.applet-design')
    if (scrollDom != null) {
      scrollDom.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (scrollDom != null) scrollDom.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return scrollTop
}
