import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import IndividualPost from './IndividualPost'
import style from "../style/Posts.module.css"

export default function Posts() {

  const { posts } = useContext(AppContext)

  return (
    <div className={style.posts}>
      {
        posts.map((item) => <IndividualPost post={item} key={item.date} />)
      }
    </div>
  )
}
