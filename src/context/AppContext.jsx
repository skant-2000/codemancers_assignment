import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const AppContext = createContext()

export default function AppContextProvider({children}) {

    const [textInput, setTextInput] = useState("")
    const [gifModalStatus, setGifModalStatus] = useState(false)
    const [selectedGif, setSelectedGif] = useState(null)
    const [posts, setPosts] = useState([])

    // console.log(textInput)
    // console.log(gifModalStatus)
    console.log(posts)

  return (
    <AppContext.Provider value={{ textInput, setTextInput, gifModalStatus, setGifModalStatus, selectedGif, setSelectedGif, posts, setPosts }}>
        {children}
    </AppContext.Provider> 
  )
}