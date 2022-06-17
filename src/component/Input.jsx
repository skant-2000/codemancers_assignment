import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import user from "../image/user.jpg"
import style from "../style/Input.module.css"

export default function Input() {

    const { textInput, setTextInput, setGifModalStatus, selectedGif, posts, setPosts } = useContext(AppContext)

    const handlePostBtnClick = () => {
        if ( !textInput && !selectedGif ) {
            alert("select a gif and write something")
        }
        else if ( !textInput ) {
            alert("write something")
        }
        else if ( !selectedGif ) {
            alert("select a gif")
        }
        else {
            setPosts([
                ...posts,
                {
                    date: new Date(),
                    text: textInput,
                    url: selectedGif
                }
            ])
        }
    }

  return (
    <div className={style.input}>
        <div>
            <img src={user} alt="" />
            <textarea onChange={(e) => setTextInput(e.target.value)} placeholder='post something...'></textarea>
        </div>
        {selectedGif && <img src={selectedGif} alt="gif" />}
        <div className={style.box}>
            <div>Tag friends </div>
            <div>Check in</div>
            <div onClick={() => setGifModalStatus(true)}>GIF</div>
            <div>Tag events</div>
        </div>
        <div className={style.line}></div>
        <div className={style.btn}>
            <button onClick={handlePostBtnClick}>Post</button>
        </div>
    </div>
  )
}
