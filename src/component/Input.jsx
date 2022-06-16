import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import user from "../image/user.jpg"
import style from "../style/Input.module.css"

export default function Input() {

    const { setTextInput, gifModalStatus, setGifModalStatus } = useContext(AppContext)

  return (
    <div className={style.input}>
        <div>
            <img src={user} alt="" />
            <textarea onChange={(e) => setTextInput(e.target.value)} placeholder='post something...'></textarea>
        </div>
        <div>
            <div>Tag friends </div>
            <div>Check in</div>
            <div onClick={() => setGifModalStatus(!gifModalStatus)}>GIF</div>
            <div>Tag events</div>
        </div>
        <div></div>
        <div>
            <button>Post</button>
        </div>
    </div>
  )
}
