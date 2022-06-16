import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const AppContext = createContext()

export default function AppContextProvider({children}) {

    const [textInput, setTextInput] = useState("")
    const [gifModalStatus, setGifModalStatus] = useState(false)

    console.log(textInput)
    console.log(gifModalStatus)

  return (
    <AppContext.Provider value={{ textInput, setTextInput, gifModalStatus, setGifModalStatus }}>
        {children}
    </AppContext.Provider> 
  )
}