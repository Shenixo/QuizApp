import React from 'react'
const AppContext = React.createContext()
const Context = ({children}) => {
    const ctxValue = {
    
}
  return (
    <AppContext.Provider>
      {children}
    </AppContext.Provider>
  )
}

export default Context
