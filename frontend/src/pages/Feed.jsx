import React, { useState ,useEffect } from 'react'
import axios from 'axios'

const Feed = () => {
  const [posts, setPosts] = useState([
    {
      _id: "1",
      image: "https://images.unsplash.com/photo-1666856433657-d111f382530a?q=80&w=1823&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Beautiful Scenery",
    }
  ])

 //useEffect React me side effects handle karne ke liye use hota hai /APIcall / datafetch / eventlistener
useEffect(()=>{
  axios.get("http://localhost:3000/posts")
  .then((res) => {
    console.log(res.data)
    setPosts(res.data.posts)   // 🔥 yahi missing tha
  })
},[])
/////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <section className='feed-section'>
      {posts.length > 0 ? (
        posts.map((post) => (   
          <div key={post._id} className='post-card'>
            <img src={post.image} alt={post.caption} />
            <p>{post.caption}</p>
          </div>
        ))
      ) : (
        <h1>No Post Available</h1>
      )}
    </section>
  )
}

export default Feed