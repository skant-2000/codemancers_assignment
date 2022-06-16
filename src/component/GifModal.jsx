import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { AppContext } from '../context/AppContext'
import style from "../style/GifModal.module.css"

export default function GifModal() {

  const { setGifModalStatus } = useContext(AppContext)

  const [ gifSearch, setGifSearch ] = useState("trending")

  const [gifs, setGifs] = useState(null)

  const api_key = "rHNAO5PP5FNTDGxJ7ZxR764nbd878ikQ";

  useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${gifSearch}&limit=10`)
    .then((res) => res.json())
    .then((data) => setGifs(data));
  }, [gifSearch])

  console.log(gifs)

  return (
    <div className={style.modalBackground}>
      <div className={style.modal}>
        <div>
          <div className={style.arrowLeft} onClick={() => setGifModalStatus(false)}></div>
        </div>
        <input type="text" onChange={(e) => setGifSearch(e.target.value)} placeholder="search" />
        <div>
          { gifs ? (
              gifs.data.map((item) => (
                <img key={item.id} src={item.images.downsized.url} alt={item.title} />
              ))
          ) : null }
        </div>
      </div>
    </div>
  )
}
