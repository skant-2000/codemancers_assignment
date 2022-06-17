import React from 'react'
import style from "../style/IndividualPost.module.css"
import user from "../image/user.jpg"

export default function IndividualPost ({ post }) {
  return (
    <div key={post.date} className={style.post}>
        <div>
            <img src={user} alt="user img" />
            <div>
                <p>User</p>
                <p>{post.date.getMonth()}</p>
            </div>
        </div>
        <div>
            <img src={post.url} alt="post" />
        </div>
        <div>
            <button>Like</button>
            <button>Comment</button>
            <button>Share</button>
        </div>
    </div>
  )
}
