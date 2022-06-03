import { useEffect } from "react"

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height
  }
}

/** Добавляет css переменную --doc-height с высотой окна и eventListener для её обновления. */
const useWindowDimensions = () => {
  useEffect(() => {
    const handleResize = () => {
      const windowDimensions = getWindowDimensions()

      const doc = document.documentElement
      doc.style.setProperty('--window-height', `${windowDimensions.height}px`)
    }

    window.addEventListener('resize', handleResize);
    handleResize()
    return () => window.removeEventListener('resize', handleResize);
  }, [])
}

export default useWindowDimensions
