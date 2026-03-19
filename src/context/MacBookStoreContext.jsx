import { createContext, useContext, useMemo, useState } from 'react'

const DEFAULT_COLOR = '#2e2c3e'
const DEFAULT_SCALE = 0.08

const MacBookStoreContext = createContext(null)

export const MacBookStoreProvider = ({ children }) => {
  const [color, updateColor] = useState(DEFAULT_COLOR)
  const [scale, updateScale] = useState(DEFAULT_SCALE)

  const setColor = (nextColor) => {
    updateColor(nextColor)
  }

  const setScale = (nextScale) => {
    updateScale(nextScale)
  }

  const reset = () => {
    updateColor(DEFAULT_COLOR)
    updateScale(DEFAULT_SCALE)
  }

  const value = useMemo(
    () => ({
      color,
      scale,
      setColor,
      setScale,
      reset,
    }),
    [color, scale],
  )

  return (
    <MacBookStoreContext.Provider value={value}>
      {children}
    </MacBookStoreContext.Provider>
  )
}

export const useMacBookStore = () => {
  const context = useContext(MacBookStoreContext)

  if (!context) {
    throw new Error('useMacBookStore must be used within a MacBookStoreProvider')
  }

  return context
}
