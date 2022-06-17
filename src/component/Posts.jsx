import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import IndividualPost from './IndividualPost'
import style from "../style/Posts.module.css"

export default function Posts() {

  const { posts } = useContext(AppContext)
  console.log("posts", posts)

  return (
    <div className={style.posts}>
      {
        posts.map((item) => <IndividualPost post={item} />)
      }
    </div>
  )
}
