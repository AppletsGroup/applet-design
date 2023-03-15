import { useEffect } from 'react'

let pageDOM: Element | Window = window

export const useReachBottom: (
  callback: () => void
) => void = (callback: () => void): void => {
  useEffect(() => {
    function pageScrollFn() {
      const pageOffset = getOffset()
      if (pageOffset <= 0) {
        callback()
      }
    }

    pageDOM = document.querySelector('.applet-design') as HTMLDivElement
    if (pageDOM) {
      pageDOM.addEventListener('scroll', pageScrollFn, false)
    }

    return () => {
      if (pageDOM) pageDOM.removeEventListener('scroll', pageScrollFn)
    }
  }, [callback])
}

function getOffset () {
  if (pageDOM instanceof Window) {
    return document.documentElement.scrollHeight - window.scrollY - window.innerHeight
  } else {
    return pageDOM.scrollHeight - pageDOM.scrollTop - pageDOM.clientHeight
  }
}
