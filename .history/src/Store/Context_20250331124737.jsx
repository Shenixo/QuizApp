import React, { Children } from 'react'
const AppContext = React.createContext()
const Context = () => {

  return (
    <AppContext.Provider>
      {Children}
    </AppContext.Provider>
  )
}

export default Context
