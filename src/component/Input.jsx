import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import user from "../image/user.jpg"
import style from "../style/Input.module.css"

export default function Input() {

    const { textInput, setTextInput, setGifModalStatus, selectedGif, setSelectedGif, posts, setPosts } = useContext(AppContext)

    // Storing the created post...

    const handlePostBtnClick = () => {
        setPosts([
            ...posts,
            {
                date: new Date(),
                text: textInput,
                url: selectedGif
            }
        ])
        setTextInput("")
        setSelectedGif(null)
    }

  return (
    <div className={style.input}>
        <div>
            <img src={user} alt="" />
            <textarea value={textInput} onChange={(e) => setTextInput(e.target.value)} placeholder='post something...'></textarea>
        </div>
        {selectedGif && <img src={selectedGif} alt="gif" />}
        <div className={style.box}>
            <button>Tag friends </button>
            <button>Check in</button>
            <button onClick={() => setGifModalStatus(true)}>GIF</button>
            <button>Tag events</button>
        </div>
        <div className={style.line}></div>
        <div className={style.btn}>
            <button onClick={handlePostBtnClick} disabled={!textInput && !selectedGif} >Post</button>
        </div>
    </div>
  )
}
