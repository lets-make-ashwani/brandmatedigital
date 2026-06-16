import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function useScrollAnimation() {
  const { pathname } = useLocation()

  useEffect(() => {
    let observer

    // Wait a brief period for the page component to mount its elements in the DOM
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.animate-on-scroll')
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
            }
          })
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      )
      elements.forEach((el) => observer.observe(el))
    }, 100)

    return () => {
      clearTimeout(timer)
      if (observer) {
        observer.disconnect()
      }
    }
  }, [pathname])
}
