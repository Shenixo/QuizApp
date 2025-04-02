import React from 'react'
const AppContext = React.createContext()
const Context = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = React.useState(false)
    const themeToggle = () => {
        setIsDarkMode(pv => !pv)
    }
    const ctxValue = {
        is
    
}
  return (
    <AppContext.Provider>
      {children}
    </AppContext.Provider>
  )
}

export default Context
