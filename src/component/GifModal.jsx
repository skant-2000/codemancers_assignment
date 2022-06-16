import React from 'react'
import style from "../style/GifModal.module.css"

export default function GifModal() {
  return (
    <div className={style.GifModal}>
      <div className={style.body}>
        <input type="text" />
        Gif Modal
      </div>
    </div>
  )
}
