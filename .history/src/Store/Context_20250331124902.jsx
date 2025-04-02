import React from 'react'
const AppContext = React.createContext()
const Context = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = React.useState(false)
    functon themeToggle() {
        
    }
    const ctxValue = {
    
}
  return (
    <AppContext.Provider>
      {children}
    </AppContext.Provider>
  )
}

export default Context
