import React from 'react'
const AppContext = React.createContext()
const Context = ({children}) => {

  return (
    <AppContext.Provider>
      {children}
    </AppContext.Provider>
  )
}

export default Context
